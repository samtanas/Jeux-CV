'use strict';
//personage
var linkEtat = {
  item : {
    shield : false, //
    sword : true, //
    blueChainMail : false, //
    redChainMail : false, //
    bow : false, //
    bomb : false //
  },
  key : {
    mongoDB : false,
    express : false,
    angular : false,
    nodeJS : false
  },
  life : 4,
  //bouleen des touche appuyé
  touche : {
    direction : 'E',
    directionSword : 'E',
    keyZ : false,
    keyZPlusObstacle : false,
    keyA : false,
    keyAPlusObstacle : false,
    keyAPlusObjet : false,
    left : false,
    right : false,
    top : false,
    bottom : false
  },
  timeObstacle : {//obstacle rencontré dans une direction
    actionObjet : false,
    supSecondeLeft : false,
    leftStart : 0,
    supSecondeRight : false,
    rightStart : 0,
    supSecondeTop : false,
    topStart : 0,
    supSecondeBottom : false,
    bottomStart : 0
  },
  collision : {//valeur au moment d'une collision
    position : 0,//position de l'élément concerné
    collisionBooleen : true,//collision
    tailleX : 0,//position du sprite
    tailleY : 0,//position du sprite
    direction : 'E'
  },
  spriteMouvement : false,
  tailleSprite : 0,//calcul quand le scaleX et de -1
  slachSword : 0,
  actionOff : { //sans action
    sprite : null,//position du sprite
    action : 0,
    direction : 0,
    position : 0
  },
  spritePosition : {//valeur quand on appuy sur une touche
    position : 0, //valeur du sprite par defaut
    color : 1,//couleur de la tenu
    direction : 2,//direction de link
    action : 0 //type d'action
  }
};
