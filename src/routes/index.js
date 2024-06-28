import express from "express";
import livros from './livrosRoutes.js';
import autorRoutes from "./autoresRoutes.js";

const indexRoutes = (app) => {
    app.route('/').get((req,res) => res.status(200).json({message: "Api funcionando"}));
    app.use(express.json(), livros, autorRoutes);
};

export default indexRoutes