import {Module} from '@nestjs/common';
import {RolesController} from './roles.controller';
import {RolesService} from './roles.service';
import {Role, RoleSchema} from './schema/role.schema';
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forFeature([{name: Role.name, schema: RoleSchema}]),
  ],
  exports: [  RolesService ],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
