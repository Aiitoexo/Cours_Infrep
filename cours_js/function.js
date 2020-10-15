// function isPositive(number) {
//     let numberSet = number
//     let numberSetValid = Number(numberSet)
//
//   if (numberSetValid >= 0 && numberSet !== null && numberSet !== "" && !Number(isNaN(numberSet))) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// let answer = prompt("Rentrez un chiffre positif")
// if (isPositive(answer)) {
//     console.log(answer + " est positif")
// } else {
//     console.log(answer + "Ce n'est pas un chiffre positif")
// }


// function numberPeer(numberSet) {
//     let number = Number(numberSet)
//
//     if (number % 2 === 0 && numberSet !== null && numberSet !== "" && !Number(isNaN(numberSet))) {
//         return true
//     } else {
//         return  false
//     }
// }
//
// let answer = prompt("Rentrer un chiffre paire")
// if (numberPeer(answer)) {
//     console.log("Le chiffre est pair")
// } else {
//     console.log("Ce nest pas un chiffre pair")
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function numberOod(numberSet) {
//     let number = Number(numberSet)
//
//     if (number % 2 !== 0 && numberSet !== null && numberSet !== "" && !Number(isNaN(numberSet))) {
//         return true
//     } else {
//         return  false
//     }
// }
//
// let answer = prompt("Rentrer un chiffre impaire")
// if (numberOod(answer)) {
//     console.log("Le chiffre est impair")
// } else {
//     console.log("Ce nest pas un chiffre impair")
// }
///////////////////////////////////////////////// CORRECTION //////////////////////////////////////////////////////////
// function isEven(nb) {
//     if (nb % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// function isEven(nb) {
//     if (nb % 2 === 0) {
//         // "early return", une astuce pour couper l'execution de la fonction
//         // (ici, ca rend le "else" superflu)
//         return true;
//     }
//
//     return false;
// }
//
// function isEven(nb) {
//     return nb % 2 === 0;
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function getSquare(number) {
//     let numberSet = Number(number)
//     numberSet = numberSet * numberSet
//     return numberSet
// }
//
// let answer = prompt("Rentrer un chiffre")
//
// console.log(getSquare(answer))
///////////////////////////////////////////////// CORRECTION //////////////////////////////////////////////////////////
// function isOdd(nb) {
//     return !isEven(nb);
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// function getSquare(number) {
//     if (notNumber(number)) {
//         number = number * number
//         return number
//     } else {
//         return false
//     }
// }
//
// let answer = prompt("Rentrer un chiffre")
// if (getSquare(answer)) {
//     console.log("Le carre de " + answer + " est " + getSquare(answer))
// } else {
//     console.log("Ce nest pas un chiffre")
// }

///////////////////////////////////////////////// CORRECTION //////////////////////////////////////////////////////////
// function square(nb) {
//
//     if (typeof nb !== "number") {
//         return null; // early return !
//     }
//
//     let result = nb * nb;
//     return result;
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function getAge (age) {
//     let isAge = age
//     if (isAge >= 1950 && isAge < 2020) {
//         return 2020 - isAge
//     }
//     return false
// }
//
// let answer = prompt("Rentrer une date entre 1950 et 2020")
// if (getAge(answer)) {
//     console.log("l'age de la personne est de " + getAge(answer) + " ans")
// } else {
//     console.log("Ce nest pas une date")
// }

let answer = prompt("Rentrer une date entre 1950 et 2020")

if (getAge(answer)) {
    console.log("l'age de la personne est de " + getAge(answer) + " ans")
} else {
    console.log("Ce nest pas une date")
}

function getAge(age) {

    let isAge = Number(age);

    if (isAge >= 1950 && isAge < 2020) {
        return 2020 - isAge
    }
    return false
}

///////////////////////////////////////////////// FUNCTION NOT NUMBER /////////////////////////////////////////////////
function isNumber(number) {
    let numberSet = Number(number)
    if (numberSet !== 0 && numberSet !== null && numberSet !== "" && !Number.isNaN(numberSet)) {
        return true
    }
    return false
}
///////////////////////////////////////////////// FUNCTION NOT NUMBER /////////////////////////////////////////////////