import {Module} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';

import {CONFIG_DB_CONFIG} from '../../config/config.constants';
import {TypeOrmModule, TypeOrmModuleOptions} from '@nestjs/typeorm';
import {DBNameCnx} from '../../config/database.config';
import '../../common/transformers/overrideTypeorm'
import {MongooseModule} from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://adminmarin:pass@0.0.0.0:49154/ihc?authSource=admin')
        // MongooseModule.forRootAsync({
        //     // connectionName: DBNameCnx,
        //     useFactory: (configService: ConfigService) => configService.get(CONFIG_DB_CONFIG),
        //     inject: [ConfigService],
        // })
    ],
    exports: []
})

export class DatabaseModule {
}
