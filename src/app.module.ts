import {Module} from '@nestjs/common';
import {CoreModule} from './core';
import {AppController} from './app.controller';
import {PreferenceModule} from './modules/hot/preference/preference.module';
import {ScheduleModule} from "@nestjs/schedule";
import { SucursalModule } from './modules/terminal/payment/sucursal.module';
import { ClassificationModule } from './modules/classifications/classification.module';
import { SystemModule } from './modules/system/system.module';

@Module({
    imports: [
        CoreModule,
        ScheduleModule.forRoot(),
        PreferenceModule,
        SucursalModule,
        ClassificationModule,
        SystemModule,
    ],
    controllers: [AppController],
})
export class AppModule {
}