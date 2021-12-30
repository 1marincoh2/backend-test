import {Strategy} from 'passport-local';
import {
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import {Request} from 'express';
import {AuthService} from '../auth.service';
import {PassportStrategy} from "@nestjs/passport";
import {RegisterDto} from "../dtos/register.dto";

@Injectable()
export class RegisterStrategy extends PassportStrategy(Strategy, 'register') {
    public name: string = 'register';

    constructor(
        private readonly authService: AuthService,
    ) {
        super(
            {
                usernameField: 'email',
                passwordField: 'password',
                passReqToCallback: true,
            }
        );
    }

    // async re(req: Request, email: string, password: string, done: (err: any, user?: any) => void): Promise<void> {
    //     const {username, confirmPassword} = req.body;
    //     console.log("en strategia", req.body)
    //     const user: any = await this.authService.registerUserIfNotExist({
    //         username,
    //         email,
    //         password,
    //         confirmPassword,
    //     });
    //     if (!user) {
    //         // tslint:disable-next-line:new-parens
    //         return done(new UnauthorizedException, user);
    //     }
    //     return done(null, user);
    // }

    async validate(req: { body: RegisterDto }): Promise<any> {

        const {password, confirmPassword} = req.body
        if (password !== confirmPassword) {
            throw new UnauthorizedException('password does not match.');
        }

        const user = await this.authService.registerUserIfNotExist(req.body);

        if (!user) {
            throw new UnauthorizedException('Login user or password does not match.');
        }
        return user;
    }
}
