# NestJs Starter

## Installation

```bash
$ yarn install
```

## Environment

Under the environment folder you will find the samples for your env files.

To use `.env.development` environments export NODE_ENV=development variable in your operating system, or use the cross-env which is installed in the dev dependencies of this project. To use it just run the following command before your development process:

`$ npx cross_env NODE-ENV=production ... # that will point to your .env.production env file`

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Seeders

```bash
 npm run seeds:run ActionInsertUpdateSeed
 npm run seeds:run RolesInsertUpdateSeed
 npm run seeds:run RouteInsertUpdateSeed

 npm run seeds:run PermissionsInsertUpdateSeed
 npm run seeds:run RouteActionInsertUpdateSeed
 
 npm run seeds:run ProfileInsertUpdateSeed
 npm run seeds:run UsersInsertUpdateSeed
 npm run seeds:run TagsInsertUpdateSeed
 npm run seeds:run PostInsertUpdateSeed
```# backend-test
