//constructeur de position
var ConstructOfPosition = function(px, py, tx, ty, aO, it, eW, cC){
  this.positionX = px;
  this.positionY = py;
  this.tailleX = tx;
  this.tailleY = ty;
  this.actionObjet = aO || {chest : false, lift : false};//objet interactif et son type d'interaction
  this.item = it || 0;
  this.exitWay = eW || {boul : false};//sens de la sortie ou undefined quand ce n'est pas une sortie
  this.chestContent = cC || undefined;//fonction contenu du coffre
};
