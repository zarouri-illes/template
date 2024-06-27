import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5050
const db = process.env.ATLAS_URL

app.use(cors());
app.use(express.json());

// start the Express server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.status(234).send("hello")
})

mongoose
    .connect(db)
    .then(() => {
        console.log("Connected to the database successfully")
        app.listen(PORT, (req, res) => {
            console.log(`app listening on port : ${PORT}`);
        });
        
    })
    .catch((err) => {
        console.log(err)
    })