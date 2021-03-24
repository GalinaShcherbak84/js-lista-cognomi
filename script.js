var cognomi = ['bianchi', 'neri', 'rossi', 'verdi', 'gialli']; //creare un array con i cognomi
console.log(cognomi);
//chiedere il cognome alutente
var userName = prompt('Inserisci il tuo cognome.');
console.log(userName);
//inserire il cognome del utente in array
cognomi.push(userName);
console.log(cognomi);
