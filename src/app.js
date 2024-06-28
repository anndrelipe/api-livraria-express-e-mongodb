import express from "express";
import conectarMongoDb from "./config/dbConnect.js";
import indexRoutes from "./routes/index.js";

const connection = await conectarMongoDb();

connection.on('error', (err) => {
    console.log(err)
})

connection.once('open', () => {
    console.log("Conectado ao banco de dados!")
})

const app = express();
indexRoutes(app)

app.get('/', (req, res) => {
    res.status(200).send("Funcionou");
});

export default app