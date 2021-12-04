import {Document} from "mongoose";
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';


enum TriggersStatus {
    PENDING = 'pending',
    COMPLETED = 'completed',
    DISCARDED = 'discarded'
}

@Schema({
    collection: 'sucursal',
    timestamps: true
})
export class Sucursal extends Document {

    @Prop({type: String})
    name: string;

    @Prop({type: String,})
    location: string;

    @Prop({type: String,})
    type: string;

     
}

export type SucursalDocument = Sucursal & Document;

export const SucursalSchema = SchemaFactory.createForClass(Sucursal);
