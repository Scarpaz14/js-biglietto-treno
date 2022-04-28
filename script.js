// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// INIZIO------ 

// Prezzo fisso biglietto 
const PriceforKm = Number("0.21");

// chiedo quanti km vuole percorrere 
const KmNumber= Number(prompt("Quanti kilometri vuoi percorrere?"));

// chiedo l'età del passegero
const Age= Number(prompt("Quanti anni hai?"));

// calcolo prezzo del biglietto in base ai km 
const PriceTicket = (KmNumber * PriceforKm);

// applichiamo uno sconto in base all'età
let PriceDiscounted;
if ( Age < 18 ) {
    PriceDiscounted = PriceTicket -  (PriceTicket * 20 / 100);
}
else if ( Age >= 65 ) {
    PriceDiscounted = PriceTicket - (PriceTicket * 40 / 100);
} 

else{
    PriceDiscounted = PriceTicket;
}

// stampiamo in html alcuni valori 
document.getElementById("ticket").innerHTML=PriceDiscounted.toFixed(2) + "€";
document.getElementById("ticket-standard").innerHTML=PriceTicket.toFixed(2) + "€";


let Discount;

if ( Age < 18 ) {
    Discount = (PriceTicket * 20 / 100);
}
else if ( Age >= 65 ) {
    Discount =  (PriceTicket * 40 / 100);
} 
else{
    Discount = Number(0);
}

document.getElementById("discount").innerHTML=Discount.toFixed(2) + "€";
