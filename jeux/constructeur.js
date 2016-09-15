//constructeur de position

var cP = (function(){
  // déclaration de fonction constructeur
  var ConstructOfPosition = function(positionX, positionY, tailleX, tailleY, argument){
    this.positionX = positionX;
    this.positionY = positionY;
    this.tailleX = tailleX;
    this.tailleY = tailleY;
    this.argument = argument || {};
    var exist = true;
    this.existance = function(){ //getter => permet de récupérer la propriété "privée" exist
        return exist;
    };
    this.modif = function(ex){ //setter => permet de définir le contenu de la propriété "privée" exist
      exist = ex;
    }
  };

  return function(px, py, tx, ty, arg){
    // création d'un nouvel objet avec la fonction constructeur
    return new ConstructOfPosition(px, py, tx, ty, arg);
  }
})()

//constructeur d'énnemis
var cE0 = (function(){
  var ConstructOfEnemi = function(type, sauv, path){
    this.type = type;
    //valeur de la position du spriteObjet
    this.animation = 0;
    this.life = 2;
    this.damage = 2;
    this.hit = 1;
    //temps depuis le denier coup reçu
    this.lastFire = 0;
    //position initiale
    this.sauv = sauv;
    //sens, axe et direction
    this.way = {
      axies : 'top',
      sens : 0,
      direction : 'N',
    };
    //ligne de vue
    this.visibly = 'N';
    //si link est visible
    this.aggro = 0;
    this.lastAggro = 0;
    //chemin de ronde
    this.path = path;
    this.collisionLink = {
      collisionBooleen : 1,
      direction : null,
    };
  };

  return function(type, sauv, path){
    // création d'un nouvel objet avec la fonction constructeur
    return new ConstructOfEnemi (type, sauv, path);
  }
})()
//constructeur d'énnemis
var cE1 = (function(){
  var ConstructOfEnemi = function(type, sauv, path){
    this.type = type;
    //valeur de la position du spriteObjet
    this.animation = {
      direction:3,
      position:0
    };
    this.life = 2;
    this.damage = 4;
    this.hit = 1;
    //temps depuis le denier coup reçu
    this.lastFire = 0;
    //position initiale
    this.sauv = sauv;
    //sens, axe et direction
    this.way = {
      axies : 'top',
      sens : 0,
      direction : 'N',
    };
    //ligne de vue
    this.visibly = 'N';
    //si link est visible
    this.aggro = 0;
    this.lastAggro = 0;
    //temps de ronde
    this.delay = 0;
    //chemin de ronde
    this.path = path;
    this.collisionLink = {
      collisionBooleen : 1,
      direction : null,
    };
  };

  return function(type, sauv, path){
    // création d'un nouvel objet avec la fonction constructeur
    return new ConstructOfEnemi (type, sauv, path);
  }
})()
