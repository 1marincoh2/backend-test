import {
    Body,
    Controller,
    Get,
    Post,
    Req,
    Request,
    Res,
    UnauthorizedException,
    UseGuards,
    ValidationPipe
} from '@nestjs/common';
import {Response} from 'express';
import {RegisterGuard} from './guards/register.guard';
import {AuthGuard} from '@nestjs/passport';
import {AuthService} from './auth.service';
import {AccessTokensService} from '../access-tokens/access-tokens.service';
import * as moment from 'moment';
import {RefreshGuard} from './guards/refresh.guard';
import {ForgotPasswordDto} from './dtos/forgot-password.dto';
import {JwtService} from '@nestjs/jwt';
import {LocalAuthGuard} from "./guards/local-auth.guard";
import {JwtAuthGuard} from "./guards/jwt-auth.guard";
import {
    ApiBadGatewayResponse,
    ApiBadRequestResponse,
    ApiBearerAuth, ApiBody,
    ApiCreatedResponse,
    ApiForbiddenResponse,
    ApiNotFoundResponse, ApiOkResponse,
    ApiOperation,
    ApiTags, ApiUnauthorizedResponse
} from "@nestjs/swagger";
import {LoginDto} from "./dtos";
import {User} from "../users/schema/user.schema";
import {RegisterDto} from "./dtos/register.dto";

@ApiTags('Authentication')
@ApiBearerAuth()
@Controller('auth')
export class AuthController {
    constructor(readonly authService: AuthService,
                readonly authAccessTokensService: AccessTokensService,
                readonly jwtService: JwtService) {
    }

    /**
     * Login user authentication
     * @param dto User Form
     * @example /auth/login
     */
    @ApiOperation({
        summary: 'Login user authentication',
        description: 'In this way you will get the Token for Bearer authentication'
    })
    @ApiCreatedResponse({
        status: 201,
        description: 'Login success, you will receive the "accessToken" there',
    })
    @ApiBadRequestResponse({status: 400, description: 'Invalid credentials'})
    @ApiForbiddenResponse({status: 403, description: 'Account is disabled, contact with administrator'})
    @ApiNotFoundResponse({status: 404, description: 'Your account does not exist'})
    @ApiUnauthorizedResponse({status: 401, description: 'Unauthorized'})
    @ApiBadGatewayResponse({status: 502, description: 'Login user authentication'})
    @ApiBody({type: LoginDto})
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req, @Body() loginDto: LoginDto) {
        console.log("login", req.user)
        return await this.authService.login(req.user);
    }

    /**
     * Create User - User Registration
     * @param dto User Form
     */
    @ApiOperation({
        summary: 'Get my profile',
        description: 'You will get prompt with your user data, keep in mind that you need to provide the Bearer Token for Authentication',
    })
    @ApiOkResponse({status: 200, description: 'Success response', type: User})
    @ApiUnauthorizedResponse({status: 401, description: 'Unauthorized'})
    @ApiBadGatewayResponse({status: 502, description: 'Login user authentication'})
    @ApiBadRequestResponse({status: 400, description: 'You will prompt with the validation issues'})
    @ApiBearerAuth()
    //  @UseGuards(JwtAuthGuard)
    @Get('profile')
    async profile(@Request() req, @Res() res: Response) {
        res.status(200);
        res.send({output: req.user || 'error'});
    }


    @UseGuards(RegisterGuard)
    @ApiBody({type: RegisterDto})
    @Post('register')
    async register(@Req() req, @Res() res: Response) {
        res.status(200);
        res.send(req.user);
    }

    @UseGuards(RefreshGuard)
    @Post('refresh-token')
    async refresToken(@Req() req, @Res() res: Response) {
        const {token, sub, username} = req.user;

        const lastToken = await this.authAccessTokensService.findToken(token);
        if (lastToken) {

            const jwt = await this.authService.generateJWT({_id: sub, email: username});
            lastToken.jwt = jwt.access_token;
            lastToken.expiresAt = moment(jwt.decode.exp * 1000).toDate();
            lastToken.refresh = true;
            // todo
            // await this.authAccessTokensService.model.save(lastToken);
            res.status(200);
            res.send({
                refresh_token: jwt.access_token,
            });
        }
        throw new UnauthorizedException('Not Found Token');
    }

    // @UseGuards(SessionGuard)
    @Get('logout')
    public logout(@Req() req, @Res() res) {
        res.send(req);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('jwt')
    public getJWT(@Req() req, @Res() res: Response) {
        res.status(201).json(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('me')
    public checkMySession(@Req() req, @Res() res: Response) {
        res.status(201).json(req.user);
    }

    @Post('forgot-password')
    public async forgotPassword(@Body(new ValidationPipe()) forgotPassword: ForgotPasswordDto): Promise<void> {
       // await this.authService.forgotPassword(forgotPassword);
    }

    @Get('reset-password')
    public resetPassword(@Req() req, @Res() res: Response) {
        try {
            const token = this.jwtService.verify(req.query.key);
            res.status(200).send(token);
        } catch (e) {
            res.status(401).send({data: {statusCode: 401, message: e.message}});
        }
    }
}
