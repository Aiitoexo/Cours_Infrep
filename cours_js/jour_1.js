1 + 1;

2 + 1;

"bon" + "jour";

console.log("Bonjour");

// Exerccice 1

let a = 3;
let b = 4;
let c = "Le résultat vaut : ";

let d = a + b;

console.log(c + d);

console.log("Le résultat vaut : " + (3 + 4));

// Déclarer une Variable

var oldSchool = 12; // "vieux JS"
let newSchool = 12; // Lire "let x be 12"

// Affecter une valeur a une variable existante

x = 10;
console.log("X vaut " + x) // = console.log("X vaut" + 10)
x = 30;

// Exercice 2 : Calculer 3 + 3, puis calculer 4 + 2 et
// enfin multiplier le résultat des deux additions
// puis afficher le résultat

let a = 3 + 3;
let b = 4 + 2;
let c = a * b;

console.log(c); // || console.log(a * b);

// Exercice 3 : Creer une variable, et lui donner une valeur numerique.
// Ajouter 1 a ce nombre, et stocker le resultat dans la meme variable

let a;
a = 2
a = a + 1  // || a++

console.log(a)

// Exerice 4 : Créer un programme qui permute la valeur
// de deux variables a et b.
// let a = 5;
// let b = 3;
// A la fin, a doit avoir la valeur 3 et
// b doit avoir la valeur 5
// (Plusieurs solutions possibles !)

let a = 5;
let b = 3;
let c = a;

a = b;
b = c;

console.log(a, b);

// Autre solution

let d = 5;
let e = 3;

d = d + e;// 8
e = d - e;// 5
d = d - e;// 3

// Exercice prompt

let name = prompt("Quel est ton prénom ?");

let lastName = prompt("Quel est ton nom ?");

alert("Bienvenue " + name + " " + lastName)

// Exercice TVA

const TVA = 0.2;

let resultPrice = prompt("Rentrer un prix hors taxe en euro.");
let priceHT = parseFloat(resultPrice);

let TTC = (priceHT + (priceHT * TVA)).toFixed(2);

alert("Le prix TTC est de " + TTC + "€");

// Exercice Temperature

let resultCelcius = prompt("Rentrer une température en Celcius.");
let celcius = parseFloat(resultCelcius);

let fahrenheit = ((celcius * 9 / 5) + 32).toFixed(0);

alert("La température en fahrenheit de " + celcius + "°C est de " + fahrenheit + "°F");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// typeOf = Donne le type de variable ++ ////