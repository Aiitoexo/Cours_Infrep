//
// let answer = prompt("Donnez un nombre");
//
// if (isEven(answer)) {
//     console.log(answer + " est un nombre pair")
// } else {
//     console.log(answer + " est un nombre impair")
// }


/*
Exercice 1 :
Créer un programme qui demande le prénom et le nom d’un utilisateur, puis affiche
un message de bienvenue personnalisé
 */

// let firstName = prompt("Quel est ton prénom ?");
//
// if (firstName !== null) {
//     let message = getWelcomeMessage(firstName);
//     console.log(message);
// }

//----------------------------------------------------------------------------------------------------------------------
// Exercice : Le juste Prix
// L'ordinateur décide un nombre aleatoire, puis affiche des prompt tant que l'utilsateur ne devine pas ce nombre
// Donner des indices "c'est plus" ou "c'est moins"
//----------------------------------------------------------------------------------------------------------------------

// let randomNumber = Math.round(Math.random() * 11);
//
// let answer = prompt("Rentrez un chiffre");
// answer = Number(answer)
//
// if (numberVerif(answer)) {
//     console.log("Bravo")
// }
//
// function numberVerif(answer) {
//     while (answer !== randomNumber) {
//         if (answer > randomNumber) {
//             answer = prompt("C'est plus petit")
//         } else if (answer < randomNumber) {
//             answer = prompt("C'est plus grand")
//         } else {
//             return true
//         }
//     }
// }

//----------------------------------------------------------------------------------------------------------------------
// Exercice : coder un contrôleur de force de mot de passe (à vous de décider comment il pourrait fonctionner)
//----------------------------------------------------------------------------------------------------------------------

// let a = prompt("Rentrez un mot de passe avec une majuscule et un chiffre obligatoire")
//
// if (controlMDP(a)) {
//     console.log("Confirmer")
// }
//
// function controlMDP(answer) {
//     let regExp = RegExp("\w*[A-Z][a-z]*[0-9][a-z]*")
//     while (!regExp.test(answer) || answer.length < 6) {
//         if (!regExp.test(answer)) {
//             answer = prompt("Rentrez un mot de passe avec une majuscule et un chiffre obligatoire")
//         } else if (answer.length < 6) {
//             answer = prompt("Rentrez un mot de passe avec plus de 6 caractère")
//         }
//     }
//     return true
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let resultPrice = prompt("Rentrer un prix hors taxe en euro.");
// let priceHT = Number(resultPrice);
// if (calculTVA(priceHT)) {
//     console.log(calculTVA(priceHT))
// }
//
// function calculTVA(answer) {
//     const TVA = 0.2;
//     return (answer + (answer * TVA)).toFixed(2)
// }



// ////////////////////////////////////////////////////// CORRECTION /////////////////////////////////////////////////////
//
//
// //
// // let answer = prompt("Donnez un nombre");
// //
// // if (isEven(answer)) {
// //     console.log(answer + " est un nombre pair")
// // } else {
// //     console.log(answer + " est un nombre impair")
// // }
//
//
// /*
// Exercice 1 :
// Créer un programme qui demande le prénom et le nom d’un utilisateur, puis affiche
// un message de bienvenue personnalisé
//  */
//
// let firstName = prompt("Quel est ton prénom ?");
// if (firstName !== null) {
//
//     let lastName = prompt("Quel est ton nom de famille ?");
//     if (lastName !== null) {
//
//         let message = getWelcomeMessage(firstName, lastName);
//         console.log(message);
//     }
// }
//
// // Exercice 2 :
// // Créer un programme qui fait saisir un prix hors taxe à l’utilisateur puis affiche le prix
// // TTC correspondant (la TVA est a 20%)
//
// // PriceHT est de type "string", donc on ne peut pas faire de calcul avec.
//
// let priceHT = promptForNumber('Veuillez saisir un prix hors taxe valide');
// let priceVAT = computeVAT(priceHT);
// console.log("Le prix avec la TVA vaut : " + priceVAT);
//
//
//
// let age = promptForNumber('Quel age as tu ?');
// if (age < 10) { alert('trop petit !!!')}

//----------------------------------------------------------------------------------------------------------------------
// Exercice : Le juste Prix
// L'ordinateur décide un nombre aleatoire, puis affiche des prompt tant que l'utilsateur ne devine pas ce nombre
// Donner des indices "c'est plus" ou "c'est moins"
//----------------------------------------------------------------------------------------------------------------------



//----------------------------------------------------------------------------------------------------------------------
// Exercice : coder un contrôleur de force de mot de passe (à vous de décider comment il pourrait fonctionner)
//----------------------------------------------------------------------------------------------------------------------