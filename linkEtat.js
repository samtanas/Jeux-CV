'use strict';
//personage
var linkEtat = {
  item : {
    shield : 1, //html
    sword : 1, //JS
    blueChainMail : 0, //
    redChainMail : 0, //
    bow : 0, //Meteor
    bomb : 0,
    glove : 1,
    heart4 : 0,
    heart5 : 0
  },
  key : {
    mongoDB : 0,
    express : 0,
    angular : 0,
    nodeJS : 0
  },
  life : [4, 4, 4, 0, 0],
  //bouleen des touche appuyé
  touche : {
    direction : 'E',
    directionSword : 'E',
    keyZ : 0,
    keyZPlusObstacle : 0,
    keyA : 0,
    keyAPlusObstacle : 0,
    keyAPlusObjet : 0,
    left : 0,
    right : 0,
    top : 0,
    bottom : 0
  },
  timeObstacle : {//obstacle rencontré dans une direction
    actionObjet : 0,
    supSecondeLeft : 0,
    leftStart : 0,
    supSecondeRight : 0,
    rightStart : 0,
    supSecondeTop : 0,
    topStart : 0,
    supSecondeBottom : 0,
    bottomStart : 0
  },
  collision : {//valeur au moment d'une collision
    position : 0,//indice de l'élément concerné
    collisionBooleen : 0,//collision
    direction : 0//sens au moment de la collision
  },
  collisionEnemi : {//valeur au moment d'une collision
    position : 0,//indice de l'élément concerné
    collisionBooleen : 0,//collision
    direction : 0,//sens au moment de la collision ennemi
    lastFire : 0,//temps depuis le dernier coup reçu
    hit : 1 //coup reçu actif
  },
  spriteMouvement : 0,
  tailleSprite : 0,//calcul quand le scaleX et de -1
  slachSword : 0,
  axieSword : null,
  sensSword : null,
  actionOff : { //sans action
    sprite : null,//position du sprite
  },
  spritePosition : {//valeur quand on appuy sur une touche
    position : 0, //valeur du sprite par defaut
    color : 1,//couleur de la tenu
    direction : 2,//direction de link
    action : 0 //type d'action
  },
  //valeur du sens du mouvement au moment du lancé de l'objet
  throwObjet : {
    directionObjet : null,
    collisionObjet : null,
    direction : null
  },
  //valeur du sens du mouvement au moment du lancé de l'objet
  throwShadow : {
    direction : null,
  },
  //valeur de comparaison
  throwObjetVerify : {
    directionObjet : null,
    collisionObjet : null,
    direction : null
  },
  //valeur de comparaison
  throwShadowVerify : {
    direction : null,
  },
  sauvPositionSprite : {
    positionX : 0,//position en left
    positionY : 0,//position en top
    tailleX : 0,//largeur
    tailleY : 0,//hauteur
  },
  chestOpen : [[],[],[],[],[],[],[],[],[],[],[]]//liste des coffre ouvert
};
