# WEBAPP REACT

## Creazione della mia prima webapp dal lato Frontend, utilizzando REACT

## GIORNO 1

### MILESTONE 1

- Mettiamo su un nuovo progetto React aiutandoci con Vite
  - `npm create vite@latest nome-progetto -- --template react`
- Ripuliamo come sempre l’app da file e codice di esempio non necessari
  - Rimuoviamo `App.css`, il logo, ecc.
- Installiamo il necessario: React Router, Axios e Bootstrap (se volete utilizzarlo)
  - `npm install react-router-dom axios bootstrap`

---

### MILESTONE 2

- Creiamo un layout di base per la nostra applicazione ed impostiamo le rotte per le diverse pagine
  - Usiamo `<BrowserRouter>`, `<Routes>`, `<Route>`
- Creiamo 2 pagine:
  - La home, in cui mostreremo la lista dei film
  - La pagina di dettaglio di un singolo film

---

### MILESTONE 3

- Configuriamo l’app di backend (repo `webapp-express`) a ricevere chiamate dalla nostra applicazione React
  - Installiamo e impostiamo il middleware CORS (`npm install cors`)
- Proviamo quindi ad effettuare una chiamata Ajax dalla home del progetto React, per ottenere la lista dei libri
  - Usiamo `axios.get()` dentro `useEffect`

### BONUS

- Impostare la struttura del lavoro in maniera da sfruttare la riutailizzabilità dei componenti React e le loro props!
- Aggiungere, nella pagina dei film, un campo per cercare su tutti i campi utili del db (es. titolo, abstract)
- Curare l’aspetto estetico della vostra applicazione

---

## GIORNO 2

### MILESTONE 1

- Colleghiamo la lista dei movies a una pagina di dettaglio movie.
- Effettuiamo una chiamata AJAX dalla pagina di dettaglio per ottenere il dettaglio di un singolo film, comprese le sue recensioni

---

### MILESTONE 2

- Rappresentiamo le informazioni del movie

---

### MILESTONE 3

- Creiamo un componente ReviewCard per rappresentare le informazioni delle recensioni

---

### BONUS

- Rappresentiamo tutti i voti delle recensioni con un componente StarRating
- Sul backend, iniziamo a realizzare una rotta /movies/:id/reviews per aggiungere una nuova recensione. (Può restituire un semplice testo "Rotta per aggiungere una recensione"):

---

## GIORNO 3

### MILESTONE 1 (BACKEND)

- Predisponiamo un’API per salvare nel database una nuova recensione legata ad un film
- Testiamola su postman e verifichiamo che nel DB venga effettivamente inserita una nuova recensione

### MILESTON 2 (FRONTEND)

- Creiamo un componente che contenga il form per le recensioni
- Inseriamo questo componente nella pagina di dettaglio del film
- All’invio del form, la nuova recensione viene salvata sul database e visualizzata nella pagina, in fondo alle altre

### BONUS

- Provare a creare un nuovo film con upload immagine (multer)!
