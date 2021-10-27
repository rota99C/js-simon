/* Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */


//strumenti
//allert
//mathrandom
//ciclo while



//numeri random
//creo un array dove salvo i numeri random

let numeri = []
while (numeri.length < 5) {
    let random = Math.floor(Math.random() * 10)
    if (!numeri.includes(random)) {
        numeri.push(random)
    }
}


//messaggio allert

let messaggio = alert('ciao , memorizza bene questi numeri che ho gnerato ' + numeri + '  Poi ti dirò quanti ne hai indovinati')

//una variabile dove inserisco i nuemri inseriti
let backupNumeri = []

setTimeout(function () {
    for (let index = 0; index < 5; index++) {
        //domanda all'utente
        let risposta = parseInt(prompt("dimmi che numeri ricordi"));
        if (numeri.includes(risposta)) {
            backupNumeri.push(risposta);
        }
    }
    let finale = alert('hai indovinato ' + backupNumeri.length)
}, 1000)
