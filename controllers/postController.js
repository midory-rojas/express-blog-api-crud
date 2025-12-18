//imporoto l'array di cani della cartella data
import caniArray from "../data/cani.js";

// Lettura di tutti i post dei cani - INDEX
function index(req, res) {
    const risposta = {
        count: caniArray.length,
        results: caniArray,
    };
    res.json(risposta);
}

// Dettagli di un singolo post (cane) - SHOW
function show(req, res) {
    const id = parseInt(req.params.id);
    //uso find 
    const cane = caniArray.find((cane) => cane.id === id);
    //uso la condizione
    if (cane !== undefined) {
        res.json(cane);
    } else {
        res.status(404); //Status 404
        res.json({
            error: "Not found",
            message: "Cane non trovato",
        });
    }
}

// Creare un nuovo tipo di post (cane) - STORE
function store(req, res) {
    res.send("creo un nuovo tipo di post di cane");
}


// Modificare un post di cane esistente - UPDATE
function update(req, res) {
    const id = parseInt(req.params.id);
    res.send(`modifica un post di cane esistente ${id}`);
}

// Modificare solo alcuni dati di un post di cane esistente - MODIFY
function modify(req, res) {
    const id = parseInt(req.params.id);
    res.send(`modifica parzialmente il post di cane ${id}`);
}

// Cancellare un post di cane esistente - DESTROY
function destroy(req, res) {
    const id = parseInt(req.params.id);

    //Implemntazione della logica 
    //1. Trovare index del post di cani con findIndex
    const caneIndex = caniArray.findIndex((cane) => cane.id === id);
    //console.log(caneIndex);

    //Condixione

    if (caneIndex === -1) {
        res.status(404); //Status 404 not found
        res.json({
            error: "not found",
            message: "Cane non trovato",
        });
    } else {
        //2. Cancello il post di cane con lo splice
        //partendo dal indice 1, cancello un'elemento (1)
        //dopo faccio il test con index per vedere si è stato cancelato il post

        caniArray.splice(caneIndex, 1)
        res.sendStatus(204) //Status 204 non c'è nessun contenuto
    }
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