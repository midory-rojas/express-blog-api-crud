# Express Blog - API CRUD (parte 1)

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
