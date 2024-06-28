import mongoose from "mongoose";

async function conectarMongoDb() {
    mongoose.connect(process.env.CONNECTION_STR);
    return mongoose.connection;
} 

export default conectarMongoDb;