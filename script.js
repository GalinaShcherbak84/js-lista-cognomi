//creare un array con i cognomi
var cognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
console.log(cognomi);
//chiedere il cognome all'utente
var userName = prompt('Inserisci il tuo cognome.');
while(userName === null || userName.trim ===''){
    userName = prompt('Inserire un valore valido.');
}
userName = userName.trim();
console.log(userName);
//inserire il cognome del utente nella lista
cognomi.push(userName);
console.log(cognomi);
cognomi.sort();
console.log(cognomi);
console.log(cognomi.indexOf(userName) + 1);
//print to screen
var names = '';
for(var i = 0; i < cognomi.length; i++) {
    names = names + '<li>' + cognomi[i] + '</li>';
}
document.getElementById('lista').innerHTML = names;