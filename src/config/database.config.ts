import {registerAs} from '@nestjs/config';
import {TypeOrmModuleOptions} from '@nestjs/typeorm';
import {MongooseModuleOptions} from "@nestjs/mongoose";

export const DBNameCnx = 'signati';

function typeormModuleOptions(): MongooseModuleOptions {
    console.log(__dirname);
    return {
        uri: `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/ihc?authSource=admin`,
        useFindAndModify: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    };
}

export default registerAs('database', () => ({
    config: typeormModuleOptions(),
}));
