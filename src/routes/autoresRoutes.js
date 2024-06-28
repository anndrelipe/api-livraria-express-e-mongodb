import express from "express"
import AutorController from "../controllers/autorController.js" 

const autorRoutes = express.Router()

autorRoutes.get("/api/autores", AutorController.listarAutores);
autorRoutes.post("/api/autores", AutorController.adicionarAutor);
autorRoutes.get("/api/autores/:id", AutorController.listarAutorId);
autorRoutes.put("/api/autores/:id", AutorController.editarAutorId);
autorRoutes.delete("/api/autores/:id", AutorController.deletarAutorId);

export default autorRoutes