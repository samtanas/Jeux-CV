'use stric';
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
window.addEventListener('DOMContentLoaded', function(){
  background.divJeux = document.getElementById('view');
  background.zone = document.getElementById('background');
  background.creatImage(0);
  background.creatImage2();
  linkAction.divPersonnage = document.getElementById('limitePersonnage').style; // div de déplacement du personnage
  linkAction.divPersonnage.top = '34px';
  linkAction.divPersonnage.left = '73px';
  linkAction.divPersonnage.width = '14px';
  linkAction.divPersonnage.height = '16px';
  linkAction.persoShow = document.getElementById('show').style; // image visible
  linkAction.persoShow['z-index'] = 2; // image visible
  linkAction.linkSprite = document.getElementById('spriteLink'); // positionnement du sprite
  linkEtat.actionOff.sprite = linkAction.spriteLink[1][2][0][3];
  background.item = document.getElementById('objet').style; // div des objet
  background.item['z-index'] = -1; // invisible
  background.item.height = '16px';
  background.item.width = '16px';
  background.skill = document.getElementById('skill').style; // div des objet
  background.skill['z-index'] = -1; // invisible
  background.skill.height = '16px';
  background.skill.width = '16px';
  background.spriteObjet = document.getElementById('spriteObjet').style; // div des objet
  background.spriteObjet['z-index'] = -1; // invisible

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
