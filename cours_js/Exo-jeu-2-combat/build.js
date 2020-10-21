let FireGod = {
    stamina: 100,
    strength: 20,
    isAlive: function () {
        if (this.stamina > 0) {
            return true;
        }
        return false;
    },
    isDead: function () {
        return !this.isAlive();
    },
    attack: function (target) {
        let atkRandom = random100()

        if (typeof target !== 'object' || target === null) {
            console.warn("Ce n'est pas une cible")
        }

        if (!this.isAlive()) {
            console.warn("Impossible d'attaquer quand on est mort !")
            return; // early return
        }

        if (!target.isAlive()) {
            console.warn("Impossible d'attaquer un mort !")
            return; // early return
        }

        if (target === this) {
            console.warn("On ne peut pas s'attaquer")
        }

        if (this.stamina > 0 && target.stamina > 0) {
            if (atkRandom <= 50) {
                target.stamina -= 20
                console.log("Attaque réussi l'adversaire a perdu 20 en stamina")
            } else {
                console.log("Attaque échouer")
            }
        }
    }
}


///////////////////////////////////////////////////////////////////////////////////////


let ThunderGod = {
    stamina: 100,
    strength: 10,
    isAlive: function () {
        if (this.stamina > 0) {
            return true;
        }
        return false;
    },
    isDead: function () {
        return !this.isAlive();
    },
    attack: function (target) {
        let atkRandom = random100()
        if (typeof target !== 'object' || target === null) {
            console.warn("Ce n'est pas une cible")
        }

        if (target === this) {
            console.warn("On ne peut pas s'attaquer")
        }

        if (!this.isAlive()) {
            console.warn("Impossible d'attaquer quand on est mort !")
            return; // early return
        }

        if (!target.isAlive()) {
            console.warn("Impossible d'attaquer un mort !")
            return; // early return
        }

        if (this.stamina > 0 && target.stamina > 0) {
            if (atkRandom <= 80) {
                target.stamina -= 10
                console.log("Attaque reussi, " + target + " a perdu 10 en stamina")
            } else {
                console.log("Attaque échouer")
            }
        }
    }
}