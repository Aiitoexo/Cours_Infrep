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
//
// let letter = prompt("Saisissez une lettre.")
// if (letter === null || letter === "" || letter.length >= 2 || isNaN(letter)) {
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
//
// // CORRECTION ////////////////////////////////////////////////////////////////////////////////////////////////////////
// let answer = prompt("Donne une lettre");
//
// // On vérifie qu'on a bien obtenu une réponse
// if (
//     answer !== null &&
//     typeof answer === "string"
// ) {
//
//     // on force la lettre en minuscule
//     let letter = answer.toLowerCase();
//
//     // on enlève tous les espaces en trop (en début et en fin de chaine)
//     letter = letter.trim();
//
//     if (
//         letter === "a" || letter === "e" || letter === "i" ||
//         letter === "o" || letter === "u" || letter === "y"
//     ) {
//         console.log(answer + ' est une voyelle')
//     } else if (letter !== "") {
//         console.log(answer + ' est une consonne')
//     }
// }
//
// // .trim fonction qui enleve des chaine vide dans une string en debut et fin de chaine //
//
// /////////////////////////////////////////////// Exercice Jours Suivant ////////////////////////////////////////////////
//
// let day = prompt("Rentrer un jour de la semaine.");
// let dayLowerCase = day.toLowerCase();
//
// if (dayLowerCase === "lundi") {
//     alert("Le jours après Lundi est Mardi.");
// } else if (dayLowerCase === "mardi") {
//     alert("Le jours après Mardi est Mercredi.");
// } else if (dayLowerCase === "mercredi") {
//     alert("Le jours après Mercredi est Jeudi.");
// } else if (dayLowerCase === "jeudi") {
//     alert("Le jours après Jeudi est Vendredi.");
// } else if (dayLowerCase === "vendredi") {
//     alert("Le jours après Vendredi est Samedi.");
// } else if (dayLowerCase === "samedi") {
//     alert("Le jours après Samedi est Dimanche.");
// } else if (dayLowerCase === "dimanche") {
//     alert("Le jours après Dimanche est Lundi.");
// } else {
//     alert("Vérifié l'ortographe ce jour n'existe pas.");
// }
//
// // CORRECTION /////////////////////////////////////////////////////////////////////////////////////////////////////////
// let day = prompt('Quel jour est on ?');
//
// let nextDay;
// if (day === "lundi") {
//     nextDay = "mardi"
// } else if (day === "mardi") {
//     nextDay = "mercredi"
// } else if (day === "mercredi") {
//     nextDay = "jeudi"
// } else if (day === "jeudi") {
//     nextDay = "vendredi"
// } else if (day === "vendredi") {
//     nextDay = "samedi"
// } else if (day === "samedi") {
//     nextDay = "dimanche"
// }
//
// if (nextDay) {
//     alert("Demain, on sera " + nextDay + " !");
// } else {
//     console.log("Euh... Ce n'est pas un jour !");
// }
// //////////////////////////////////////////// Exercice Comparaison Nombre //////////////////////////////////////////////
//
// let nb1 = prompt("Rentrer un premier chiffre.");
//
// let nb2 = prompt("Rentrer un second chiffre.");
//
// if (nb1 === "" || isNaN(nb1) || nb2 === "" || isNaN(nb2)) {
//     alert("Je pense qu'il y a un soucie dans vos chiffres rentrer juste avant.")
// } else {
//     nb1 = Number(nb1);
//     nb2 = Number(nb2);
//
//     if (nb1 > nb2) {
//         alert(nb1 + " est plus grand que " + nb2);
//     } else if (nb1 < nb2) {
//         alert(nb1 + " est plus petit que " + nb2);
//     } else if (nb1 === nb2) {
//         alert(nb1 + " est égal à " + nb2);
//     } else {
//         alert("Je pense qu'il y a un soucie dans vos chiffres rentrer juste avant.");
//     }
// }
// // CORRECTION /////////////////////////////////////////////////////////////////////////////////////////////////////////
// let nb1 = prompt("Entrez un nombre");
//
// if (
//     // clic sur annuler
//     nb1 === null ||
//     // repond "OK" ou alors que des espaces
//     nb1.trim() === "" ||
//     // on convertit la variable en type "number", et on regarde si on a obtenu NaN
//     Number.isNaN(Number(nb1))
// ) {
//     console.log(nb1 + ' est invalide')
// } else {
//
//     let nb2 = prompt("Entrez un autre nombre")
//
//     if (
//         nb2 === null ||
//         nb2.trim() === "" ||
//         Number.isNaN(Number(nb2))
//     ) {
//         console.log(nb2 + ' est invalide')
//     } else {
//
//         nb1 = Number(nb1);
//         nb2 = Number(nb2);
//
//         if (nb1 === nb2) {
//             console.log("Les deux nombres sont identiques");
//         } else if (nb1 < nb2) {
//             console.log(nb1 + " est plus petit que " + nb2);
//         } else {
//             console.log(nb1 + " est plus grand que " + nb2);
//         }
//     }
// }
// /////////////////////////////////////////////// Exercice Baccalauréat /////////////////////////////////////////////////
//
// let moyenne = prompt("Rentrer votre moyenne.");
// if (moyenne === "" || isNaN(moyenne) || moyenne > 20 || moyenne < -20) {
//     alert("La moyenne saisi est incorrect !");
// } else {
//     moyenne = Number(moyenne);
//
//     if (moyenne < 10) {
//         alert("Vous êtes recalé.");
//     } else if (moyenne >= 10 && moyenne < 12) {
//         alert("Vous êtes reçu.");
//     } else if (moyenne >= 12 && moyenne <= 20) {
//         alert("Vous êtes reçu avec mention.")
//     }
// }
// // CORRECTION /////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// let note = prompt("Quelle note avez-vous obtenu ?")
// if (
//     // clic sur annuler
//     note === null ||
//     // repond "OK" ou alors que des espaces
//     note.trim() === "" ||
//     // on convertit la variable en type "number", et on regarde si on a obtenu NaN
//     Number.isNaN(Number(note))
// ) {
//     console.log('La note est invalide.')
// } else {
//
//     note = Number(note);
//
//     if (note < 10) {
//         console.log("Aie, vous êtes recalé :(");
//     } else if (note >= 10 && note < 12) {
//         console.log("Reçu !");
//     } else {
//         console.log("Bravo ! Reçu avec mention :)");
//     }
// }
// ///////////////////////////////////////////// Exercice Heure Suivante /////////////////////////////////////////////////

let hour = prompt("Rentrez une heure.");
let minute = prompt("Rentrez des minutes.");
let second = prompt("Rentrez des secondes.");

if (isNaN(hour) || isNaN(minute) || isNaN(second) || hour === "" || hour === null || minute === "" || minute === null || second === "" || second === null) {
    alert("Ce n'est pas une heure.")
} else {
    hour = Number(hour);
    minute = Number(minute);
    second = Number(second);

    if (second === 60) {
        second = 1;
    } else if (second >= 59 && second < 60 || second === "") {
        second = 0;
    } else if (second >= 0 && second <= 58) {
        second++;
    } else if (second > 60 || second < 0) {
        second = 0;
    }

    if (second === 0 || second === 60) {
        if (minute === 60) {
            minute = 1;
        } else if (minute >= 59 && minute < 60 || minute === "") {
            minute = 0;
        } else if (minute >= 0 && minute <= 58) {
            minute++;
        } else if (minute > 60 || minute < 0) {
            minute = 0;
        }
    }

    if (minute === 0 || second === 60) {
        if (hour === 24) {
            hour = 1;
        } else if (hour >= 23 && hour < 24 || hour === "") {
            hour = 0;
        } else if (hour >= 0 && hour <= 22) {
            hour++;
        } else if (hour > 24 || hour < 0) {
            hour = 0;
        }
    }

    let hourNext = (hour.toString().padStart(2, '0') + "h" + minute.toString().padStart(2, '0') + "m" + second.toString().padStart(2, '0') + "s");

    alert(hourNext);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////