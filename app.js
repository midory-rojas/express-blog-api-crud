//Importo express
import express from "express";
//Importo postRouter della cartella router
import postsRouter from "./routers/posts.js";

//Invoco express
const app = express();

//Creo la porta 3000
const port = 3000;

//Creo una cartella public per inserire le immagine e accedere facilmente dal browser
app.use(express.static("public"));

//Imposto la rotta
app.use("/posts", postsRouter);

//Faccio la prova con la prima risposta e la verifico in postman
app.get("/", (req, res) => {
    res.send("Benvenuti al blog dei cani più belli e amorevooli");
})

app.listen(port, () => {
    console.log(`Íl server è partito sulla porta ${port}`);
});