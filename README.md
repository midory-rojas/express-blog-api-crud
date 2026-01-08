# Express Blog - API CRUD (parte 1 e parte 2)

# Dipendenze:

- Express
- Testare su postman

# Esercizio:

## Milestone 1

- [x] Come prima cosa, creiamo un controller per i post, in una cartella controllers. 

 - [x] All’interno, preparo tutte le funzioni necessarie e copio in ciascuna la logica delle funzioni che attualmente si trovano nel router (al momento restituiscono solo dei messaggi). 

 - [x] Poi torno sul file delle rotte. Qui importo le funzioni dichiarate nel controller e le associo alle varie rotte.

-  [x] Faccio il test su postman se chiamando gli endpoint ricevo effettivamente le stesse risposte che avevo prima. 

-  [x] Se tutto funziona, passo alla prossima milestone.

## Milestone 2


-  [x] Implemento le logiche del CRUD:

-  [x] INDEX dovrà restituire la lista dei post in formato JSON
-  [x] SHOW dovrà restituire un singolo post in formato JSON
-  [x] DESTROY dovrà eliminare un singolo post dalla lista, stampare nel terminale (console.log) la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.
-  [x] In SHOW e DESTROY, controllo se il parametro si riferisce ad un post esistente, in caso contrario, risponde con uno stato 404 e un messaggio d’errore, sempre in formato JSON.

## Milestone 3

-  [x] Impostiamo il verbo e l’endpoint corretti
-  [x] Selezioniamo il tab body e scegliamo il formato raw e JSON
-  [x] Inseriamo come corpo della nostra request un oggetto che rappresenti un nuovo post

## Milestone 4

-  [x] Imposto il body-parser per far sì che la nostra app riesca a decifrare il request body.

-  [x] Poi, all’interno della rotta Store, stampo nel terminale i dati in arrivo, grazie a un console.log 

## Milestone 5

-  [x] Implementiamo quindi la logica per aggiungere un nuovo post al nostro blog, e prepariamo la risposta adeguata.

-  [x] Testiamolo con postman.

## Milestone 6

-  [x] Ripeto il procedimento per la rotta di Update, in modo da avere la possibilità di modificare le risorse. 

404 per la rotta SHOW e DESTROY.
In UPDATE--> 404 e un messaggio d’errore, sempre in formato JSON.
Controllo la correttezza di dati nello STORE e UPDATE, inviando nel caso errore 400.

## Implementazione Middleware e Gestione Errori Centralizzata
Oggi ho migliorato l'architettura della mia API Express introducendo una gestione per le rotte non esistenti e per gli errori di sistema, centralizzando tutto nella cartella middlewares.

-  [x] Struttura e logica dei file --- notFound.js:

Questo middleware cattura tutte le richieste effettuate verso endpoint che non sia stata definita.

Risponde con uno status code 404 e un messaggio JSON chiaro: "Pagina non trovata dal server".

-  [x] Struttura e Logica del file --- errorHandler.js:

È un middleware specializzato (riconoscibile dai 4 parametri err, req, res, next) che gestisce qualsiasi errore scatenato dall'applicazione.

Effettua il console.error(err.stack) per permettere di fare debug sul terminale, ma risponde al client con uno status code 500 e un oggetto JSON che contiene il messaggio dell'errore.

 -  [x] Integrazione in app.js
Per rendere questi strumenti disponibili in tutta l'applicazione, li ho importati e registrati dopo le route cosi può stare disponibile in tutta la pagina ed anche perche il browser lo legge in cascada. In questo modo, Express li esegue solo se nessuna rotta precedente ha risposto alla richiesta.

Test di Errore: Ho creato una rotta di test /error che lancia intenzionalmente un Error per verificare che il middleware errorHandler intercetti correttamente il problema e restituisca la risposta JSON.






