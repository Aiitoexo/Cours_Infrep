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
//
// ///////////////////////////////////////////////////// FUNCTION ////////////////////////////////////////////////////////
//
// function isEmpty(string) {
//     let clean = string.trim
//     if (clean === "") {
//         return false
//     }
//     return true
// }
//
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// function noNumber(answer) {
//     let answerVerif = Number(answer)
//     if (Number.isNaN(answerVerif)) {
//         return true
//     }
//     return false
// }
//
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// function noSpecialCaract(answer) {
//     let regExp = RegExp("[a-zA-Z0-9]")
//     if (regExp.test(answer)) {
//         return true
//     }
//     return false
// }
//
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// function maxString(answer) {
//     if (answer.length <= 6) {
//         return true
//     }
//     return false
// }
//
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// function minString(answer) {
//     if (answer.length > 3) {
//         return true
//     }
//     return false
// }

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
let g = prompt("Rentrez un chiffre")
g = Number(g)
if (setNumber(g)) {
    console.log("Bien joué !")
}



//////////6////////////////////////////////////////// CORRECTION ///////////////////////////////////////////////////////

/**
 * Determines if the number is even
 * @param {number} nb
 * @return {boolean} - true if the number is even
 */
function isEven(nb) {
    return nb % 2 === 0;
}

function getWelcomeMessage(firstName, familyName) {

    if (
        validateName(firstName) &&
        validateName(familyName)
    ) {
        return "Salut " + firstName + " " + familyName + " :)";
    } else if (validateName(firstName)) {
        return "Salut " + firstName + " :)";
    } else if (validateName(familyName)) {
        return "Salut mr/mme " + familyName + " :)";
    } else {
        return "Salut :)"; // default message
    }
}

function computeVAT(price) {

    // on force le type "number" pour pouvoir faire des maths
    let priceHT = Number(price);

    return priceHT + priceHT * 20 / 100;
}

/**
 * Determines if a first name is valid or not
 * @param {string} firstName
 * @return {boolean} true if the first name is valid
 */
function validateName(name) {
    if (
        isString(name) &&
        !isEmpty(name) &&
        !includesSpecialChar(name)
    ) {
        return true;
    }

    return false;
}

function isString(thing) {
    if (typeof thing === "string") {
        return true
    }
    return false;
}

// une fonction qui vérifie qu'une chaine n'est pas vide (vide ou que des espaces)
/**
 *
 * @param {string} string
 * @return {boolean} true if the string is empty
 */
function isEmpty(string) {

    let clean = string.trim();
    if (clean === "") {
        return true;
    }

    return false;
}


// une fonction qui vérifie qu'une chaine ne contient pas de nombre

/**
 * Determines if the given string contains at least one digit
 * @param string
 * @return {boolean}
 */
function includesDigit(string) {
    for (let i = 0; i <= 9; i++) {
        if (string.includes(i)) {
            return true;
        }
    }
    return false;
}


/**
 * Determines if the given string contains only digits
 * @param string
 * @return {boolean}
 */
function includesOnlyDigits(string) {

    // on essaye de convertir en type "number"
    let maybeNumber = Number(string);

    // Si on obtient la valeur "NaN", ca veut dire que
    // string ne contenait pas que des nombres
    if (Number.isNaN(maybeNumber)) {
        return false;
    }
    return true;
}

/**
 *
 * @param string
 * @returns true if only digits in string
 */
function includesOnlyDigitsWithLoop(string) {

    // pour chaque lettre de la chaine de caractère
    for (let char of string) {
        // si ce caractère n'est pas "un nombre"
        if (
            char !== "0" &&
            char !== "1" &&
            // ...
            char !== "9" &&
            char !== "-" &&
            char !== "."
        ) {
            return false;
        }
    }

    return true;
}


// une fonction qui vérifie qu'une chaine ne contient pas de caractères speciaux (ex: @ & #)

function includesSpecialChar(string) {

    if (
        string.includes('@') ||
        string.includes('#') ||
        string.includes('&') ||
        string.includes('§') ||
        string.includes('+') ||
        string.includes('/') ||
        string.includes('*') ||
        string.includes('!') ||
        string.includes('?') ||
        string.includes(':') ||
        string.includes(';') ||
        string.includes(',') ||
        string.includes('.')
    ) {
        return true;
    }

    return false;
}



// une fonction qui vérifie qu'une chaine n'est pas trop longue

// une fonction qui vérifie qu'une chaine n'est pas trop courte

/**
 * Determines if the given string is shorter than a limit
 * @param {string} string
 * @param {number} limit
 * @return {boolean}
 */
function isShorterThan(string, limit) {
    return string.length < limit;
}

// une fonction qui demande un nombre tant qu'on donne pas un nombre
function promptForNumber(questionMessage) {
    let nb;

    while (!includesOnlyDigits(nb)) {
        nb = prompt(questionMessage);
    }

    return nb;
}

// un nombre entier aleatoire entre 0 et 10
function dé() {
    return parseInt(Math.random() * 6);
}

// todo: vérifier que le dé équilibré !


// un nombre entier aléatoire entre min et max
function getRandomNumber(min, max) {

}