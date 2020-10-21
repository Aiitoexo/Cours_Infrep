function random100 () {
    return Math.ceil((Math.random() * 100))
}

function validateName(name) {
    if (
        isString(name) &&
        !isEmpty(name)
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

function isEmpty(string) {
    let clean = string.trim();
    if (clean === "") {
        return true;
    }
    return false;
}

function launchGame() {
    let currentRound = 1;
    while(player1.isAlive() && player2.isAlive()) {
        // TODO: le player1 est avantagé car il attaque tj en premier
        console.log("_____________________________________________________________________________")
        console.log("Round " + currentRound)
        console.log("_____________________________________________________________________________")
        player1.attack(player2);
        player2.attack(player1);
        currentRound++
    }


    if (player1.isAlive() && player2.isDead()) {
        console.log("WINNER " + player1.name)
    } else if (player2.isAlive() && player1.isDead()) {
        console.log("WINNER " + player1.name)
    } else {
        console.log('Égalité !')
    }
}