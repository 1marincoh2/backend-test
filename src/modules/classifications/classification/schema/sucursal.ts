import {Document} from "mongoose";
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';


enum TriggersStatus {
    PENDING = 'pending',
    COMPLETED = 'completed',
    DISCARDED = 'discarded'
}

@Schema({
  
    timestamps: true
})
export class SucursalClassi extends Document {

    @Prop({type: String})
    name: string;
          
}

export type SucursalClassiDocument = SucursalClassi & Document;

export const SucursalClassiSchema = SchemaFactory.createForClass(SucursalClassi);

