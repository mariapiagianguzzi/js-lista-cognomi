/* Lista Cognomi
Chiedere all’utente il cognome
inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
stampa la lista ordinata alfabeticamente
scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova */



/* CREO LE MIA VARIABILE PER CHIEDERE IL COGNOME ALL'UTENTE */

var cognome = prompt ("Qual è il tuo cognome?");
console.log(cognome);

/* CREO UNA ARRAY E INSERISCO I COGNOMI */

var surnames = ["Gianguzzi", "Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
document.getElementById("demo").innerHTML = surnames;

/* STAMPO LA LISTA ORDINATA DEI COGNOMI IN ORDINE ALFABETICO */
function myFunction() {
    surnames.sort();
    document.getElementById("demo").innerHTML = surnames;
   

}

/* ADESSO SCRIVO LA POSIZIONE IN IN CUI L'UTENTE SI TROVA */
document.getElementById("posizione").innerHTML = (surnames.indexOf(cognome) + 1);

