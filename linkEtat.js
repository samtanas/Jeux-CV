'use strict';
//personage
var ConstructeurLinkEtat = function (item, key) {
  this.item = item || {
    shield : 0, //html
    sword : 0, //JS
    blueChainMail : 0, //
    redChainMail : 0, //
    bow : 0, //Meteor
    bomb : 0,
    glove : 0,
    heart4 : 0,
    heart5 : 0,
    heart6 : 0
  };
  this.key = key || {
    mongoDB : 0,
    express : 0,
    angular : 0,
    nodeJS : 0
  };
  this.life = [4, 4, 4, 0, 0, 0];
  //bouleen des touche appuyé
  this.touche = {
    direction : 'E',
    directionSword : 'E',
    keyEnter : false,
    keyE : 0,
    keyZ : 0,
    keyZPlusObstacle : 0,
    keyA : 0,
    keyAPlusObstacle : 0,
    keyAPlusObjet : 0,
    left : 0,
    right : 0,
    top : 0,
    bottom : 0
  };
  this.timeObstacle = {//obstacle rencontré dans une direction
    actionObjet : 0,
    supSecondeLeft : 0,
    leftStart : 0,
    supSecondeRight : 0,
    rightStart : 0,
    supSecondeTop : 0,
    topStart : 0,
    supSecondeBottom : 0,
    bottomStart : 0
  };
  this.collision = {//valeur au moment d'une collision
    position : null,//indice de l'élément concerné
    collisionBooleen : 0,//collision
    direction : 0//sens au moment de la collision
  };
  this.collisionEnemi = {//valeur au moment d'une collision
    position : 0,//indice de l'élément concerné
    collisionBooleen : 0,//collision
    direction : 0,//sens au moment de la collision ennemi
    lastFire : 0,//temps depuis le dernier coup reçu
    hit : 1 //coup reçu actif
  };
  this.spriteMouvement = 0;
  this.tailleSprite = 0;//calcul quand le scaleX et de -1
  this.slachSword = 0;
  this.archery = 0;
  this.axieSword = null;
  this.sensSword = null;
  this.axieBow = null;
  this.sensBow = null;
  this.actionOff = { //sans action
    sprite : null,//position du sprite
  };
  this.spritePosition = {//valeur quand on appuy sur une touche
    position : 0, //valeur du sprite par defaut
    color : 1,//couleur de la tenu
    direction : 2,//direction de link
    action : 0 //type d'action
  };
  this.throwObjet = {
    directionObjet : null,
    collisionObjet : null,
    direction : null
  };
  this.throwShadow = {
    direction : null,
  };
  this.sauvPositionSprite = {
    positionX : 0,//position en left
    positionY : 0,//position en top
    tailleX : 0,//largeur
    tailleY : 0,//hauteur
  };
  this.chestOpen = [[],[],[],[],[],[],[],[],[],[],[],[]];//liste des coffre ouvert
  this.counter = 0;
  this.stairs = 0;
  this.counterCompetence = 0;
  this.push = 0;
  this.competence = [];
  this.arrow = 0;
};
