// //////////////////////////////////////////////////////////////////
// let number1 = 0 ;
//
// while (number1 <= 10) {
//     console.log(number1)
//     number1++
// }
// //////////////////////////////////////////////////////////////////
// let number;
//
// for (number = 0; number <= 10; number++) {
//     console.log(number);
// }
// //////////////////////////////////////////////////////////////////
// for (let i = 50; i <= 100; i++){
//     console.log(i)
// }
// //////////////////////////////////////////////////////////////////
// let number3 = 20;
//
// while (number3 >= 0) {
//     console.log(number3)
//     number3--
// }
////////////////////////////////////////////////// EXERCICE MANEGE ////////////////////////////////////////////////////

// let round;
//
// round = prompt("Ecriver le nombres de tours souhaitez")
// round = Number(round)
//
// while (round <= 10) {
//     console.log(round + " tours")
//     round++
// }

/////////////////////////////////////////////////// CORRECTION ////////////////////////////////////////////////////////

// let nbToursDemande = prompt("Combien de tours voulez vous faire ?");
//
// if (nbToursDemande !== null) {
//     let tourMax = Number(nbToursDemande);
//
//     if (Number.isNaN(tourMax) || tourMax < 1) {
//         console.log("Merci d'entrer un nombre plus grand que 1");
//     } else {
//         for (let tourEnCours = 1; tourEnCours <= tourMax; tourEnCours++) {
//             console.log("Tour n° " + tourEnCours);
//         }
//     }
// }

//////////////////////////////////////////// EXERCICE CONTROLE SAISI //////////////////////////////////////////////////

// let number = prompt("Saisissez un chiffre inférieur ou égal a 100")
// number = Number(number);
//
// while (number > 100 || Number(isNaN(number))) {
//     number = prompt("Saisissez un chiffre inférieur ou égal a 100")
// }
//
// console.log("Le chiffre " + number + " est bien inférieur ou égal a 100")

/////////////////////////////////////////////////// CORRECTION ////////////////////////////////////////////////////////

// let answer = -1; // valeur initiale invalide de sorte a déclencher "artificiellement" le premier tour de boucle
//
// /* tant que la réponse est invalide */
// while(
//     Number.isNaN(answer) ||
//     answer < 0 || answer > 100
//     ) {
//     answer = prompt('Entrer un nombre entre 0 et 100 (inclus)');
//     if (answer !== null) {
//         answer = Number(answer)
//     }
// }
//
// console.log("Le nombre " + answer + " est valide :)");
//
//
// // Implémentation avec un Do ... while
// let answer;
// do {
//     answer = prompt('Entrer un nombre entre 0 et 100 (inclus)');
//     if (answer !== null) {
//         answer = Number(answer)
//     }
// } while (Number.isNaN(answer) || answer < 0 || answer > 100);
//
// console.log("Le nombre " + answer + " est valide :)");

///////////////////////////////////////////// EXERCICE NI OUI NI NON //////////////////////////////////////////////////

// let question = prompt("Saisissez une question ou oui ou non")
// while (question !== "oui" && question !== "non") {
//     question = prompt("Recommencer")
//
// console.log(question)

/////////////////////////////////////////////////// CORRECTION ////////////////////////////////////////////////////////

// let question = prompt("Saisissez une question ou oui ou non")
// while (question !== "oui" && question !== "non") {
//     question = prompt("Recommencer")
// }

///////////////////////////////////////////// EXERCICE MULTIPLICATION /////////////////////////////////////////////////

// let number = prompt("Saisissez un chiffre")
// number = Number(number);
//
// while (number < 2 || number > 9) {
//     number = prompt("Recommencer")
// }
//
// for (let i = 0; i <= 10; i++) {
//     console.log(number + " x " + i + " = " + number * i)
// }


// let number = prompt("Saisissez un chiffre entre 2 et 9")
// number = Number(number);
//
//
// for (let i = 0; i <= 10; i++) {
//     while (number < 2 || number > 9 || Number(isNaN(number))) {
//         number = prompt("Recommencer")
//     }
//     console.log(number + " x " + i + " = " + number * i)
// }

/////////////////////////////////////////////////// CORRECTION ////////////////////////////////////////////////////////

// let nb = prompt('Saisir un nombre');
// if (nb !== null) {
//
//     nb = Number(nb);
//     if (Number.isNaN(nb)) {
//         console.error("Le nombre" + nb + " est invalide");
//     } else {
//
//         console.log('Table de multiplication de ' + nb);
//         for (let i = 1; i <= 10; i++) {
//             let result = i * nb;
//             console.log(i + ' x ' + nb + ' = ' + result)
//         }
//     }
//
// }

/////////////////////////////////////////////// EXERCICE NOMBRE PAIRS /////////////////////////////////////////////////

let numberSet = prompt("rentrer un chiffre pair")
nombre = Number(numberSet)

if (nombre % 2 === 0) {
    for (nombre; nombre <= 20; nombre += 2) {
        console.log(nombre)
    }
} else {
    console.log("Ce nest pas un chiffre pair")
}


let numberSet2 = prompt("rentrer un chiffre pair")
nombre2 = Number(numberSet2)

if (nombre2 % 2 === 0) {
    for (nombre2; nombre2 > 0; nombre2 -= 2) {
        console.log(nombre2)
    }
} else {
    console.log("Ce nest pas un chiffre pair")
}

/////////////////////////////////////////////////// CORRECTION ////////////////////////////////////////////////////////

console.time("IMPLEMENTATION 1")

let start = 0;
let end = 10000;


// let start = prompt('Nombre de départ');
// let end =  prompt('Nombre de fin');
// TODO: valider les données !

for (let i = start; i <= end; i++) {

    // Implémentation 1
    // let half = i / 2;
    // let pair = Number.isInteger(half);

    // Implémentation 2
    let rest = i % 2; // operateur "modulo" (donne le reste de la division entière)
    let isEven = rest === 0; // le nombre est it pair ?

    if (isEven) {
        console.log(i);
    }
}
console.timeEnd("IMPLEMENTATION 1");

// Implémentation (plus performante ? )
// Compter de deux en deux pour faire moins de tours de boucle

console.time("IMPLEMENTATION 2");
start = 0;
end = 10000;

// on s'assure que start est "pair",
// s'il est impair, on lui ajoute 1
if (start % 2 !== 0) {
    start++;
}

for (let i = start; i <= end; i += 2) {
    console.log(i);
}

console.timeEnd("IMPLEMENTATION 2");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let data = 1;
//
// function caca() {
//
//     if (data === 2000000) {
//         return;
//     }
//
//     console.log(data);
//
//     data = data + 1;
//
//     caca();
//
// }
//
// caca();







