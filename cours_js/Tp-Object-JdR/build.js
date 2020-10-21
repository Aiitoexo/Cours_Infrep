let warrior = {
    weapon: null,
    shield: null,
    armor: null,
    stamina: 200,
    strength: 8,
    agility: 2,
    intellect: 1,
    critical: function () {
        return 1.5 * warrior.agility
    },
    dodge: function () {
        let chanceDodge = Math.floor((Math.random() * 2))
        if (chanceDodge === 1) {
            //todo: rajouter calcul AGI ESQ => + STA
            return ""// retourne true esquive reussie;
        } else {
            return ""// retourne false esquive echouer
        }
        // calcul taux d'esquive  suivant agility perso
    },
    parade: function () {
        let paradeShield = Math.floor((Math.random() * 2))
        let paradeWeapon = Math.floor((Math.random() * 3))
        // calcul taux de parade suivant arme ou shield equiper
    },
    ultimateSpell: function () {

    },
    spell: {
        // x Spell + stats +  function random spell
    },
    attack: function (target) {
        // spell calcul de degat
    },
    defense: function () {
        // random parade dodge + calcul de DEF
    },
    equipWeapon: function (weapon) {
        this.weapon = weapon
        // arme ou shield equiper
    },
    equipArmor: function (armor) {
        this.armor = armor
        // armure equiper
    }
}

let assassin = {
    weapon: null,
    shield: null,
    armor: null,
    stamina: 120,
    strength: 6,
    agility: 9,
    intellect: 3,
    critical: function () {
        return 1.5 * assassin.agility
    },
    dodge: function () {
        // calcul taux d'esquive  suivant agility perso
    },
    parade: function () {
        // calcul taux de parade suivant arme ou shield equiper
    },
    ultimateSpell: function () {

    },
    spell: {
        // x Spell + stats +  function random spell
    },
    attack: function (target) {
        // spell calcul de degat
    },
    defense: function () {
        // random parade dodge + calcul de DEF
    },
    equipWeapon: function (weapon) {
        this.weapon = weapon
        // arme ou shield equiper
    },
    equipArmor: function (armor) {
        this.armor = armor
        // armure equiper
    }
}

let mage = {
    weapon: null,
    shield: null,
    armor: null,
    stamina: 100,
    strength: 2,
    agility: 6,
    intellect: 8,
    critical: function () {
        return 1.5 * mage.agility
    },
    dodge: function () {
        // calcul taux d'esquive  suivant agility perso
    },
    parade: function () {
        // calcul taux de parade suivant arme ou shield equiper
    },
    ultimateSpell: function () {

    },
    spell: {
        // x Spell + stats +  function random spell
    },
    attack: function (target) {
        // spell calcul de degat
    },
    defense: function () {
        // random parade dodge + calcul de DEF
    },
    equipWeapon: function (weapon) {
        this.weapon = weapon
        // arme ou shield equiper
    },
    equipArmor: function (armor) {
        this.armor = armor
        // armure equiper
    }
}

let warlock = {
    weapon: null,
    shield: null,
    armor: null,
    stamina: 100,
    strength: 2,
    agility: 6,
    intellect: 8,
    critical: function () {
        return 1.5 * warlock.agility
    },
    dodge: function () {
        // calcul taux d'esquive  suivant agility perso
    },
    parade: function () {
        // calcul taux de parade suivant arme ou shield equiper
    },
    ultimateSpell: function () {

    },
    spell: {
        // x Spell + stats +  function random spell
    },
    attack: function (target) {
        // spell calcul de degat
    },
    defense: function () {
        // random parade dodge + calcul de DEF
    },
    equipWeapon: function (weapon) {
        this.weapon = weapon
        // arme ou shield equiper
    },
    equipArmor: function (armor) {
        this.armor = armor
        // armure equiper
    }
}

let hunter = {
    weapon: null,
    shield: null,
    armor: null,
    stamina: 150,
    strength: 7,
    agility: 7,
    intellect: 2,
    critical: function () {
        return 1.5 * hunter.agility
    },
    dodge: function () {
        // calcul taux d'esquive  suivant agility perso
    },
    parade: function () {
        // calcul taux de parade suivant arme ou shield equiper
    },
    ultimateSpell: function () {

    },
    spell: {
        // x Spell + stats +  function random spell
    },
    attack: function (target) {
        // spell calcul de degat
    },
    defense: function () {
        // random parade dodge + calcul de DEF
    },
    equipWeapon: function (weapon) {
        this.weapon = weapon
        // arme ou shield equiper
    },
    equipArmor: function (armor) {
        this.armor = armor
        // armure equiper
    }
}

