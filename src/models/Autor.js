import mongoose from "mongoose";

const AutorSchema = new mongoose.Schema({
    id : { type : mongoose.Schema.Types.ObjectId },
    nome : { type : String, required : true },
    data_nascimento : { type : String },
    origem : {type : String}
},{ versionKey : false });

const autor = mongoose.model('autores', AutorSchema);

export { AutorSchema, autor }