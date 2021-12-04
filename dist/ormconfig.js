"use strict";
const dotenv = require("dotenv");
const fs = require("fs");
const environment = `environment/.env.${process.env.NODE_ENV || 'development'}`;
console.log(environment);
let config;
if (fs.existsSync(`${environment}`)) {
    const processEnv = dotenv.parse(fs.readFileSync(`${environment}`));
    console.log(`Migración corriendo --> en entorno ${environment}`);
    console.log(`Migración corriendo --> en la base de datos ${processEnv.POSTGRES_DB}`);
    config = {
        type: 'postgres',
        host: processEnv.DATABASE_HOST,
        migrationsTableName: 'migrations_typeorm',
        port: parseInt(processEnv.DATABASE_PORT) || 5432,
        username: processEnv.DATABASE_USER,
        password: processEnv.DATABASE_PASSWORD,
        database: processEnv.DATABASE_DB,
        autoLoadEntities: true,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        seeds: [__dirname + '/**/*.seed{.ts,.js}'],
        factories: [__dirname + '/**/*.factory{.ts,.js}'],
        migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
        synchronize: false,
        migrationsRun: false,
        logging: 'all',
        logger: 'simple-console',
        cli: {
            migrationsDir: 'src/migrations',
            entitiesDir: 'src/entity',
            subscribersDir: 'src/subscriber',
        },
    };
}
module.exports = config;
//# sourceMappingURL=ormconfig.js.map