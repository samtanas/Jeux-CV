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
