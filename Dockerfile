# Scarica l'immagine di base
FROM node:16

# Imposto la cartella di lavoro di default
WORKDIR /usr/src/app

# Copio i file di configurazione
COPY package*.json ./

# Installa i pacchetti
RUN npm install

# Copia tutti i file che ho sulla mia directory in WORKDIR
COPY . .

# Apri all'esterno la porta 3000 per permettere la comunicazione con la rete
EXPOSE 3000

# Avvio i comandi (al posto di RUN, è equivalente a RUN node app.js)
CMD ["node", "app.js"]
