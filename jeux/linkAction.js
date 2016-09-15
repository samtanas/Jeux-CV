'use stric'
var linkAction = {

  //test des objet dans l'espace.
  testObstacle : function( mouvementWay /* left ou top */, boul, /* vérifi avec un bouleen si le sens est positif ou négatif */ div,/* div de l'élément */ elementAVerifier/* élément a tester */, decallageY /* décalle en y pour les objet lancé */){
    // valeur de l'objet et de la div dans l'axe oposé au mouvement pour savoir si il es aux dessus ou en dessous
    var divPosition; // position de la div
    var divSize; /* hauteur ou largeur */
    var objectPosition; /* x ou y */
    var objectSize; /* hauteur ou l'argeur */

    // valeur dans le sens du mouvement
    var divSizeSameAxis; // taille de la div dans le sens du mouvement
    var objectPositionSameAxis; // taille de la div
    var objectSizeSameAxis; /* hauteur ou l'argeur */

    //décallage des objet lancé
    var decallageY = decallageY || 0;

    //initialisation des valeur
    if (mouvementWay == 'left'){
      divPosition = 'top';
      divSize = 'height';
      objectPosition = parseFloat(elementAVerifier['positionY']) + decallageY;
      objectSize = 'tailleY';
      divSizeSameAxis = 'width';
      objectPositionSameAxis = parseFloat(elementAVerifier['positionX']);
      objectSizeSameAxis = 'tailleX';
    } else {
      divPosition = 'left';
      divSize = 'width';
      objectPosition = parseFloat(elementAVerifier['positionX']);
      objectSize = 'tailleX';
      divSizeSameAxis = 'height';
      objectPositionSameAxis = parseFloat(elementAVerifier['positionY']) + decallageY;
      objectSizeSameAxis = 'tailleY';
    }

      //vérifi que l'objet est toujours présent et si il sagit d'un objet cachet qu'il est toujours qu'il apparait bien
      if ( (elementAVerifier == linkEtat.sauvPositionSprite || elementAVerifier.existance()) ){
        //test si l'objet n'est pas au dessus ou en dessous ou a gauche ou a droite suivant le sens.
        if ( !(parseFloat(div[divPosition]) + parseFloat(div[divSize]) <= objectPosition || parseFloat(div[divPosition]) >=  objectPosition + elementAVerifier[objectSize]) ) {
          if (boul) {
            // test si le sens positif du mouvement n'est pas inférieur au premier point d'impact de l'objet ou bien qu'il n'a pas dépassé le bord oposé
            if( !( ( parseFloat(div[mouvementWay]) + parseFloat(div[divSizeSameAxis]) < objectPositionSameAxis ) || ( parseFloat(div[mouvementWay]) >= ( objectPositionSameAxis + elementAVerifier[objectSizeSameAxis] ) ) ) ) {
              return false;
            }
          } else {
            // test si le sens négatif du mouvement est égale au premier point d'impact de l'objet
            if( !( ( parseFloat(div[mouvementWay]) > ( objectPositionSameAxis + elementAVerifier[objectSizeSameAxis] ) ) || ( parseFloat(div[mouvementWay]) + parseFloat(div[divSizeSameAxis]) <= ( objectPositionSameAxis ) ) ) ) {
              return false;
            }
          }
        }
      }
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
    //vérifi si link a encore des point de vie
    if ( linkEtat.life[0] <= 0 ) {
      linkEtat.spritePosition.position = 0;
      linkEtat.counter = myBackground.circle.length - 1;
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
          if ( linkEtat.item.shield || linkEtat.touche.keyAPlusObjet ){
            linkEtat.spritePosition.direction = 1;
          } else {
            linkEtat.spritePosition.direction = 5;
          }
          break;
        case 'SW':
        case 'SE':
          if ( linkEtat.item.shield || linkEtat.touche.keyAPlusObjet ){
            linkEtat.spritePosition.direction = 0;
          } else {
            linkEtat.spritePosition.direction = 6;
          }
          break;
      }
    }
    linkEtat.spriteMouvement = true;
    //vérifi si un obstacle est rencontré depuis plus d'une seconde
    if(temps && !linkEtat.touche.keyA && !(linkEtat.collision.position === null)){
      this.temps = 100;
      //initialise l'animation du sprite pour pousser
      linkEtat.spritePosition.action = 4;
      //sur un objet poussable
      if( linkEtat.item.sword && (linkEtat.touche.direction == 'N') && myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.push && !linkEtat.chestOpen[myBackground.stage][linkEtat.collision.position]){
        //enregistre la sortie
        linkEtat.chestOpen[myBackground.stage][linkEtat.collision.position] = true;
        //montre l'image pour modifier le décor
        myBackground.div[myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].id].style.opacity = 1;
        //enregistre l'action en cour
        linkEtat.push = 1;
      }
    } else {
      //initialise l'animation du sprite pour agire
      linkEtat.spritePosition.action = spriteAction;
    }
    //sprite par defaut quand la touche est laché
    linkEtat.actionOff.sprite = defautSprite;
    //vérifi la position du sprite pour incrémenter le compteur
    if( this.spriteLink[linkEtat.spritePosition.color][linkEtat.spritePosition.direction][linkEtat.spritePosition.action][linkEtat.spritePosition.position] ){
      //vérifi le sens pour mettre un sens négatif
      if ( linkEtat.slachSword != 3 ){
        if( linkEtat.touche.direction == 'W' || (linkEtat.touche.direction == 'NE' && linkEtat.spritePosition.direction == 5) || (linkEtat.touche.direction == 'SW' && linkEtat.spritePosition.direction == 6)  ){
          this.linkSprite.style.transform = 'scaleX(-1)';
          //envoie la dimension en scale -1
          linkEtat.tailleSprite = -1111 + this.spriteLink[linkEtat.spritePosition.color][linkEtat.spritePosition.direction][linkEtat.spritePosition.action][linkEtat.spritePosition.position].tailleX;
        } else {
          this.linkSprite.style.transform = 'scaleX(1)';
          //envoie la dimension en scale 1
          linkEtat.tailleSprite = 0;
        }
      }

      //modifi la position du sprite visible
      this.spriteDefaut(this.spriteLink[linkEtat.spritePosition.color][linkEtat.spritePosition.direction][linkEtat.spritePosition.action][linkEtat.spritePosition.position]);

      if ( direction ) {
        //quand une touche de direction est appuyé avence le sprite
        linkEtat.spritePosition.position++;
      }
    } else {
      //vérifi que la touche n'est pas enfoncé pour bloque la réinitalisation du compteur de position du sprite
      if ( !linkEtat.touche.keyA ){
          //réinitialise la position du sprite
          linkEtat.spritePosition.position = 0;
        //si la touche Z est encore appuyé alors le chargement commence
        if ( linkEtat.touche.keyZ  ){
          //l'épée à fini de charger
          if ( linkEtat.slachSword == 2 ) {
            //l'épée est chargé
            linkEtat.slachSword = 3;
          }
          //le coup d'épée est terminé l'épée commence à charger
          if ( linkEtat.slachSword == 1 ) {
            linkEtat.slachSword = 2;
            //début du chargement de l'épée
            linkEtat.spritePosition.action = 8;
          }
          //la position repasse à marcher normalement si la touche Z est laché
        } else {
          //vérifi si l'épée est chargé
          if ( linkEtat.slachSword == 3 ) {
            // début de l'attaque sécial
            linkEtat.slachSword = 4;
          } else {
            //le coup d'épée est réinitalisé
            linkEtat.slachSword = 0;
          }
        }
        //vérifi si l'arc est utilisé
        if (linkEtat.archery) {
          //fléche lancé en cour
          linkEtat.arrow = 1;
          //affiche la fléche
          myBackground.item.opacity = 1;
          myBackground.item.top = parseFloat(this.divPersonnage.top) + 'px';
          myBackground.item.left = (parseFloat(this.divPersonnage.left) + 7) + 'px';
          //annule le tire à l'arc
          linkEtat.archery = 0;
          //lance la fléche
          this.requestID = window.requestAnimationFrame(function(timestamp){linkAction.launch(timestamp)});
        }
      } else {
        //décrémente la position du sprite quand la touche a est enfoncé sur un obstacle.
        linkEtat.spritePosition.position-=2;
      }
      this.spriteDefaut(this.spriteLink[linkEtat.spritePosition.color][linkEtat.spritePosition.direction][linkEtat.spritePosition.action][linkEtat.spritePosition.position]);
    }
  },
  walk : 0,//valeur de marche
  defaut : 3,//valeur de la position par defaut
  lastPosition : -1,
  counter : 0,
  //fonction de déplacement de la div
  moving : function(axe/* x ou y */, sens /* positif ou negatif */, div /* element en mouvement */, elementAVerifier/* élément a tester */, direction/* direction du mouvement */, objet/* enregistre la direction du mouvement */, decallageY/* décalage en Y si besoin */, secondElementAverifier, secondeObjet){
    var deplacement = -1;
    if (sens) deplacement = 1;
    var objetHide = 1;
    //parcour le tableau du premier élément
    for (var i=0;elementAVerifier[i] && !objet.collisionBooleen;i++){
      //vérifi la présence de l'objet cachet
      if ( (elementAVerifier.hide  && ( linkEtat.item.sword || !elementAVerifier.argument.sword ) && !elementAVerifier.condition() && !linkEtat.chestOpen[myBackground.stage][i]) || (myBackground.stage == 3 && linkEtat.collision.position == 244 && !(linkEtat.key.mongoDB && linkEtat.key.express && linkEtat.key.angular && linkEtat.key.nodeJS)) ) {
        objetHide = 0;
      }
      //vérifi si une collision à lieu
      if ( !this.testObstacle(axe, sens, div, elementAVerifier[i]) && objetHide ){
        //enregistre le sens
        objet.direction = direction;
        //la collision passe à faut
        objet.collisionBooleen = 1;
        //enregistre l'indice de l'objet
        objet.position = i;
      }
    }
    //verifi si l'argument à été donné
    if ( secondElementAverifier && linkEtat.slachSword ){
      //verifi si il s'agit d'un tableau
      if ( Array.isArray(secondElementAverifier) ){
        //parcour le tableau du second élément
        for (var j=0;secondElementAverifier[j] && !secondeObjet.collisionBooleen;j++){
          //vérifi si une collision à lieu
          if ( !this.testObstacle(axe, sens, div, secondElementAverifier[j]) ){
            //enregistre le sens
            secondeObjet.direction = direction;
            //la collision passe à faut
            secondeObjet.collisionBooleen = 1;
            //enregistre l'indice de l'objet
            secondeObjet.position = j;
          }
        }
      } else {
        if ( !this.testObstacle(axe, sens, div, secondElementAverifier) ){
          secondeObjet.direction = direction;
          secondeObjet.collisionBooleen = 1;
        }
      }
      //si aucune collision n'a eu lieu réinitialise les valeurs et déplace la div
      if ( secondeObjet.direction != direction && objet.direction != direction ){
        div[axe] = (parseFloat(div[axe]) + deplacement) + 'px';
        secondeObjet.collisionBooleen = 0;
        secondeObjet.position = null;
        secondeObjet.direction = null;
        objet.collisionBooleen = 0;
        objet.position = null;
        objet.direction = null;
      }
    } else {
      //si aucune collision n'a eu lieu réinitialise les valeurs et déplace la div
      if ( objet.direction != direction ){
        div[axe] = (parseFloat(div[axe]) + deplacement) + 'px';
        objet.collisionBooleen = 0;
        objet.position = null;
        objet.direction = null;
      }
    }
  },
  //test des touche directionnelle appuyé
  testDirection : function(){
    //les touches autre que direction ne sont pas enfoncé et il n'y a pas d'action lié au obstacle en cour ni de coup d'épée
    if ( !linkEtat.touche.keyA && ( linkEtat.slachSword == 3 || linkEtat.slachSword == 0 ) && !linkEtat.glove && (linkEtat.life[0] > 0) && !linkEtat.archery && !linkEtat.touche.keyE ){
      //vérifi si on monte ou on decent un escalier ou qu'on pousse un obstacle
      if ( !linkEtat.stairs && !linkEtat.push ){
        //déplacement  vers la gauche
        this.temps = 20;
        if( linkEtat.touche.left && !linkEtat.touche.right && !linkEtat.touche.top && !linkEtat.touche.bottom ){
          linkEtat.touche.direction = 'W';
          this.spriteSelection( linkEtat.timeObstacle.supSecondeLeft, this.walk, this.spriteLink[linkEtat.spritePosition.color][2][this.walk][this.defaut], linkEtat.touche.left );
          if( !(linkEtat.collision.direction == 'W' && !linkEtat.collision.collisionBooleen) ){
            this.moving('left', 0, this.divPersonnage, myBackground.collisionListe[myBackground.stage], linkEtat.touche.direction, linkEtat.collision, 0, myBackground.enemiesStage[myBackground.stage], linkEtat.collisionEnemi);
            this.moving('left', 0, this.divPersonnage, myBackground.collisionListe[myBackground.stage], linkEtat.touche.direction, linkEtat.collision, 0, myBackground.enemiesStage[myBackground.stage], linkEtat.collisionEnemi);
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
          if( !(linkEtat.collision.direction == 'N' && !linkEtat.collision.collisionBooleen) ){
            this.moving('top', 0, this.divPersonnage, myBackground.collisionListe[myBackground.stage], linkEtat.touche.direction, linkEtat.collision, 0, myBackground.enemiesStage[myBackground.stage], linkEtat.collisionEnemi);
            this.moving('top', 0, this.divPersonnage, myBackground.collisionListe[myBackground.stage], linkEtat.touche.direction, linkEtat.collision, 0, myBackground.enemiesStage[myBackground.stage], linkEtat.collisionEnemi);
          }
        } else {
          linkEtat.timeObstacle.topStart = 0;
          linkEtat.timeObstacle.supSecondeTop = false;
        }
        //déplacement  vers la droite
        if(!linkEtat.touche.left && linkEtat.touche.right && !linkEtat.touche.top && !linkEtat.touche.bottom ){
          linkEtat.touche.direction = 'E';
          this.spriteSelection( linkEtat.timeObstacle.supSecondeRight, this.walk, this.spriteLink[linkEtat.spritePosition.color][2][this.walk][this.defaut], linkEtat.touche.right );
          if(  !(linkEtat.collision.direction == 'E' && !linkEtat.collision.collisionBooleen) ){
            this.moving('left', 1, this.divPersonnage, myBackground.collisionListe[myBackground.stage], linkEtat.touche.direction, linkEtat.collision, 0, myBackground.enemiesStage[myBackground.stage], linkEtat.collisionEnemi);
            this.moving('left', 1, this.divPersonnage, myBackground.collisionListe[myBackground.stage], linkEtat.touche.direction, linkEtat.collision, 0, myBackground.enemiesStage[myBackground.stage], linkEtat.collisionEnemi);
          }
        } else {
          linkEtat.timeObstacle.rightStart = 0;
          linkEtat.timeObstacle.supSecondeRight = false;
        }
        //déplacement  vers le bas
        if( !linkEtat.touche.left && !linkEtat.touche.right && !linkEtat.touche.top && linkEtat.touche.bottom ){
          linkEtat.touche.direction = 'S';
          this.spriteSelection( linkEtat.timeObstacle.supSecondeBottom, this.walk, this.spriteLink[linkEtat.spritePosition.color][0][this.walk][this.defaut], linkEtat.touche.bottom );
          if(  !(linkEtat.collision.direction == 'S' && !linkEtat.collision.collisionBooleen) ){
            this.moving('top', 1, this.divPersonnage, myBackground.collisionListe[myBackground.stage], linkEtat.touche.direction, linkEtat.collision, 0, myBackground.enemiesStage[myBackground.stage], linkEtat.collisionEnemi);
            this.moving('top', 1, this.divPersonnage, myBackground.collisionListe[myBackground.stage], linkEtat.touche.direction, linkEtat.collision, 0, myBackground.enemiesStage[myBackground.stage], linkEtat.collisionEnemi);
          }
        } else {
          linkEtat.timeObstacle.bottomStart = null;
          linkEtat.timeObstacle.supSecondeBottom = false;
        }
        //déplacement diagonal haut gauche
        if(linkEtat.touche.left && !linkEtat.touche.right && linkEtat.touche.top && !linkEtat.touche.bottom ){
          this.spriteSelection( linkEtat.timeObstacle.supSecondeTop, 0, this.spriteLink[linkEtat.spritePosition.color][1][this.walk][this.defaut], (linkEtat.touche.left && linkEtat.touche.top) );
          if(  !(linkEtat.collision.direction == 'N' && !linkEtat.collision.collisionBooleen) ) {
            //test des obstacles vers le haut
            linkEtat.touche.direction = 'N';
            this.moving('top', 0, this.divPersonnage, myBackground.collisionListe[myBackground.stage], linkEtat.touche.direction, linkEtat.collision, 0, myBackground.enemiesStage[myBackground.stage], linkEtat.collisionEnemi);
            //test des obstacles vers la gauche
            linkEtat.touche.direction = 'W';
            this.moving('left', 0, this.divPersonnage, myBackground.collisionListe[myBackground.stage], linkEtat.touche.direction, linkEtat.collision, 0, myBackground.enemiesStage[myBackground.stage], linkEtat.collisionEnemi);
          }
          linkEtat.touche.direction = 'NW';
        }
        //déplacement diagonal haut droite
        if(!linkEtat.touche.left && linkEtat.touche.right && linkEtat.touche.top && !linkEtat.touche.bottom ){
          this.spriteSelection( linkEtat.timeObstacle.supSecondeTop, 00, this.spriteLink[linkEtat.spritePosition.color][1][this.walk][this.defaut], (linkEtat.touche.right && linkEtat.touche.top) );
          if(  !(linkEtat.collision.direction == 'N' && !linkEtat.collision.collisionBooleen) ) {
            //test des obstacles vers le haut
            linkEtat.touche.direction = 'N';
            this.moving('top', 0, this.divPersonnage, myBackground.collisionListe[myBackground.stage], linkEtat.touche.direction, linkEtat.collision, 0, myBackground.enemiesStage[myBackground.stage], linkEtat.collisionEnemi);
            //test des obstacles vers la droite
            linkEtat.touche.direction = 'E';
            this.moving('left', 1, this.divPersonnage, myBackground.collisionListe[myBackground.stage], linkEtat.touche.direction, linkEtat.collision, 0, myBackground.enemiesStage[myBackground.stage], linkEtat.collisionEnemi);
          }
          linkEtat.touche.direction = 'NE';
        }
        //déplacement  diagonal bas droite
        if(!linkEtat.touche.left && linkEtat.touche.right && !linkEtat.touche.top && linkEtat.touche.bottom ){
          this.spriteSelection( linkEtat.timeObstacle.supSecondeBottom, 0, this.spriteLink[linkEtat.spritePosition.color][0][this.walk][this.defaut], (linkEtat.touche.bottom && linkEtat.touche.right) );
          if(  !(linkEtat.collision.direction == 'E' && !linkEtat.collision.collisionBooleen) ) {
            //test des obstacles vers le bas
            linkEtat.touche.direction = 'S';
            this.moving('top', 1, this.divPersonnage, myBackground.collisionListe[myBackground.stage], linkEtat.touche.direction, linkEtat.collision, 0, myBackground.enemiesStage[myBackground.stage], linkEtat.collisionEnemi);
            //test des obstacles vers la droite
            linkEtat.touche.direction = 'E';
            this.moving('left', 1, this.divPersonnage, myBackground.collisionListe[myBackground.stage], linkEtat.touche.direction, linkEtat.collision, 0, myBackground.enemiesStage[myBackground.stage], linkEtat.collisionEnemi);
          }
          linkEtat.touche.direction = 'SE';
        }
        //déplacement  diagonal bas gauche
        if( linkEtat.touche.left && !linkEtat.touche.right && !linkEtat.touche.top && linkEtat.touche.bottom ){
          this.spriteSelection( linkEtat.timeObstacle.supSecondeBottom, 0, this.spriteLink[linkEtat.spritePosition.color][0][this.walk][this.defaut], (linkEtat.touche.left && linkEtat.touche.bottom) );
          //test des obstacles vers la gauche
          if(  !(linkEtat.collision.direction == 'W' && !linkEtat.collision.collisionBooleen) ){
            //test des obstacles vers le bas
            linkEtat.touche.direction = 'S';
            this.moving('top', 1, this.divPersonnage, myBackground.collisionListe[myBackground.stage], linkEtat.touche.direction, linkEtat.collision, 0, myBackground.enemiesStage[myBackground.stage], linkEtat.collisionEnemi);
            //test des obstacles vers la gauche
            linkEtat.touche.direction = 'W';
            this.moving('left', 0, this.divPersonnage, myBackground.collisionListe[myBackground.stage], linkEtat.touche.direction, linkEtat.collision, 0, myBackground.enemiesStage[myBackground.stage], linkEtat.collisionEnemi);
          }
          linkEtat.touche.direction = 'SW';
        }
      }
      if ( linkEtat.collision.position != null ){
        //vérifi si une sortie est touché
        if ( myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.exit && linkEtat.item.shield ){
          myBackground.nextstage(myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.stage);
        } else {
          if ( !linkEtat.item.shield && myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.exit ) {
            this.messageLoading = myBackground.arrayMessage[1];
            this.textProgress = 1;
            this.requestIDMessage = window.requestAnimationFrame(function(timestamp){linkAction.message(timestamp)});
          }
          //vérifi si une porte est touché
          if ( myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.door ){
            //supression de l'objet
            myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].modif(false);
            //modifi l'opacité de l'image pour modifier le décor
            myBackground.div[myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].id].style.opacity = 1;
          }
          //vérifie si on est devant un item
          if ((myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.treasure || (myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.hide && myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.condition())) && !linkEtat.chestOpen[myBackground.stage][linkEtat.collision.position] && (linkEtat.item.sword || !myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.sword) ){
            //annule les annimation qui n'aurais pas été annulé
            window.cancelAnimationFrame(this.requestID);
            //passe le temps à 2s quand un objet est trouvé
            this.temps = 2000;
            //enregistre l'item
            linkEtat.chestOpen[myBackground.stage][linkEtat.collision.position] = true;
            myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.chestContent();
            myBackground.affiche(this.spriteLink[4][myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.item], myBackground.item);
            //cache l'image pour modifier le décor
            myBackground.div[myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].id].style.opacity = 0;;
            //position de link quand il trouve un objet
            linkEtat.actionOff.sprite = this.spriteLink[linkEtat.spritePosition.color][0][5][0];
            linkEtat.spriteMouvement = false;
            linkEtat.collision.collisionBooleen = 0;
            linkEtat.collision.position = null;
          }
          //vérifi si un escalier est touché ou une falaise ou un objet poussable
          if ( linkEtat.collision.position && ( linkEtat.push == 1 || myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.stairs || myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.cliff || (myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.notExit) ) ){
            linkEtat.stairs = 1;
            //bouge le sprite mouvement jusqu'en haut de l'escalier
            if (!myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.cliff){
              if (myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.stairs || (myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.notExit) ) {
                this.spriteSelection( linkEtat.timeObstacle.supSecondeBottom, 0, this.spriteLink[linkEtat.spritePosition.color][0][this.walk][this.defaut], myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.stairs );
              } else {
                this.spriteSelection( linkEtat.timeObstacle.supSecondeBottom, 4, this.spriteLink[linkEtat.spritePosition.color][0][this.walk][this.defaut], myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.push );
              }
            }
            if ( myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.decallageY ){
              if ( myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.decallageY > 0 ){
                this.divPersonnage.top = parseFloat(this.divPersonnage.top) + 1 + 'px';
                this.counter++;
              }
              if ( myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.decallageY < 0 ){
                this.divPersonnage.top = parseFloat(this.divPersonnage.top) - 1 + 'px';
                this.counter--;
                if ( linkEtat.push == 1 ) {
                  myBackground.div[linkEtat.collision.position].top = parseFloat(myBackground.div[linkEtat.collision.position].top) - 1;
                  myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].positionY--;
                }
              }
              if ( Math.abs(this.counter) == (Math.abs(myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.decallageY) + parseFloat(this.divPersonnage.height)) ){
                if (myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.notExit) {
                  this.message(myBackground.arrayMessage[16]);
                }
                linkEtat.collision.position = null;
                linkEtat.collision.collisionBooleen = 0;
                this.counter = 0;
                linkEtat.stairs = 0;
                linkEtat.push = 0;
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
                  if (myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.notExit) {
                    this.message(myBackground.arrayMessage[16]);
                  }
                  linkEtat.collision.position = null;
                  linkEtat.collision.collisionBooleen = 0;
                  this.counter = 0;
                  linkEtat.stairs = 0;
                }
              }
            }
          }
        }
      }
      // colition avec l'épée chargé
      if ( linkEtat.slachSword == 3){
        if ( linkEtat.collision.collisionBooleen ){
          //annule le coup d'épée
          linkEtat.slachSword = 0;
          //fait disparaitre le scintillement
          myBackground.item.opacity = 0;;
        }
        if ( linkEtat.collisionEnemi.collisionBooleen ){
          //déclanche l'attaque spéciale
          linkEtat.slachSword = 4;
          //vérifie si l'ennemi touché n'a pas déjà été touché il y a moins de 0.5s
          if ( Date.now() - myBackground.enemiesStage[myBackground.stage][linkEtat.collisionEnemi.position].argument.lastFire > 500 ){
            //diminu la vie de l'ennemi de 2
            myBackground.enemiesStage[myBackground.stage][linkEtat.collisionEnemi.position].argument.life -= 2;
            myBackground.enemiesStage[myBackground.stage][linkEtat.collisionEnemi.position].argument.lastFire = Date.now();
            myBackground.enemiesStage[myBackground.stage][linkEtat.collisionEnemi.position].argument.hit = 0;
          }
        }
      } else {
        if ( linkEtat.collisionEnemi.collisionBooleen ){
          //vérifie si l'ennemi touché n'a pas déjà été touché il y a moins de 0.5s et si link a été touché il y a moins d'une seconde et a encore des point de vie
          if ( Date.now() - myBackground.enemiesStage[myBackground.stage][linkEtat.collisionEnemi.position].argument.lastFire > 500 && (Date.now() - linkEtat.collisionEnemi.lastFire) > 2000 &&  myBackground.enemiesStage[myBackground.stage][linkEtat.collisionEnemi.position].argument.life >= 0 ){
            this.touche(myBackground.enemiesStage[myBackground.stage][linkEtat.collisionEnemi.position].argument.damage);
            linkEtat.collisionEnemi.lastFire = Date.now();
            linkEtat.collisionEnemi.hit = 0;
          }
        }
      }
    }
    //coup d'épée
    if ( (linkEtat.item.sword && linkEtat.touche.keyZ && !linkEtat.touche.keyAPlusObjet && !linkEtat.touche.keyA && !linkEtat.touche.keyE) || linkEtat.slachSword == 1 || linkEtat.slachSword == 4 || linkEtat.slachSword == 3 ){
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
      for (var i=0;myBackground.collisionListe[myBackground.stage][i];i++){
        //coup d'épée sur un obstacles
        if ( !this.testObstacle(linkEtat.axieSword, linkEtat.sensSword, linkEtat.sauvPositionSprite, myBackground.collisionListe[myBackground.stage][i] ) ){
          //vérifi si il est destructible
          if ( myBackground.collisionListe[myBackground.stage][i].argument.destructible ){
            //enregistre l'objet détruit
            this.liftObject = this.spriteLink[4][myBackground.collisionListe[myBackground.stage][i].argument.indice];
            //monte l'image pour modifier le décor
            myBackground.div[myBackground.collisionListe[myBackground.stage][i].id].style.opacity = 1;
            //annule la collision
            linkEtat.touche.keyZPlusObstacle = 1;
            linkEtat.throwObjet.collisionBooleen = 0;
            linkEtat.throwObjet.position = null;
            //supression de l'objet
            myBackground.collisionListe[myBackground.stage][i].modif(false);
            linkEtat.throwObjet.objetPosition = 0;
            this.requestID = window.requestAnimationFrame(function(timestamp){linkAction.launch(timestamp)});
          }
        }
      }
      //coup d'épée sur un ennemi
      if ( myBackground.enemiesStage[myBackground.stage][0] ){
        for (var i=0;myBackground.enemiesStage[myBackground.stage][i];i++){
          if ( !this.testObstacle(linkEtat.axieSword, linkEtat.sensSword, linkEtat.sauvPositionSprite, myBackground.enemiesStage[myBackground.stage][i] ) ){
            //vérifie si l'ennemi touché n'a pas déjà été touché il y a moins de 0.5s
            if ( Date.now() - myBackground.enemiesStage[myBackground.stage][i].argument.lastFire > 500 ){
              myBackground.enemiesStage[myBackground.stage][i].argument.life--;
              myBackground.enemiesStage[myBackground.stage][i].argument.lastFire = Date.now();
              myBackground.enemiesStage[myBackground.stage][i].argument.hit = 0;
            }
            //objet détruit
            //myBackground.affiche(this.liftObject, myBackground.item);
            //annule la collision
            linkEtat.touche.keyZPlusObstacle = 1;
            //annule la collision
            linkEtat.throwObjet.collisionBooleen = 0;
            linkEtat.throwObjet.objetPosition = 0;
          }
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
        myBackground.item.opacity = 0;;
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
      //repasse objet avec gant à faut
      linkEtat.glove = 0;
      //enregistre le sens du lancé
      linkEtat.throwObjet.directionObjet = linkEtat.touche.direction;
      //la collision de l'objet passe à vrai
      linkEtat.throwObjet.collisionBooleen = 0;
      //positionne le sprite de l'objet
      this.distanceObjectTop = parseFloat(myBackground.item.top);
      //positionne le sprite de l'objet
      this.distanceObjectLeft = parseFloat(myBackground.item.left);
      this.time = 10;
      linkEtat.throwObjet.objetPosition = 0;
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
      if ( linkEtat.touche.keyA && !linkEtat.touche.left && !linkEtat.touche.right && !linkEtat.touche.top && !linkEtat.touche.bottom && linkEtat.collision.collisionBooleen &&  linkEtat.collision.position != null && !myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.cliff && !myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.hide && !myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.exit && !myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.stairs ){
        this.temps = 150;
        //vérifie si on est devant un objet soulevable
        if ( myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.lift && ( !myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.glove || linkEtat.item.glove ) ){
          if ( myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].argument.glove ){
            //si l'objet necessite des gants
            linkEtat.glove = 1;
          }
          myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].modif(false);
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
          myBackground.shadow.opacity = 1;
          myBackground.item.opacity = 1;
          myBackground.item['z-index'] = 3;
          //objet soulevé
          myBackground.requestIDLift = window.requestAnimationFrame(function(timestamp){myBackground.lift(timestamp)});
          //montre l'image pour modifier le décor
          myBackground.div[myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].id].style.opacity = 1;
          //annule la collision
          linkEtat.collision.collisionBooleen = 0;
          //supression de l'objet
          myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].modif(false);
          //marche avec objet
          this.walk = 5;
          //position par defaut
          this.defaut = 0;
          linkEtat.touche.keyAPlusObjet = true;
        }
      }
      if( ( (linkEtat.touche.keyA && !linkEtat.touche.left && !linkEtat.touche.right && !linkEtat.touche.top && !linkEtat.touche.bottom) || linkEtat.touche.keyAPlusObstacle) && linkEtat.collision.collisionBooleen && linkEtat.collision.position != null ){
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
            //annule les annimation en cour
            window.cancelAnimationFrame(this.requestID);
            //montre l'image pour modifier le décor
            myBackground.div[myBackground.collisionListe[myBackground.stage][linkEtat.collision.position].id].style.opacity = 1;
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
      //tir à l'arc
      if ( !linkEtat.arrow && (linkEtat.archery || (linkEtat.item.bow && linkEtat.touche.keyE && !linkEtat.touche.left && !linkEtat.touche.right && !linkEtat.touche.top && !linkEtat.touche.bottom && !linkEtat.touche.keyA && !linkEtat.touche.keyZ && linkEtat.slachSword == 0 && !linkEtat.touche.keyAPlusObjet) )) {
        this.temps = 60;
        //initialisation du tir à l'arc
        linkEtat.archery = 1;
        //met la direction du sprite correspondant
        switch ( linkEtat.touche.direction ) {
          case 'S':
            linkEtat.axieBow = 'top';
            linkEtat.sensBow = 1;
            break;
          case 'N':
            linkEtat.axieBow = 'top';
            linkEtat.sensBow = 0;
            break;
          case 'E':
            linkEtat.axieBow = 'left';
            linkEtat.sensBow = 1;
            break;
          case 'W':
            linkEtat.axieBow = 'top';
            linkEtat.sensBow = 0;
            break;
        }
        //enregistrer le sens du mouvement
        linkEtat.arrowAxies = linkEtat.spritePosition.direction;
        //enregistre le sens du lancé
        linkEtat.throwObjet.directionObjet = linkEtat.touche.direction;
        //attaque à l'arc
        this.spriteSelection( linkEtat.timeObstacle.supSecondeBottom, 12, this.spriteLink[linkEtat.spritePosition.color][linkEtat.spritePosition.direction][this.walk][this.defaut], linkEtat.archery );
        //la collision de l'objet passe à vrai
        linkEtat.throwObjet.collisionBooleen = 0;
        //positionne le sprite de la fléche
        myBackground.positionSprite(myBackground.item, myBackground.spriteObjet, this.spriteLink[1][linkEtat.spritePosition.direction][13][0]);
        //positionne le sprite de l'objet
        this.distanceObjectTop = parseFloat(myBackground.item.top);
        //positionne le sprite de l'objet
        this.distanceObjectLeft = parseFloat(myBackground.item.left);
        this.time = 10;
        linkEtat.throwObjet.objetPosition = 0;
        linkEtat.throwObjet.collisionBooleen = 0;
      }
    }
    if( !linkEtat.touche.left && !linkEtat.touche.right && !linkEtat.touche.top && !linkEtat.touche.bottom && !linkEtat.touche.keyA && !linkEtat.touche.keyZ  && linkEtat.slachSword != 1 && linkEtat.slachSword != 4 && linkEtat.slachSword != 3 && !linkEtat.archery ){
      //si aucune touche n'est appuyé l'action passe à false'
      linkEtat.spriteMouvement = false;
    }
  },
  startObjet : null,
  time : 40,
  //indice de l'animation des objet détruit
  objetPosition : 0,
  compteur : 0,
  //objet lancé
  launch : function(timestamp){
    if( !linkEtat.arrow ){
      myBackground.shadow.opacity = 1;
    }
    var progress;
    var sens; // positif ou négatif
    var axies; // x ou y
    if (!this.startObjet) this.startObjet = timestamp;
    progress = timestamp - this.startObjet;
    if ( progress > this.time ){
      this.startObjet = timestamp;
      if( !linkEtat.throwObjet.collisionBooleen ){
        //distance parcouru par le sprite
        switch (linkEtat.throwObjet.directionObjet) {
          case 'S':
            sens = 1;
            axies = 'top';
            myBackground.item.top = parseFloat(myBackground.item.top) + 1 + 'px';
            myBackground.shadow.top = parseFloat(myBackground.shadow.top) + 1 + 'px';
            if ( Math.abs(parseFloat(myBackground.item.top) - this.distanceObjectTop) < 50 && this.compteur > 10 ){
              myBackground.item.top = parseFloat(myBackground.item.top) + 1 + 'px';
              this.compteur = 0;
            } else { this.compteur++; }
            break;
          case 'N':
            sens = 0;
            axies = 'top';
            myBackground.item.top = parseFloat(myBackground.item.top) - 1 + 'px';
            myBackground.shadow.top = parseFloat(myBackground.shadow.top) - 1 + 'px';
            if ( Math.abs(parseFloat(myBackground.item.top) - this.distanceObjectTop) < 50 && this.compteur > 5 ){
              myBackground.shadow.top = parseFloat(myBackground.shadow.top) - 1 + 'px';
              this.compteur = 0;
            } else { this.compteur++; }
            break;
          case 'E':
            sens = 1;
            axies = 'left';
            myBackground.item.left = parseFloat(myBackground.item.left) + 1 + 'px';
              myBackground.shadow.left = parseFloat(myBackground.shadow.left) + 1 + 'px';
            if ( Math.abs(parseFloat(myBackground.item.left) - this.distanceObjectLeft) < 50 && this.compteur > 5 ){
              myBackground.item.top = (parseFloat(myBackground.item.top) + 1) + 'px';
              this.compteur = 0;
            } else { this.compteur++; }
            break;
          case 'W':
            sens = 0;
            axies = 'left';
            myBackground.item.left = parseFloat(myBackground.item.left) - 1 + 'px';
              myBackground.shadow.left = parseFloat(myBackground.shadow.left) - 1 + 'px';
            if ( Math.abs(parseFloat(myBackground.item.left) - this.distanceObjectLeft) < 50 && this.compteur > 5 ){
              myBackground.item.top = (parseFloat(myBackground.item.top) + 1) + 'px';
              this.compteur = 0;
            } else { this.compteur++; }
            break;
        }
        for ( var i=0; myBackground.collisionListe[myBackground.stage][i] && !linkEtat.throwObjet.collisionBooleen; i++ ){
          if (!this.testObstacle(axies, sens, myBackground.item, myBackground.collisionListe[myBackground.stage][i])) {
            linkEtat.throwObjet.collisionBooleen = 1;
          }
        }
        for ( var j=0; myBackground.enemiesStage[myBackground.stage] && myBackground.enemiesStage[myBackground.stage][j] && !linkEtat.throwObjet.collisionBooleen; j++ ){
          if (!this.testObstacle(axies, sens, myBackground.item, myBackground.enemiesStage[myBackground.stage][j])) {
            linkEtat.throwObjet.collisionBooleen = 1;
            myBackground.enemiesStage[myBackground.stage][j].argument.life--;
          }
        }
      } else {
        this.time = 20;
        if ( !linkEtat.arrow && this.spriteLink[this.liftObject.argument.indice][linkEtat.throwObjet.objetPosition] ){
          if (linkEtat.throwObjet.objetPosition == 0 && linkAction.directionObjet == 'S'){
            //modifi la position de la div pour qu'elle ne passe pas le point d'impact
            myBackground.item.top = parseFloat(myBackground.item.top) - this.spriteLink[this.liftObject.argument.indice][linkEtat.throwObjet.objetPosition].tailleY  + 'px';
          } else {
            //modifi la position de la div pour qu'elle ne passe pas le point d'impact
            if ( linkEtat.throwObjet.objetPosition == 0 && linkAction.directionObjet == 'N' ){myBackground.item.left = (parseFloat(myBackground.item.left) - this.spriteLink[this.liftObject.argument.indice][linkEtat.throwObjet.objetPosition].tailleX) + 'px';}
          }
          myBackground.affiche(this.spriteLink[this.liftObject.argument.indice][linkEtat.throwObjet.objetPosition], myBackground.item, true);
          linkEtat.throwObjet.objetPosition++;
        }
        if ( linkEtat.arrow && this.spriteLink[1][linkEtat.arrowAxies][13][linkEtat.throwObjet.objetPosition] ) {
          myBackground.affiche(this.spriteLink[1][linkEtat.arrowAxies][13][linkEtat.throwObjet.objetPosition], myBackground.item, true);
          linkEtat.throwObjet.objetPosition++;
        }
      }
    }
    if ( (this.liftObject && this.spriteLink[this.liftObject.argument.indice][linkEtat.throwObjet.objetPosition]) || (linkEtat.arrow && this.spriteLink[1][linkEtat.arrowAxies][13][linkEtat.throwObjet.objetPosition]) ){
      this.requestID = window.requestAnimationFrame(function(timestamp){linkAction.launch(timestamp)});
    } else {
      linkEtat.arrow = 0;
      this.time = 20;
      myBackground.item.opacity = 0;
      myBackground.shadow.opacity = 0;
      myBackground.item[axies] = '0px';
      window.cancelAnimationFrame(this.requestID);
    }
  },
  start : null,
  temps : 20,
  //mouvement du personnage
  mouvement : function(timestamp){
    if (!this.start) this.start = timestamp;
    //initialise le temps dans le sens correspondant quand le personnage est bloqué par un obstacle
    if ( !linkEtat.timeObstacle.leftStart && linkEtat.collision.collisionBooleen && linkEtat.collision.direction == 'W' ) linkEtat.timeObstacle.leftStart = timestamp;
    if ( !linkEtat.timeObstacle.rightStart && linkEtat.collision.collisionBooleen && linkEtat.collision.direction == 'E' ) linkEtat.timeObstacle.rightStart = timestamp;
    if ( !linkEtat.timeObstacle.topStart && linkEtat.collision.collisionBooleen && linkEtat.collision.direction == 'N' ) linkEtat.timeObstacle.topStart = timestamp;
    if ( !linkEtat.timeObstacle.bottomStart && linkEtat.collision.collisionBooleen && linkEtat.collision.direction == 'S' ) linkEtat.timeObstacle.bottomStart = timestamp;
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
    if (progress > this.temps){
      //parcour la liste des objet cacher
      for (var i = 0; i < myBackground.collisionListe[myBackground.stage].length; i++) {
        if ( myBackground.div[myBackground.collisionListe[myBackground.stage][i].id] && myBackground.collisionListe[myBackground.stage][i].argument.hide && (linkEtat.item.sword || !myBackground.collisionListe[myBackground.stage][i].argument.sword) && !linkEtat.chestOpen[myBackground.stage][i] ) {
          if ( myBackground.collisionListe[myBackground.stage][i].argument.condition() ) {
            myBackground.div[myBackground.collisionListe[myBackground.stage][i].id].style.opacity = 1;
          } else {
            myBackground.div[myBackground.collisionListe[myBackground.stage][i].id].style.opacity = 0;
          }
        }
      }
      //affiche le menu
      this.menu();
      //vérifi qu'un message s'affiche désactive le reste.
      if( !this.textProgress ){
        //vérifi si link a été touché
        if ( ( Date.now() - linkEtat.collisionEnemi.lastFire ) < 2000 ) {
          if ( this.divPersonnage.opacity == 1 ) {
            this.divPersonnage.opacity = 0.5;
          } else {
            this.divPersonnage.opacity = 1;
          }
        } else {
          this.divPersonnage.opacity = 1;
        }
        if ( linkEtat.life[0] > 0 ){
          //vérifi si le temps est à 2s
          if( this.temps == 2000 ){
            //repasse le temps à 20
            this.temps = 20;
            linkEtat.actionOff.sprite = this.spriteLink[linkEtat.spritePosition.color][0][this.walk][3];
            myBackground.item.opacity = 0;
          }
          this.start = timestamp;
          if ( linkEtat.touche.keyAPlusObjet || linkEtat.slachSword == 3 ){
            //centre l'objet transporté par link
            myBackground.centreObjet();
          }
          //souléve un objet
          if ( this.lastPosition > linkEtat.spritePosition.position && linkEtat.touche.keyAPlusObjet ){
            myBackground.item['z-index'] = 2;
            myBackground.item.opacity = 1;
            this.spriteSelection( linkEtat.timeObstacle.supSecondeBottom, 2, this.spriteLink[linkEtat.spritePosition.color][linkEtat.spritePosition.direction][this.walk][0], linkEtat.touche.keyAPlusObjet );
            if (this.lastPosition == linkEtat.spritePosition.position){
              myBackground.item['z-index'] = 4;
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
        } else {
          this.linkSprite.style.transform = 'scaleX(1)';
          //envoie la dimension en scale 1
          linkEtat.tailleSprite = 0;
          this.temps = 500;
          //repasse l'opacity de link à 3
          this.divPersonnage.opacity = 1;
          //parcour le sprite du game over
          myBackground.divCircle.opacity = 1;
          if ( myBackground.circle[linkEtat.counter] ){
            myBackground.positionSprite(myBackground.divCircle, myBackground.imgCircle, myBackground.circle[linkEtat.counter]);
            linkEtat.counter--;
          } else {
            this.gameOver();
          }
          if ( this.spriteLink[linkEtat.spritePosition.color][4][linkEtat.spritePosition.position] ){
            this.spriteDefaut(this.spriteLink[linkEtat.spritePosition.color][4][linkEtat.spritePosition.position]);
            linkEtat.spritePosition.position++;
          }
        }
      }
    }
    //enregistre la position de link
    linkEtat.sauvPositionSprite = {
        tailleX : parseFloat(this.persoShow.width),//position en left
        tailleY : parseFloat(this.persoShow.height),//position en top
        positionX : parseFloat(this.divPersonnage.left) + parseFloat(this.persoShow.left),//largeur
        positionY : parseFloat(this.divPersonnage.top) + parseFloat(this.persoShow.top),//hauteur
        width : parseFloat(this.persoShow.width),//position en left
        height : parseFloat(this.persoShow.height),//position en top
        left : parseFloat(this.divPersonnage.left) + parseFloat(this.persoShow.left),//largeur
        top : parseFloat(this.divPersonnage.top) + parseFloat(this.persoShow.top)//hauteur
    };
    window.requestAnimationFrame(function(timestamp){linkAction.mouvement(timestamp)});
  },
  resetGame : 0,
  counterMessage : 0,
  textProgress : 0,
  messageLoading : null,
  startMessage : null,
  requestIDMessage : null,
  //gameOver
  gameOver : function(){
    //réinitalise les variable du jeux
    //varibale d'état du jeux
    this.resetGame = 1;
    myBackground.nextstage(0);
    myBackground.loading(linkEtat.item, linkEtat.key);
  },
  //affichage text
  message : function(timestamp){
    var progress;
    if(!this.startMessage)this.startMessage = timestamp;
    progress = timestamp - this.startMessage;
    if (progress > 20) {
      this.startMessage = timestamp;
      //parcour le text
      if ( this.messageLoading && this.counterMessage < this.messageLoading.length ) {
        //affiche la zone de text
        myBackground.text.opacity = 1;
        myBackground.message.textContent = myBackground.message.textContent + this.messageLoading.charAt(this.counterMessage);
        this.counterMessage++;
      } else {
        //réinitalise les variables lié au message et cache la zone de texte
        if ( linkEtat.touche.keyEnter ){
          myBackground.message.textContent = '';
          this.counterMessage = 0;
          this.textProgress = 0;
          this.messageLoading = null;
          myBackground.text.opacity = 0;
          window.cancelAnimationFrame(this.requestIDMessage);
          if (myBackground.divWin.opacity == 0.3) {
            this.gameOver();
          }
        }
      }
    }
    this.requestIDMessage = window.requestAnimationFrame(function(timestamp){linkAction.message(timestamp)});
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
    //bare de menu, zone de vue et positionnement du message
    if ( myBackground.divJeux.offsetHeight > 223 ){
      if ( ( parseFloat(this.divPersonnage.top) > 119 ) && ( parseFloat(this.divPersonnage.top) < ( myBackground.divJeux.offsetHeight - 120 ) ) ){
        myBackground.divJeux.style.top = (103 - parseFloat(this.divPersonnage.top)) + 'px';
      } else {
        if ( parseFloat(this.divPersonnage.top) <= 119 ) {
          myBackground.divJeux.style.top = '0px';
        } else {
          myBackground.divJeux.style.top = ( -(myBackground.divJeux.offsetHeight) + 223 ) + 'px';
        }
      }
    } else {
      myBackground.divJeux.style.top = '0px';
    }
    if ( myBackground.divJeux.offsetWidth > 256 ){
      if ( ( parseFloat(this.divPersonnage.left) > 128 ) && ( parseFloat(this.divPersonnage.left) < ( myBackground.divJeux.offsetWidth - 128 ) ) ){
        myBackground.divJeux.style.left = (121 - parseFloat(this.divPersonnage.left)) + 'px';
      } else {
        if ( parseFloat(this.divPersonnage.left) <= 128 ){
          myBackground.divJeux.style.left = '0px';
        } else {
          myBackground.divJeux.style.left = ( -(myBackground.divJeux.offsetHeight) + 256 ) + 'px';
        }
      }
    } else {
      myBackground.divJeux.style.left = '0px';
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
  spriteLink : [[  // indice 0 erreur
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
        [//indice 0 marche
          cP(-101, -1028, 16, 24),//marche vers l'avent 1
          cP(-124 -1029, 16, 23),//marche vers l'avent 2
          cP(-148, -1030, 16, 22),//marche vers l'avent 3
          cP(-171, -1030, 16, 22),//marche vers l'avent 4 statick
          cP(-194, -1031, 16, 22),//marche vers l'avent 5
          cP(-218, -1029, 16, 23),//marche vers l'avent 6
          cP(-241, -1028, 16, 24)//marche vers l'avent 7
        ],[ //indice 1 marche avec bouclier
          cP(-101, -1058, 16, 24),//marche vers l'avent 1 avec un bouclier
          cP(-124, -1059, 16, 23),//marche vers l'avent 2 avec un bouclier
          cP(-148, -1060, 16, 22),//marche vers l'avent 3 avec un bouclier
          cP(-171, -1060, 16, 22),//marche vers l'avent 4 avec un bouclier statick
          cP(-194, -1060, 16, 22),//marche vers l'avent 5 avec un bouclier
          cP(-218, -1059, 16, 23),//marche vers l'avent 6 avec un bouclier
          cP(-241, -1058, 16, 24)//marche vers l'avent 7 avec un bouclier
        ],[//indice 2 Tiré
          cP(-107, -1095, 16, 20),//Tiré vers le bas 1
          cP(-129, -1095, 16, 20),//Tiré vers le bas 2
          cP(-149 , -1095, 24, 20),//Tiré vers le bas 3
          cP(-183, -1094, 30, 21)//Tiré vers le bas 4
        ],[//indice 3 souléve un objet
          cP(-96, -242, 16, 19),//souléve vers le bas 1 un objet
          cP(-117, -243, 30, 18),//souléve vers le bas 1 un objet
          cP(-151, -243, 34, 19),//souléve vers le bas 2 un objet
          cP(-189, -233, 34, 28),//souléve vers le bas 3 un objet
          cP(-233, -221, 16, 40),//souléve vers le bas 4 un objet
          cP(-262, -227, 16, 34)//souléve vers le bas 5 un objet
        ],[//indice 4 pousse
          cP(-152, -1182, 16, 20),//pousser vers le bas 1
          cP(-172, -1183, 16, 19),//pousser vers le bas 2
          cP(-191, -1184, 16, 18)//pousser vers le bas 3
        ],[//indice 5 marche avec un objet
          cP(-240, -1183, 16, 22),//marche avec un objet vers le bas 1 et trouver objet
          cP(-261, -1184, 16, 21),//marche avec un objet vers le bas 2
          cP(-281, -1184, 16, 21),//marche avec un objet vers le bas 3
          cP(-303, -1184, 16, 21)//marche avec un objet vers le bas 4
        ],[//indice 6 lancer un objet
          cP(-326, -1184, 17, 21)//lancer un objet vers le bas 1
        ],[//indice 7 coup d'épée
          cP(-82, -1209, 20, 23),//coup d'épée vers le bas 1
          cP(-107, -1210, 21, 29),//coup d'épée vers le bas 2
          cP(-136, -1210, 20, 31),//coup d'épée vers le bas 3
          cP(-162, -1211, 20, 31),//coup d'épée vers le bas 4
          cP(-186, -1211, 28, 29),//coup d'épée vers le bas 5
          cP(-217, -1211, 32, 27)//coup d'épée vers le bas 6
        ],[//indice 8 charge épée
          cP(-11, -1251, 19, 29),//charge épée vers le bas 1
          cP(-32, -1251, 19, 29),//charge épée vers le bas 2
          cP(-55, -1251, 19, 29),//charge épée vers le bas 3
          cP(-76, -1251, 19, 29),//charge épée vers le bas 4
          cP(-98, -1251, 19, 29),//charge épée vers le bas 5
          cP(-120, -1251, 19, 29),//charge épée vers le bas 6
          cP(-145, -1251, 19, 29),//charge épée vers le bas 7
          cP(-191, -1251, 19, 29),//charge épée vers le bas 8
          cP(-215, -1251, 19, 29),//charge épée vers le bas 9
          cP(-238, -1251, 19, 29),//charge épée vers le bas 10
          cP(-262, -1251, 19, 34),//charge épée vers le bas 11
          cP(-284, -1251, 19, 34),//charge épée vers le bas 12
          cP(-307, -1250, 19, 31),//charge épée vers le bas 13
          cP(-328, -1250, 20, 32),//charge épée vers le bas 14
        ],[//indice 9 épée chargé
          cP(-24, -1294, 19, 29)
        ],[//indice 10 marche avec l'épée chargé
          cP(-14, -1343, 19, 29),//marche avec l'épée vers le bas 1
          cP(-38, -1342, 19, 29),//marche avec l'épée vers le bas 2
          cP(-60, -1342, 19, 29),//marche avec l'épée vers le bas 3
          cP(-82, -1343, 19, 29),//marche avec l'épée vers le bas 4
          cP(-103, -1344, 19, 29)//marche avec l'épée vers le bas 5
        ],[//indice 11 coup d'épée chargé
          cP(-19, -994, 20, 26),//coup d'épée chargé vers le bas 1
          cP(-47, -982, 15, 35),//coup d'épée chargé vers le bas 2
          cP(-69, -982, 16, 38),//coup d'épée chargé vers le bas 3
          cP(-91, -993, 20, 26),//coup d'épée chargé vers le bas 4
          cP(-119, -997, 28, 22),//coup d'épée chargé vers le bas 5
          cP(-153, -997, 28, 22),//coup d'épée chargé vers le bas 6
          cP(-188, -996, 17, 31),//coup d'épée chargé vers le bas 7
          cP(-210, -997, 28, 22),//coup d'épée chargé vers le bas 8
          cP(-244, -997, 28, 22),//coup d'épée chargé vers le bas 9
          cP(-279, -991, 16, 28),//coup d'épée chargé vers le bas 10
          cP(-306, -993, 20, 26),//coup d'épée chargé vers le bas 11
          cP(-333, -997, 16, 22)//coup d'épée chargé vers le bas 12
        ],[//indice 12 tir à l'arc
          cP(-123, -1398, 17, 24),//tir à l'arc vers le bas 1
          cP(-154, -1399, 18, 21),//tir à l'arc vers le bas 2
          cP(-183, -1822, 18, 22)//tir à l'arc vers le bas 3
        ],[//indice 13 fléche
          cP(-216, -503, 5, 15),//fléche vers le bas 1
          cP(-224, -503, 6, 11),//fléche vers le bas 2
          cP(-232, -503, 5, 11),//fléche vers le bas 3
          cP(-239, -503, 6, 11)//fléche vers le bas 4
        ],[//indice 14 bléssé
          cP(-271, -1093, 16, 21)//bléssé vers le bas
        ]
    ],[//indice 1 vers le haut
        [//indice 0 marche
          cP(-456, -1032, 16, 24),//marche vers le haut 1
          cP(-479, -1033, 16, 23),//marche vers le haut 2
          cP(-503, -1034, 16, 22),//marche vers le haut 3
          cP(-526, -1034, 16, 22),//marche vers le haut 4 statick
          cP(-550, -1034, 16, 22),//marche vers le haut 5
          cP(-573, -1033, 16, 23),//marche vers le haut 6
          cP(-595, -1032, 16, 24)//marche vers le haut 7
        ],[ //indice 1 marche avec bouclier
          cP(-456, -1062, 17, 24),//marche vers le haut 1 avec un bouclier
          cP(-479, -1063, 17, 23),//marche vers le haut 2 avec un bouclier
          cP(-503, -1064, 17, 22),//marche vers le haut 3 avec un bouclier
          cP(-526, -1064, 17, 22),//marche vers le haut 4 avec un bouclier statick
          cP(-550, -1064, 17, 22),//marche vers le haut 5 avec un bouclier
          cP(-573, -1063, 17, 23),//marche vers le haut 6 avec un bouclier
          cP(-595, -1062, 17, 24)//marche vers le haut 7 avec un bouclier
        ],[//indice 2 Tiré
          cP(-473, -1097, 16, 21),//Tiré vers le haut 1
          cP(-493, -1098, 16, 20),//Tiré vers le haut 2
          cP(-514, -1098, 24, 20),//Tiré vers le haut 3
          cP(-544, -1098, 30, 20)//Tiré vers le haut 4
        ],[//indice 3 souléve un objet
          cP(-453, -226, 16, 31),//souléve vers le haut 1 un objet
          cP(-480, -226, 22, 31),//souléve vers le haut 1 un objet
          cP(-510, -226, 32, 31),//souléve vers le haut 2 un objet
          cP(-547, -225, 32, 32),//souléve vers le haut 3 un objet
          cP(-585, -224, 16, 33),//souléve vers le haut 4 un objet
          cP(-610, -223, 16, 34)//souléve vers le haut 5 un objet
        ],[//indice 4 pousse
          cP(-514, -1179, 16, 22),//pousser vers le haut 1
          cP(-534, -1180, 16, 21),//pousser vers le haut 2
          cP(-554, -1180, 16, 21)//pousser vers le haut 3
        ],[//indice 5 marche avec un objet
          cP(-580, -1179, 16, 22),//marche avec un objet vers le haut 1
          cP(-606, -1180, 16, 21),//marche avec un objet vers le haut 2
          cP(-630, -1179, 16, 22),//marche avec un objet vers le haut 3
          cP(-652, -1180, 16, 21)//marche avec un objet vers le haut 4
        ],[//indice 6 lancer un objet
          cP(-585, -279, 16, 22)//lancer un objet vers le haut
        ],[//indice 7 coup d'épée
        cP(-407, -1218, 23, 22),//coup d'épée vers le haut 1
        cP(-438, -1218, 22, 22),//coup d'épée vers le haut 2
        cP(-469, -1216, 23, 24),//coup d'épée vers le haut 3
        cP(-500, -1210, 22, 30),//coup d'épée vers le haut 4
        cP(-530, -1208, 20, 32),//coup d'épée vers le haut 5
        cP(-555, -1205, 20, 35),//coup d'épée vers le haut 6
        cP(-579, -1210, 24, 30),//coup d'épée vers le haut 7
        cP(-606, -1213, 29, 27),//coup d'épée vers le haut 8
        cP(-641, -1217, 32, 23)//coup d'épée vers le haut 9
      ],[//indice 8 charge épée
        cP(-402, -1253, 19, 26),//charge épée vers le haut 1
        cP(-425, -1253, 19, 26),//charge épée vers le haut 2
        cP(-447, -1253, 19, 26),//charge épée vers le haut 3
        cP(-468, -1253, 19, 26),//charge épée vers le haut 4
        cP(-490, -1253, 19, 26),//charge épée vers le haut 5
        cP(-511, -1253, 19, 26),//charge épée vers le haut 6
        cP(-533, -1253, 19, 26),//charge épée vers le haut 7
        cP(-554, -1253, 19, 26),//charge épée vers le haut 8
        cP(-575, -1253, 19, 26),//charge épée vers le haut 9
        cP(-597, -1252, 19, 27),//charge épée vers le haut 10
        cP(-618, -1251, 19, 28),//charge épée vers le haut 11
        cP(-639, -1248, 19, 31),//charge épée vers le haut 12
        cP(-660, -1249, 19, 30),//charge épée vers le haut 13
        cP(-402, -1284, 19, 31),//charge épée vers le haut 14
        cP(-424, -1283, 19, 33),//charge épée vers le haut 15
        cP(-448, -1282, 19, 33)//charge épée vers le haut 16
      ],[//indice 9 épée chargé
        cP(-496, -1295, 19, 26)
      ],[//indice 10 marche avec l'épée chargé
        cP(-411, -1337, 19, 25),//marche avec l'épée vers le bas 1
        cP(-432, -1337, 19, 25),//marche avec l'épée vers le bas 2
        cP(-455, -1337, 19, 25),//marche avec l'épée vers le bas 3
        cP(-477, -1337, 19, 25),//marche avec l'épée vers le bas 4
        cP(-501, -1337, 19, 25)//marche avec l'épée vers le bas 5
      ],[//indice 11 coup d'épée chargé
        cP(-368, -991, 24, 39),//coup d'épée chargé vers le bas 1
        cP(-397, -992, 15, 35),//coup d'épée chargé vers le bas 2
        cP(-422, -991, 17, 38),//coup d'épée chargé vers le bas 3
        cP(-449, -991, 17, 38),//coup d'épée chargé vers le bas 4
        cP(-471, -991, 25, 27),//coup d'épée chargé vers le bas 5
        cP(-501, -991, 28, 22),//coup d'épée chargé vers le bas 6
        cP(-538, -985, 17, 28),//coup d'épée chargé vers le bas 7
        cP(-562, -991, 28, 22),//coup d'épée chargé vers le bas 8
        cP(-601, -991, 16, 31),//coup d'épée chargé vers le bas 9
        cP(-627, -992, 17, 31),//coup d'épée chargé vers le bas 10
        cP(-648, -992, 20, 27),//coup d'épée chargé vers le bas 11
        cP(-678, -992, 17, 22)//coup d'épée chargé vers le bas 12
      ],[//indice 12 tir à l'arc
        cP(-432, -1393, 18, 22),//tir à l'arc vers le bas 1
        cP(-457, -1394, 21, 21),//tir à l'arc vers le bas 2
        cP(-486, -1393, 21, 22)//tir à l'arc vers le bas 3
      ],[//indice 13 fléche
        cP(-517, -499, 5, 15),//fléche vers le bas 1
        cP(-525, -503, 6, 11),//fléche vers le bas 2
        cP(-533, -503, 5, 11),//fléche vers le bas 3
        cP(-540, -503, 6, 11)//fléche vers le bas 4
      ],[//indice 14 bléssé
        cP(-635, -1098 , 20, 19)//bléssé vers le bas
      ]
    ],[//indice 2 vers la droite
        [//indice 0 marche
          cP(-787, -1029, 16, 23),//marche vers la droite 1
          cP(-810, -1028, 16, 24),//marche vers la droite 2
          cP(-835, -1028, 16, 24),//marche vers la droite 3
          cP(-857, -1029, 16, 23),//marche vers la droite 4 statick
          cP(-881, -1028, 16, 24),//marche vers la droite 5
          cP(-905, -1028, 16, 24),//marche vers la droite 6
          cP(-927, -1029, 17, 23),//marche vers la droite 7
          cP(-948, -1029, 16, 23)//marche vers la droite 8
        ],[ //indice 1 marche avec bouclier
          cP(-789, -1059, 18, 23),//marche vers la droite 1 avec un bouclier
          cP(-812, -1058, 18, 24),//marche vers la droite 2 avec un bouclier
          cP(-837, -1058, 19, 24),//marche vers la droite 3 avec un bouclier
          cP(-859, -1059, 19, 23),//marche vers la droite 4 avec un bouclier statick
          cP(-883, -1058, 19, 24),//marche vers la droite 5 avec un bouclier
          cP(-907, -1058, 18, 24),//marche vers la droite 6 avec un bouclier
          cP(-929, -1059, 19, 23)//marche vers la droite 7 avec un bouclier
        ],[//indice 2 Tiré
          cP(-815, -1087, 16, 23),//Tiré vers la droite 1
          cP(-838, -1088, 19, 22),//Tiré vers la droite 2
          cP(-867, -1088, 21, 22),//Tiré vers la droite 2
          cP(-897, -1088, 20, 22)//Tiré vers la droite 2
        ],[//indice 3 souléve un objet
          cP(-790, -1118, 25, 20),//souléve vers la droite 1 sans objet
          cP(-825, -1117, 28, 21),//souléve vers la droite 2 sans objet
          cP(-863, -1117, 31, 21),//souléve vers la droite 3 sans objet
          cP(-902, -1117, 31, 21),//souléve vers la droite 4 sans objet
          cP(-937, -1115, 16, 23),//souléve vers la droite 5 sans objet
        ],[//indice 4 pousse
          cP(-833, -1186, 16, 23),//pousser vers la droite 1
          cP(-853, -1187, 16, 23),//pousser vers la droite 2
          cP(-873, -1188, 16, 22),//pousser vers la droite 3
          cP(-894, -1189, 16, 21)//pousser vers la droite 4
        ],[//indice 5 marche avec un objet
          cP(-926, -1188, 16, 24),//marche avec un objet vers la droite 1
          cP(-948, -1190, 16, 22),//marche avec un objet vers la droite 2
          cP(-971, -1191, 17, 21)//marche avec un objet vers la droite 3
        ],[//indice 6 lancer un objet
          cP(-1017, -1188, 16, 23)//lancer un objet vers la droite 1
        ],[//indice 7 coup d'épée
        cP(-751, -1219, 16, 23),//coup d'épée vers la droite 1
        cP(-774, -1219, 18, 23),//coup d'épée vers la droite 2
        cP(-797, -1218, 23, 24),//coup d'épée vers la droite 3
        cP(-826, -1218, 26, 24),//coup d'épée vers la droite 4
        cP(-856, -1221, 29, 21),//coup d'épée vers la droite 5
        cP(-890, -1221, 31, 21),//coup d'épée vers la droite 6
        cP(-928, -1221, 28, 21),//coup d'épée vers la droite 4
        cP(-958, -1220, 28, 28),//coup d'épée vers la droite 5
        cP(-997, -1218, 23, 31)//coup d'épée vers la droite 6
      ],[//indice 8 charge épée
          cP(-700, -1259, 24, 23),//charge épée vers la droite 1
          cP(-726, -1259, 24, 23),//charge épée vers la droite 2
          cP(-752, -1259, 24, 23),//charge épée vers la droite 3
          cP(-778, -1259, 24, 23),//charge épée vers la droite 4
          cP(-804, -1259, 24, 23),//charge épée vers la droite 5
          cP(-830, -1259, 24, 23),//charge épée vers la droite 6
          cP(-856, -1259, 24, 23),//charge épée vers la droite 7
          cP(-882, -1259, 24, 23),//charge épée vers la droite 8
          cP(-908, -1259, 24, 23),//charge épée vers la droite 9
          cP(-934, -1259, 24, 23),//charge épée vers la droite 10
          cP(-960, -1259, 24, 23),//charge épée vers la droite 11
          cP(-986, -1259, 24, 23),//charge épée vers la droite 12
          cP(-1012, -1259, 24, 23),//charge épée vers la droite 13
          cP(-1038, -1259, 24, 23),//charge épée vers la droite 14
          cP(-1064, -1259, 24, 23),//charge épée vers la droite 15
          cP(-700, -1284, 24, 23),//charge épée vers la droite 16
          cP(-726, -1284, 24, 23),//charge épée vers la droite 17
          cP(-752, -1284, 24, 23),//charge épée vers la droite 18
          cP(-780, -1284, 24, 23),//charge épée vers la droite 19
          cP(-806, -1284, 24, 23),//charge épée vers la droite 20
          cP(-832, -1284, 29, 23),//charge épée vers la droite 21
          cP(-865, -1284, 29, 23),//charge épée vers la droite 22
          cP(-896, -1284, 29, 23),//charge épée vers la droite 23
          cP(-927, -1284, 26, 23),//charge épée vers la droite 24
          cP(-955, -1284, 25, 23),//charge épée vers la droite 25
          cP(-982, -1284, 26, 23),//charge épée vers la droite 26
          cP(-1009, -1284, 28, 23),//charge épée vers la droite 27
          cP(-1038, -1284, 27, 23)//charge épée vers la droite 28
        ],[//indice 9 épée chargé
          cP(-722, -1315, 24, 23)
        ],[//indice 10 marche avec l'épée chargé
          cP(-773, -1358, 24, 23),//marche avec l'épée vers la droite 1
          cP(-799, -1360, 24, 22),//marche avec l'épée vers la droite 2
          cP(-826, -1360, 24, 22),//marche avec l'épée vers la droite 3
          cP(-853, -1361, 24, 21)//marche avec l'épée vers la droite 4
        ],[//indice 11 coup d'épée chargé
          cP(-709, -988, 23, 23),//coup d'épée chargé vers la droite 1
          cP(-745, -991, 31, 23),//coup d'épée chargé vers la droite 2
          cP(-786, -992, 34, 23),//coup d'épée chargé vers la droite 3
          cP(-830, -991, 34, 23),//coup d'épée chargé vers la droite 4
          cP(-873, -991, 23, 23),//coup d'épée chargé vers la droite 5
          cP(-906, -991, 16, 31),//coup d'épée chargé vers la droite 6
          cP(-927, -991, 28, 23),//coup d'épée chargé vers la droite 7
          cP(-959, -991, 28, 23),//coup d'épée chargé vers la droite 8
          cP(-998, -985, 17, 29),//coup d'épée chargé vers la droite 9
          cP(-1024, -991, 28, 23),//coup d'épée chargé vers la droite 10
          cP(-1054, -991, 28, 23),//coup d'épée chargé vers la droite 11
          cP(-1088, -991, 23, 23)//coup d'épée chargé vers la droite 12
        ],[//indice 12 tir à l'arc
          cP(-772, -1415, 17, 23),//tir à l'arc vers la droite 1
          cP(-796, -1415, 19, 22),//tir à l'arc vers la droite 2
          cP(-823, -1415, 20, 23)//tir à l'arc vers la droite 3
        ],[//indice 13 fléche
          cP(-885, -528, 15, 5),//fléche vers la droite 1
          cP(-910, -520, 11, 6),//fléche vers la droite 2
          cP(-910, -528, 11, 5),//fléche vers la droite 3
          cP(-910, -535, 11, 6)//fléche vers la droite 4
        ],[//indice 14 bléssé
          cP(-969, -1089, 16, 21)//bléssé vers la droite
        ]
      ],[//indice 3 tomber
        cP(-635, -1421, 22, 21),//tomber 1
        cP(-663, -1421, 16, 16),//tomber 2
        cP(-684, -1423, 13, 13),//tomber 3
        cP(-702, -1425, 8, 8),//tomber 4
        cP(-651, -1448, 7, 7),//tomber 5
        cP(-663, -1450, 3, 3)//tomber 6
      ],[//indice 4 game over
        cP(-639, -1463, 18, 21),//game over 1
        cP(-663, -1470, 24, 22),//game over 2
        cP(-692, -1470, 24, 15)//game over 3
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
          cP(-106, -1518, 16, 24),//marche vers l'avent 1 avec un bouclier
          cP(-129, -1519, 16, 23),//marche vers l'avent 2 avec un bouclier
          cP(-153, -1520, 16, 22),//marche vers l'avent 3 avec un bouclier
          cP(-176, -1520, 16, 22),//marche vers l'avent 4 avec un bouclier statick
          cP(-199, -1520, 16, 22),//marche vers l'avent 5 avec un bouclier
          cP(-223, -1519, 16, 23),//marche vers l'avent 6 avec un bouclier
          cP(-246, -1518, 16, 24)//marche vers l'avent 7 avec un bouclier
        ],[//indice 3 Tiré
          cP(-112, -1555, 16, 20),//Tiré vers le bas 1
          cP(-134, -1555, 16, 20),//Tiré vers le bas 2
          cP(-154, -1555, 24, 20),//Tiré vers le bas 3
          cP(-188, -1554, 30, 21)//Tiré vers le bas 4
        ],[//indice 4 souléve un objet
          cP(-96, -242, 16, 19),//souléve vers le bas 1 un objet
          cP(-117, -243, 30, 18),//souléve vers le bas 1 un objet
          cP(-151, -243, 34, 19),//souléve vers le bas 2 un objet
          cP(-189, -233, 34, 28),//souléve vers le bas 3 un objet
          cP(-233, -221, 16, 40),//souléve vers le bas 4 un objet
          cP(-262, -227, 16, 34)//souléve vers le bas 5 un objet
        ],[//indice 5 pousse
          cP(-173, -1585, 16, 20),//pousser vers le bas 1
          cP(-193, -1586, 16, 19),//pousser vers le bas 2
          cP(-212, -1587, 16, 18)//pousser vers le bas 3
        ],[//indice 6 marche avec un objet
          cP(-224, -1553, 16, 22),//marche avec un objet vers le bas 1 et trouver objet
          cP(-241, -282, 16, 21),//marche avec un objet vers le bas 2
          cP(-261, -282, 16, 21),//marche avec un objet vers le bas 3
          cP(-283, -282, 16, 21)//marche avec un objet vers le bas 4
        ],[//indice 7 lancer un objet
          cP(-306, -282, 17, 21)//lancer un objet vers le bas 1
        ],[//indice 8 coup d'épée
          cP(-103, -1612, 20, 23),//coup d'épée vers le bas 1
          cP(-128, -1613, 21, 29),//coup d'épée vers le bas 2
          cP(-157, -1613, 20, 31),//coup d'épée vers le bas 3
          cP(-183, -1614, 20, 31),//coup d'épée vers le bas 4
          cP(-207, -1612, 28, 31),//coup d'épée vers le bas 5
          cP(-238, -1614, 32, 27)//coup d'épée vers le bas 6
        ],[//indice 9 charge épée
          cP(-32, -1654, 19, 29),//charge épée vers le bas 1
          cP(-53, -1654, 19, 29),//charge épée vers le bas 2
          cP(-76, -1654, 19, 29),//charge épée vers le bas 3
          cP(-97, -1654, 19, 29),//charge épée vers le bas 4
          cP(-119, -1654, 19, 29),//charge épée vers le bas 5
          cP(-141, -1654, 19, 29),//charge épée vers le bas 6
          cP(-166, -1654, 19, 29),//charge épée vers le bas 7
          cP(-188, -1654, 19, 29),//charge épée vers le bas 8
          cP(-212, -1654, 19, 29),//charge épée vers le bas 9
          cP(-236, -1654, 19, 29),//charge épée vers le bas 10
          cP(-259, -1654, 19, 34),//charge épée vers le bas 11
          cP(-283, -1654, 19, 34),//charge épée vers le bas 12
          cP(-305, -1653, 19, 31),//charge épée vers le bas 13
          cP(-328, -1653, 19, 31),//charge épée vers le bas 14
          cP(-349, -1653, 20, 32)//charge épée vers le bas 15
        ],[//indice 10 épée chargé
          cP(-45, -1697, 19, 29)
        ],[//indice 11 marche avec l'épée chargé
          cP(-111, -1695, 19, 29),//marche avec l'épée vers le bas 1
          cP(-135, -1695, 19, 29),//marche avec l'épée vers le bas 2
          cP(-157, -1694, 19, 29),//marche avec l'épée vers le bas 3
          cP(-179, -1695, 19, 29),//marche avec l'épée vers le bas 4
          cP(-200, -1696, 19, 29)//marche avec l'épée vers le bas 5
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
          cP(-287, -1694, 17, 24),//tir à l'arc vers le bas 1
          cP(-318, -1695, 18, 21),//tir à l'arc vers le bas 2
          cP(-347, -1694, 18, 22)//tir à l'arc vers le bas 3
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
          cP(-461, -1492, 16, 24),//marche vers le haut 1
          cP(-484, -1493, 16, 23),//marche vers le haut 2
          cP(-508, -1494, 16, 22),//marche vers le haut 3
          cP(-531, -1494, 16, 22),//marche vers le haut 4 statick
          cP(-555, -1494, 16, 22),//marche vers le haut 5
          cP(-578, -1493, 16, 23),//marche vers le haut 6
          cP(-600, -1492, 16, 24)//marche vers le haut 7
        ],[ //indice 1 marche avec bouclier
          cP(-461, -1522, 17, 24),//marche vers le haut 1 avec un bouclier
          cP(-484, -1523, 17, 23),//marche vers le haut 2 avec un bouclier
          cP(-508, -1524, 17, 22),//marche vers le haut 3 avec un bouclier
          cP(-531, -1524, 17, 22),//marche vers le haut 4 avec un bouclier statick
          cP(-555, -1524, 17, 22),//marche vers le haut 5 avec un bouclier
          cP(-578, -1523, 17, 23),//marche vers le haut 6 avec un bouclier
          cP(-600, -1522, 17, 24)//marche vers le haut 7 avec un bouclier
        ],[//indice 2 Tiré
          cP(-478, -1557, 16, 21),//Tiré vers le haut 1
          cP(-498, -1558, 16, 20),//Tiré vers le haut 2
          cP(-519, -1558, 24, 30),//Tiré vers le haut 3
          cP(-550, -1558, 30, 20)//Tiré vers le haut 4
        ],[//indice 3 souléve un objet
          cP(-453, -226, 16, 31),//souléve vers le haut 1 un objet
          cP(-480, -226, 22, 31),//souléve vers le haut 1 un objet
          cP(-510, -226, 32, 31),//souléve vers le haut 2 un objet
          cP(-547, -225, 32, 32),//souléve vers le haut 3 un objet
          cP(-585, -224, 16, 33),//souléve vers le haut 4 un objet
          cP(-610, -223, 16, 34)//souléve vers le haut 5 un objet
        ],[//indice 4 pousse
          cP(-515, -1584, 16, 22),//pousser vers le haut 1
          cP(-535, -1585, 16, 21),//pousser vers le haut 2
          cP(-555, -1585, 16, 21)//pousser vers le haut 3
        ],[//indice 5 marche avec un objet
          cP(-585, -279, 16, 22),//marche avec un objet vers le haut 1
          cP(-611, -280, 16, 21),//marche avec un objet vers le haut 2
          cP(-635, -279, 16, 22),//marche avec un objet vers le haut 3
          cP(-657, -280, 16, 21)//marche avec un objet vers le haut 4
        ],[//indice 6 lancer un objet
          cP(-585, -279, 16, 22)//lancer un objet vers le haut
        ],[//indice 7 coup d'épée
        cP(-408, -1623, 23, 22),//coup d'épée vers le haut 1
        cP(-439, -1623, 22, 22),//coup d'épée vers le haut 2
        cP(-470, -1621, 23, 24),//coup d'épée vers le haut 3
        cP(-501, -1615, 22, 30),//coup d'épée vers le haut 4
        cP(-531, -1613, 20, 32),//coup d'épée vers le haut 5
        cP(-556, -1610, 20, 35),//coup d'épée vers le haut 6
        cP(-580, -1615, 24, 30),//coup d'épée vers le haut 7
        cP(-607, -1618, 29, 27),//coup d'épée vers le haut 8
        cP(-642, -1622, 32, 23)//coup d'épée vers le haut 9
      ],[//indice 9 charge épée
        cP(-403, -1658, 19, 26),//charge épée vers le haut 1
        cP(-426, -1658, 19, 26),//charge épée vers le haut 2
        cP(-448, -1658, 19, 26),//charge épée vers le haut 3
        cP(-469, -1658, 19, 26),//charge épée vers le haut 4
        cP(-491, -1658, 19, 26),//charge épée vers le haut 5
        cP(-512, -1658, 19, 26),//charge épée vers le haut 6
        cP(-534, -1658, 19, 26),//charge épée vers le haut 7
        cP(-555, -1658, 19, 26),//charge épée vers le haut 8
        cP(-576, -1658, 19, 26),//charge épée vers le haut 9
        cP(-598, -1657, 19, 27),//charge épée vers le haut 10
        cP(-619, -1656, 19, 28),//charge épée vers le haut 11
        cP(-640, -1653, 19, 31),//charge épée vers le haut 12
        cP(-661, -1654, 19, 30),//charge épée vers le haut 13
        cP(-403, -1689, 19, 31),//charge épée vers le haut 14
        cP(-425, -1688, 19, 32),//charge épée vers le haut 15
        cP(-449, -1687, 19, 33)//charge épée vers le haut 16
      ],[//indice 10 épée chargé
        cP(-497, -1700, 19, 26)
      ],[//indice 11 marche avec l'épée chargé
        cP(-543, -1693, 19, 25),//marche avec l'épée vers le bas 1
        cP(-564, -1693, 19, 25),//marche avec l'épée vers le bas 2
        cP(-587, -1693, 19, 25),//marche avec l'épée vers le bas 3
        cP(-609, -1693, 19, 25),//marche avec l'épée vers le bas 4
        cP(-633, -1693, 19, 25)//marche avec l'épée vers le bas 5
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
        cP(-546, -1739, 18, 22),//tir à l'arc vers le bas 1
        cP(-571, -1740, 21, 21),//tir à l'arc vers le bas 2
        cP(-600, -1739, 21, 22)//tir à l'arc vers le bas 3
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
          cP(-815, -1377, 18, 23),//marche vers la droite 1 avec un bouclier
          cP(-838, -1376, 18, 24),//marche vers la droite 2 avec un bouclier
          cP(-863, -1376, 19, 24),//marche vers la droite 3 avec un bouclier
          cP(-885, -1377, 19, 23),//marche vers la droite 4 avec un bouclier statick
          cP(-909, -1376, 18, 24),//marche vers la droite 5 avec un bouclier
          cP(-933, -1376, 18, 24),//marche vers la droite 6 avec un bouclier
          cP(-955, -1377, 19, 23)//marche vers la droite 7 avec un bouclier
        ],[//indice 2 Tiré
          cP(-841, -1406, 19, 22),//Tiré vers la droite 1
          cP(-864, -1406, 21, 22),//Tiré vers la droite 2
          cP(-893, -1406, 21, 22),//Tiré vers la droite 3
          cP(-920, -1406, 23, 22),//Tiré vers la droite 4
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
          cP(-839, -1477, 16, 23),//pousser vers la droite 1
          cP(-859, -1478, 16, 23),//pousser vers la droite 2
          cP(-879, -1479, 16, 22),//pousser vers la droite 3
          cP(-900, -1480, 16, 21)//pousser vers la droite 4
        ],[//indice 5 marche avec un objet
          cP(-922, -286, 16, 24),//marche avec un objet vers la droite 1
          cP(-944, -288, 16, 22),//marche avec un objet vers la droite 2
          cP(-967, -289, 17, 21)//marche avec un objet vers la droite 3
        ],[//indice 6 lancer un objet
          cP(-1013, -286, 16, 23)//lancer un objet vers la droite 1
        ],[//indice 7 coup d'épée
          cP(-757, -1510, 16, 23),//coup d'épée vers la droite 1
          cP(-780, -1510, 18, 23),//coup d'épée vers la droite 2
          cP(-803, -1509, 23, 24),//coup d'épée vers la droite 3
          cP(-832, -1509, 26, 24),//coup d'épée vers la droite 4
          cP(-862, -1512, 29, 21),//coup d'épée vers la droite 5
          cP(-896, -1512, 31, 21),//coup d'épée vers la droite 6
          cP(-934, -1512, 28, 21),//coup d'épée vers la droite 4
          cP(-964, -1511, 28, 28),//coup d'épée vers la droite 5
          cP(-1003, -1509, 23, 31)//coup d'épée vers la droite 6
        ],[//indice 9 charge épée
          cP(-706, -1550, 24, 23),//charge épée vers la droite 1
          cP(-732, -1550, 24, 23),//charge épée vers la droite 2
          cP(-758, -1550, 24, 23),//charge épée vers la droite 3
          cP(-784, -1550, 24, 23),//charge épée vers la droite 4
          cP(-810, -1550, 24, 23),//charge épée vers la droite 5
          cP(-836, -1550, 24, 23),//charge épée vers la droite 6
          cP(-862, -1550, 24, 23),//charge épée vers la droite 7
          cP(-888, -1550, 24, 23),//charge épée vers la droite 8
          cP(-914, -1550, 24, 23),//charge épée vers la droite 9
          cP(-940, -1550, 24, 23),//charge épée vers la droite 10
          cP(-966, -1550, 24, 23),//charge épée vers la droite 11
          cP(-992, -1550, 24, 23),//charge épée vers la droite 12
          cP(-1018, -1550, 24, 23),//charge épée vers la droite 13
          cP(-1044, -1550, 24, 23),//charge épée vers la droite 14
          cP(-1070, -1550, 24, 23),//charge épée vers la droite 15
          cP(-706, -1575, 24, 23),//charge épée vers la droite 16
          cP(-732, -1575, 24, 23),//charge épée vers la droite 17
          cP(-758, -1575, 24, 23),//charge épée vers la droite 18
          cP(-786, -1575, 24, 23),//charge épée vers la droite 19
          cP(-812, -1575, 24, 23),//charge épée vers la droite 20
          cP(-838, -1575, 29, 23),//charge épée vers la droite 21
          cP(-871, -1575, 29, 23),//charge épée vers la droite 22
          cP(-902, -1575, 29, 23),//charge épée vers la droite 23
          cP(-933, -1575, 26, 23),//charge épée vers la droite 24
          cP(-961, -1575, 25, 23),//charge épée vers la droite 25
          cP(-988, -1575, 26, 23),//charge épée vers la droite 26
          cP(-1015, -1575, 28, 23),//charge épée vers la droite 27
          cP(-1044, -1575, 27, 23)//charge épée vers la droite 28
        ],[//indice 10 épée chargé
          cP(-728, -1606, 24, 23)
        ],[//indice 11 marche avec l'épée chargé
          cP(-775, -1603, 24, 23),//marche avec l'épée vers la droite 1
          cP(-801, -1605, 24, 22),//marche avec l'épée vers la droite 2
          cP(-828, -1605, 24, 22),//marche avec l'épée vers la droite 3
          cP(-855, -1606, 24, 21)//marche avec l'épée vers la droite 4
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
          cP(-890, -1603, 17, 23),//tir à l'arc vers la droite 1
          cP(-914, -1603, 19, 22),//tir à l'arc vers la droite 2
          cP(-941, -1603, 20, 23)//tir à l'arc vers la droite 3
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
      cP(-395, -186, 21, 20), //indice 20 Meteor - arc
      cP(-418, -188, 16, 16), //indice 21 Bootstrap - coeur
      cP(-439, -188, 16, 16), //indice 22 Ajax - Bombe
      cP(-13, -505, 32, 32, {indice : 8}), //indice 23 gros roché
      cP(-319, -188, 75, 16), //indice 24 Toutes les clées
      cP(-833, -1680, 1, 1), //indice 25
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
      cP(-829, -602, 22, 18),//indice 0 slashing a bush
      cP(-862, -600, 16, 23),//indice 1 slashing a bush
      cP(-893, -599, 15, 26),//indice 2 slashing a bush
      cP(-924, -598, 14, 29),//indice 3 slashing a bush
      cP(-951, -597, 19, 32),//indice 4 slashing a bush
      cP(-977, -595, 24, 35),//indice 5 slashing a bush
      cP(-1006, -592, 27, 40),//indice 6 slashing a bush
      cP(-1034, -590, 23, 43)//indice 7 slashing a bush
    ],[//indice 8 Destroying a pot
      cP(-832, -660, 16, 16),//indice 0 slashing a bush
      cP(-861, -659, 19, 19),//indice 1 slashing a bush
      cP(-890, -657, 22, 22),//indice 2 slashing a bush
      cP(-919, -656, 26, 24),//indice 3 slashing a bush
      cP(-850, -656, 27, 25),//indice 4 slashing a bush
      cP(-979, -656, 29, 28),//indice 5 slashing a bush
      cP(-1015, -656, 25, 25),//indice 6 slashing a bush
      cP(-1047, -660, 18, 23)//indice 7 slashing a bush
    ]]
};
