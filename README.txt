# AngularJS-house

Angular è un framework per applicazioni web sviluppato da Google, che consente di creare applicazioni single-page (SPA) dinamiche e reattive utilizzando TypeScript, HTML e CSS.

1. Siamo andati alla pagina ufficiale di Angolar JS per tutorial
https://angular.dev/tutorials/first-app/01-hello-world

2. Abbiamo eseguito "ng new nome-applicazione --directory ./" sul terminal
Questo commando serve a creare un nuovo progetto Angular chiamato nome-applicazione nella cartella corrente (indicata da ./), invece che in una nuova sottocartella omonima, generando tutti i file e le configurazioni necessarie per iniziare a sviluppare l'applicazione Angular immediatamente nella posizione specificata, senza creare una cartella aggiuntiva

3. Invio sull'opzione CSS (SCSS, a differenza di CSS, permette di utilizzare funzionalità avanzate come variabili, annidamento e mixin per scrivere fogli di stile più modulari e manutenibili.)
(Noi abbiamo scelto CSS per semplicità. In un progetto reale, è consigliabile utilizzare SCSS per i vantaggi sopra elencati.)

4. Scrivere N e premere invio

5. Invio sull'opzione None


Una Single Page Application (SPA) è un'applicazione web che carica una singola pagina HTML iniziale e aggiorna dinamicamente i contenuti via JavaScript (es. React, Vue, Angular) 
senza ricaricare l'intera pagina dal server. Offre un'esperienza utente fluida e rapida, simile alle applicazioni desktop, scambiando dati in background. Esempi comuni includono Gmail, Facebook e Netflix.

https://www.pexels.com/it-it/: sito di immagini e video gratuiti (senza fare i loggin)

(Soluzione a errore ng: https://copilot.microsoft.com/shares/YWSriVBHKGdQK6TYfRP5u)


Installa Angular CLI globalmente: npm install -g @angular/cli


Ultimo passo del tutorial (Aggiungere communicazione HTTP): Bisogna installare JSON server, quindi eseguire il commando npm install -g json-server
https://angular.dev/tutorials/first-app/14-http


(Soluzione errore lancio server http://localhost:3000/locations: https://copilot.microsoft.com/shares/Ttdzy1CuWHhpkN29oNeoC): 
Andare nel file db.json e lanciare npx json-server --watch db.json --port 3000
per avviare JSON Server.


