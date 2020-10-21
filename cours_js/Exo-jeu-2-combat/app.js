//////////////////////////////////////// TP Guidé : Jeu de combat dans la console /////////////////////////////////////

let fireGod = {
    stamina: 100,
    strength: 20,
    attack: function (target) {
        let atkRandom = random100()
        if (typeof target !== 'object' || target === null) {
            console.warn("Ce n'est pas une cible")
        }

        if (target === this) {
            console.warn("On ne peut pas s'attaquer")
        }

        if (this.stamina > 0 && target.stamina > 0) {
            if (atkRandom <= 50) {
                target.stamina -= 20
            } else {
                //rater
            }
        }
    }
}

let thunderGod = {
    stamina: 100,
    strength: 10,
    attack: function (target) {

        targer.stamina -= 10
    }
}