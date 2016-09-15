'use stric';
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
window.addEventListener('DOMContentLoaded', function(){

  //chargement du jeux
  myBackground.loading();

  //touche appuyé
  window.addEventListener('keydown', function(event){
    event.preventDefault();
    var keyDown = event.keyCode;
    switch(keyDown){
      case 69:
      linkEtat.touche.keyE = 1;
      case 13:
      linkEtat.touche.keyEnter = 1;
      break;
      case 90://Z
      if(linkEtat.item.sword){//active la touche qu'une fois l'épée trouvé
        linkEtat.touche.keyZ = 1;
      }
      break;
      case 65://A
      linkEtat.touche.keyA = 1;
      break;
      case 37://left
      linkEtat.touche.left = 1;
      break;
      case 38://top
      linkEtat.touche.top = 1;
      break;
      case 39://right
      linkEtat.touche.right = 1;
      break;
      case 40://bottom
      linkEtat.touche.bottom = 1;
      break;
      default:
    }
  });
  //touche relaché
  window.addEventListener('keyup', function(event){
    var keyUp = event.keyCode;
    switch (keyUp) {
      case 69:
      linkEtat.touche.keyE = 0;
      case 13:
      linkEtat.touche.keyEnter = 0;
      break;
      case 90://Z
      linkEtat.touche.keyZ = 0;
      linkEtat.touche.keyZPlusObstacle = 0;
      linkEtat.touche.keyZPlusMouvement = 0;
      break;
      case 65://A
      linkEtat.touche.keyA = 0;
      linkEtat.touche.keyAPlusObstacle = 0;
      break;
      case 37://left
      linkEtat.touche.left = 0;
      break;
      case 38://top
      linkEtat.touche.top = 0;
      break;
      case 39://right
      linkEtat.touche.right = 0;
      break;
      case 40://bottom
      linkEtat.touche.bottom = 0;
      break;
      default:
    }
  });
});
