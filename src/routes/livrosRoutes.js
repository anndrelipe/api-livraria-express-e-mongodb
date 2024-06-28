import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/api/livros", LivroController.listarLivros);
routes.post("/api/livros", LivroController.adicionarLivro);
routes.get("/api/livros/busca", LivroController.filtrarPorEditora);
routes.get("/api/livros/:id", LivroController.listarLivroId);
routes.put("/api/livros/:id", LivroController.editarLivroId);
routes.delete("/api/livros/:id", LivroController.deletarLivroId);



export default routes