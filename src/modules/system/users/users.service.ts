import {BadGatewayException, BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {CrudRequest, GetManyDefaultResponse} from '@nestjsx/crud';

import {User, UserDocument} from './schema/user.schema';
import {CreateUserDto, UpdateUserDto} from './dto';
import {InjectModel} from "@nestjs/mongoose";
import {ModelType} from "@typegoose/typegoose/lib/types";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) public model: ModelType<UserDocument, User>) {
    }

    /**
     * Get
     * @param ids OPTIONAL array of number of user ids
     */
    async getDeletedUsers(ids?: number[]) {
        if (!!ids && ids.length) {
            //  return await this.model.findByIds(ids, {withDeleted: true});
        }

        return await this.model.find({withDeleted: true});
    }

    /**
     * Get User Metadata by User Id
     * @param id User ID
     */
    async getUserMeta() {
        // const user = await this.model.findOne(id);
    }

    /**
     * Create user
     * @param dto CreateUserDto
     */
    async create(dto: CreateUserDto) { //: Promise<User> {
        // const user = this.model.create(dto);
        // const result = await this.model.save(user);
        // delete result.password;
        // return result;
    }

    /**
     * Create users in batch
     * @param dto Array of CreateUserDto
     */
    async createBatch(dto: CreateUserDto[]) { //: Promise<User[]> {
        const users = this.model.create(dto);
        // const result = await this.model.save(users).catch((err) => {
        //     throw new BadGatewayException('Something happened', err);
        // });
        //
        // for (const res of result) {
        //     delete res.password;
        // }
        // return result;
    }

    /**
     * Get by username or email
     * @param data { username: string, email: string }
     */
    async getByUser(data: { username?: string; email?: string }) { //: Promise<User> {
        return await this.model.findOne(data).select(['_id', 'username', 'email'])
    }

    /**
     * Get user by id
     * @param id User id
     */
    async getOneById(id: number): Promise<User | null> {
        return (
            (await this.model.findOne({_id: id}).catch((err) => {
                throw new BadGatewayException('Something happened', err);
            })) || null
        );
    }

    /**
     * Get users by ids
     * @param ids Get user by array of Ids
     */
    async getByIds(ids: number[]): Promise<User[]> {
        return await this.model.find(ids).catch((err) => {
            throw new BadGatewayException('Something happened', err);
        });
    }


}
