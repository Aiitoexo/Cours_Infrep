// Exercice (if) TVA

const TVA = 0.2;

function calculTVA () {
    let priceHT = parseFloat(resultPrice);
    let TTC = (priceHT + (priceHT * TVA)).toFixed(2);
    alert("Le prix TTC est de " + TTC + "€");
}

let resultPrice = prompt("Rentrer un prix hors taxe en euro.")
if (resultPrice < 0) {
    resultPrice = prompt("Le prix est négatif veuillez re rentrer un prix.");
    calculTVA();
} else {
    calculTVA();
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let nb = prompt("Merci d'entrer un nombre (chiffre, pas de lettres svp !!!)");
if (nb === null) {
  // s'il clique sur "annuler" on fait rien
} else {
  nb = Number(nb);

  if (nb === 0) {
    alert('Le nombre ' + nb + ' est zéro.');
  } else if (nb < 0) {
    alert('Le nombre ' + nb + ' est négatif.');
  } else if (nb > 0) {
    alert('Le nombre ' + nb + ' est positif.');
  } else {
    alert('Le nombre est invalide');
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ET = && (Tout Vrai = Vrai)  (1 Seul Faux = Faux)
// OU = || (Tous Faux = Faux)  (1 Seul Vrai = Vrai)
// ! = Different = NON   (!false = Vrai)  (!true = Faux)  (!== = Different)
// ET $$ prioritaire au OU || (parenthèse possible)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let letter = prompt("Saisisser une lettre.")
if (letter === null || letter === "" || letter.length > 1){
    alert("Ce n'est pas une lettre.")
} else {
    let lowerCase = letter.toLocaleLowerCase()

    if (lowerCase === "a" || lowerCase === "e" || lowerCase === "i" || lowerCase === "u" || lowerCase === "o" || lowerCase === "y") {
        alert("La lettre " + letter + " est une voyelle.")
    } else {
        alert("La lettre " + letter + " est une consonne.")
    }
}





