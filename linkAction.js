'use stric'
var linkAction = {


  // //test des objet dans l'espace.
  // testObstacle : function( mouvementWay /* left ou top */, boul, /* vérifi avec un bouleen si le sens est positif ou négatif */ div,/* div à vérifier */ link,/* bouleen qui vérifi si c'est la div de link ou un ennemis si c'est null */ indice/* indice de l'ennemi */, collision /* vérifi le type de collision */ ){
  //   // valeur de l'objet et de la div dans l'axe oposé au mouvement pour savoir si il es aux dessus ou en dessous
  //   var divPosition; // position de la div
  //   var divSize; /* hauteur ou largeur */
  //   var objectPosition; /* x ou y */
  //   var objectSize; /* hauteur ou l'argeur */
  //
  //   // valeur dans le sens du mouvement
  //   var divSizeSameAxis; // taille de la div dans le sens du mouvement
  //   var objectPositionSameAxis; // taille de la div
  //   var objectSizeSameAxis; /* hauteur ou l'argeur */
  //
  //   //initialisation des valeur
  //   if (mouvementWay == 'left'){
  //     divPosition = 'top';
  //     divSize = 'height';
  //     objectPosition = 'positionY';
  //     objectSize = 'tailleY';
  //     divSizeSameAxis = 'width';
  //     objectPositionSameAxis = 'positionX';
  //     objectSizeSameAxis = 'tailleX';
  //   } else {
  //     divPosition = 'left';
  //     divSize = 'width';
  //     objectPosition = 'positionX';
  //     objectSize = 'tailleX';
  //     divSizeSameAxis = 'height';
  //     objectPositionSameAxis = 'positionY';
  //     objectSizeSameAxis = 'tailleY';
  //   }
  //   var collisionType = collision || myBackground.collisionListe;
  //   //boucle l'ensemble des objet
  //   for (var i=0;collisionType[myBackground.stage][i];i++){
  //     //vérifi que l'objet est toujours présent
  //     if ( collisionType[myBackground.stage][i] && collisionType[myBackground.stage][i].existance() ){
  //       //test si l'objet n'est pas au dessus ou en dessous ou a gauche ou a droite suivant le sens.
  //       if ( !(parseFloat(div[divPosition]) + parseFloat(div[divSize]) <= collisionType[myBackground.stage][i][objectPosition] || parseFloat(div[divPosition]) >=  collisionType[myBackground.stage][i][objectPosition] + collisionType[myBackground.stage][i][objectSize]) ) {
  //         if (boul){
  //           // test si le sens positif du mouvement n'est pas inférieur au premier point d'impact de l'objet ou bien qu'il n'a pas dépassé le bord oposé
  //           if( !( ( parseFloat(div[mouvementWay]) + parseFloat(div[divSizeSameAxis]) < collisionType[myBackground.stage][i][objectPositionSameAxis] ) || ( parseFloat(div[mouvementWay]) >= ( collisionType[myBackground.stage][i][objectPositionSameAxis] + collisionType[myBackground.stage][i][objectSizeSameAxis] ) ) ) )
  //           {
  //             if(link){
  //               if ( collisionType === myBackground.collisionListe ){
  //                 //renvoie l'objet touché
  //                 if ( linkEtat.slachSword == 1 || linkEtat.slachSword == 4 ){
  //                   linkEtat.touche.keyZPlusObstacle = true;
  //                   //numéro de l'objet dans le tableau
  //                   linkEtat.collision.position = i;
  //                 } else {
  //                   //colition avec l'épée chargé
  //                   if ( linkEtat.slachSword == 3 ){
  //                     //annule le coup d'épée
  //                     linkEtat.slachSword = 0;
  //                     //fait disparaitre le scintillement
  //                     myBackground.item['z-index'] = -1;
  //                   } else {
  //                     linkEtat.collision.collisionBooleen = false;
  //                     //numéro de l'objet dans le tableau
  //                     linkEtat.collision.position = i;
  //                   }
  //                 }
  //               } else {
  //                 //vérifi si un coup d'épée est en cour
  //                 if ( linkEtat.slachSword ){
  //                   //diminu la vie de l'ennemi
  //                   myBackground.enemiesStage[myBackground.stage][i].argument.life--;
  //                   myBackground.enemiesStage[myBackground.stage][i].argument.touche = true;
  //                 } else {
  //                   this.touche(myBackground.enemiesStage[myBackground.stage][i].argument.damage);
  //                   linkEtat.touch = true;
  //                 }
  //               }
  //             } else {
  //               if ( link === null ){
  //                 myBackground.enemiesCollision[indice] = true;
  //               } else {
  //                 this.collisionObjet = false;
  //               }
  //             }
  //             // si l'objet n'est pas décalé et le personnage le rencontre retourne false.
  //             return false;
  //           }
  //         } else {
  //           // test si le sens négatif du mouvement est égale au premier point d'impact de l'objet
  //           if( !( ( parseFloat(div[mouvementWay]) > ( collisionType[myBackground.stage][i][objectPositionSameAxis] + collisionType[myBackground.stage][i][objectSizeSameAxis] ) ) || ( parseFloat(div[mouvementWay]) + parseFloat(div[divSizeSameAxis]) <= ( collisionType[myBackground.stage][i][objectPositionSameAxis] ) ) ) ) {
  //             if(link){
  //               if ( collisionType === myBackground.collisionListe ){
  //                 //renvoie l'objet touché
  //                 if ( linkEtat.slachSword == 1 || linkEtat.slachSword == 4 ){
  //                   linkEtat.touche.keyZPlusObstacle = true;
  //                   //numéro de l'objet dans le tableau
  //                   linkEtat.collision.position = i;
  //                 } else {
  //                   //colition avec l'épée chargé
  //                   if ( linkEtat.slachSword == 3 ){
  //                     //annule le coup d'épée
  //                     linkEtat.slachSword = 0;
  //                     //fait disparaitre le scintillement
  //                     myBackground.item['z-index'] = -1;
  //                   } else {
  //                     linkEtat.collision.collisionBooleen = false;
  //                     //numéro de l'objet dans le tableau
  //                     linkEtat.collision.position = i;
  //                   }
  //                 }
  //               } else {
  //                 //vérifi si un coup d'épée est en cour
  //                 if ( linkEtat.slachSword ){
  //                   //diminu la vie de l'ennemi
  //                   myBackground.enemiesStage[myBackground.stage][i].argument.life--;
  //                   myBackground.enemiesStage[myBackground.stage][i].argument.touche = true;
  //                 } else {
  //                   this.touche(myBackground.enemiesStage[myBackground.stage][i].argument.damage);
  //                   linkEtat.touch = true;
  //                 }
  //               }
  //             } else {
  //               if ( link === null ){
  //                 myBackground.enemiesCollision[indice] = true;
  //               } else {
  //                 this.collisionObjet = false;
  //               }
  //             }
  //             // si l'objet est décalé et / ou le personnage ne le rencontre pas retourne false.
  //             return false;
  //           }
  //         }
  //       }
  //     }
  //   }
  //   linkEtat.collision.direction = 0;
  //   //passe la collision à null si il n'y a plus de collision
  //   if (link) linkEtat.collision.position = null;
  //   //si tous les test sont vrai à la fin de la boucle retourne true.
  //   return true;
  // },
  //test des objet dans l'espace.
  testObstacle : function( mouvementWay /* left ou top */, boul, /* vérifi avec un bouleen si le sens est positif ou négatif */ div,/* div de l'élément */ elementAVerifier/* élément a tester */ ){
    // valeur de l'objet et de la div dans l'axe oposé au mouvement pour savoir si il es aux dessus ou en dessous
    var divPosition; // position de la div
    var divSize; /* hauteur ou largeur */
    var objectPosition; /* x ou y */
    var objectSize; /* hauteur ou l'argeur */

    // valeur dans le sens du mouvement
    var divSizeSameAxis; // taille de la div dans le sens du mouvement
    var objectPositionSameAxis; // taille de la div
    var objectSizeSameAxis; /* hauteur ou l'argeur */

    //initialisation des valeur
    if (mouvementWay == 'left'){
      divPosition = 'top';
      divSize = 'height';
      objectPosition = 'positionY';
      objectSize = 'tailleY';
      divSizeSameAxis = 'width';
      objectPositionSameAxis = 'positionX';
      objectSizeSameAxis = 'tailleX';
    } else {
      divPosition = 'left';
      divSize = 'width';
      objectPosition = 'positionX';
      objectSize = 'tailleX';
      divSizeSameAxis = 'height';
      objectPositionSameAxis = 'positionY';
      objectSizeSameAxis = 'tailleY';
    }
      //vérifi que l'objet est toujours présent
      // if ( collisionType[myBackground.stage][i] && collisionType[myBackground.stage][i].existance() ){
        //test si l'objet n'est pas au dessus ou en dessous ou a gauche ou a droite suivant le sens.
        if ( !(parseFloat(div[divPosition]) + parseFloat(div[divSize]) <= elementAVerifier[objectPosition] || parseFloat(div[divPosition]) >=  elementAVerifier[objectPosition] + elementAVerifier[objectSize]) ) {
          if (boul){
            // test si le sens positif du mouvement n'est pas inférieur au premier point d'impact de l'objet ou bien qu'il n'a pas dépassé le bord oposé
            if( !( ( parseFloat(div[mouvementWay]) + parseFloat(div[divSizeSameAxis]) < elementAVerifier[objectPositionSameAxis] ) || ( parseFloat(div[mouvementWay]) >= ( elementAVerifier[objectPositionSameAxis] + elementAVerifier[objectSizeSameAxis] ) ) ) )
            {
              // if(link){
              //   if ( collisionType === myBackground.collisionListe ){
              //     //renvoie l'objet touché
              //     if ( linkEtat.slachSword == 1 || linkEtat.slachSword == 4 ){
              //       linkEtat.touche.keyZPlusObstacle = true;
              //       //numéro de l'objet dans le tableau
              //       linkEtat.collision.position = i;
              //     } else {
              //       //colition avec l'épée chargé
              //       if ( linkEtat.slachSword == 3 ){
              //         //annule le coup d'épée
              //         linkEtat.slachSword = 0;
              //         //fait disparaitre le scintillement
              //         myBackground.item['z-index'] = -1;
              //       } else {
              //         linkEtat.collision.collisionBooleen = false;
              //         //numéro de l'objet dans le tableau
              //         linkEtat.collision.position = i;
              //       }
              //     }
              //   } else {
              //     //vérifi si un coup d'épée est en cour
              //     if ( linkEtat.slachSword ){
              //       //diminu la vie de l'ennemi
              //       myBackground.enemiesStage[myBackground.stage][i].argument.life--;
              //       myBackground.enemiesStage[myBackground.stage][i].argument.touche = true;
              //     } else {
              //       this.touche(myBackground.enemiesStage[myBackground.stage][i].argument.damage);
              //       linkEtat.touch = true;
              //     }
              //   }
              // } else {
              //   if ( link === null ){
              //     myBackground.enemiesCollision[indice] = true;
              //   } else {
              //     this.collisionObjet = false;
              //   }
              // }
              // si l'objet n'est pas décalé et le personnage le rencontre retourne false.
              return false;
            }
          } else {
            // test si le sens négatif du mouvement est égale au premier point d'impact de l'objet
            if( !( ( parseFloat(div[mouvementWay]) > ( elementAVerifier[objectPositionSameAxis] + elementAVerifier[objectSizeSameAxis] ) ) || ( parseFloat(div[mouvementWay]) + parseFloat(div[divSizeSameAxis]) <= ( elementAVerifier[objectPositionSameAxis] ) ) ) ) {
              // if(link){
              //   if ( collisionType === myBackground.collisionListe ){
              //     //renvoie l'objet touché
              //     if ( linkEtat.slachSword == 1 || linkEtat.slachSword == 4 ){
              //       linkEtat.touche.keyZPlusObstacle = true;
              //       //numéro de l'objet dans le tableau
              //       linkEtat.collision.position = i;
              //     } else {
              //       //colition avec l'épée chargé
              //       if ( linkEtat.slachSword == 3 ){
              //         //annule le coup d'épée
              //         linkEtat.slachSword = 0;
              //         //fait disparaitre le scintillement
              //         myBackground.item['z-index'] = -1;
              //       } else {
              //         linkEtat.collision.collisionBooleen = false;
              //         //numéro de l'objet dans le tableau
              //         linkEtat.collision.position = i;
              //       }
              //     }
              //   } else {
              //     //vérifi si un coup d'épée est en cour
              //     if ( linkEtat.slachSword ){
              //       //diminu la vie de l'ennemi
              //       myBackground.enemiesStage[myBackground.stage][i].argument.life--;
              //       myBackground.enemiesStage[myBackground.stage][i].argument.touche = true;
              //     } else {
              //       this.touche(myBackground.enemiesStage[myBackground.stage][i].argument.damage);
              //       linkEtat.touch = true;
              //     }
              //   }
              // } else {
              //   if ( link === null ){
              //     myBackground.enemiesCollision[indice] = true;
              //   } else {
              //     this.collisionObjet = false;
              //   }
              // }
              // si l'objet est décalé et / ou le personnage ne le rencontre pas retourne false.
              return false;
            }
          }
        }
      // }
    // linkEtat.collision.direction = 0;
    // //passe la collision à null si il n'y a plus de collision
    // if (link) linkEtat.collision.position = null;
    //si tous les test sont vrai à la fin retourne true.
    return true;
  },
  touche : function(damage){
    //vérifie la tenu de link pour diminuer les dégats
    if ( linkEtat.redChainMail ) {
      damage = damage / 4;
    } else {
      if ( linkEtat.blueChainMail ) {
        damage = damage / 2;
      }
    }
    if ( damage < 1 ) damage = 1;
    //parcour les coeurs
    for(var i=4;linkEtat.life[i] != undefined;i--){
      //vérifie le coeur touché
      if(linkEtat.life[i] != 0){
        if ( linkEtat.life[i] < damage ){
          damage = damage - linkEtat.life[i];
          linkEtat.life[i] = 0;
        } else {
          linkEtat.life[i] = linkEtat.life[i] - damage;
          damage = 0;
        }
      }
    }
  },
  spriteSelection : function ( temps, spriteAction, defautSprite, direction ){
    //la position est bloqué si l'épée est chargé
    if ( linkEtat.slachSword != 3 ){
      //met la direction du sprite corespondant
      switch (linkEtat.touche.direction) {
        case 'S':
          linkEtat.spritePosition.direction = 0;
          break;
        case 'N':
          linkEtat.spritePosition.direction = 1;
          break;
        case 'E':
        case 'W':
          linkEtat.spritePosition.direction = 2;
          break;
        case 'NW':
        case 'NE':
          linkEtat.spritePosition.direction = 5;
          break;
        case 'SW':
        case 'SE':
          linkEtat.spritePosition.direction = 6;
          break;
      }
    }
    linkEtat.spriteMouvement = true;
    //vérifi si un obstacle est rencontré depuis plus d'une seconde
    if(temps && !linkEtat.touche.keyA && !(linkEtat.collision.position === null)){
      //initialise l'animation du sprite pour pousser
      linkEtat.spritePosition.action = 4;
    } else {
      //initialise l'animation du sprite pour agire
      linkEtat.spritePosition.action = spriteAction;
    }
    //sprite par defaut quand la touche est laché
    linkEtat.actionOff.sprite = defautSprite;
    if( this.spriteLink[linkEtat.spritePosition.color][linkEtat.spritePosition.direction][linkEtat.spritePosition.action][linkEtat.spritePosition.position] ){//vérifi la position du sprite pour incrémenter le compteur
      if( ( linkEtat.touche.direction == 'W' || linkEtat.touche.direction == 'NE' || linkEtat.touche.direction == 'SW' ) && ( linkEtat.slachSword != 3 || linkEtat.directionSword == 'W' ) ){//vérifi le sens pour mettre un sens négatif
        this.linkSprite.style.transform = 'scaleX(-1)';
        linkEtat.tailleSprite = -1111 + this.spriteLink[linkEtat.spritePosition.color][linkEtat.spritePosition.direction][linkEtat.spritePosition.action][linkEtat.spritePosition.position].tailleX;//envoie la dimension en scale -1
      } else {
        this.linkSprite.style.transform = 'scaleX(1)';
        linkEtat.tailleSprite = 0;//envoie la dimension en scale 1
      }

      this.spriteDefaut(this.spriteLink[linkEtat.spritePosition.color][linkEtat.spritePosition.direction][linkEtat.spritePosition.action][linkEtat.spritePosition.position]);//modifi la position du sprite visible

      if ( direction ) {
        linkEtat.spritePosition.position++;//quand une touche de direction est appuyé avence le sprite
      }

    } else {

      if ( !linkEtat.touche.keyA ){ //vérifi que la touche n'est pas enfoncé pour bloque la réinitalisation du compteur de position du sprite
        linkEtat.spritePosition.position = 0;//réinitialise la position du sprite
        if ( linkEtat.touche.keyZ  ){//si la touche Z est encore appuyé alors le chargement commence
          if ( linkEtat.slachSword == 2 ) { //l'épée à fini de charger
            linkEtat.slachSword = 3;//l'épée est chargé
          }
          if ( linkEtat.slachSword == 1 ) {//le coup d'épée est terminé l'épée commence à charger
            linkEtat.slachSword = 2;
            linkEtat.spritePosition.action = 8;//début du chargement de l'épée
          }
        } else {//la position repasse à marcher normalement si la touche Z est laché
          if ( linkEtat.slachSword == 3 ) {//vérifi si l'épée est chargé
            linkEtat.slachSword = 4; // début de l'attaque sécial
          } else {
            linkEtat.slachSword = 0;//le coup d'épée est réinitalisé
          }
        }

      } else {
        linkEtat.spritePosition.position-=2;//décrémente la position du sprite quand la touche a est enfoncé sur un obstacle.
      }
      this.spriteDefaut(this.spriteLink[linkEtat.spritePosition.color][linkEtat.spritePosition.direction][linkEtat.spritePosition.action][linkEtat.spritePosition.position]);
      if( linkEtat.touche.direction == 'W' || linkEtat.touche.direction == 'NE' || linkEtat.touche.direction == 'SW' ){
        this.linkSprite.style.transform = 'scaleX(-1)';
        linkEtat.tailleSprite = -1111 + this.spriteLink[linkEtat.spritePosition.color][linkEtat.spritePosition.direction][linkEtat.spritePosition.action][linkEtat.spritePosition.position].tailleX;//envoie la dimension en scale -1
      } else {
        this.linkSprite.style.transform = 'scaleX(1)';
        linkEtat.tailleSprite = 0;//envoie la dimension en scale 1
      }
    }
  },
  walk : 0,//valeur de marche
  defaut : 3,//valeur de la position par defaut
  lastPosition : -1,
  counter : 0,
  //fonction de déplacement de la div
  moving : function(axe/* x ou y */, sens /* positif ou negatif */, div /* element en mouvement */, direction /* direction au moment de l'impact */, indice/* indice du tableau d'ennemi */){
    var deplacement = -1;
    if (sens) deplacement = 1;
    for (var i=0;collisionType[myBackground.stage][i];i++){
      if ( this.testObstacle(axe, sens, div, myBackground.enemiesStage[this.stage][i]) )
    }
    if ( link ) {
      //vérifie si un ennemis est touché par link
        if ( this.testObstacle(axe, sens, div, link, (indice || undefined)) ){
          div[axe] = (parseFloat(div[axe]) + deplacement) + 'px';
        } else {
          return direction;
        }
      } else {
        //si l'épée est chargé déclanche l'attaque au contact de l'ennemis
        if ( linkEtat.slachSword == 3 ) {
          linkEtat.slachSword = 4;
        }
      }
    } else {
      if ( this.testObstacle(axe, sens, div, link, (indice || undefined)) ){
        div[axe] = (parseFloat(div[axe]) + deplacement) + 'px';
      } else {
        return direction;
      }
    }
  },
  //test des touche directionnelle appuyé
  testDirection : function(){
    //les touches autre que direction ne sont pas enfoncé et il n'y a pas d'action lié au obstacle en cour ni de coup d'épée
    if ( !linkEtat.timeObstacle.actionObjet && !linkEtat.touche.keyA && ( linkEtat.slachSword == 3 || linkEtat.slachSword == 0 ) && !linkEtat.glove ){
      //vérifi si on monte ou on decent un escalier
      if ( !this.counter ){
        //déplacement  vers la gauche
        this.temps = 20;
        if( linkEtat.touche.left && !linkEtat.touche.right && !linkEtat.touche.top && !linkEtat.touche.bottom ){
          linkEtat.touche.direction = 'W';
          this.spriteSelection( linkEtat.timeObstacle.supSecondeLeft, this.walk, this.spriteLink[linkEtat.spritePosition.color][2][this.walk][this.defaut], linkEtat.touche.left );
          if( !(linkEtat.collision.direction == 'W' && linkEtat.collision.collisionBooleen) ){
            /* enregistre le sens de la collisition */
            linkEtat.collision.direction = this.moving('left', false, this.divPersonnage, linkEtat.touche.direction, true, linkEtat.collision.collisionBooleen) || linkEtat.collision.direction;
            linkEtat.collision.direction = this.moving('left', false, this.divPersonnage, linkEtat.touche.direction, true, linkEtat.collision.collisionBooleen) || linkEtat.collision.direction;
          }
        } else {
          //vide le compteur de temps quand la touche n'est plus appuyé
          linkEtat.timeObstacle.leftStart = 0;
          //repasse la valeur à false pour marcher de nouveau quand la touche sera enfoncé
          linkEtat.timeObstacle.supSecondeLeft = false;
        }
        //déplacement  vers le haut
        if(!linkEtat.touche.left && !linkEtat.touche.right && linkEtat.touche.top && !linkEtat.touche.bottom ){
          linkEtat.touche.direction = 'N';
          this.spriteSelection( linkEtat.timeObstacle.supSecondeTop, this.walk, this.spriteLink[linkEtat.spritePosition.color][1][this.walk][this.defaut], linkEtat.touche.top );
          if( !(linkEtat.collision.direction == 'N' && linkEtat.collision.collisionBooleen) ){
            linkEtat.collision.direction = this.moving('top', false, this.divPersonnage, linkEtat.touche.direction, true, linkEtat.collision.collisionBooleen) || linkEtat.collision.direction;
            linkEtat.collision.direction = this.moving('top', false, this.divPersonnage, linkEtat.touche.direction, true, linkEtat.collision.collisionBooleen) || linkEtat.collision.direction;
          }
        } else {
          linkEtat.timeObstacle.topStart = 0;
          linkEtat.timeObstacle.supSecondeTop = false;
        }
        //déplacement  vers la droite
        if(!linkEtat.touche.left && linkEtat.touche.right && !linkEtat.touche.top && !linkEtat.touche.bottom ){
          linkEtat.touche.direction = 'E';
          this.spriteSelection( linkEtat.timeObstacle.supSecondeRight, this.walk, this.spriteLink[linkEtat.spritePosition.color][2][this.walk][this.defaut], linkEtat.touche.right );
          if(  !(linkEtat.collision.direction == 'E' && linkEtat.collision.collisionBooleen) ){
            linkEtat.collision.direction = this.moving('left', true, this.divPersonnage, linkEtat.touche.direction, true, linkEtat.collision.collisionBooleen) || linkEtat.collision.direction;
            linkEtat.collision.direction = this.moving('left', true, this.divPersonnage, linkEtat.touche.direction, true, linkEtat.collision.collisionBooleen) || linkEtat.collision.direction;
          }
        } else {
          linkEtat.timeObstacle.rightStart = 0;
          linkEtat.timeObstacle.supSecondeRight = false;
        }
        //déplacement  vers le bas
        if( !linkEtat.touche.left && !linkEtat.touche.right && !linkEtat.touche.top && linkEtat.touche.bottom ){
          linkEtat.touche.direction = 'S';
          this.spriteSelection( linkEtat.timeObstacle.supSecondeBottom, this.walk, this.spriteLink[linkEtat.spritePosition.color][0][this.walk][this.defaut], linkEtat.touche.bottom );
          if(  !(linkEtat.collision.direction == 'S' && linkEtat.collision.collisionBooleen) ){
            linkEtat.collision.direction = this.moving('top', true, this.divPersonnage, linkEtat.touche.direction, true, linkEtat.collision.collisionBooleen) || linkEtat.collision.direction;
            linkEtat.collision.direction = this.moving('top', true, this.divPersonnage, linkEtat.touche.direction, true, linkEtat.collision.collisionBooleen) || linkEtat.collision.direction;
          }
        } else {
          linkEtat.timeObstacle.bottomStart = null;
          linkEtat.timeObstacle.supSecondeBottom = false;
        }
        if ( !linkEtat.touche.keyAPlusObjet && !linkEtat.item.shield ){
          //déplacement diagonal haut gauche
          if(linkEtat.touche.left && !linkEtat.touche.right && linkEtat.touche.top && !linkEtat.touche.bottom ){
            this.spriteSelection( linkEtat.timeObstacle.supSecondeTop, 0, this.spriteLink[linkEtat.spritePosition.color][1][this.walk][this.defaut], (linkEtat.touche.left && linkEtat.touche.top) );
            if(  !(linkEtat.collision.direction == 'N' && linkEtat.collision.collisionBooleen) ) {
              //test des obstacles vers le haut
              linkEtat.touche.direction = 'N';
              linkEtat.collision.direction = this.moving('top', false, this.divPersonnage, linkEtat.touche.direction, true, linkEtat.collision.collisionBooleen) || linkEtat.collision.direction;
              //test des obstacles vers la gauche
              linkEtat.touche.direction = 'W';
              linkEtat.collision.direction = this.moving('left', false, this.divPersonnage, linkEtat.touche.direction, true, linkEtat.collision.collisionBooleen) || linkEtat.collision.direction;
            }
            linkEtat.touche.direction = 'NW';
          }
          //déplacement  diagonal haut droite
          if(!linkEtat.touche.left && linkEtat.touche.right && linkEtat.touche.top && !linkEtat.touche.bottom ){
            this.spriteSelection( linkEtat.timeObstacle.supSecondeTop, 00, this.spriteLink[linkEtat.spritePosition.color][1][this.walk][this.defaut], (linkEtat.touche.right && linkEtat.touche.top) );
            if(  !(linkEtat.collision.direction == 'N' && linkEtat.collision.collisionBooleen) ) {
              //test des obstacles vers le haut
              linkEtat.touche.direction = 'N';
              linkEtat.collision.direction = this.moving('top', false, this.divPersonnage, linkEtat.touche.direction, true, linkEtat.collision.collisionBooleen) || linkEtat.collision.direction;
              //test des obstacles vers la droite
              linkEtat.touche.direction = 'E';
              linkEtat.collision.direction = this.moving('left', true, this.divPersonnage, linkEtat.touche.direction, true, linkEtat.collision.collisionBooleen) || linkEtat.collision.direction;
            }
            linkEtat.touche.direction = 'NE';
          }
          //déplacement  diagonal bas droite
          if(!linkEtat.touche.left && linkEtat.touche.right && !linkEtat.touche.top && linkEtat.touche.bottom ){
            this.spriteSelection( linkEtat.timeObstacle.supSecondeBottom, 0, this.spriteLink[linkEtat.spritePosition.color][0][this.walk][this.defaut], (linkEtat.touche.bottom && linkEtat.touche.right) );
            if(  !(linkEtat.collision.direction == 'E' && linkEtat.collision.collisionBooleen) ) {
              //test des obstacles vers le bas
              linkEtat.touche.direction = 'S';
              linkEtat.collision.direction = this.moving('top', true, this.divPersonnage, linkEtat.touche.direction, true, linkEtat.collision.collisionBooleen) || linkEtat.collision.direction;
              //test des obstacles vers la droite
              linkEtat.touche.direction = 'E';
              linkEtat.collision.direction = this.moving('left', true, this.divPersonnage, linkEtat.touche.direction, true, linkEtat.collision.collisionBooleen) || linkEtat.collision.direction;
            }
            linkEtat.touche.direction = 'SE';
          }
          //déplacement  diagonal bas gauche
          if( linkEtat.touche.left && !linkEtat.touche.right && !linkEtat.touche.top && linkEtat.touche.bottom ){
            this.spriteSelection( linkEtat.timeObstacle.supSecondeBottom, 0, this.spriteLink[linkEtat.spritePosition.color][0][this.walk][this.defaut], (linkEtat.touche.left && linkEtat.touche.bottom) );
            //test des obstacles vers la gauche
            if(  !(linkEtat.collision.direction == 'W' && linkEtat.collision.collisionBooleen) ){
              //test des obstacles vers le bas
              linkEtat.touche.direction = 'S';
              linkEtat.collision.direction = this.moving('top', true, this.divPersonnage, linkEtat.touche.direction, true, linkEtat.collision.collisionBooleen) || linkEtat.collision.direction;
              //test des obstacles vers la gauche
              linkEtat.touche.direction = 'W';
              linkEtat.collision.direction = this.moving('left', false, this.divPersonnage, linkEtat.touche.direction, true, linkEtat.collision.collisionBooleen) || linkEtat.collision.direction;
            }
            linkEtat.touche.direction = 'SW';
          }
        }
      }
      if ( linkEtat.collision.position != null ){
        //vérifi si une sortie est touché
        if ( myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.exit && linkEtat.item.shield ){
          myBackground.nextstage(myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.stage);
        } else {
          //vérifi si une porte est touché
          if ( myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.door ){
            myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].modif(false); //supression de l'objet
            myBackground.div[myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].id].style['z-index'] = 1;//monte l'image pour modifier le décor
          }
          //vérifi si un escalier est touché
          if ( myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.stairs ){
            //bouge le sprite mouvement jusqu'en haut de l'escalier
            this.spriteSelection( linkEtat.timeObstacle.supSecondeBottom, 0, this.spriteLink[linkEtat.spritePosition.color][0][this.walk][this.defaut], myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.stairs );
            if ( myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.decallageY ){
              if ( myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.decallageY > 0 ){
                this.divPersonnage.top = parseFloat(this.divPersonnage.top) + 1 + 'px';
                this.counter++;
              }
              if ( myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.decallageY < 0 ){
                this.divPersonnage.top = parseFloat(this.divPersonnage.top) - 1 + 'px';
                this.counter--;
              }
              if ( Math.abs(this.counter) == (Math.abs(myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.decallageY) + parseFloat(this.divPersonnage.height)) ){
                linkEtat.collision.position = null;
                this.counter = 0;
              }
            }
            if ( linkEtat.collision.position != null ) {
              if ( myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.decallageX ){
                if ( myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.decallageX > 0 ){
                  this.divPersonnage.top = parseFloat(this.divPersonnage.left) + 1 + 'px';
                  this.counter++;
                }
                if ( myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.decallageX < 0 ){
                  this.divPersonnage.top = parseFloat(this.divPersonnage.left) - 1 + 'px';
                  this.counter--;
                }
                if ( Math.abs(this.counter) == (Math.abs(myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.decallageX) + parseFloat(this.divPersonnage.width)) ){
                  linkEtat.collision.position = null;
                  this.counter = 0;
                }
            }
            }
          }
        }
      }
    }
    //coup d'épée
    if ( (linkEtat.item.sword && linkEtat.touche.keyZ && !linkEtat.touche.keyAPlusObjet && !linkEtat.touche.keyA) || linkEtat.slachSword == 1 || linkEtat.slachSword == 4 || linkEtat.slachSword == 3 ){
      //met la direction du sprite corespondant
      switch ( linkEtat.touche.directionSword ) {
        case 'S':
          linkEtat.axieSword = 'top';
          linkEtat.sensSword = true;
          break;
        case 'N':
          linkEtat.axieSword = 'top';
          linkEtat.sensSword = false;
          break;
        case 'E':
          linkEtat.axieSword = 'left';
          linkEtat.sensSword = true;
          break;
        case 'W':
          linkEtat.axieSword = 'top';
          linkEtat.sensSword = false;
          break;
      }
      //coup d'épée sur un obstacles
      this.testObstacle(linkEtat.axieSword, linkEtat.sensSword,  this.divPersonnage, true );
      //coup d'épée sur un ennemi
      this.testObstacle(linkEtat.axieSword, linkEtat.sensSword, this.divPersonnage, true, 0, myBackground.enemiesStage)
      //vérifi si une collision a eu lieu avec l'épée
      if ( linkEtat.collision.position != null ){
        if ( linkEtat.touche.keyZPlusObstacle && myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.destructible ){
          //enregistre l'objet détruit
          this.liftObject = this.spriteLink[4][myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.indice];
          //objet détruit
          myBackground.affiche(this.liftObject, myBackground.item);
          //monte l'image pour modifier le décor
          myBackground.div[myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].id].style['z-index'] = 1;
          //annule la collision
          linkEtat.touche.keyZPlusObstacle = true;
          //annule la collision
          this.collisionObjet = false;
          //supression de l'objet
          myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].modif(false);
          this.objetPosition = 0;
          this.requestID = window.requestAnimationFrame(function(timestamp){linkAction.launch(timestamp)});
        }
      }
      this.temps = 20;
      //initialise le coup d'épée
      if ( linkEtat.slachSword == 0 ) {
        //enregistre la direction au début du coup;
        linkEtat.touche.directionSword = linkEtat.touche.direction;
        linkEtat.spritePosition.position = 0;
        linkEtat.slachSword = 1;
      }
      //début du coup d'épée
      if ( linkEtat.slachSword == 1 ){
        this.spriteSelection( linkEtat.timeObstacle.supSecondeBottom, 7, this.spriteLink[linkEtat.spritePosition.color][linkEtat.spritePosition.direction][this.walk][this.defaut], linkEtat.slachSword );
      }
      //début du chargement de l'épée
      if ( linkEtat.slachSword == 2 ){
        this.spriteSelection( linkEtat.timeObstacle.supSecondeBottom, 8, this.spriteLink[linkEtat.spritePosition.color][linkEtat.spritePosition.direction][this.walk][this.defaut], linkEtat.touche.keyZ );
      }
      //chargé permet de ce déplacer
      if ( linkEtat.slachSword == 3 ) {
          this.defaut = 0;
          this.walk = 10;
          //static avec l'épée chargé
          if ( !linkEtat.touche.left && !linkEtat.touche.right && !linkEtat.touche.top && !linkEtat.touche.bottom ){
            this.spriteSelection( linkEtat.timeObstacle.supSecondeBottom, 9, this.spriteLink[linkEtat.spritePosition.color][linkEtat.spritePosition.direction][this.walk][this.defaut], linkEtat.slachSword );
            //en mouvement
          } else {
            this.spriteSelection( linkEtat.timeObstacle.supSecondeBottom, 10, this.spriteLink[linkEtat.spritePosition.color][linkEtat.spritePosition.direction][this.walk][this.defaut], linkEtat.slachSword );
          }
        }
      //quand l'épée est chargé l'attaque spéciale est lancé si la touche est laché
      if ( linkEtat.slachSword == 4 ) {
        //cache le scintillement de l'épée
        myBackground.item['z-index'] = -1;
        this.spriteSelection( linkEtat.timeObstacle.supSecondeBottom, 11, this.spriteLink[linkEtat.spritePosition.color][linkEtat.spritePosition.direction][this.walk][this.defaut], linkEtat.slachSword );
        this.defaut = 3;
        //vérifi si le bouclier a été trouvé
        if ( linkEtat.item.shield ){
          //sprite du bouclier
          this.walk = 1;
        } else {
          //sprite sans bouclier
          this.walk = 0;
        }
      }
    } else {
      linkEtat.slachSword = 0;
      this.defaut = 3;
      if ( linkEtat.spritePosition.action != 2 && linkEtat.spritePosition.action != 5 ){
        //vérifi si le bouclier a été trouvé
        if ( linkEtat.item.shield ){
          //sprite du bouclier
          this.walk = 1;
        } else {
          //sprite sans bouclier
          this.walk = 0;
        }
      }
    }
    //lancer objet
    if ( linkEtat.touche.keyAPlusObjet && linkEtat.touche.keyA && this.lastPosition < 0 && !linkEtat.slachSword ){
      //enregistre le sens du lancé
      linkEtat.glove = false;
      this.directionObjet = linkEtat.touche.direction;
      this.collisionObjet = true;
      //positionne le sprite de l'objet
      this.distanceObjectTop = parseFloat(myBackground.item.top);
      //positionne le sprite de l'objet
      this.distanceObjectLeft = parseFloat(myBackground.item.left);
      this.time = 10;
      this.objetPosition = 0;
      //lance l'objet
      this.requestID = window.requestAnimationFrame(function(timestamp){linkAction.launch(timestamp)});
      //passe l'objet soulevé à false
      linkEtat.touche.keyAPlusObjet = false;
      //position par defaut une foix l'objet lancé
      this.defaut = 3;
      //vérifi si le bouclier a été trouvé
      if ( linkEtat.item.shield ){
        //sprite du bouclier
        this.walk = 1;
      } else {
        //sprite sans bouclier
        this.walk = 0;
      }
      linkEtat.actionOff.sprite = this.spriteLink[linkEtat.spritePosition.color][linkEtat.spritePosition.direction][this.walk][3]
    } else {
      if ( linkEtat.touche.keyA && !linkEtat.touche.left && !linkEtat.touche.right && !linkEtat.touche.top && !linkEtat.touche.bottom && !linkEtat.collision.collisionBooleen &&  linkEtat.collision.position != null ){
        this.temps = 150;
        //vérifie si on est devant un objet soulevable
        if ( myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.lift && ( !myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.glove || linkEtat.item.glove ) ){
          if ( myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.glove ){
            linkEtat.glove = false;
          }
          linkEtat.spritePosition.position = 0;
          //nombre d'élément du sprite pour soulever
          this.lastPosition = this.spriteLink[linkEtat.spritePosition.color][linkEtat.spritePosition.direction][2].length;
          //enregistre l'objet soulevé
          this.liftObject = this.spriteLink[4][myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.indice];
          //position du sprite
          myBackground.spriteObjet.left = this.liftObject.positionX + 'px';
          //position du sprite
          myBackground.spriteObjet.top = this.liftObject.positionY + 'px';
          //largeur de la div
          myBackground.item.width = this.liftObject.tailleX + 'px';
          //hauteur de la div
          myBackground.item.height = this.liftObject.tailleY + 'px';
          myBackground.shadow.top = myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].positionY + 'px';
          myBackground.shadow.left = myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].positionX + 'px';
          myBackground.item.top = myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].positionY + 'px';
          myBackground.item.left = myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].positionX + 'px';
          myBackground.shadow['z-index'] = 1;
          myBackground.item['z-index'] = 2;
          //objet soulevé
          myBackground.requestIDLift = window.requestAnimationFrame(function(timestamp){myBackground.lift(timestamp)});
          //monte l'image pour modifier le décor
          myBackground.div[myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].id].style['z-index'] = 1;
          //annule la collision
          linkEtat.collision.collisionBooleen = true;
          //supression de l'objet
          myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].modif(false);
          //marche avec objet
          this.walk = 5;
          //position par defaut
          this.defaut = 0;
          linkEtat.touche.keyAPlusObjet = true;
        }
      }
      if( ( (linkEtat.touche.keyA && !linkEtat.touche.left && !linkEtat.touche.right && !linkEtat.touche.top && !linkEtat.touche.bottom) || linkEtat.touche.keyAPlusObstacle) && !linkEtat.collision.collisionBooleen && linkEtat.collision.position != null ){
        //vérifie si on est devant un item
        if (myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.treasure && !linkEtat.chestOpen[myBackground.stage][linkEtat.collision.position] ){
          //passe le temps à 2s quand un objet est trouvé
          this.temps = 2000;
          //enregistre l'item
          linkEtat.chestOpen[myBackground.stage][linkEtat.collision.position] = true;
          myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.chestContent();
          myBackground.affiche(this.spriteLink[4][myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.item], myBackground.item);
          //cache l'image pour modifier le décor
          myBackground.div[myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].id].style['z-index'] = -1;
          //position de link quand il trouve un objet
          linkEtat.actionOff.sprite = this.spriteLink[linkEtat.spritePosition.color][0][5][0];
          linkEtat.spriteMouvement = false;
        }
        //sans direction
        if(!linkEtat.touche.left && !linkEtat.touche.right && !linkEtat.touche.top && !linkEtat.touche.bottom){
          linkEtat.spritePosition.position = 0;
        }
        linkEtat.touche.keyAPlusObstacle = true;
        switch(linkEtat.touche.direction){
          case 'E':
          this.spriteSelection( linkEtat.timeObstacle.supSecondeBottom, 2, this.spriteLink[linkEtat.spritePosition.color][2][this.walk][this.defaut], linkEtat.touche.left );
          break;
          case 'W':
          this.spriteSelection( linkEtat.timeObstacle.supSecondeBottom, 2, this.spriteLink[linkEtat.spritePosition.color][2][this.walk][this.defaut], linkEtat.touche.right );
          break;
          case 'S':
          this.spriteSelection( linkEtat.timeObstacle.supSecondeBottom, 2, this.spriteLink[linkEtat.spritePosition.color][0][this.walk][this.defaut], linkEtat.touche.top );
          break;
          case 'N':
          //vérifie si on est devant un coffre
          if (myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.chest && !linkEtat.chestOpen[myBackground.stage][linkEtat.collision.position] ){
            //monte l'image pour modifier le décor
            myBackground.div[myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].id].style['z-index'] = 1;
            //passe le temps à 2s quand un objet est trouvé
            this.temps = 2000;
            //enregistre le coffre
            linkEtat.chestOpen[myBackground.stage][linkEtat.collision.position] = true;
            //execute le contenu du coffre
            myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.chestContent();
            //affiche l'item
            myBackground.affiche(this.spriteLink[4][myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.item], myBackground.item);
            //position de link quand il trouve un objet
            linkEtat.actionOff.sprite = this.spriteLink[linkEtat.spritePosition.color][0][5][0];
          } else {
            //sur un obstacle
            this.spriteSelection( linkEtat.timeObstacle.supSecondeBottom, 2, this.spriteLink[linkEtat.spritePosition.color][1][this.walk][this.defaut], linkEtat.touche.bottom );
          }
          break;
        }
      }
    }
    if( !linkEtat.touche.left && !linkEtat.touche.right && !linkEtat.touche.top && !linkEtat.touche.bottom && !linkEtat.touche.keyA && !linkEtat.touche.keyZ  && linkEtat.slachSword != 1 && linkEtat.slachSword != 4 && linkEtat.slachSword != 3 ){//si aucune touche n'est appuyé l'action passe à false'
      linkEtat.spriteMouvement = false;
    }
  },
  startObjet : null,
  time : 40,
  //booleen qui enregistre la collision
  collisionObjet : false,
  //indice de l'animation des objet détruit
  objetPosition : 0,
  compteur : 0,
  //objet lancé
  launch : function(timestamp){
    myBackground.shadow['z-index'] = 2;
    var progress;
    var sens; // positif ou négatif
    var axies; // x ou y
    if (!this.startObjet) this.startObjet = timestamp;
    progress = timestamp - this.startObjet;
    if ( progress > this.time ){
      this.startObjet = timestamp;
      if( this.collisionObjet && myBackground.item.top != myBackground.shadow.top ){
        //distance parcouru par le sprite
        switch (this.directionObjet) {
          case 'S':
            sens = true;
            axies = 'top';
            if ( (parseFloat(myBackground.item.top) - this.distanceObjectTop) > 50 && this.compteur > 10 ){
              this.moving( axies, sens, myBackground.item, this.directionObjet, false, this.collisionObjet );
              this.compteur = 0;
            } else { this.compteur++; }
            break;
          case 'N':
            sens = false;
            axies = 'top';
            if ( parseFloat(myBackground.item.top) - this.distanceObjectTop < 50 && this.compteur > 5 ){
              this.moving( axies, sens, myBackground.item, this.directionObjet, false, this.collisionShadow );
              this.compteur = 0;
            } else { this.compteur++; }
            break;
          case 'E':
            sens = true;
            axies = 'left';
            if ( parseFloat(myBackground.item.left) - this.distanceObjectLeft > 50 && this.compteur > 5 ){
              myBackground.item.top = (parseFloat(myBackground.item.top) + 1) + 'px';
              this.compteur = 0;
            } else { this.compteur++; }
            break;
          case 'W':
            sens = false;
            axies = 'left';
            if ( parseFloat(myBackground.item.left) - this.distanceObjectLeft < 50 && this.compteur > 5 ){
              myBackground.item.top = (parseFloat(myBackground.item.top) + 1) + 'px';
              this.compteur = 0;
            } else { this.compteur++; }
            break;
        }
        this.moving( axies, sens, myBackground.item, this.directionObjet, false, this.collisionObjet );
        this.moving( axies, sens, myBackground.shadow, this.directionObjet, false, this.collisionShadow );
      } else {
        if ( this.spriteLink[this.liftObject.argument.indice][this.objetPosition] ){
          this.time = 20;
          if (this.objetPosition == 0 && linkAction.directionObjet == 'S'){
            myBackground.item.top = parseFloat(myBackground.item.top) - this.spriteLink[this.liftObject.argument.indice][this.objetPosition].tailleY  + 'px';//modifi la position de la div pour qu'elle ne passe pas le point d'impact
          } else {
            if ( this.objetPosition == 0 && linkAction.directionObjet == 'N' ){myBackground.item.left = (parseFloat(myBackground.item.left) - this.spriteLink[this.liftObject.argument.indice][this.objetPosition].tailleX) + 'px';}//modifi la position de la div pour qu'elle ne passe pas le point d'impact
          }
          myBackground.affiche(this.spriteLink[this.liftObject.argument.indice][this.objetPosition], myBackground.item, true);
          this.objetPosition++;
        }
      }
    }
    if ( this.spriteLink[this.liftObject.argument.indice][this.objetPosition] ){
      this.requestID = window.requestAnimationFrame(function(timestamp){linkAction.launch(timestamp)});
    } else {
      this.time = 20;
      myBackground.item['z-index'] = -1;
      myBackground.shadow['z-index'] = -1;
      myBackground.item[axies] = '0px';
      window.cancelAnimationFrame(this.requestID);
    }
  },
  start : null,
  temps : 20,
  //mouvement du personnage
  mouvement : function(timestamp){
    if (!this.start) this.start = timestamp;
    //initialise le temps dans le sens corespondant quand le personnage est bloqué par un obstacle
    if ( !linkEtat.timeObstacle.leftStart && !linkEtat.collision.collisionBooleen && linkEtat.collision.direction == 'W' ) linkEtat.timeObstacle.leftStart = timestamp;
    if ( !linkEtat.timeObstacle.rightStart && !linkEtat.collision.collisionBooleen && linkEtat.collision.direction == 'E' ) linkEtat.timeObstacle.rightStart = timestamp;
    if ( !linkEtat.timeObstacle.topStart && !linkEtat.collision.collisionBooleen && linkEtat.collision.direction == 'N' ) linkEtat.timeObstacle.topStart = timestamp;
    if ( !linkEtat.timeObstacle.bottomStart && !linkEtat.collision.collisionBooleen && linkEtat.collision.direction == 'S' ) linkEtat.timeObstacle.bottomStart = timestamp;
    var progress = timestamp - this.start;
    var progressLeft = timestamp - linkEtat.timeObstacle.leftStart;
    var progressRight = timestamp - linkEtat.timeObstacle.rightStart;
    var progressTop = timestamp - linkEtat.timeObstacle.topStart;
    var progressBottom = timestamp - linkEtat.timeObstacle.bottomStart;
    //au bout d'une seconde le test deviens true
    if( progressLeft > 1000 && progressLeft != timestamp ){
      linkEtat.timeObstacle.supSecondeLeft = true;
    }
    if( progressRight > 1000 && progressRight != timestamp ){
      linkEtat.timeObstacle.supSecondeRight = true;
    }
    if( progressTop > 1000 && progressTop != timestamp ){
      linkEtat.timeObstacle.supSecondeTop = true;
    }
    if( progressBottom > 1000 && progressBottom != timestamp ){
      linkEtat.timeObstacle.supSecondeBottom = true;
    }
    //si aucun aucun coffre ou item n'est trouvé
    if ( !linkEtat.timeObstacle.actionObjet ){
      if (progress > this.temps){
        // if ( parseFloat(this.divPersonnage.top) > 100 ){
        //   linkEtat.carac.top = parseFloat(this.divPersonnage.top) - 75 + 'px';
        // } else {
          linkEtat.carac.top = '25px';
        // }
        // if ( parseFloat(this.divPersonnage.left) > 25 ){
        //   if ( parseFloat(this.divPersonnage.left) < (myBackground.divJeux.offsetWidth - 165) ){
        //     linkEtat.carac.left = parseFloat(this.divPersonnage.left) - 75 + 'px';
        //   }
        // } else {
          linkEtat.carac.left = (myBackground.divJeux.offsetWidth - 225) + 'px';
          this.menu();
        // }
        //vérifi si le temps est à 2s
        if( this.temps == 2000 ){
          //repasse le temps à 20
          this.temps = 20;
          linkEtat.actionOff.sprite = this.spriteLink[linkEtat.spritePosition.color][0][this.walk][3];
          myBackground.item['z-index'] = -1;
        }
        this.start = timestamp;
        if ( linkEtat.touche.keyAPlusObjet || linkEtat.slachSword == 3 ){
          //centre l'objet transporté par link
          myBackground.centreObjet();
        }
        if ( this.lastPosition > linkEtat.spritePosition.position && linkEtat.touche.keyAPlusObjet ){
          myBackground.item['z-index'] = 2;
          this.spriteSelection( linkEtat.timeObstacle.supSecondeBottom, 2, this.spriteLink[linkEtat.spritePosition.color][linkEtat.spritePosition.direction][this.walk][0], linkEtat.touche.keyAPlusObjet );
          if (this.lastPosition == linkEtat.spritePosition.position){
            myBackground.item['z-index'] = 3;
          }
        } else {
          //réinitialise la position à -1
          this.lastPosition = -1;
          this.testDirection();
          //si aucune action n'est en cour
          if( !linkEtat.spriteMouvement && linkEtat.actionOff.sprite ){
            this.spriteDefaut(linkEtat.actionOff.sprite);
          }
        }
      }
    } else {
      this.spriteDefaut(linkEtat.actionOff.sprite);
    }
    window.requestAnimationFrame(function(timestamp){linkAction.mouvement(timestamp)});
  },
  //met les éléments du menu dans des objets
  creatCarac : function(){
    //parcour les éléments de la vie
    for (var i=0;i < 5;i++){
      linkEtat['divLife' + i] = document.getElementById('life' + i).style;
      linkEtat['imgHeart' + i] = document.getElementById('heart' +i).style;
      //positionne à 140px + 9 entre chaque élément du bord gauche
      linkEtat['divLife' + i].left = (140 + i * 9) + 'px';
    }
  },
  //cré le menu
  menu : function(){
    //affiche la vie de link
    var element;
    for ( var i=4;linkEtat.life[i] != undefined;i-- ){
      if ( i != 3 || linkEtat.item.heart4 ){
        if ( i != 4 || linkEtat.item.heart5 ) {
          //vérifi la vie de chaque élément du tableau
          switch (linkEtat.life[i]) {
            case 4:
            element = this.spriteLink[4][4];
            break;
            case 3:
            element = this.spriteLink[4][5];
            break;
            case 2:
            element = this.spriteLink[4][6];
            break;
            case 1:
            element = this.spriteLink[4][7];
            break;
            case 0:
            element = this.spriteLink[4][8];
            break;
          }
          linkEtat['divLife' + i].width = element.tailleX + 'px';//largeur de l'image visible
          linkEtat['divLife' + i].height = element.tailleY + 'px';//hauteur de l'image visible
          linkEtat['imgHeart' + i].top = element.positionY + 'px';//position de l'image en y
          linkEtat['imgHeart' + i].left = element.positionX + 'px';//position de l'image en x
        }
      }
    }
  },
  //affiche le sprite à la position donné
  spriteDefaut : function(defautSprite){
    switch (linkEtat.touche.direction) {
      //positionne la div visible pour les coup d'épée
      case 'E':
        if ( !linkEtat.slachSword ){
          this.persoShow.left = ( parseFloat(this.divPersonnage.width) + 1 - defautSprite.tailleX ) + 'px'; //centre la div
          this.persoShow.top = ( parseFloat(this.divPersonnage.height) - defautSprite.tailleY ) + 'px'; //décale la div vers le haut
        } else {
          this.persoShow.top = '-7px'; //décale la div vers le haut
        }
        break;
      case 'S':
        if ( !linkEtat.slachSword ){
          this.persoShow.left = (( parseFloat(this.divPersonnage.width) - defautSprite.tailleX ) / 2) + 'px'; //centre la div
          this.persoShow.top = ( parseFloat(this.divPersonnage.height) - defautSprite.tailleY ) + 'px'; //décale la div vers le haut
        } else {
          this.persoShow.left = (( parseFloat(this.divPersonnage.width) - defautSprite.tailleX ) / 2) + 'px'; //centre la div
        }
        break;
      case 'N':
        if ( !linkEtat.slachSword ){
          this.persoShow.left = (( parseFloat(this.divPersonnage.width) - defautSprite.tailleX ) / 2) + 'px';
          this.persoShow.top = '-7px'; //décale la div vers le haut
        } else {
          this.persoShow.left = (( parseFloat(this.divPersonnage.width) - defautSprite.tailleX ) / 2) + 'px';
          this.persoShow.top = -( parseFloat(this.persoShow.height) - 15 ) + 'px'; //décale la div vers le haut
        }
        break;
      case 'W':
        if ( !linkEtat.slachSword ){
          this.persoShow.left = '-1px';
          this.persoShow.top = '-7px'; //décale la div vers le haut
        } else {
          this.persoShow.left = -( parseFloat(this.persoShow.width) - 15 ) + 'px';
        }
        break;
    }
    this.persoShow.width = defautSprite.tailleX + 'px';//largeur de l'image visible
    this.persoShow.height = defautSprite.tailleY + 'px';//hauteur de l'image visible
    this.linkSprite.style.top = defautSprite.positionY + 'px';//position de l'image en y
    this.linkSprite.style.left = -Math.abs(defautSprite.positionX - linkEtat.tailleSprite) + 'px';//position de l'image en x
  },
  spriteLink : [[  // indice 0 sort du lit
      cP(-22, -23, 30, 31),//link dans son lit 1
      cP(-58, -23, 30, 31),//link dans son lit 2
      cP(-94, -23, 30, 31),//link dans son lit 3
      cP(-128, -23, 30, 31),//link dans son lit 4
      cP(-163, -23, 30, 31),//link dans son lit 5
      cP(-197, -23, 30, 31),//link dans son lit 6
      cP(-231, -23, 30, 31),//link dans son lit 7
      cP(-265, -23, 30, 31),//link dans son lit 8
      cP(-299, -23, 30, 31),//link dans son lit 9
      cP(-335, -22, 30, 32),//link dans son lit 10
      cP(-370, -21, 30, 33),//link dans son lit 11
      cP(-405, -20, 30, 34),//link dans son lit 12
      cP(-440, -19, 30, 35),//link dans son lit 13
      cP(-475, -19, 30, 35),//link dans son lit 14
      cP(-509, -18, 30, 36),//link dans son lit 15
      cP(-544, -17, 30, 37),//link dans son lit 16
      cP(-578, -16, 30, 38),//link dans son lit 17
      cP(-611, -15, 30, 39),//link dans son lit 18
      cP(-646, -14, 30, 40),//link dans son lit 19
      cP(-680, -13, 30, 41),//link dans son lit 20
      cP(-714, -13, 30, 41),//link dans son lit 21
      cP(-748, -12, 30, 42),//link dans son lit 22
      cP(-783, -12, 30, 42),//link dans son lit 23
      cP(-818, -13, 30, 41),//link dans son lit 24
      cP(-856, -12, 30, 42),//link dans son lit 25
      cP(-82, -71, 30, 31),//link sort de son lit 1
      cP(-127, -70, 30, 32),//link sort de son lit 2
      cP(-167, -68, 30, 34),//link sort de son lit 3
      cP(-208, -67, 30, 35),//link sort de son lit 4
      cP(-248, -67, 30, 35),//link sort de son lit 5
      cP(-287, -65, 30, 37),//link sort de son lit 6
      cP(-332, -65, 30, 37),//link sort de son lit 7
      cP(-374, -65, 30, 37),//link sort de son lit 8
      cP(-422, -64, 35, 38),//link sort de son lit 9
      cP(-468, -64, 35, 38),//link sort de son lit 10
      cP(-468, -64, 35, 38),//link sort de son lit 11
      cP(-514, -66, 41, 36),//link sort de son lit 12
      cP(-570, -67, 43, 35),//link sort de son lit 13
      cP(-624, -69, 44, 33),//link sort de son lit 14
      cP(-679, -69, 44, 33),//link sort de son lit 15
      cP(-732, -72, 47, 30),//link sort de son lit 16
      cP(-788, -73, 48, 29),//link sort de son lit 17
      cP(-846, -74, 49, 28)//link sort de son lit 18
    ],[//indice 1 en vert
      [//indice 0 vers le bas
        [//indice 0 marche
          cP(-101, -127, 16, 24),//marche vers l'avent 1
          cP(-124, -128, 16, 23),//marche vers l'avent 2
          cP(-148, -129, 16, 22),//marche vers l'avent 3
          cP(-171, -129, 16, 22),//marche vers l'avent 4 statick
          cP(-194, -130, 16, 22),//marche vers l'avent 5
          cP(-218, -128, 16, 23),//marche vers l'avent 6
          cP(-241, -127, 16, 24)//marche vers l'avent 7
        ],[ //indice 1 marche avec bouclier
          cP(-101, -157, 16, 24),//marche vers l'avent 1 avec un bouclier
          cP(-124, -158, 16, 23),//marche vers l'avent 2 avec un bouclier
          cP(-148, -159, 16, 22),//marche vers l'avent 3 avec un bouclier
          cP(-171, -159, 16, 22),//marche vers l'avent 4 avec un bouclier statick
          cP(-194, -159, 16, 22),//marche vers l'avent 5 avec un bouclier
          cP(-218, -158, 16, 23),//marche vers l'avent 6 avec un bouclier
          cP(-241, -157, 16, 24)//marche vers l'avent 7 avec un bouclier
        ],[//indice 2 Tiré
          cP(-107, -194, 16, 20),//Tiré vers le bas 1
          cP(-129, -194, 16, 20),//Tiré vers le bas 2
          cP(-149, -194, 24, 20),//Tiré vers le bas 3
          cP(-183, -193, 30, 21)//Tiré vers le bas 4
        ],[//indice 3 souléve un objet
          cP(-96, -242, 16, 19),//souléve vers le bas 1 un objet
          cP(-117, -243, 30, 18),//souléve vers le bas 1 un objet
          cP(-151, -243, 34, 19),//souléve vers le bas 2 un objet
          cP(-189, -233, 34, 28),//souléve vers le bas 3 un objet
          cP(-233, -221, 16, 40),//souléve vers le bas 4 un objet
          cP(-262, -227, 16, 34)//souléve vers le bas 5 un objet
        ],[//indice 4 pousse
          cP(-152, -281, 16, 20),//pousser vers le bas 1
          cP(-172, -282, 16, 19),//pousser vers le bas 2
          cP(-191, -283, 16, 18)//pousser vers le bas 3
        ],[//indice 5 marche avec un objet
          cP(-220, -281, 16, 22),//marche avec un objet vers le bas 1 et trouver objet
          cP(-241, -282, 16, 21),//marche avec un objet vers le bas 2
          cP(-261, -282, 16, 21),//marche avec un objet vers le bas 3
          cP(-283, -282, 16, 21)//marche avec un objet vers le bas 4
        ],[//indice 6 lancer un objet
          cP(-306, -282, 17, 21)//lancer un objet vers le bas 1
        ],[//indice 7 coup d'épée
          cP(-82, -308, 20, 23),//coup d'épée vers le bas 1
          cP(-107, -309, 21, 29),//coup d'épée vers le bas 2
          cP(-136, -309, 20, 31),//coup d'épée vers le bas 3
          cP(-162, -310, 20, 31),//coup d'épée vers le bas 4
          cP(-186, -310, 28, 29),//coup d'épée vers le bas 5
          cP(-217, -310, 32, 27)//coup d'épée vers le bas 6
        ],[//indice 8 charge épée
          cP(-11, -350, 19, 29),//charge épée vers le bas 1
          cP(-32, -350, 19, 29),//charge épée vers le bas 2
          cP(-55, -350, 19, 29),//charge épée vers le bas 3
          cP(-76, -350, 19, 29),//charge épée vers le bas 4
          cP(-98, -350, 19, 29),//charge épée vers le bas 5
          cP(-120, -350, 19, 29),//charge épée vers le bas 6
          cP(-145, -350, 19, 29),//charge épée vers le bas 7
          cP(-191, -350, 19, 29),//charge épée vers le bas 8
          cP(-215, -350, 19, 29),//charge épée vers le bas 9
          cP(-238, -350, 19, 29),//charge épée vers le bas 10
          cP(-262, -350, 19, 34),//charge épée vers le bas 11
          cP(-284, -350, 19, 34),//charge épée vers le bas 12
          cP(-307, -349, 19, 31),//charge épée vers le bas 13
          cP(-328, -349, 20, 32),//charge épée vers le bas 14
          cP(-24, -393, 19, 29)//charge épée vers le bas 15
        ],[//indice 9 épée chargé
          cP(-24, -393, 19, 29)
        ],[//indice 10 marche avec l'épée chargé
          cP(-14, -442, 19, 29),//marche avec l'épée vers le bas 1
          cP(-38, -442, 19, 29),//marche avec l'épée vers le bas 2
          cP(-60, -441, 19, 29),//marche avec l'épée vers le bas 3
          cP(-82, -442, 19, 29),//marche avec l'épée vers le bas 4
          cP(-103, -443, 19, 29)//marche avec l'épée vers le bas 5
        ],[//indice 11 coup d'épée chargé
          cP(-17, -915, 20, 26),//coup d'épée chargé vers le bas 1
          cP(-45, -913, 15, 35),//coup d'épée chargé vers le bas 2
          cP(-67, -903, 16, 38),//coup d'épée chargé vers le bas 3
          cP(-89, -914, 20, 26),//coup d'épée chargé vers le bas 4
          cP(-117, -918, 28, 22),//coup d'épée chargé vers le bas 5
          cP(-151, -918, 28, 22),//coup d'épée chargé vers le bas 6
          cP(-186, -917, 17, 31),//coup d'épée chargé vers le bas 7
          cP(-208, -918, 28, 22),//coup d'épée chargé vers le bas 8
          cP(-242, -918, 28, 22),//coup d'épée chargé vers le bas 9
          cP(-277, -912, 16, 28),//coup d'épée chargé vers le bas 10
          cP(-304, -914, 20, 26),//coup d'épée chargé vers le bas 11
          cP(-331, -918, 16, 22)//coup d'épée chargé vers le bas 12
        ],[//indice 12 tir à l'arc
          cP(-123, -497, 17, 24),//tir à l'arc vers le bas 1
          cP(-154, -498, 18, 21),//tir à l'arc vers le bas 2
          cP(-183, -497, 18, 22)//tir à l'arc vers le bas 3
        ],[//indice 13 fléche
          cP(-216, -503, 5, 15),//fléche vers le bas 1
          cP(-224, -503, 6, 11),//fléche vers le bas 2
          cP(-232, -503, 5, 11),//fléche vers le bas 3
          cP(-239, -503, 6, 11)//fléche vers le bas 4
        ],[//indice 14 bléssé
          cP(-271, -192, 16, 21)//bléssé vers le bas
        ]
    ],[//indice 1 vers le haut
        [//indice 0 marche
          cP(-456, -131, 16, 24),//marche vers le haut 1
          cP(-479, -132, 16, 23),//marche vers le haut 2
          cP(-503, -133, 16, 22),//marche vers le haut 3
          cP(-526, -133, 16, 22),//marche vers le haut 4 statick
          cP(-550, -133, 16, 22),//marche vers le haut 5
          cP(-573, -132, 16, 23),//marche vers le haut 6
          cP(-595, -131, 16, 24)//marche vers le haut 7
        ],[ //indice 1 marche avec bouclier
          cP(-456, -161, 17, 24),//marche vers le haut 1 avec un bouclier
          cP(-479, -162, 17, 23),//marche vers le haut 2 avec un bouclier
          cP(-503, -163, 17, 22),//marche vers le haut 3 avec un bouclier
          cP(-526, -163, 17, 22),//marche vers le haut 4 avec un bouclier statick
          cP(-550, -163, 17, 22),//marche vers le haut 5 avec un bouclier
          cP(-573, -162, 17, 23),//marche vers le haut 6 avec un bouclier
          cP(-595, -161, 17, 24)//marche vers le haut 7 avec un bouclier
        ],[//indice 2 Tiré
          cP(-473, -196, 16, 21),//Tiré vers le haut 1
          cP(-493, -197, 16, 20),//Tiré vers le haut 2
          cP(-514, -197, 24, 20),//Tiré vers le haut 3
          cP(-544, -197, 30, 20)//Tiré vers le haut 4
        ],[//indice 3 souléve un objet
          cP(-453, -226, 16, 31),//souléve vers le haut 1 un objet
          cP(-480, -226, 22, 31),//souléve vers le haut 1 un objet
          cP(-510, -226, 32, 31),//souléve vers le haut 2 un objet
          cP(-547, -225, 32, 32),//souléve vers le haut 3 un objet
          cP(-585, -224, 16, 33),//souléve vers le haut 4 un objet
          cP(-610, -223, 16, 34)//souléve vers le haut 5 un objet
        ],[//indice 4 pousse
          cP(-514, -278, 16, 22),//pousser vers le haut 1
          cP(-534, -279, 16, 21),//pousser vers le haut 2
          cP(-554, -279, 16, 21)//pousser vers le haut 3
        ],[//indice 5 marche avec un objet
          cP(-585, -279, 16, 22),//marche avec un objet vers le haut 1
          cP(-611, -280, 16, 21),//marche avec un objet vers le haut 2
          cP(-635, -279, 16, 22),//marche avec un objet vers le haut 3
          cP(-657, -280, 16, 21)//marche avec un objet vers le haut 4
        ],[//indice 6 lancer un objet
          cP(-585, -279, 16, 22)//lancer un objet vers le haut
        ],[//indice 7 coup d'épée
        cP(-407, -317, 23, 22),//coup d'épée vers le haut 1
        cP(-438, -317, 22, 22),//coup d'épée vers le haut 2
        cP(-469, -315, 23, 24),//coup d'épée vers le haut 3
        cP(-500, -309, 22, 30),//coup d'épée vers le haut 4
        cP(-530, -307, 20, 32),//coup d'épée vers le haut 5
        cP(-555, -304, 20, 35),//coup d'épée vers le haut 6
        cP(-579, -309, 24, 30),//coup d'épée vers le haut 7
        cP(-606, -312, 29, 27),//coup d'épée vers le haut 8
        cP(-641, -316, 32, 23)//coup d'épée vers le haut 9
      ],[//indice 8 charge épée
        cP(-402, -352, 19, 26),//charge épée vers le haut 1
        cP(-425, -352, 19, 26),//charge épée vers le haut 2
        cP(-447, -352, 19, 26),//charge épée vers le haut 3
        cP(-468, -352, 19, 26),//charge épée vers le haut 4
        cP(-490, -352, 19, 26),//charge épée vers le haut 5
        cP(-511, -352, 19, 26),//charge épée vers le haut 6
        cP(-533, -352, 19, 26),//charge épée vers le haut 7
        cP(-554, -352, 19, 26),//charge épée vers le haut 8
        cP(-575, -352, 19, 26),//charge épée vers le haut 9
        cP(-597, -351, 19, 27),//charge épée vers le haut 10
        cP(-618, -350, 19, 28),//charge épée vers le haut 11
        cP(-639, -347, 19, 31),//charge épée vers le haut 12
        cP(-660, -348, 19, 30),//charge épée vers le haut 13
        cP(-402, -383, 19, 31),//charge épée vers le haut 14
        cP(-424, -382, 19, 32),//charge épée vers le haut 15
        cP(-448, -381, 19, 33)//charge épée vers le haut 16
      ],[//indice 9 épée chargé
        cP(-496, -394, 19, 26)
      ],[//indice 10 marche avec l'épée chargé
        cP(-411, -436, 19, 25),//marche avec l'épée vers le bas 1
        cP(-432, -436, 19, 25),//marche avec l'épée vers le bas 2
        cP(-455, -436, 19, 25),//marche avec l'épée vers le bas 3
        cP(-477, -436, 19, 25),//marche avec l'épée vers le bas 4
        cP(-501, -436, 19, 25)//marche avec l'épée vers le bas 5
      ],[//indice 11 coup d'épée chargé
        cP(-368, -914, 20, 27),//coup d'épée chargé vers le bas 1
        cP(-397, -915, 15, 35),//coup d'épée chargé vers le bas 2
        cP(-422, -914, 17, 38),//coup d'épée chargé vers le bas 3
        cP(-449, -914, 17, 38),//coup d'épée chargé vers le bas 4
        cP(-476, -914, 20, 27),//coup d'épée chargé vers le bas 5
        cP(-501, -914, 28, 22),//coup d'épée chargé vers le bas 6
        cP(-538, -908, 16, 28),//coup d'épée chargé vers le bas 7
        cP(-562, -914, 28, 22),//coup d'épée chargé vers le bas 8
        cP(-601, -914, 16, 31),//coup d'épée chargé vers le bas 9
        cP(-627, -915, 17, 31),//coup d'épée chargé vers le bas 10
        cP(-648, -915, 20, 27),//coup d'épée chargé vers le bas 11
        cP(-678, -915, 17, 22)//coup d'épée chargé vers le bas 12
      ],[//indice 12 tir à l'arc
        cP(-432, -492, 18, 22),//tir à l'arc vers le bas 1
        cP(-457, -493, 21, 21),//tir à l'arc vers le bas 2
        cP(-486, -492, 21, 22)//tir à l'arc vers le bas 3
      ],[//indice 13 fléche
        cP(-517, -499, 5, 15),//fléche vers le bas 1
        cP(-525, -503, 6, 11),//fléche vers le bas 2
        cP(-533, -503, 5, 11),//fléche vers le bas 3
        cP(-540, -503, 6, 11)//fléche vers le bas 4
      ],[//indice 14 bléssé
        cP(-635, -197, 20, 19)//bléssé vers le bas
      ]
    ],[//indice 2 vers la droite
        [//indice 0 marche
          cP(-787, -128, 16, 23),//marche vers la droite 1
          cP(-810, -127, 16, 24),//marche vers la droite 2
          cP(-835, -127, 16, 24),//marche vers la droite 3
          cP(-857, -128, 16, 23),//marche vers la droite 4 statick
          cP(-881, -127, 16, 24),//marche vers la droite 5
          cP(-905, -127, 16, 24),//marche vers la droite 6
          cP(-927, -128, 17, 23),//marche vers la droite 7
          cP(-948, -128, 16, 23)//marche vers la droite 8
        ],[ //indice 1 marche avec bouclier
          cP(-789, -158, 18, 23),//marche vers la droite 1 avec un bouclier
          cP(-812, -157, 18, 24),//marche vers la droite 2 avec un bouclier
          cP(-837, -157, 19, 24),//marche vers la droite 3 avec un bouclier
          cP(-859, -158, 19, 23),//marche vers la droite 4 avec un bouclier statick
          cP(-883, -157, 19, 24),//marche vers la droite 5 avec un bouclier
          cP(-907, -157, 18, 24),//marche vers la droite 6 avec un bouclier
          cP(-929, -158, 19, 23)//marche vers la droite 7 avec un bouclier
        ],[//indice 2 Tiré
          cP(-815, -186, 16, 23),//Tiré vers la droite 1
          cP(-838, -187, 19, 22),//Tiré vers la droite 2
          cP(-867, -187, 21, 22),//Tiré vers la droite 2
          cP(-897, -187, 20, 22)//Tiré vers la droite 2
        ],[//indice 3 souléve un objet
          cP(-790, -217, 25, 20),//souléve vers la droite 1 sans objet
          cP(-822, -216, 31, 21),//souléve vers la droite 2 sans objet
          cP(-860, -216, 34, 21),//souléve vers la droite 3 sans objet
          cP(-899, -216, 31, 21),//souléve vers la droite 4 sans objet
          cP(-937, -214, 16, 23),//souléve vers la droite 5 sans objet
          cP(-768, -251, 27, 27),//souléve vers la droite 1 un objet
          cP(-800, -251, 33, 27),//souléve vers la droite 2 un objet
          cP(-838, -251, 36, 27),//souléve vers la droite 3 un objet
          cP(-877, -248, 33, 30),//souléve vers la droite 4 un objet
          cP(-921, -245, 22, 33),//souléve vers la droite 5 un objet
          cP(-949, -243, 17, 35)//souléve vers la droite 6 un objet
        ],[//indice 4 pousse
          cP(-833, -285, 16, 23),//pousser vers la droite 1
          cP(-853, -286, 16, 23),//pousser vers la droite 2
          cP(-873, -287, 16, 22),//pousser vers la droite 3
          cP(-894, -288, 16, 21)//pousser vers la droite 4
        ],[//indice 5 marche avec un objet
          cP(-922, -286, 16, 24),//marche avec un objet vers la droite 1
          cP(-944, -288, 16, 22),//marche avec un objet vers la droite 2
          cP(-967, -289, 17, 21)//marche avec un objet vers la droite 3
        ],[//indice 6 lancer un objet
          cP(-1013, -286, 16, 23)//lancer un objet vers la droite 1
        ],[//indice 7 coup d'épée
          cP(-751, -318, 16, 23),//coup d'épée vers la droite 1
          cP(-774, -318, 18, 23),//coup d'épée vers la droite 2
          cP(-797, -317, 23, 24),//coup d'épée vers la droite 3
          cP(-826, -317, 26, 24),//coup d'épée vers la droite 4
          cP(-856, -320, 29, 21),//coup d'épée vers la droite 5
          cP(-890, -320, 28, 21),//coup d'épée vers la droite 6
          cP(-928, -320, 28, 21),//coup d'épée vers la droite 4
          cP(-958, -319, 28, 28),//coup d'épée vers la droite 5
          cP(-997, -317, 23, 31)//coup d'épée vers la droite 6
        ],[//indice 8 charge épée
          cP(-700, -358, 24, 23),//charge épée vers la droite 1
          cP(-726, -358, 24, 23),//charge épée vers la droite 2
          cP(-752, -358, 24, 23),//charge épée vers la droite 3
          cP(-778, -358, 24, 23),//charge épée vers la droite 4
          cP(-804, -358, 24, 23),//charge épée vers la droite 5
          cP(-830, -358, 24, 23),//charge épée vers la droite 6
          cP(-856, -358, 24, 23),//charge épée vers la droite 7
          cP(-882, -358, 24, 23),//charge épée vers la droite 8
          cP(-908, -358, 24, 23),//charge épée vers la droite 9
          cP(-934, -358, 24, 23),//charge épée vers la droite 10
          cP(-960, -358, 24, 23),//charge épée vers la droite 11
          cP(-986, -358, 24, 23),//charge épée vers la droite 12
          cP(-1012, -358, 24, 23),//charge épée vers la droite 13
          cP(-1038, -358, 24, 23),//charge épée vers la droite 14
          cP(-1064, -358, 24, 23),//charge épée vers la droite 15
          cP(-700, -383, 24, 23),//charge épée vers la droite 16
          cP(-726, -383, 24, 23),//charge épée vers la droite 17
          cP(-752, -383, 24, 23),//charge épée vers la droite 18
          cP(-780, -383, 24, 23),//charge épée vers la droite 19
          cP(-806, -383, 24, 23),//charge épée vers la droite 20
          cP(-832, -383, 29, 23),//charge épée vers la droite 21
          cP(-865, -383, 29, 23),//charge épée vers la droite 22
          cP(-896, -383, 29, 23),//charge épée vers la droite 23
          cP(-927, -383, 26, 23),//charge épée vers la droite 24
          cP(-955, -383, 25, 23),//charge épée vers la droite 25
          cP(-982, -383, 26, 23),//charge épée vers la droite 26
          cP(-1009, -383, 28, 23),//charge épée vers la droite 27
          cP(-1038, -383, 27, 23)//charge épée vers la droite 28
        ],[//indice 9 épée chargé
          cP(-722, -414, 24, 23)
        ],[//indice 10 marche avec l'épée chargé
          cP(-773, -457, 24, 23),//marche avec l'épée vers la droite 1
          cP(-799, -459, 24, 22),//marche avec l'épée vers la droite 2
          cP(-826, -459, 24, 22),//marche avec l'épée vers la droite 3
          cP(-853, -460, 24, 21)//marche avec l'épée vers la droite 4
        ],[//indice 11 coup d'épée chargé
          cP(-707, -911, 23, 23),//coup d'épée chargé vers la droite 1
          cP(-743, -911, 31, 23),//coup d'épée chargé vers la droite 2
          cP(-784, -912, 34, 23),//coup d'épée chargé vers la droite 3
          cP(-828, -911, 34, 23),//coup d'épée chargé vers la droite 4
          cP(-871, -911, 23, 23),//coup d'épée chargé vers la droite 5
          cP(-904, -911, 16, 31),//coup d'épée chargé vers la droite 6
          cP(-925, -911, 28, 23),//coup d'épée chargé vers la droite 7
          cP(-957, -911, 28, 23),//coup d'épée chargé vers la droite 8
          cP(-996, -905, 17, 29),//coup d'épée chargé vers la droite 9
          cP(-1022, -911, 28, 23),//coup d'épée chargé vers la droite 10
          cP(-1052, -911, 28, 23),//coup d'épée chargé vers la droite 11
          cP(-1086, -911, 23, 23)//coup d'épée chargé vers la droite 12
        ],[//indice 12 tir à l'arc
          cP(-772, -514, 17, 23),//tir à l'arc vers la droite 1
          cP(-796, -514, 19, 22),//tir à l'arc vers la droite 2
          cP(-823, -514, 20, 23)//tir à l'arc vers la droite 3
        ],[//indice 13 fléche
          cP(-885, -528, 15, 5),//fléche vers la droite 1
          cP(-910, -520, 11, 6),//fléche vers la droite 2
          cP(-910, -528, 11, 5),//fléche vers la droite 3
          cP(-910, -535, 11, 6)//fléche vers la droite 4
        ],[//indice 14 bléssé
          cP(-969, -188, 16, 21)//bléssé vers la droite
        ]
      ],[//indice 3 tomber
        cP(-914, -38, 22, 21),//tomber 1
        cP(-942, -40, 16, 16),//tomber 2
        cP(-963, -40, 13, 13),//tomber 3
        cP(-981, -42, 8, 8),//tomber 4
        cP(-930, -65, 7, 7),//tomber 5
        cP(-942, -67, 3, 3)//tomber 6
      ],[//indice 4 game over
        cP(-918, -80, 18, 21),//game over 1
        cP(-941, -87, 24, 22),//game over 2
        cP(-971, -87, 24, 15)//game over 3
      ],[[//indice 5 diagonal haut gauche et 0 pour marcher
        cP(-1013, -53, 14, 21),//diagonal haut gauche 1
        cP(-1034, -52, 14, 22),//diagonal haut gauche 2
        cP(-1054, -52, 16, 22)//diagonal haut gauche 3
        ]
      ],[[//indice 6 diagonal bas droite et 0 pour marcher
        cP(-1014, -80, 14, 20),//diagonal bas droite 1
        cP(-1035, -78, 14, 22),//diagonal bas droite 2
        cP(-1055, -78, 15, 22)//diagonal bas droite 3
        ]
      ]
    ],[//indice 2 bleu
      [//indice 0 vers le bas
        [//indice 1 marche
          cP(-101, -127, 16, 24),//marche vers l'avent 1
          cP(-124 -128, 16, 23),//marche vers l'avent 2
          cP(-148, -129, 16, 22),//marche vers l'avent 3
          cP(-171, -129, 16, 22),//marche vers l'avent 4 statick
          cP(-194, -130, 16, 22),//marche vers l'avent 5
          cP(-218, -128, 16, 23),//marche vers l'avent 6
          cP(-241, -127, 16, 24)//marche vers l'avent 7
        ],[ //indice 2 marche avec bouclier
          cP(-101, -157, 16, 24),//marche vers l'avent 1 avec un bouclier
          cP(-124, -158, 16, 23),//marche vers l'avent 2 avec un bouclier
          cP(-148, -159, 16, 22),//marche vers l'avent 3 avec un bouclier
          cP(-171, -159, 16, 22),//marche vers l'avent 4 avec un bouclier statick
          cP(-194, -159, 16, 22),//marche vers l'avent 5 avec un bouclier
          cP(-218, -158, 16, 23),//marche vers l'avent 6 avec un bouclier
          cP(-241, -157, 16, 24)//marche vers l'avent 7 avec un bouclier
        ],[//indice 3 Tiré
          cP(-107, -194, 16, 20),//Tiré vers le bas 1
          cP(-129, -194, 16, 20),//Tiré vers le bas 2
          cP(-149, -194, 24, 20),//Tiré vers le bas 3
          cP(-183, -193, 30, 21)//Tiré vers le bas 4
        ],[//indice 4 souléve un objet
          cP(-96, -242, 16, 19),//souléve vers le bas 1 un objet
          cP(-117, -243, 30, 18),//souléve vers le bas 1 un objet
          cP(-151, -243, 34, 19),//souléve vers le bas 2 un objet
          cP(-189, -233, 34, 28),//souléve vers le bas 3 un objet
          cP(-233, -221, 16, 40),//souléve vers le bas 4 un objet
          cP(-262, -227, 16, 34)//souléve vers le bas 5 un objet
        ],[//indice 5 pousse
          cP(-152, -281, 16, 20),//pousser vers le bas 1
          cP(-172, -282, 16, 19),//pousser vers le bas 2
          cP(-191, -283, 16, 18)//pousser vers le bas 3
        ],[//indice 6 marche avec un objet
          cP(-220, -281, 16, 22),//marche avec un objet vers le bas 1 et trouver objet
          cP(-241, -282, 16, 21),//marche avec un objet vers le bas 2
          cP(-261, -282, 16, 21),//marche avec un objet vers le bas 3
          cP(-283, -282, 16, 21)//marche avec un objet vers le bas 4
        ],[//indice 7 lancer un objet
          cP(-306, -282, 17, 21)//lancer un objet vers le bas 1
        ],[//indice 8 coup d'épée
          cP(-82, -308, 20, 23),//coup d'épée vers le bas 1
          cP(-107, -309, 21, 29),//coup d'épée vers le bas 2
          cP(-136, -309, 20, 31),//coup d'épée vers le bas 3
          cP(-162, -310, 20, 31),//coup d'épée vers le bas 4
          cP(-186, -310, 28, 29),//coup d'épée vers le bas 5
          cP(-217, -310, 32, 27)//coup d'épée vers le bas 6
        ],[//indice 9 charge épée
          cP(-11, -350, 19, 29),//charge épée vers le bas 1
          cP(-32, -350, 19, 29),//charge épée vers le bas 2
          cP(-55, -350, 19, 29),//charge épée vers le bas 3
          cP(-76, -350, 19, 29),//charge épée vers le bas 4
          cP(-98, -350, 19, 29),//charge épée vers le bas 5
          cP(-120, -350, 19, 29),//charge épée vers le bas 6
          cP(-145, -350, 19, 29),//charge épée vers le bas 7
          cP(-191, -350, 19, 29),//charge épée vers le bas 8
          cP(-215, -350, 19, 29),//charge épée vers le bas 9
          cP(-238, -350, 19, 29),//charge épée vers le bas 10
          cP(-262, -350, 19, 34),//charge épée vers le bas 11
          cP(-284, -350, 19, 34),//charge épée vers le bas 12
          cP(-307, -349, 19, 31),//charge épée vers le bas 13
          cP(-328, -349, 20, 32),//charge épée vers le bas 14
          cP(-24, -393, 19, 29)//charge épée vers le bas 15
        ],[//indice 10 épée chargé
          cP(-24, -393, 19, 29)
        ],[//indice 11 marche avec l'épée chargé
          cP(-14, -442, 19, 29),//marche avec l'épée vers le bas 1
          cP(-38, -442, 19, 29),//marche avec l'épée vers le bas 2
          cP(-60, -441, 19, 29),//marche avec l'épée vers le bas 3
          cP(-82, -442, 19, 29),//marche avec l'épée vers le bas 4
          cP(-103, -443, 19, 29)//marche avec l'épée vers le bas 5
        ],[//indice 12 coup d'épée chargé
          cP(-17, -915, 20, 26),//coup d'épée chargé vers le bas 1
          cP(-45, -913, 15, 35),//coup d'épée chargé vers le bas 2
          cP(-67, -903, 16, 38),//coup d'épée chargé vers le bas 3
          cP(-89, -914, 20, 26),//coup d'épée chargé vers le bas 4
          cP(-117, -918, 28, 22),//coup d'épée chargé vers le bas 5
          cP(-151, -918, 28, 22),//coup d'épée chargé vers le bas 6
          cP(-186, -917, 17, 31),//coup d'épée chargé vers le bas 7
          cP(-208, -918, 28, 22),//coup d'épée chargé vers le bas 8
          cP(-242, -918, 28, 22),//coup d'épée chargé vers le bas 9
          cP(-277, -912, 16, 28),//coup d'épée chargé vers le bas 10
          cP(-304, -914, 20, 26),//coup d'épée chargé vers le bas 11
          cP(-331, -918, 16, 22)//coup d'épée chargé vers le bas 12
        ],[//indice 13 tir à l'arc
          cP(-123, -497, 17, 24),//tir à l'arc vers le bas 1
          cP(-154, -498, 18, 21),//tir à l'arc vers le bas 2
          cP(-183, -497, 18, 22)//tir à l'arc vers le bas 3
        ],[//indice 14 fléche
          cP(-216, -503, 5, 15),//fléche vers le bas 1
          cP(-224, -503, 6, 11),//fléche vers le bas 2
          cP(-232, -503, 5, 11),//fléche vers le bas 3
          cP(-239, -503, 6, 11)//fléche vers le bas 4
        ],[//indice 15 bléssé
          cP(-271, -192, 16, 21)//bléssé vers le bas
        ]
    ],[//indice 1 vers le haut
        [//indice 0 marche
          cP(-456, -131, 16, 24),//marche vers le haut 1
          cP(-479, -132, 16, 23),//marche vers le haut 2
          cP(-503, -133, 16, 22),//marche vers le haut 3
          cP(-526, -133, 16, 22),//marche vers le haut 4 statick
          cP(-550, -133, 16, 22),//marche vers le haut 5
          cP(-573, -132, 16, 23),//marche vers le haut 6
          cP(-595, -131, 16, 24)//marche vers le haut 7
        ],[ //indice 1 marche avec bouclier
          cP(-456, -161, 17, 24),//marche vers le haut 1 avec un bouclier
          cP(-479, -162, 17, 23),//marche vers le haut 2 avec un bouclier
          cP(-503, -163, 17, 22),//marche vers le haut 3 avec un bouclier
          cP(-526, -163, 17, 22),//marche vers le haut 4 avec un bouclier statick
          cP(-550, -163, 17, 22),//marche vers le haut 5 avec un bouclier
          cP(-573, -162, 17, 23),//marche vers le haut 6 avec un bouclier
          cP(-595, -161, 17, 24)//marche vers le haut 7 avec un bouclier
        ],[//indice 2 Tiré
          cP(-473, -196, 16, 21),//Tiré vers le haut 1
          cP(-493, -197, 16, 20),//Tiré vers le haut 2
          cP(-514, -197, 24, 20),//Tiré vers le haut 3
          cP(-544, -197, 30, 20)//Tiré vers le haut 4
        ],[//indice 3 souléve un objet
          cP(-453, -226, 16, 31),//souléve vers le haut 1 un objet
          cP(-480, -226, 22, 31),//souléve vers le haut 1 un objet
          cP(-510, -226, 32, 31),//souléve vers le haut 2 un objet
          cP(-547, -225, 32, 32),//souléve vers le haut 3 un objet
          cP(-585, -224, 16, 33),//souléve vers le haut 4 un objet
          cP(-610, -223, 16, 34)//souléve vers le haut 5 un objet
        ],[//indice 4 pousse
          cP(-514, -278, 16, 22),//pousser vers le haut 1
          cP(-534, -279, 16, 21),//pousser vers le haut 2
          cP(-554, -279, 16, 21)//pousser vers le haut 3
        ],[//indice 5 marche avec un objet
          cP(-585, -279, 16, 22),//marche avec un objet vers le haut 1
          cP(-611, -280, 16, 21),//marche avec un objet vers le haut 2
          cP(-635, -279, 16, 22),//marche avec un objet vers le haut 3
          cP(-657, -280, 16, 21)//marche avec un objet vers le haut 4
        ],[//indice 6 lancer un objet
          cP(-585, -279, 16, 22)//lancer un objet vers le haut
        ],[//indice 7 coup d'épée
        cP(-407, -317, 23, 22),//coup d'épée vers le haut 1
        cP(-438, -317, 22, 22),//coup d'épée vers le haut 2
        cP(-469, -315, 23, 24),//coup d'épée vers le haut 3
        cP(-500, -309, 22, 30),//coup d'épée vers le haut 4
        cP(-530, -307, 20, 32),//coup d'épée vers le haut 5
        cP(-555, -304, 20, 35),//coup d'épée vers le haut 6
        cP(-579, -309, 24, 30),//coup d'épée vers le haut 7
        cP(-606, -312, 29, 27),//coup d'épée vers le haut 8
        cP(-641, -316, 32, 23)//coup d'épée vers le haut 9
      ],[//indice 9 charge épée
        cP(-402, -352, 19, 26),//charge épée vers le haut 1
        cP(-425, -352, 19, 26),//charge épée vers le haut 2
        cP(-447, -352, 19, 26),//charge épée vers le haut 3
        cP(-468, -352, 19, 26),//charge épée vers le haut 4
        cP(-490, -352, 19, 26),//charge épée vers le haut 5
        cP(-511, -352, 19, 26),//charge épée vers le haut 6
        cP(-533, -352, 19, 26),//charge épée vers le haut 7
        cP(-554, -352, 19, 26),//charge épée vers le haut 8
        cP(-575, -352, 19, 26),//charge épée vers le haut 9
        cP(-597, -351, 19, 27),//charge épée vers le haut 10
        cP(-618, -350, 19, 28),//charge épée vers le haut 11
        cP(-639, -347, 19, 31),//charge épée vers le haut 12
        cP(-660, -348, 19, 30),//charge épée vers le haut 13
        cP(-402, -383, 19, 31),//charge épée vers le haut 14
        cP(-424, -382, 19, 32),//charge épée vers le haut 15
        cP(-448, -381, 19, 33)//charge épée vers le haut 16
      ],[//indice 10 épée chargé
        cP(-496, -394, 19, 26)
      ],[//indice 11 marche avec l'épée chargé
        cP(-411, -436, 19, 25),//marche avec l'épée vers le bas 1
        cP(-432, -436, 19, 25),//marche avec l'épée vers le bas 2
        cP(-455, -436, 19, 25),//marche avec l'épée vers le bas 3
        cP(-477, -436, 19, 25),//marche avec l'épée vers le bas 4
        cP(-501, -436, 19, 25)//marche avec l'épée vers le bas 5
      ],[//indice 12 coup d'épée chargé
        cP(-368, -914, 20, 27),//coup d'épée chargé vers le bas 1
        cP(-397, -915, 15, 35),//coup d'épée chargé vers le bas 2
        cP(-422, -914, 17, 38),//coup d'épée chargé vers le bas 3
        cP(-449, -914, 17, 38),//coup d'épée chargé vers le bas 4
        cP(-476, -914, 20, 27),//coup d'épée chargé vers le bas 5
        cP(-501, -914, 28, 22),//coup d'épée chargé vers le bas 6
        cP(-538, -908, 16, 28),//coup d'épée chargé vers le bas 7
        cP(-562, -914, 28, 22),//coup d'épée chargé vers le bas 8
        cP(-601, -914, 16, 31),//coup d'épée chargé vers le bas 9
        cP(-627, -915, 17, 31),//coup d'épée chargé vers le bas 10
        cP(-648, -915, 20, 27),//coup d'épée chargé vers le bas 11
        cP(-678, -915, 17, 22)//coup d'épée chargé vers le bas 12
      ],[//indice 13 tir à l'arc
        cP(-432, -492, 18, 22),//tir à l'arc vers le bas 1
        cP(-457, -493, 21, 21),//tir à l'arc vers le bas 2
        cP(-486, -492, 21, 22)//tir à l'arc vers le bas 3
      ],[//indice 14 fléche
        cP(-517, -499, 5, 15),//fléche vers le bas 1
        cP(-525, -503, 6, 11),//fléche vers le bas 2
        cP(-533, -503, 5, 11),//fléche vers le bas 3
        cP(-540, -503, 6, 11)//fléche vers le bas 4
      ],[//indice 15 bléssé
        cP(-635, -197, 20, 19)//bléssé vers le bas
      ]
    ],[//indice 2 vers la droite
        [//indice 0 marche
          cP(-787, -128, 16, 23),//marche vers la droite 1
          cP(-810, -127, 16, 24),//marche vers la droite 2
          cP(-835, -127, 16, 24),//marche vers la droite 3
          cP(-857, -128, 16, 23),//marche vers la droite 4 statick
          cP(-881, -127, 16, 24),//marche vers la droite 5
          cP(-905, -127, 16, 24),//marche vers la droite 6
          cP(-927, -128, 17, 23),//marche vers la droite 7
          cP(-948, -128, 16, 23)//marche vers la droite 8
        ],[ //indice 1 marche avec bouclier
          cP(-789, -158, 18, 23),//marche vers la droite 1 avec un bouclier
          cP(-812, -157, 18, 24),//marche vers la droite 2 avec un bouclier
          cP(-837, -157, 19, 24),//marche vers la droite 3 avec un bouclier
          cP(-859, -158, 19, 23),//marche vers la droite 4 avec un bouclier statick
          cP(-883, -157, 19, 24),//marche vers la droite 5 avec un bouclier
          cP(-907, -157, 18, 24),//marche vers la droite 6 avec un bouclier
          cP(-929, -158, 19, 23)//marche vers la droite 7 avec un bouclier
        ],[//indice 2 Tiré
          cP(-815, -186, 16, 23),//Tiré vers la droite 1
          cP(-838, -187, 19, 22),//Tiré vers la droite 2
          cP(-867, -187, 21, 22),//Tiré vers la droite 2
          cP(-897, -187, 20, 22)//Tiré vers la droite 2
        ],[//indice 3 souléve un objet
          cP(-790, -217, 25, 20),//souléve vers la droite 1 sans objet
          cP(-822, -216, 31, 21),//souléve vers la droite 2 sans objet
          cP(-860, -216, 34, 21),//souléve vers la droite 3 sans objet
          cP(-899, -216, 31, 21),//souléve vers la droite 4 sans objet
          cP(-937, -214, 16, 23),//souléve vers la droite 5 sans objet
          cP(-768, -251, 27, 27),//souléve vers la droite 1 un objet
          cP(-800, -251, 33, 27),//souléve vers la droite 2 un objet
          cP(-838, -251, 36, 27),//souléve vers la droite 3 un objet
          cP(-877, -248, 33, 30),//souléve vers la droite 4 un objet
          cP(-921, -245, 22, 33),//souléve vers la droite 5 un objet
          cP(-949, -243, 17, 35)//souléve vers la droite 6 un objet
        ],[//indice 4 pousse
          cP(-833, -285, 16, 23),//pousser vers la droite 1
          cP(-853, -286, 16, 23),//pousser vers la droite 2
          cP(-873, -287, 16, 22),//pousser vers la droite 3
          cP(-894, -288, 16, 21)//pousser vers la droite 4
        ],[//indice 5 marche avec un objet
          cP(-922, -286, 16, 24),//marche avec un objet vers la droite 1
          cP(-944, -288, 16, 22),//marche avec un objet vers la droite 2
          cP(-967, -289, 17, 21)//marche avec un objet vers la droite 3
        ],[//indice 6 lancer un objet
          cP(-1013, -286, 16, 23)//lancer un objet vers la droite 1
        ],[//indice 7 coup d'épée
        cP(-751, -318, 16, 23),//coup d'épée vers la droite 1
        cP(-774, -318, 18, 23),//coup d'épée vers la droite 2
        cP(-797, -317, 23, 24),//coup d'épée vers la droite 3
        cP(-826, -317, 26, 24),//coup d'épée vers la droite 4
        cP(-856, -320, 29, 21),//coup d'épée vers la droite 5
        cP(-890, -320, 28, 21),//coup d'épée vers la droite 6
        cP(-928, -320, 28, 21),//coup d'épée vers la droite 4
        cP(-958, -319, 28, 28),//coup d'épée vers la droite 5
        cP(-997, -317, 23, 31)//coup d'épée vers la droite 6
        ],[//indice 9 charge épée
          cP(-700, -358, 24, 23),//charge épée vers la droite 1
          cP(-726, -358, 24, 23),//charge épée vers la droite 2
          cP(-752, -358, 24, 23),//charge épée vers la droite 3
          cP(-778, -358, 24, 23),//charge épée vers la droite 4
          cP(-804, -358, 24, 23),//charge épée vers la droite 5
          cP(-830, -358, 24, 23),//charge épée vers la droite 6
          cP(-856, -358, 24, 23),//charge épée vers la droite 7
          cP(-882, -358, 24, 23),//charge épée vers la droite 8
          cP(-908, -358, 24, 23),//charge épée vers la droite 9
          cP(-934, -358, 24, 23),//charge épée vers la droite 10
          cP(-960, -358, 24, 23),//charge épée vers la droite 11
          cP(-986, -358, 24, 23),//charge épée vers la droite 12
          cP(-1012, -358, 24, 23),//charge épée vers la droite 13
          cP(-1038, -358, 24, 23),//charge épée vers la droite 14
          cP(-1064, -358, 24, 23),//charge épée vers la droite 15
          cP(-700, -383, 24, 23),//charge épée vers la droite 16
          cP(-726, -383, 24, 23),//charge épée vers la droite 17
          cP(-752, -383, 24, 23),//charge épée vers la droite 18
          cP(-780, -383, 24, 23),//charge épée vers la droite 19
          cP(-806, -383, 24, 23),//charge épée vers la droite 20
          cP(-832, -383, 29, 23),//charge épée vers la droite 21
          cP(-865, -383, 29, 23),//charge épée vers la droite 22
          cP(-896, -383, 29, 23),//charge épée vers la droite 23
          cP(-927, -383, 26, 23),//charge épée vers la droite 24
          cP(-955, -383, 25, 23),//charge épée vers la droite 25
          cP(-982, -383, 26, 23),//charge épée vers la droite 26
          cP(-1009, -383, 28, 23),//charge épée vers la droite 27
          cP(-1038, -383, 27, 23)//charge épée vers la droite 28
        ],[//indice 10 épée chargé
          cP(-722, -414, 24, 23)
        ],[//indice 11 marche avec l'épée chargé
          cP(-773, -457, 24, 23),//marche avec l'épée vers la droite 1
          cP(-799, -459, 24, 22),//marche avec l'épée vers la droite 2
          cP(-826, -459, 24, 22),//marche avec l'épée vers la droite 3
          cP(-853, -460, 24, 21)//marche avec l'épée vers la droite 4
        ],[//indice 12 coup d'épée chargé
          cP(-707, -911, 23, 23),//coup d'épée chargé vers la droite 1
          cP(-743, -911, 31, 23),//coup d'épée chargé vers la droite 2
          cP(-784, -912, 34, 23),//coup d'épée chargé vers la droite 3
          cP(-828, -911, 34, 23),//coup d'épée chargé vers la droite 4
          cP(-871, -911, 23, 23),//coup d'épée chargé vers la droite 5
          cP(-904, -911, 16, 31),//coup d'épée chargé vers la droite 6
          cP(-925, -911, 28, 23),//coup d'épée chargé vers la droite 7
          cP(-957, -911, 28, 23),//coup d'épée chargé vers la droite 8
          cP(-996, -905, 17, 29),//coup d'épée chargé vers la droite 9
          cP(-1022, -911, 28, 23),//coup d'épée chargé vers la droite 10
          cP(-1052, -911, 28, 23),//coup d'épée chargé vers la droite 11
          cP(-1086, -911, 23, 23)//coup d'épée chargé vers la droite 12
        ],[//indice 13 tir à l'arc
          cP(-772, -514, 17, 23),//tir à l'arc vers la droite 1
          cP(-796, -514, 19, 22),//tir à l'arc vers la droite 2
          cP(-823, -514, 20, 23)//tir à l'arc vers la droite 3
        ],[//indice 14 fléche
          cP(-885, -528, 15, 5),//fléche vers la droite 1
          cP(-910, -520, 11, 6),//fléche vers la droite 2
          cP(-910, -528, 11, 5),//fléche vers la droite 3
          cP(-910, -535, 11, 6)//fléche vers la droite 4
        ],[//indice 15 bléssé
          cP(-969, -188, 16, 21)//bléssé vers la droite
        ]
      ],[//indice 3 tomber
        cP(-914, -38, 22, 21),//tomber 1
        cP(-942, -40, 16, 16),//tomber 2
        cP(-963, -40, 13, 13),//tomber 3
        cP(-981, -42, 8, 8),//tomber 4
        cP(-930, -65, 7, 7),//tomber 5
        cP(-942, -67, 3, 3)//tomber 6
      ],[//indice 4 game over
        cP(-918, -80, 18, 21),//game over 1
        cP(-941, -87, 24, 22),//game over 2
        cP(-971, -87, 24, 15)//game over 3
      ],[//indice 5 diagonal haut gauche
        cP(-1013, -53, 14, 21),//diagonal haut gauche 1
        cP(-1034, -52, 14, 22),//diagonal haut gauche 2
        cP(-1054, -57, 16, 22)//diagonal haut gauche 3
      ],[//indice 6 diagonal bas droite
        cP(-1014, -80, 14, 20),//diagonal bas droite 1
        cP(-1035, -78, 14, 22),//diagonal bas droite 2
        cP(-1055, -78, 15, 22)//diagonal bas droite 3
      ]
    ],[//indice 3 rouge
      [//indice 0 vers le bas
        [//indice 1 marche
          cP(-101, -127, 16, 24),//marche vers l'avent 1
          cP(-124 -128, 16, 23),//marche vers l'avent 2
          cP(-148, -129, 16, 22),//marche vers l'avent 3
          cP(-171, -129, 16, 22),//marche vers l'avent 4 statick
          cP(-194, -130, 16, 22),//marche vers l'avent 5
          cP(-218, -128, 16, 23),//marche vers l'avent 6
          cP(-241, -127, 16, 24)//marche vers l'avent 7
        ],[ //indice 2 marche avec bouclier
          cP(-101, -157, 16, 24),//marche vers l'avent 1 avec un bouclier
          cP(-124, -158, 16, 23),//marche vers l'avent 2 avec un bouclier
          cP(-148, -159, 16, 22),//marche vers l'avent 3 avec un bouclier
          cP(-171, -159, 16, 22),//marche vers l'avent 4 avec un bouclier statick
          cP(-194, -159, 16, 22),//marche vers l'avent 5 avec un bouclier
          cP(-218, -158, 16, 23),//marche vers l'avent 6 avec un bouclier
          cP(-241, -157, 16, 24)//marche vers l'avent 7 avec un bouclier
        ],[//indice 3 Tiré
          cP(-107, -194, 16, 20),//Tiré vers le bas 1
          cP(-129, -194, 16, 20),//Tiré vers le bas 2
          cP(-149, -194, 24, 20),//Tiré vers le bas 3
          cP(-183, -193, 30, 21)//Tiré vers le bas 4
        ],[//indice 4 souléve un objet
          cP(-96, -242, 16, 19),//souléve vers le bas 1 un objet
          cP(-117, -243, 30, 18),//souléve vers le bas 1 un objet
          cP(-151, -243, 34, 19),//souléve vers le bas 2 un objet
          cP(-189, -233, 34, 28),//souléve vers le bas 3 un objet
          cP(-233, -221, 16, 40),//souléve vers le bas 4 un objet
          cP(-262, -227, 16, 34)//souléve vers le bas 5 un objet
        ],[//indice 5 pousse
          cP(-152, -281, 16, 20),//pousser vers le bas 1
          cP(-172, -282, 16, 19),//pousser vers le bas 2
          cP(-191, -283, 16, 18)//pousser vers le bas 3
        ],[//indice 6 marche avec un objet
          cP(-220, -281, 16, 22),//marche avec un objet vers le bas 1 et trouver objet
          cP(-241, -282, 16, 21),//marche avec un objet vers le bas 2
          cP(-261, -282, 16, 21),//marche avec un objet vers le bas 3
          cP(-283, -282, 16, 21)//marche avec un objet vers le bas 4
        ],[//indice 7 lancer un objet
          cP(-306, -282, 17, 21)//lancer un objet vers le bas 1
        ],[//indice 8 coup d'épée
          cP(-82, -308, 20, 23),//coup d'épée vers le bas 1
          cP(-107, -309, 21, 29),//coup d'épée vers le bas 2
          cP(-136, -309, 20, 31),//coup d'épée vers le bas 3
          cP(-162, -310, 20, 31),//coup d'épée vers le bas 4
          cP(-186, -310, 28, 29),//coup d'épée vers le bas 5
          cP(-217, -310, 32, 27)//coup d'épée vers le bas 6
        ],[//indice 9 charge épée
          cP(-11, -350, 19, 29),//charge épée vers le bas 1
          cP(-32, -350, 19, 29),//charge épée vers le bas 2
          cP(-55, -350, 19, 29),//charge épée vers le bas 3
          cP(-76, -350, 19, 29),//charge épée vers le bas 4
          cP(-98, -350, 19, 29),//charge épée vers le bas 5
          cP(-120, -350, 19, 29),//charge épée vers le bas 6
          cP(-145, -350, 19, 29),//charge épée vers le bas 7
          cP(-191, -350, 19, 29),//charge épée vers le bas 8
          cP(-215, -350, 19, 29),//charge épée vers le bas 9
          cP(-238, -350, 19, 29),//charge épée vers le bas 10
          cP(-262, -350, 19, 34),//charge épée vers le bas 11
          cP(-284, -350, 19, 34),//charge épée vers le bas 12
          cP(-307, -349, 19, 31),//charge épée vers le bas 13
          cP(-328, -349, 20, 32),//charge épée vers le bas 14
          cP(-24, -393, 19, 29)//charge épée vers le bas 15
        ],[//indice 10 épée chargé
          cP(-24, -393, 19, 29)
        ],[//indice 11 marche avec l'épée chargé
          cP(-14, -442, 19, 29),//marche avec l'épée vers le bas 1
          cP(-38, -442, 19, 29),//marche avec l'épée vers le bas 2
          cP(-60, -441, 19, 29),//marche avec l'épée vers le bas 3
          cP(-82, -442, 19, 29),//marche avec l'épée vers le bas 4
          cP(-103, -443, 19, 29)//marche avec l'épée vers le bas 5
        ],[//indice 12 coup d'épée chargé
          cP(-17, -915, 20, 26),//coup d'épée chargé vers le bas 1
          cP(-45, -913, 15, 35),//coup d'épée chargé vers le bas 2
          cP(-67, -903, 16, 38),//coup d'épée chargé vers le bas 3
          cP(-89, -914, 20, 26),//coup d'épée chargé vers le bas 4
          cP(-117, -918, 28, 22),//coup d'épée chargé vers le bas 5
          cP(-151, -918, 28, 22),//coup d'épée chargé vers le bas 6
          cP(-186, -917, 17, 31),//coup d'épée chargé vers le bas 7
          cP(-208, -918, 28, 22),//coup d'épée chargé vers le bas 8
          cP(-242, -918, 28, 22),//coup d'épée chargé vers le bas 9
          cP(-277, -912, 16, 28),//coup d'épée chargé vers le bas 10
          cP(-304, -914, 20, 26),//coup d'épée chargé vers le bas 11
          cP(-331, -918, 16, 22)//coup d'épée chargé vers le bas 12
        ],[//indice 13 tir à l'arc
          cP(-123, -497, 17, 24),//tir à l'arc vers le bas 1
          cP(-154, -498, 18, 21),//tir à l'arc vers le bas 2
          cP(-183, -497, 18, 22)//tir à l'arc vers le bas 3
        ],[//indice 14 fléche
          cP(-216, -503, 5, 15),//fléche vers le bas 1
          cP(-224, -503, 6, 11),//fléche vers le bas 2
          cP(-232, -503, 5, 11),//fléche vers le bas 3
          cP(-239, -503, 6, 11)//fléche vers le bas 4
        ],[//indice 15 bléssé
          cP(-271, -192, 16, 21)//bléssé vers le bas
        ]
    ],[//indice 1 vers le haut
        [//indice 0 marche
          cP(-456, -131, 16, 24),//marche vers le haut 1
          cP(-479, -132, 16, 23),//marche vers le haut 2
          cP(-503, -133, 16, 22),//marche vers le haut 3
          cP(-526, -133, 16, 22),//marche vers le haut 4 statick
          cP(-550, -133, 16, 22),//marche vers le haut 5
          cP(-573, -132, 16, 23),//marche vers le haut 6
          cP(-595, -131, 16, 24)//marche vers le haut 7
        ],[ //indice 1 marche avec bouclier
          cP(-456, -161, 17, 24),//marche vers le haut 1 avec un bouclier
          cP(-479, -162, 17, 23),//marche vers le haut 2 avec un bouclier
          cP(-503, -163, 17, 22),//marche vers le haut 3 avec un bouclier
          cP(-526, -163, 17, 22),//marche vers le haut 4 avec un bouclier statick
          cP(-550, -163, 17, 22),//marche vers le haut 5 avec un bouclier
          cP(-573, -162, 17, 23),//marche vers le haut 6 avec un bouclier
          cP(-595, -161, 17, 24)//marche vers le haut 7 avec un bouclier
        ],[//indice 2 Tiré
          cP(-473, -196, 16, 21),//Tiré vers le haut 1
          cP(-493, -197, 16, 20),//Tiré vers le haut 2
          cP(-514, -197, 24, 20),//Tiré vers le haut 3
          cP(-544, -197, 30, 20)//Tiré vers le haut 4
        ],[//indice 3 souléve un objet
          cP(-453, -226, 16, 31),//souléve vers le haut 1 un objet
          cP(-480, -226, 22, 31),//souléve vers le haut 1 un objet
          cP(-510, -226, 32, 31),//souléve vers le haut 2 un objet
          cP(-547, -225, 32, 32),//souléve vers le haut 3 un objet
          cP(-585, -224, 16, 33),//souléve vers le haut 4 un objet
          cP(-610, -223, 16, 34)//souléve vers le haut 5 un objet
        ],[//indice 4 pousse
          cP(-514, -278, 16, 22),//pousser vers le haut 1
          cP(-534, -279, 16, 21),//pousser vers le haut 2
          cP(-554, -279, 16, 21)//pousser vers le haut 3
        ],[//indice 5 marche avec un objet
          cP(-585, -279, 16, 22),//marche avec un objet vers le haut 1
          cP(-611, -280, 16, 21),//marche avec un objet vers le haut 2
          cP(-635, -279, 16, 22),//marche avec un objet vers le haut 3
          cP(-657, -280, 16, 21)//marche avec un objet vers le haut 4
        ],[//indice 6 lancer un objet
          cP(-585, -279, 16, 22)//lancer un objet vers le haut
        ],[//indice 7 coup d'épée
        cP(-407, -317, 23, 22),//coup d'épée vers le haut 1
        cP(-438, -317, 22, 22),//coup d'épée vers le haut 2
        cP(-469, -315, 23, 24),//coup d'épée vers le haut 3
        cP(-500, -309, 22, 30),//coup d'épée vers le haut 4
        cP(-530, -307, 20, 32),//coup d'épée vers le haut 5
        cP(-555, -304, 20, 35),//coup d'épée vers le haut 6
        cP(-579, -309, 24, 30),//coup d'épée vers le haut 7
        cP(-606, -312, 29, 27),//coup d'épée vers le haut 8
        cP(-641, -316, 32, 23)//coup d'épée vers le haut 9
      ],[//indice 9 charge épée
        cP(-402, -352, 19, 26),//charge épée vers le haut 1
        cP(-425, -352, 19, 26),//charge épée vers le haut 2
        cP(-447, -352, 19, 26),//charge épée vers le haut 3
        cP(-468, -352, 19, 26),//charge épée vers le haut 4
        cP(-490, -352, 19, 26),//charge épée vers le haut 5
        cP(-511, -352, 19, 26),//charge épée vers le haut 6
        cP(-533, -352, 19, 26),//charge épée vers le haut 7
        cP(-554, -352, 19, 26),//charge épée vers le haut 8
        cP(-575, -352, 19, 26),//charge épée vers le haut 9
        cP(-597, -351, 19, 27),//charge épée vers le haut 10
        cP(-618, -350, 19, 28),//charge épée vers le haut 11
        cP(-639, -347, 19, 31),//charge épée vers le haut 12
        cP(-660, -348, 19, 30),//charge épée vers le haut 13
        cP(-402, -383, 19, 31),//charge épée vers le haut 14
        cP(-424, -382, 19, 32),//charge épée vers le haut 15
        cP(-448, -381, 19, 33)//charge épée vers le haut 16
      ],[//indice 10 épée chargé
        cP(-496, -394, 19, 26)
      ],[//indice 11 marche avec l'épée chargé
        cP(-411, -436, 19, 25),//marche avec l'épée vers le bas 1
        cP(-432, -436, 19, 25),//marche avec l'épée vers le bas 2
        cP(-455, -436, 19, 25),//marche avec l'épée vers le bas 3
        cP(-477, -436, 19, 25),//marche avec l'épée vers le bas 4
        cP(-501, -436, 19, 25)//marche avec l'épée vers le bas 5
      ],[//indice 12 coup d'épée chargé
        cP(-368, -914, 20, 27),//coup d'épée chargé vers le bas 1
        cP(-397, -915, 15, 35),//coup d'épée chargé vers le bas 2
        cP(-422, -914, 17, 38),//coup d'épée chargé vers le bas 3
        cP(-449, -914, 17, 38),//coup d'épée chargé vers le bas 4
        cP(-476, -914, 20, 27),//coup d'épée chargé vers le bas 5
        cP(-501, -914, 28, 22),//coup d'épée chargé vers le bas 6
        cP(-538, -908, 16, 28),//coup d'épée chargé vers le bas 7
        cP(-562, -914, 28, 22),//coup d'épée chargé vers le bas 8
        cP(-601, -914, 16, 31),//coup d'épée chargé vers le bas 9
        cP(-627, -915, 17, 31),//coup d'épée chargé vers le bas 10
        cP(-648, -915, 20, 27),//coup d'épée chargé vers le bas 11
        cP(-678, -915, 17, 22)//coup d'épée chargé vers le bas 12
      ],[//indice 13 tir à l'arc
        cP(-432, -492, 18, 22),//tir à l'arc vers le bas 1
        cP(-457, -493, 21, 21),//tir à l'arc vers le bas 2
        cP(-486, -492, 21, 22)//tir à l'arc vers le bas 3
      ],[//indice 14 fléche
        cP(-517, -499, 5, 15),//fléche vers le bas 1
        cP(-525, -503, 6, 11),//fléche vers le bas 2
        cP(-533, -503, 5, 11),//fléche vers le bas 3
        cP(-540, -503, 6, 11)//fléche vers le bas 4
      ],[//indice 15 bléssé
        cP(-635, -197, 20, 19)//bléssé vers le bas
      ]
    ],[//indice 2 vers la droite
        [//indice 0 marche
          cP(-787, -128, 16, 23),//marche vers la droite 1
          cP(-810, -127, 16, 24),//marche vers la droite 2
          cP(-835, -127, 16, 24),//marche vers la droite 3
          cP(-857, -128, 16, 23),//marche vers la droite 4 statick
          cP(-881, -127, 16, 24),//marche vers la droite 5
          cP(-905, -127, 16, 24),//marche vers la droite 6
          cP(-927, -128, 17, 23),//marche vers la droite 7
          cP(-948, -128, 16, 23)//marche vers la droite 8
        ],[ //indice 1 marche avec bouclier
          cP(-789, -158, 18, 23),//marche vers la droite 1 avec un bouclier
          cP(-812, -157, 18, 24),//marche vers la droite 2 avec un bouclier
          cP(-837, -157, 19, 24),//marche vers la droite 3 avec un bouclier
          cP(-859, -158, 19, 23),//marche vers la droite 4 avec un bouclier statick
          cP(-883, -157, 19, 24),//marche vers la droite 5 avec un bouclier
          cP(-907, -157, 18, 24),//marche vers la droite 6 avec un bouclier
          cP(-929, -158, 19, 23)//marche vers la droite 7 avec un bouclier
        ],[//indice 2 Tiré
          cP(-815, -186, 16, 23),//Tiré vers la droite 1
          cP(-838, -187, 19, 22),//Tiré vers la droite 2
          cP(-867, -187, 21, 22),//Tiré vers la droite 2
          cP(-897, -187, 20, 22)//Tiré vers la droite 2
        ],[//indice 3 souléve un objet
          cP(-790, -217, 25, 20),//souléve vers la droite 1 sans objet
          cP(-822, -216, 31, 21),//souléve vers la droite 2 sans objet
          cP(-860, -216, 34, 21),//souléve vers la droite 3 sans objet
          cP(-899, -216, 31, 21),//souléve vers la droite 4 sans objet
          cP(-937, -214, 16, 23),//souléve vers la droite 5 sans objet
          cP(-768, -251, 27, 27),//souléve vers la droite 1 un objet
          cP(-800, -251, 33, 27),//souléve vers la droite 2 un objet
          cP(-838, -251, 36, 27),//souléve vers la droite 3 un objet
          cP(-877, -248, 33, 30),//souléve vers la droite 4 un objet
          cP(-921, -245, 22, 33),//souléve vers la droite 5 un objet
          cP(-949, -243, 17, 35)//souléve vers la droite 6 un objet
        ],[//indice 4 pousse
          cP(-833, -285, 16, 23),//pousser vers la droite 1
          cP(-853, -286, 16, 23),//pousser vers la droite 2
          cP(-873, -287, 16, 22),//pousser vers la droite 3
          cP(-894, -288, 16, 21)//pousser vers la droite 4
        ],[//indice 5 marche avec un objet
          cP(-922, -286, 16, 24),//marche avec un objet vers la droite 1
          cP(-944, -288, 16, 22),//marche avec un objet vers la droite 2
          cP(-967, -289, 17, 21)//marche avec un objet vers la droite 3
        ],[//indice 6 lancer un objet
          cP(-1013, -286, 16, 23)//lancer un objet vers la droite 1
        ],[//indice 7 coup d'épée
          cP(-751, -318, 16, 23),//coup d'épée vers la droite 1
          cP(-774, -318, 18, 23),//coup d'épée vers la droite 2
          cP(-797, -317, 23, 24),//coup d'épée vers la droite 3
          cP(-826, -317, 26, 24),//coup d'épée vers la droite 4
          cP(-856, -320, 29, 21),//coup d'épée vers la droite 5
          cP(-890, -320, 28, 21),//coup d'épée vers la droite 6
          cP(-928, -320, 28, 21),//coup d'épée vers la droite 4
          cP(-958, -319, 28, 28),//coup d'épée vers la droite 5
          cP(-997, -317, 23, 31)//coup d'épée vers la droite 6
        ],[//indice 9 charge épée
          cP(-700, -358, 24, 23),//charge épée vers la droite 1
          cP(-726, -358, 24, 23),//charge épée vers la droite 2
          cP(-752, -358, 24, 23),//charge épée vers la droite 3
          cP(-778, -358, 24, 23),//charge épée vers la droite 4
          cP(-804, -358, 24, 23),//charge épée vers la droite 5
          cP(-830, -358, 24, 23),//charge épée vers la droite 6
          cP(-856, -358, 24, 23),//charge épée vers la droite 7
          cP(-882, -358, 24, 23),//charge épée vers la droite 8
          cP(-908, -358, 24, 23),//charge épée vers la droite 9
          cP(-934, -358, 24, 23),//charge épée vers la droite 10
          cP(-960, -358, 24, 23),//charge épée vers la droite 11
          cP(-986, -358, 24, 23),//charge épée vers la droite 12
          cP(-1012, -358, 24, 23),//charge épée vers la droite 13
          cP(-1038, -358, 24, 23),//charge épée vers la droite 14
          cP(-1064, -358, 24, 23),//charge épée vers la droite 15
          cP(-700, -383, 24, 23),//charge épée vers la droite 16
          cP(-726, -383, 24, 23),//charge épée vers la droite 17
          cP(-752, -383, 24, 23),//charge épée vers la droite 18
          cP(-780, -383, 24, 23),//charge épée vers la droite 19
          cP(-806, -383, 24, 23),//charge épée vers la droite 20
          cP(-832, -383, 29, 23),//charge épée vers la droite 21
          cP(-865, -383, 29, 23),//charge épée vers la droite 22
          cP(-896, -383, 29, 23),//charge épée vers la droite 23
          cP(-927, -383, 26, 23),//charge épée vers la droite 24
          cP(-955, -383, 25, 23),//charge épée vers la droite 25
          cP(-982, -383, 26, 23),//charge épée vers la droite 26
          cP(-1009, -383, 28, 23),//charge épée vers la droite 27
          cP(-1038, -383, 27, 23)//charge épée vers la droite 28
        ],[//indice 10 épée chargé
          cP(-722, -414, 24, 23)
        ],[//indice 11 marche avec l'épée chargé
          cP(-773, -457, 24, 23),//marche avec l'épée vers la droite 1
          cP(-799, -459, 24, 22),//marche avec l'épée vers la droite 2
          cP(-826, -459, 24, 22),//marche avec l'épée vers la droite 3
          cP(-853, -460, 24, 21)//marche avec l'épée vers la droite 4
        ],[//indice 12 coup d'épée chargé
          cP(-707, -911, 23, 23),//coup d'épée chargé vers la droite 1
          cP(-743, -911, 31, 23),//coup d'épée chargé vers la droite 2
          cP(-784, -912, 34, 23),//coup d'épée chargé vers la droite 3
          cP(-828, -911, 34, 23),//coup d'épée chargé vers la droite 4
          cP(-871, -911, 23, 23),//coup d'épée chargé vers la droite 5
          cP(-904, -911, 16, 31),//coup d'épée chargé vers la droite 6
          cP(-925, -911, 28, 23),//coup d'épée chargé vers la droite 7
          cP(-957, -911, 28, 23),//coup d'épée chargé vers la droite 8
          cP(-996, -905, 17, 29),//coup d'épée chargé vers la droite 9
          cP(-1022, -911, 28, 23),//coup d'épée chargé vers la droite 10
          cP(-1052, -911, 28, 23),//coup d'épée chargé vers la droite 11
          cP(-1086, -911, 23, 23)//coup d'épée chargé vers la droite 12
        ],[//indice 13 tir à l'arc
          cP(-772, -514, 17, 23),//tir à l'arc vers la droite 1
          cP(-796, -514, 19, 22),//tir à l'arc vers la droite 2
          cP(-823, -514, 20, 23)//tir à l'arc vers la droite 3
        ],[//indice 14 fléche
          cP(-885, -528, 15, 5),//fléche vers la droite 1
          cP(-910, -520, 11, 6),//fléche vers la droite 2
          cP(-910, -528, 11, 5),//fléche vers la droite 3
          cP(-910, -535, 11, 6)//fléche vers la droite 4
        ],[//indice 15 bléssé
          cP(-969, -188, 16, 21)//bléssé vers la droite
        ]
      ],[//indice 3 tomber
        cP(-914, -38, 22, 21),//tomber 1
        cP(-942, -40, 16, 16),//tomber 2
        cP(-963, -40, 13, 13),//tomber 3
        cP(-981, -42, 8, 8),//tomber 4
        cP(-930, -65, 7, 7),//tomber 5
        cP(-942, -67, 3, 3)//tomber 6
      ],[//indice 4 game over
        cP(-918, -80, 18, 21),//game over 1
        cP(-941, -87, 24, 22),//game over 2
        cP(-971, -87, 24, 15)//game over 3
      ],[//indice 5 diagonal haut gauche
        cP(-1013, -53, 14, 21),//diagonal haut gauche 1
        cP(-1034, -52, 14, 22),//diagonal haut gauche 2
        cP(-1054, -57, 16, 22)//diagonal haut gauche 3
      ],[//indice 6 diagonal bas droite
        cP(-1014, -80, 14, 20),//diagonal bas droite 1
        cP(-1035, -78, 14, 22),//diagonal bas droite 2
        cP(-1055, -78, 15, 22)//diagonal bas droite 3
      ]
    ],[//indice 4 objet et autre
      cP(-314, -127, 16, 16, {indice : 7}),//indice 0 buisson
      cP(-335, -128, 16, 15, {indice : 8}),//indice 1 pierre claire
      cP(-358, -129, 16, 15, {indice : 8}),//indice 2 pierre foncé
      cP(-379, -128, 12, 13, {indice : 8}),//indice 3 jar
      cP(-299, -146, 8, 8),//indice 4 - coeur plein
      cP(-309, -146, 8, 8),//indice 5 - 3/4 coeur
      cP(-320, -146, 8, 8),//indice 6 - 1/2 coeur
      cP(-330, -146, 8, 8),//indice 7 - 1/4 coeur
      cP(-299, -155, 8, 8),//indice 8 - coeur vide
      cP(-363, -167, 13, 16), //indice 9 HTML - bouclier
      cP(-381, -167, 13, 14), //indice 10 CSS - bleu
      cP(-399, -167, 16, 16), //indice 11 Ps - rouge
      cP(-263, -124, 32, 32, {indice : 8}), //indice 12 grosse pierre
      cP(-419, -167, 16, 16), //indice 13 JQuery - gant
      cP(-439, -167, 16, 16), //indice 14 JQuery UI - coeur
      cP(-301, -188, 14, 16), //indice 15 JS - épée
      cP(-319, -188, 16, 16), //indice 16 mongoDB - clé1
      cP(-339, -188, 16, 16), //indice 17 Express - clé2
      cP(-359, -188, 16, 16), //indice 18 Angular - clé3
      cP(-379, -188, 16, 16), //indice 19 Node - clé4
      cP(-398, -188, 16, 16), //indice 20 Meteor - arc
      cP(-418, -188, 16, 16), //indice 21 Bootstrap - coeur
      cP(-439, -188, 16, 16), //indice 22 Ajax - Bombe
    ],[//indice 5 sinthiement aléatoir de l'épée haut et bas
      cP(-66, -398, 7, 7),//indice 0
      cP(-82, -398, 7, 7),//indice 1
      cP(-98, -398, 8, 7),//indice 2
      cP(-111, -398, 7, 7),//indice 3
      cP(-124, -398, 7, 7),//indice 4
      cP(-139, -398, 7, 7),//indice 5
      cP(-155, -398, 7, 7),//indice 6
      cP(-167, -398, 8, 7),//indice 7
      cP(-66, -408, 11, 7),//indice 8
      cP(-82, -408, 7, 7),//indice 9
      cP(-96, -408, 9, 7),//indice 10
      cP(-111, -408, 7, 7),//indice 11
      cP(-123, -408, 10, 7),//indice 12
      cP(-137, -408, 12, 7),//indice 13
      cP(-156, -409, 5, 5),//indice 14
      cP(-167, -408, 8, 7),//indice 15
      cP(-89, -419, 5, 5),//indice 16
      cP(-100, -418, 11, 7),//indice 17
      cP(-120, -419, 5, 5),//indice 18
      cP(-132, -418, 9, 7),//indice 19
      cP(-147, -418, 8, 7)//indice 20
    ],[//indice 6 sinthiement aléatoir de l'épée gauche et droite
      cP(-767, -418, 7, 7),//indice 0
      cP(-783, -419, 7, 7),//indice 1
      cP(-798, -718, 8, 7),//indice 2
      cP(-811, -418, 7, 7),//indice 3
      cP(-825, -418, 7, 7),//indice 4
      cP(-840, -419, 7, 7),//indice 5
      cP(-856, -418, 7, 7),//indice 6
      cP(-869, -417, 7, 8),//indice 7
      cP(-769, -428, 7, 11),//indice 8
      cP(-784, -428, 7, 7),//indice 9
      cP(-798, -428, 7, 9),//indice 10
      cP(-812, -429, 7, 7),//indice 11
      cP(-825, -428, 7, 10),//indice 12
      cP(-840, -428, 7, 12),//indice 13
      cP(-857, -431, 5, 5),//indice 14
      cP(-869, -428, 7, 8),//indice 15
      cP(-792, -444, 5, 5),//indice 16
      cP(-805, -441, 7, 11),//indice 17
      cP(-823, -444, 5, 5),//indice 18
      cP(-836, -442, 7, 9),//indice 19
      cP(-851, -442, 7, 8)//indice 20
    ],[//indice 7 slashing a bush
      cP(-332, -2923, 22, 18),//indice 0 slashing a bush
      cP(-365, -2921, 16, 23),//indice 1 slashing a bush
      cP(-396, -2920, 15, 26),//indice 2 slashing a bush
      cP(-427, -2919, 14, 29),//indice 3 slashing a bush
      cP(-454, -2918, 19, 32),//indice 4 slashing a bush
      cP(-480, -2916, 24, 35),//indice 5 slashing a bush
      cP(-509, -2913, 27, 40),//indice 6 slashing a bush
      cP(-537, -2911, 23, 43)//indice 7 slashing a bush
    ],[//indice 8 Destroying a pot
      cP(-335, -2981, 16, 16),//indice 0 slashing a bush
      cP(-364, -2980, 19, 19),//indice 1 slashing a bush
      cP(-393, -2978, 22, 22),//indice 2 slashing a bush
      cP(-422, -2977, 26, 24),//indice 3 slashing a bush
      cP(-453, -2977, 27, 25),//indice 4 slashing a bush
      cP(-482, -2977, 29, 28),//indice 5 slashing a bush
      cP(-518, -2977, 25, 25),//indice 6 slashing a bush
      cP(-550, -2981, 18, 23)//indice 7 slashing a bush
    ]]
};
