# TP Guidé : Jeu de combat dans la console

## Objectifs : 

- révision des éléments de bases de la programmation (conditions, boucles, variables et fonctions, ...)
- conception d'algorithmes
- 

## Fonctionnalités à développer

- Au moins deux types de personnages (ex: Guerrier, Vampire, ... )
  - Chaque type de perso doit avoir au moins deux actions (ex: une attaque et une defense)
  - Un personnage doit avoir un nom
  - Un personnage doit avoir une réserve de points de vie

- Le joueur doit pouvoir choisir son type de personnage
- L'ordinateur choisi un personnage aléatoire
- Le joueur doit pouvoir choisir son pseudo

- A chaque tour : 
  - le joueur doit pouvoir choisir l'action à effectuer
  - l'ordinateur choisi une action de la manière la plus intelligente possible

- Le jeu s'arrête quand un des deux personages "meurt"


 ## Type de persos :
  
 ### Dieu de feu 
    - Vie : 100
     - Attaque : envoyer une boule de feu
             - Blesse la cible de 20
             - 50% de reussite
             - La cible prend feu et brule de 5points pendant 3 tours
     
 ### Dieu de foudre  
    - Vie : 100
    - Attaque : envoyer un éclair
        - Blesse la cible de 10
        - 80% de reussite
        - Si trois réussi d'affilé, le 4eme blesse de 20
    - 
    
    ### Dieu du vin ! 
        - Vie : 100
         - Attaque : 