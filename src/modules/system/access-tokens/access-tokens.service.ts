import {Injectable} from '@nestjs/common';
import {TypeOrmCrudService} from '@nestjsx/crud-typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {AccessTokens, AccessTokensDocument, AccessTokensSchema} from './schema/access-tokens.schema';
import {DBNameCnx} from "../../../config/database.config";
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "../users/schema/user.schema";
import {ModelType} from "@typegoose/typegoose/lib/types";

@Injectable()
export class AccessTokensService {
    constructor(@InjectModel(AccessTokens.name) public model: ModelType<AccessTokensDocument, AccessTokens>) {
    }

    async saveToken(data: Partial<AccessTokens>) {
        console.log('token guardado');
        let token = new AccessTokens();
        token = {...data} as AccessTokens;
        // return await this.model.save(token);
    }

    async findToken(token: string) {
        const tokenFound = await this.model.findOne({
            where: {
                jwt: token,
            },
        });
        return tokenFound;
    }

}
