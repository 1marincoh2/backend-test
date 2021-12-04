"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const compression = require("compression");
const app_module_1 = require("./app.module");
const transform_interceptor_1 = require("./common/interceptors/transform.interceptor");
const config_constants_1 = require("./config/config.constants");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {});
    app.use(bodyParser({ limit: '50mb' }));
    const logger = new common_1.Logger('Bootstrap');
    const configService = app.get(config_1.ConfigService);
    const options = new swagger_1.DocumentBuilder()
        .addBearerAuth()
        .setTitle('Nest Starter Boilerplate')
        .setDescription('Nest collection of tools and authentication ready to use.')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('', app, document);
    const port = configService.get(config_constants_1.CONFIG_SERVER_PORT);
    const environment = configService.get(config_constants_1.NODE_ENV);
    app.useGlobalInterceptors(new transform_interceptor_1.TransformInterceptor());
    app.use(helmet());
    app.enableCors();
    app.use(rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 100,
    }));
    app.use(compression());
    await app.listen(port);
    logger.log(`Application is running in ${environment.toUpperCase()} on: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map