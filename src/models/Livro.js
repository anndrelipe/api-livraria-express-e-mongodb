import mongoose from "mongoose";
import { AutorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema ({
    id : { type: mongoose.Schema.Types.ObjectId },
    titulo : { type: String, required: true },
    editora : { type: String },
    preco : { type: Number },
    npaginas : { type: Number },
    autor : { type: AutorSchema}
    
}, { versionKey : false });

const livro = mongoose.model("livros", livroSchema);

export default livro;