import {Injectable, NotFoundException, BadRequestException, ForbiddenException} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {compareSync} from 'bcrypt';

import {UsersService} from '../users/users.service';
import {PATTERN_VALID_EMAIL} from '../../../config/config.constants';
import {User} from '../users/schema/user.schema';
import {PayloadToken} from "../../../common/interfaces/jwt";
import {RegisterDto} from "./dtos/register.dto";
import { AccessTokensService } from '../access-tokens/access-tokens.service';
import * as moment from 'moment';
export interface ApiLoginSuccess {
    user: User;
    accessToken: string;
}

export interface JwtPayload {
    sub: string;
    username: string;
}

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService, 
        private readonly tokensService: AccessTokensService,
        private readonly jwtService: JwtService) {
    }

    async validateUser(userData: string, password: string): Promise<any | User> {
        // Verify if userData is email or username
        const data: { username?: string; email?: string } = {};
        !PATTERN_VALID_EMAIL.test(userData) ? (data.username = userData) : (data.email = userData);

        const user = await this.usersService.getByUser(data);

        if (!user) {
            throw new NotFoundException('Your account does not exist');
        }
        if (!user.enabled) {
            throw new ForbiddenException('Account is disabled, contact with administrator');
        }
        const isMatch = compareSync(password, user.password);
        if (!isMatch) {
            throw new BadRequestException('Invalid credentials');
        }
        delete user.password;
        user.password  = undefined;
        return user;
    }

    async login(user: User) {
        delete user.password;
        const payload: JwtPayload = {username: user.username, sub: user._id};
        const token = this.jwtService.sign(payload);
        const decode: any = this.jwtService.decode(token);
        await this.tokensService.saveToken({
          expiresAt: moment(decode.exp * 1000).toDate(),
          revoked: false,
          jwt: token,
          refresh: false,
          user: user._id
        })

        return {
            user,
            token,
            exp: new Date(decode.exp * 1000),
            iat: new Date(decode.iat * 1000)
        };
    }

    public async registerUserIfNotExist(userBody: RegisterDto): Promise<any> {
        const {username, email, password, confirmPassword} = userBody;
        let user: User | undefined = await this.usersService.model.findOne({email});

        // if (user && await bcrypt.compare(password, user.password)) {
        //   // const { password, ...result } = user;
        //   // return result;
        // }
        //
        // user = await this.usersService.save(await this.usersService.create({
        //   username,
        //   email,
        //   password,
        // }));
        // if (user) {
        //   const { password, ...result } = user;
        //   return result;
        // }

        return null;
    }

    async validateUser2(email: string, passw: string): Promise<Partial<User> | null | any> {
        // // const user: User | undefined = await this.usersService
        // //     .findOne({ email }, {
        // //         relations: [
        // //             'role',
        // //             'campus',
        // //             'department',
        // //             'role.permissions',
        // //             'role.permissions.route',
        // //             'role.permissions.actions',
        // //         ],
        // //     });
        // const user: User | undefined = await this.usersService.repo.createQueryBuilder('users')
        //     .leftJoinAndSelect('users.role', 'role')
        //     .leftJoinAndSelect('users.campus', 'campus')
        //     .leftJoinAndSelect('users.department', 'department')
        //     .leftJoinAndSelect('role.permissions', 'permissions')
        //     .leftJoinAndSelect('permissions.route', 'route')
        //     .leftJoinAndSelect('permissions.actions', 'actions')
        //     .select([
        //       'users.id', 'users.name', 'users.lastnameFather', 'users.lastnameMother',
        //       'users.email', 'users.password', 'users.isActive', 'users.img',
        //       'campus.id', 'campus.name',
        //       'department.id', 'department.name', 'department.description',
        //       'role.id', 'role.isActive', 'role.name', 'permissions.id',
        //       'route.id', 'route.isActive', 'route.name', 'route.fatherID',
        //       'route.level', 'route.url', 'route.icon',
        //       'actions.id',
        //     ])
        //     .where('users.email = :email', { email })
        //     .getOne();
        // if (user && bcrypt.compareSync(passw, user.password.replace('$2y$', '$2a$'))) {
        //   const { password, ...result } = user;
        //   return result;
        // }
        //
        // return null;
    }

    generateJWT(user: Partial<User>, expiration: number = 86400): { access_token: string, decode: PayloadToken | any } {
        const payload = {username: user.email, sub: user._id};
        const token = this.jwtService.sign(payload, {
            expiresIn: expiration,
        });
        return {
            access_token: token,
            decode: this.jwtService.decode(token),
        };
    }

    async sendMailForgotPassword(email: string, token: string, clientUrl: string) {
        const environment = process.env.NODE_ENV || 'development';
        // const processEnv: any = dotenv.parse(fs.readFileSync(`${ environment }.env`));
        // const transporter = nodemailer.createTransport({
        //   service: 'gmail.com',
        //   host: 'smtp.gmail.com',
        //   port: 465,
        //   secure: true,
        //   auth: {
        //     user: processEnv.API_MAIL,
        //     pass: processEnv.API_MAIL_PASSWORD,
        //   },
        // });
        // const mailOptions: Mail.Options = {
        //   to: email,
        //   from: processEnv.API_MAIL,
        //   subject: 'Recuperación de contraseña',
        //   html: `
        //   <div>
        //     <h2>Recuperación de contraseña</h2>
        //      <p>
        //         Ha solicitado recuperar su contraseña.
        //         Si fue usted haga click en el enlace que se encuentra debajo. De lo contrario, ignore este correo.
        //     </p>
        //     <a href='${ clientUrl }/#/reset-password/${ token }'>Recuperar contraseña</a>
        //   </div>
        //   `,
        // };
        // await transporter.sendMail(mailOptions);
    }

    // async forgotPassword(forgotPassword: ForgotPasswordDto) {
    //   try {
    //     const user = await this.usersService.findOne({
    //       where: {
    //         email: forgotPassword.email,
    //       },
    //     });
    //
    //     if (!user) throw new BadRequestException('User not found');
    //     const jwt = this.generateJWT(user, 300);
    //     await this.tokensService.saveToken({
    //       name: 'Forgot Token',
    //       userId: user.id,
    //       jwt: jwt.access_token,
    //       isActive: true,
    //       refresh: false,
    //       revoked: false,
    //       clientId: 1,
    //       expiresAt: moment().add(5, 'minutes').toDate(),
    //     });
    //     await this.sendMailForgotPassword(user.email, jwt.access_token, forgotPassword.clientUrl);
    //   } catch (e) {
    //     // tslint:disable-next-line:no-console
    //     console.error(e.message);
    //   }
    // }
}
