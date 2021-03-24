//creare un array con i cognomi
var cognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
console.log(cognomi);
//chiedere il cognome alutente
var userName = prompt('Inserisci il tuo cognome.').toLowerCase().trim();
console.log(userName);
//inserire il cognome del utente nella lista
cognomi.push(userName);
console.log(cognomi);
cognomi.sort();
console.log(cognomi);
console.log(cognomi.indexOf(userName) + 1);
