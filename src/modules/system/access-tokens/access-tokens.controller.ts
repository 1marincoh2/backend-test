import { Controller } from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";

@ApiTags('System')
@Controller('system/access-tokens')
export class AccessTokensController {}
