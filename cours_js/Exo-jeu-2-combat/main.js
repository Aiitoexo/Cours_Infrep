//////////////////////////////////////// TP Guidé : Jeu de combat dans la console //////////////////////////////////////

let player1 = Object.create(FireGod);
let player2 = Object.create(ThunderGod);

player1.name = prompt("Saisissez le nom du joueur 1")
player2.name = prompt("Saisissez le nom du joueur 2")

if (validateName(player1.name) && validateName(player2.name)) {
    launchGame();
} else {
    player1.name = "Player 1";
    player2.name = "Player 2";
    launchGame();
}
