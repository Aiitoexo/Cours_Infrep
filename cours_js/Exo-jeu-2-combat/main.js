//////////////////////////////////////// TP Guidé : Jeu de combat dans la console /////////////////////////////////////

let player1 = Object.create(FireGod);
let player2 = Object.create(ThunderGod);

while(player1.isAlive() && player2.isAlive()) {

    // TODO: le player1 est avantagé car il attaque tj en premier

    // le joueur 1 attaque le joueur 2 ...
    player1.attack(player2);
    // ... le joueur 2 riposte
    player2.attack(player1);
}

// si on arrive la, au moins un des deux joueurs est mort !

if (player1.isAlive() && player2.isDead()) {
    console.log("WINNER player 1")
} else if (player2.isAlive() && player1.isDead()) {
    console.log("WINNER player 2")
} else {
    console.log('Égalité !')
}