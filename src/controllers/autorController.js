import { autor } from "../models/Autor.js";


class AutorController {

    static async listarAutores(req, res) {
        try {
            const listarAutores = await autor.find({});
            res.status(200).json(listarAutores);
        } catch (error) {
            res.status(500).json({status : 500, message : "Erro no servidor."});
        };
    };

    static async adicionarAutor (req, res) {
        try {
            const adicionarAutor = await autor.create(req.body);
            res.status(201).json({status : 201, message : "Autor cadastrado com sucesso.", content : adicionarAutor});
        } catch (error) {
            res.status(500).json({status : 500, message : "Erro no servidor."});
        };
    };

    static async listarAutorId (req, res) {
        try {
            const id = req.params.id;
            const listarAutorId = await autor.findById(id);
            res.status(200).json(listarAutorId);
        } catch (error) {
            res.status(500).json({status : 500, message : "Erro no servidor."});
        };
    };

    static async editarAutorId (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(201).json({message : "Sucesso, autor editado!"});
        } catch (error) {
            res.status(500).json({status : 500, message : "Erro no servidor."});
        };
    };

    static async deletarAutorId (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(201).json({message : "Sucesso, autor Apagado!"});
        } catch (error) {
            res.status(500).json({status : 500, message : "Erro no servidor."});
        };
    };
};

export default AutorController