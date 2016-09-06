'use stric';
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
window.addEventListener('DOMContentLoaded', function(){
  myBackground.divJeux = document.getElementById('view');
  myBackground.zone = document.getElementById('background');
  myBackground.creatImage(0);
  // div de la limite du personnage pour les collision
  linkAction.divPersonnage = document.getElementById('limitePersonnage').style;
	linkAction.divPersonnage.top = '34px';
  linkAction.divPersonnage.left = '73px';
  linkAction.divPersonnage.width = '14px';
  linkAction.divPersonnage.height = '16px';
  // image visible du personnage
  linkAction.persoShow = document.getElementById('show').style;
  // positionnement du sprite
  linkAction.linkSprite = document.getElementById('spriteLink');
  linkEtat.actionOff.sprite = linkAction.spriteLink[1][2][0][3];
  // div des objet
  myBackground.item = document.getElementById('objet').style;
  // image des objet
  myBackground.spriteObjet = document.getElementById('spriteObjet').style;
  // div de l'ombre
  myBackground.shadow = document.getElementById('shadow').style;
  // image de l'ombre
  document.getElementById('spriteShadow').style.top = '-22px';
  document.getElementById('spriteShadow').style.left = '-1081px';
  // div des caractéristique
  linkEtat.carac = document.getElementById('carac').style;
  //création des caractéistique affiché
  linkAction.creatCarac();
  linkAction.menu();

  //mouvement du personnage
  window.requestAnimationFrame(function(timestamp){linkAction.mouvement(timestamp)});
  //touche appuyé
  window.addEventListener('keydown', function(event){
    event.preventDefault();
    var keyDown = event.keyCode;
    switch(keyDown){
      case 90://Z
      if(linkEtat.item.sword){//active la touche qu'une fois l'épée trouvé
        linkEtat.touche.keyZ = true;
      }
      break;
      case 65://A
      linkEtat.touche.keyA = true;
      break;
      case 37://left
      linkEtat.touche.left = true;
      break;
      case 38://top
      linkEtat.touche.top = true;
      break;
      case 39://right
      linkEtat.touche.right = true;
      break;
      case 40://bottom
      linkEtat.touche.bottom = true;
      break;
      default:
    }
  });
  //touche relaché
  window.addEventListener('keyup', function(event){
    var keyUp = event.keyCode;
    switch (keyUp) {
      case 90://Z
      linkEtat.touche.keyZ = false;
      linkEtat.touche.keyZPlusObstacle = false;
      linkEtat.touche.keyZPlusMouvement = false;
      break;
      case 65://A
      linkEtat.touche.keyA = false;
      linkEtat.touche.keyAPlusObstacle = false;
      break;
      case 37://left
      linkEtat.touche.left = false;
      break;
      case 38://top
      linkEtat.touche.top = false;
      break;
      case 39://right
      linkEtat.touche.right = false;
      break;
      case 40://bottom
      linkEtat.touche.bottom = false;
      break;
      default:
    }
  });
});
