import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

@Schema({
    collection: 'system_role',
    timestamps: true
})
export class Role extends Document {

    @Prop({type: Boolean, default: true})
    isActive: boolean;

    @Prop({type: String, default: false})
    name: string;

    // @OneToMany(() => Permission, (permission) => permission.role)
    // permissions: Permission[];
}

export type RoleDocument = Role & Document;

export const RoleSchema = SchemaFactory.createForClass(Role);
