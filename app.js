//Importo express
import express from "express";

//Invoco express
const app = express();

//Creo la porta 3000
const port = 3000;

//Creo una cartella public per inserire le immagine e accedere facilmente dal browser
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Benvenuti al blog dei cani più belli e amorevooli");
})

app.listen(port, () => {
    console.log(`Íl server è partito sulla porta ${port}`);
});