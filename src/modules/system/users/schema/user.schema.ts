import {Exclude} from 'class-transformer';
import {ApiProperty} from '@nestjs/swagger';
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

@Schema({
    collection: 'system_user',
    timestamps: true
})
export class User extends Document {
    @ApiProperty()
    @Prop({type: String, required: true})
    email!: string;

    @ApiProperty()
    @Prop({type: String, required: true})
    username: string;

    @ApiProperty()
    @Exclude()
    @Prop({type: String, required: false})
    password: string;

    // @BeforeInsert()
    // @BeforeUpdate()
    // async hashPassword() {
    //     if (!this.password) {
    //         return;
    //     }
    //     this.password = await hash(this.password, 10);
    // }

    @ApiProperty()
    @Prop({type: Boolean, default: true})
    enabled: boolean;

    @ApiProperty()
    @Prop({type: Date, required: false})
    public deletedAt: Date;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
