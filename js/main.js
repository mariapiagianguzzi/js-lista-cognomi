/* Lista Cognomi
Chiedere all’utente il cognome
inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
stampa la lista ordinata alfabeticamente
scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova */



/* CREO LE MIA VARIABILE PER CHIEDERE IL COGNOME ALL'UTENTE */

var cognome = prompt ("Qual è il tuo cognome?");
console.log(cognome);

/* CREO UNA ARRAY E INSERISCO I COGNOMI */

var surnames = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
surnames.push(cognome);

/* STAMPO LA LISTA DEI COGNOMI IN ORDINE ALFABETICO */
var surnameSorted = surnames.sort();

for(var i = 0; i < surnameSorted.length; i++) {
    var item = surnameSorted[i];
    var lista = document.getElementById("lista-cognomi").innerHTML;
    document.getElementById("lista-cognomi").innerHTML = lista + "<li>" + item + "</li>";
}

/* ADESSO SCRIVO LA POSIZIONE DEL COGNOME */
document.getElementById("position").innerHTML = "La posizione del tuo cognome è..." + (surnameSorted.indexOf(cognome) + 1 );
