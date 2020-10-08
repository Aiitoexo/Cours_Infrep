// Exercice (if) TVA

// const TVA = 0.2;
//
// function calculTVA() {
//     let priceHT = parseFloat(resultPrice);
//     let TTC = (priceHT + (priceHT * TVA)).toFixed(2);
//     alert("Le prix TTC est de " + TTC + "€");
// }
//
// let resultPrice = prompt("Rentrer un prix hors taxe en euro.")
// if (resultPrice < 0) {
//     resultPrice = prompt("Le prix est négatif veuillez re rentrer un prix.");
//     calculTVA();
// } else {
//     calculTVA();
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let nb = prompt("Merci d'entrer un nombre (chiffre, pas de lettres svp !!!)");
// if (nb === null) {
//     // s'il clique sur "annuler" on fait rien
// } else {
//     nb = Number(nb);
//
//     if (nb === 0) {
//         alert('Le nombre ' + nb + ' est zéro.');
//     } else if (nb < 0) {
//         alert('Le nombre ' + nb + ' est négatif.');
//     } else if (nb > 0) {
//         alert('Le nombre ' + nb + ' est positif.');
//     } else {
//         alert('Le nombre est invalide');
//     }
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ET = && (Tout Vrai = Vrai)  (1 Seul Faux = Faux)
// OU = || (Tous Faux = Faux)  (1 Seul Vrai = Vrai)
// ! = Different = NON   (!false = Vrai)  (!true = Faux)  (!== = Different)
// ET $$ prioritaire au OU || (parenthèse possible)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let letter = prompt("Saisissez une lettre.")
// if (letter === null || letter === "" || letter.length > 1 || isNaN(letter)) {
//     alert("Ce n'saisissez est pas une lettre.")
// } else {
//     let lowerCase = letter.toLocaleLowerCase()
//
//     if (lowerCase === "a" || lowerCase === "e" || lowerCase === "i" || lowerCase === "u" || lowerCase === "o" || lowerCase === "y") {
//         alert("La lettre " + letter + " est une voyelle.")
//     } else {
//         alert("La lettre " + letter + " est une consonne.")
//     }
// }

/////////////////////////////////////////////// Exercice Jours Suivant ////////////////////////////////////////////////

let day = prompt("Rentrer un jour de la semaine.");
let dayLowerCase = day.toLocaleLowerCase();

if (dayLowerCase === "lundi") {
    alert("Le jours après Lundi est Mardi.");
} else if (dayLowerCase === "mardi") {
    alert("Le jours après Mardi est Mercredi.");
} else if (dayLowerCase === "mercredi") {
    alert("Le jours après Mercredi est Jeudi.");
} else if (dayLowerCase === "jeudi") {
    alert("Le jours après Jeudi est Vendredi.");
} else if (dayLowerCase === "vendredi") {
    alert("Le jours après Vendredi est Samedi.");
} else if (dayLowerCase === "samedi") {
    alert("Le jours après Samedi est Dimanche.");
} else if (dayLowerCase === "dimanche") {
} else {
    alert("Vérifié l'ortographe ce jour n'existe pas.");
}

//////////////////////////////////////////// Exercice Comparaison Nombre //////////////////////////////////////////////

let nb1 = prompt("Rentrer un premier chiffre.");

let nb2 = prompt("Rentrer un second chiffre.");

if (nb1 === "" || isNaN(nb1) || nb2 === "" || isNaN(nb2)) {
    alert("Je pense qu'il y a un soucie dans vos chiffres rentrer juste avant.")
} else {
    nb1 = Number(nb1);
    nb2 = Number(nb2);

    if (nb1 > nb2) {
        alert(nb1 + " est plus grand que " + nb2);
    } else if (nb1 < nb2) {
        alert(nb1 + " est plus petit que " + nb2);
    } else if (nb1 === nb2) {
        alert(nb1 + " est égal à " + nb2);
    } else {
        alert("Je pense qu'il y a un soucie dans vos chiffres rentrer juste avant.");
    }
}

/////////////////////////////////////////////// Exercice Baccalauréat /////////////////////////////////////////////////

let moyenne = prompt("Rentrer votre moyenne.");
if (moyenne === "" || isNaN(moyenne) || moyenne > 20 || moyenne < -20) {
    alert("La moyenne saisi est incorrect !");
} else {
    moyenne = Number(moyenne);

    if (moyenne < 10) {
        alert("Vous êtes recalé.");
    } else if (moyenne >= 10 && moyenne < 12) {
        alert("Vous êtes reçu.");
    } else if (moyenne >= 12 && moyenne <= 20) {
        alert("Vous êtes reçu avec mention.")
    }
}

///////////////////////////////////////////// Exercice Heure Suivante /////////////////////////////////////////////////

let hour = prompt("Rentrez une heure.");
let minute = prompt("Rentrez des minutes.");
let second = prompt("Rentrez des secondes.");

if (isNaN(hour) || isNaN(minute) || isNaN(second)) {
    alert("Ce n'est pas une heure.")
} else {
    hour = Number(hour);
    minute = Number(minute);
    second = Number(second);

    if (hour === 24) {
        hour = 1;
    } else if (hour >= 23 && hour < 24 || hour === "") {
        hour = 0;
    } else if (hour >= 0 && hour <= 22) {
        hour++;
    } else if (hour > 24 || hour < 0) {
        hour = 0;
    }

    if (minute === 60) {
        minute = 1;
    } else if (minute >= 59 && minute < 60 || minute === "") {
        minute = 0;
    } else if (minute >= 0 && minute <= 58) {
        minute++;
    } else if (minute > 60 || minute < 0) {
        minute = 0;
    }

    if (second === 60) {
        second = 1;
    } else if (second >= 59 && second < 60 || second === "") {
        second = 0;
    } else if (second >= 0 && second <= 58) {
        second++;
    } else if (second > 60 || second < 0) {
        second = 0;
    }

    let hourNext = (hour.toString().padStart(2, '0') + "h" + minute.toString().padStart(2, '0') + "m" + second.toString().padStart(2, '0') + "s");

    alert(hourNext);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////