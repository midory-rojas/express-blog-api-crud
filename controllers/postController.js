//imporoto l'array di cani della cartella data
import caniArray from "../data/cani.js";

// Lettura di tutti i post dei cani - INDEX
function index(req, res) {
    const risposta = {
        count:caniArray.length,
        results: caniArray,
    };
    res.json(risposta);
}

function show(req,res) {
   const id = parseInt(req.params.id);
   res.send(`dettagli di un singolo post di cane ${id}`);
}

function store(req,res) {
    res.send("creo un nuovo tipo di post di cane");
}

function update(req,res) {
    const id = parseInt(req.params.id);
    res.send(`modifica un post di cane esistente ${id}`);
}

function modify(req, res) {
    const id = parseInt(req.params.id);
    res.send(`modifica parzialmente il post di cane ${id}`);
}

function destroy(req, res) {
    const id = parseInt(req.params.id);
    res.send(`cancela il post di cane ${id}`);
}



const controller = {
    index,
    show,
    store,
    update,
    modify,
    destroy,
};

//exporto controller
export default controller;