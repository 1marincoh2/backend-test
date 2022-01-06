import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PassportModule, IAuthModuleOptions } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { CONFIG_SERVER_PASSPORT, CONFIG_SERVER_JWT } from '../../../config/config.constants';
import { AuthController } from './auth.controller';
import { AccessTokensModule } from '../access-tokens/access-tokens.module';

@Module({
  imports: [
    UsersModule,
    AccessTokensModule,
    PassportModule.registerAsync({
      useFactory: async (configService: ConfigService) => configService.get<IAuthModuleOptions>(CONFIG_SERVER_PASSPORT),
      inject: [ConfigService],
    }),
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => configService.get(CONFIG_SERVER_JWT),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
