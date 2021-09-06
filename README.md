# PostIt(DelZompo 587102 -Lorenzetti 531747)
Abbiamo diviso il progetto in diverse componenti. Oltre la componente App, abbiamo aggiunto: login, showpostits e editpostits.

Allo start dell'applicazione l'unica componente visibile è la componente login. Tale componente permette di accedere ai propri dati inserando una chiave. Se non si è in possesso della chiave se ne può generare una nuova premendo il tasto "Generate a new key". Alla pressione del tasto "login" vengono scaricati i postit memorizzati nel database relativo alla chiave selezionata. Questi dati vengono inviati tramite EventEmitter all'AppComponent.

A questo punto le altre due componenti saranno visibili(mentre login non lo sarà più).

La componente "showpostits" è la componente che si occupa di mostrare i postit. È possibile, tramite la checkbox dedicata, mostrare solo i postit segnati come preferiti(importanti).

"Editpostits" si occupa delle modifiche dei dati. In particolare si può aggiungere un nuovo postit o eliminarne uno presente. È anche possibile, tramite il tasto rosso "RESET", eliminare tutti i dati.
