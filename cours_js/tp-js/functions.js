/**
 * Determines if the number is even
 * @return {boolean} - true if the number is even
 * @param answer
 */
// function isEven(nb) {
//     return nb % 2 === 0;
// }
//
//
// function getWelcomeMessage(firstName, lastName, lang) {
//
//     if (typeof firstName === "string") {
//         firstName = firstName.toUpperCase();
//         if (lang === 'fr') {
//             return "Salut " + firstName + ' ' + lastName + " :)";
//         } else {
//             return "Welcome " + firstName + ' ' + lastName + " :)";
//         }
//     }
//
//     return "Salut :)"; // default message
// }
//
// function validateFirstName(firstName) {
//     // ...
// }

///////////////////////////////////////////////////// FUNCTION ////////////////////////////////////////////////////////

function noSpace(answer) {
    if (answer !== "" && answer === answer.trim()) {
        return true
    }
    return false
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function noNumber(answer) {
    let answerVerif = Number(answer)
    if (Number.isNaN(answerVerif)) {
        return true
    }
    return false
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function noSpecialCaract(answer) {
    let regExp = RegExp("[a-zA-Z0-9]")
    if (regExp.test(answer)) {
        return true
    }
    return false
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function maxString(answer) {
    if (answer.length <= 6) {
        return true
    }
    return false
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function minString(answer) {
    if (answer.length > 3) {
        return true
    }
    return false
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function setNumber(answer) {
    while (isNaN(answer)) {
        answer = prompt("Recommencer ce n'est pas un chiffre")
    }
    return answer
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// une fonction qui vérifie qu'une chaine n'est pas vide (vide ou que des espaces)

// let a = prompt("Écrivez et sans espace")
// if (noSpace(a)) {
//     console.log("Bien joué !")
// } else {
//     console.log("Perdu")
// }

// une fonction qui vérifie qu'une chaine ne contient pas de nombre

// let b = prompt("N'écrivez pas de chiffre")
// if (noNumber(b)) {
//     console.log("Bien joué !")
// } else {
//     console.log("Perdu")
// }

// une fonction qui vérifie qu'une chaine ne contient pas de caractères speciaux (ex: @ & #)

// let c = prompt("N'écrivez pas de caractères spéciaux")
// if (noSpecialCaract(c)) {
//     console.log("Bien joué !")
// } else {
//     console.log("Perdu")
// }

// une fonction qui vérifie qu'une chaine n'est pas trop longue

// let d = prompt("Rentrez moins de 6 caractères")
// if (maxString(d)) {
//     console.log("Bien joué !")
// } else {
//     console.log("Perdu")
// }

// une fonction qui vérifie qu'une chaine n'est pas trop courte

// let f = prompt("Rentrez moins de 6 caractères")
// if (minString(f)) {
//     console.log("Bien joué !")
// } else {
//     console.log("Perdu")
// }

// une fonction qui demande un nombre tant qu'on donne pas un nombre
//
// let g = prompt("Rentrez un chiffre")
// g = Number(g)
// if (setNumber(g)) {
//     console.log("Bien joué !")
// }