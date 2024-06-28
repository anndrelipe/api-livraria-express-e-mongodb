import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros (req, res) {
        try {
            const listarLivros = await livro.find({});
            res.status(200).json(listarLivros);
        } catch (error) {
            res.status(500).json({status : 500, message : "Erro no servidor."});
        };
    };

    static async adicionarLivro (req, res) {
        const novoLivro = req.body
        try {
            const autorEncontrado = await autor.findById(req.body.autor);
            const livroCompleto = {...novoLivro, autor : {...autorEncontrado._doc}}
            const livroCriado = await livro.create(livroCompleto)
            res.status(201).json({status : 201, message : "Livro cadastrado com sucesso.", content : livroCompleto});
        } catch (error) {
            res.status(500).json({status : 500, message : "Erro no servidor."});
        };
    };

    static async filtrarPorEditora (req, res) {
        const editora = req.query.editora;
        try {
            const livrosPorEditora = await livro.find({editora : editora});
            res.status(200).json(livrosPorEditora);
        } catch (err) {
            res.status(500).json({status : 500, message : "Erro no servidor."});
        }
    }

    static async listarLivroId (req, res) {
        try {
            const id = req.params.id;
            const listarLivroId = await livro.findById(id);
            res.status(200).json(listarLivroId);
        } catch (error) {
            res.status(500).json({status : 500, message : "Erro no servidor."});
        };
    };

    static async editarLivroId (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(201).json({message : "Sucesso, livro editado!"});
        } catch (error) {
            res.status(500).json({status : 500, message : "Erro no servidor."});
        };
    };

    static async deletarLivroId (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id,);
            res.status(201).json({message : "Sucesso, livro Apagado!"});
        } catch (error) {
            res.status(500).json({status : 500, message : "Erro no servidor."});
        };
    };

};

export default LivroController