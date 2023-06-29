let nomeUtente = prompt("Qual'è il tuo nome?");

let cognomeUtente = prompt("Qual'è il tuo cognome?");

let etaUtente = prompt("Qual'è la tua età?");

let primoNumero = parseInt(prompt("scegli un numero"));

let secondoNumero = parseInt(prompt("scegli un altro numero"));

let divisione = primoNumero / secondoNumero;

let password = nomeUtente+cognomeUtente+etaUtente+divisione;


console.log(password);