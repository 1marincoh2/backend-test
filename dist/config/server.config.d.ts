import { JwtModuleOptions } from '@nestjs/jwt';
import { IAuthModuleOptions } from '@nestjs/passport';
declare const _default: (() => {
    port: number;
    jwt: JwtModuleOptions;
    passport: IAuthModuleOptions<any>;
}) & import("@nestjs/config").ConfigFactoryKeyHost;
export default _default;
