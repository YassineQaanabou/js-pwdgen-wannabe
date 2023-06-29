let nomeUtente = prompt("Qual'è il tuo nome?");

let cognomeUtente = prompt("Qual'è il tuo cognome?");

let colorePreferito = prompt("Qual'è il tuo colore preferito?");

let etaUtente = prompt("Qual'è la tua età?");

let primoNumero = parseInt(prompt("scegli un numero"));

let secondoNumero = parseInt(prompt("scegli un altro numero"));

let divisione = primoNumero / secondoNumero;

let password = nomeUtente+cognomeUtente+colorePreferito+etaUtente+divisione;


console.log(password);

document.getElementById("password").innerHTML = password;