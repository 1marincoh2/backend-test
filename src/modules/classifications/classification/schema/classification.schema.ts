import {Document} from "mongoose";
import {Prop, Schema, SchemaFactory,} from '@nestjs/mongoose';
import { SucursalClassi,SucursalClassiSchema } from "./sucursal";
import {Schema as SchemaMongose} from "mongoose";

const PruebTes = new SchemaMongose({
    name: String ,
})

enum TriggersStatus {
    PENDING = 'pending',
    COMPLETED = 'completed',
    DISCARDED = 'discarded'
}

@Schema({
    collection: 'classification',
    timestamps: true
})


export class Classification extends Document {



    @Prop({type: String})
    name: string;

    @Prop({type: String,})
    active:string;

    @Prop({type: PruebTes,})
    sucural:any;
   

     
}

export type ClassificationDocument = Classification & Document;

export const ClassificationSchema = SchemaFactory.createForClass(Classification);
