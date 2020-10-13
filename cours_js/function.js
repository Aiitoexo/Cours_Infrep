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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function notNumber (number) {
    if (number !== 0 && number !== null && number !== "" && !Number(isNaN(number))) {
        return true
    } else {
        return null
    }
}

function getSquare(number) {
    let numberSet = Number(number)
    numberSet = numberSet * numberSet
    return numberSet
}

let answer = prompt("Rentrer un chiffre")

console.log(getSquare(answer))
