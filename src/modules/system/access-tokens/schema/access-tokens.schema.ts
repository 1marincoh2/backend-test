import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document, Schema as SchemaMongose} from "mongoose";
import {User} from "../../users/schema/user.schema";

@Schema({
    collection: 'system_access_tokens',
    timestamps: true
})
export class AccessTokens extends Document {

    @Prop({type: SchemaMongose.Types.ObjectId, ref: User.name, required: true})
    user: string;

    @Prop({type: Boolean, default: false})
    revoked: boolean;

    @Prop({type: String, required: true})
    jwt: string;

    @Prop({type: Boolean, default: false})
    refresh: boolean;

    @Prop({type: Date, required: true})
    expiresAt: Date | null;
}


export type AccessTokensDocument = AccessTokens & Document;

export const AccessTokensSchema = SchemaFactory.createForClass(AccessTokens);