var background = {
  compteur : 0,
  stage : 0,
  //image de fond
  creatImage : function (indice){
    this.zone.src = this.backgroundListe[indice];
  },
  //image interactive
  creatImage2 : function(){
    var typeObjet = function (element, type, index){
      var image = document.createElement('img');
      image.id = 'image' + background.compteur;
      image.style.position = 'absolute';
      element.id = background.compteur;
      image.src = '../image/bg kit/BG Kit 1.png';
      var div = document.createElement('div');
      div.id = 'div' + background.compteur;
      image.style.left = type.positionX + 'px';
      image.style.top = type.positionY + 'px';
      div.style.left = element.positionX + 'px';
      div.style.top = element.positionY + 'px';
      div.style.width = type.tailleX + 'px';
      div.style.height = type.tailleY + 'px';
      div.style.overflow = 'hidden';
      div.style.position = 'absolute';
      div.appendChild(image);
      background.divJeux.appendChild(div);
      div.style['z-index'] = index || -1;
      background.image[background.compteur] = document.getElementById('image' + background.compteur);
      background.div[background.compteur] = document.getElementById('div' + background.compteur);
    };
    for(var i=0;this.collisionListe[this.stage][i];i++){ //parcour les élément du décor
      if( this.collisionListe[this.stage][i].actionObjet.chest ){ //vérifi les coffres
        typeObjet(this.collisionListe[this.stage][i],  this.decorObject[1]);//ajoute une image par coffre
      }
      if( this.collisionListe[this.stage][i].actionObjet.lift ){ //vérifi les objet soulevable
        typeObjet(this.collisionListe[this.stage][i],  this.decorObject[2]);//ajoute une image par élément soulevable
      }
      if( this.collisionListe[this.stage][i].exitWay.boul ){
        typeObjet(this.exitListe[this.stage][0],  this.decorObject[0], 3); //ajoute les élément de sortie.
        this.collisionListe[this.stage][i].id = background.compteur;
      }
      this.compteur++;
    }
  },
  centreObjet : function(){
    var nombre = Math.round(Math.random() * 20);
    if ( !linkAction.collisionObjet && linkEtat.slachSword != 3 ) {
      this.item.left = parseFloat(linkAction.divPersonnage.left) + ((parseFloat(linkAction.divPersonnage.width) - parseFloat(this.item.width)) / 2) + 'px';
      this.item.top = parseFloat(linkAction.divPersonnage.top) -(parseFloat(this.item.height) - 0)  + 'px';
    }
    if ( linkEtat.slachSword == 3 ) {
      switch (linkEtat.touche.directionSword) {//met la direction du sprite corespondant
        case 'S':
          this.spriteObjet.left = linkAction.spriteLink[5][nombre].positionX + 'px';//position du sprite
          this.spriteObjet.top = linkAction.spriteLink[5][nombre].positionY + 'px';//position du sprite
          this.item.left = parseFloat(linkAction.divPersonnage.left) + 4 + 'px';//positionne la div au bout de l'épée de link
          this.item.top = parseFloat(linkAction.divPersonnage.top) + 19 + 'px';//positionne la div au bout de l'épée de link
          this.item.width = linkAction.spriteLink[5][nombre].tailleX + 'px';//largeur de la div
          this.item.height = linkAction.spriteLink[5][nombre].tailleY + 'px';//hauteur de la div
          break;
        case 'N':
          this.spriteObjet.left = linkAction.spriteLink[5][nombre].positionX + 'px';//position du sprite
          this.spriteObjet.top = linkAction.spriteLink[5][nombre].positionY + 'px';//position du sprite
          this.item.left = parseFloat(linkAction.divPersonnage.left) + 'px';//positionne la div au bout de l'épée de link
          this.item.top = parseFloat(linkAction.divPersonnage.top) - 10 + 'px';//positionne la div au bout de l'épée de link
          this.item.width = linkAction.spriteLink[5][nombre].tailleX + 'px';//largeur de la div
          this.item.height = linkAction.spriteLink[5][nombre].tailleY + 'px';//hauteur de la div
          break;
        case 'E':
          this.spriteObjet.left = linkAction.spriteLink[6][nombre].positionX + 'px';//position du sprite
          this.spriteObjet.top = linkAction.spriteLink[6][nombre].positionY + 'px';//position du sprite
          this.item.left = parseFloat(linkAction.divPersonnage.left) + 19 + 'px';//positionne la div au bout de l'épée de link
          this.item.top = parseFloat(linkAction.divPersonnage.top) + 4 + 'px';//positionne la div au bout de l'épée de link
          this.item.width = linkAction.spriteLink[6][nombre].tailleX + 'px';//largeur de la div
          this.item.height = linkAction.spriteLink[6][nombre].tailleY + 'px';//hauteur de la div
          break;
        case 'W':
          this.spriteObjet.left = linkAction.spriteLink[6][nombre].positionX + 'px';//position du sprite
          this.spriteObjet.top = linkAction.spriteLink[6][nombre].positionY + 'px';//position du sprite
          this.item.left = parseFloat(linkAction.divPersonnage.left) - 5 + 'px';//positionne la div au bout de l'épée de link
          this.item.top = parseFloat(linkAction.divPersonnage.top) + 4 + 'px';//positionne la div au bout de l'épée de link
          this.item.width = linkAction.spriteLink[6][nombre].tailleX + 'px';//largeur de la div
          this.item.height = linkAction.spriteLink[6][nombre].tailleY + 'px';//hauteur de la div
          break;
      }
      this.item['z-index'] = 3;
    }
  },
  affiche : function(item, div, boul){//affiche un objet
    this.spriteObjet.left = item.positionX + 'px';//position du sprite
    this.spriteObjet.top = item.positionY + 'px';//position du sprite
    if( !boul ){//fait si l'argument n'est pas fourni
      div.left = parseFloat(linkAction.divPersonnage.left) + ((parseFloat(linkAction.divPersonnage.width) - parseFloat(this.item.width)) / 2) + 'px';//centre la div au dessus de link
      div.top = parseFloat(linkAction.divPersonnage.top) -(parseFloat(this.item.height) - 0)  + 'px';//centre la div au dessus de link
    }
    div.width = item.tailleX + 'px';//largeur de la div
    div.height = item.tailleY + 'px';//hauteur de la div
    div['z-index'] = 3;
    this.spriteObjet['z-index'] = 3;
  },
  nextstage : function( stage ){
    this.creatImage(stage);
    linkAction.divPersonnage.top = this.collisionListe[this.stage][linkEtat.collision.position].exitWay.positionX + 'px';
    linkAction.divPersonnage.top = this.collisionListe[this.stage][linkEtat.collision.position].exitWay.positionY + 'px';
    for(var i=0;this.collisionListe[this.stage][i];i++){ //parcour les élément du décor
      if( this.collisionListe[this.stage][i].actionObjet.chest ){ //vérifi les coffres
        this.divJeux.removeChild(this.div[i]);//supprime les div coffres ouvert
      }
      if( this.collisionListe[this.stage][i].actionObjet.lift ){ //vérifi les objet soulevable
        this.divJeux.removeChild(this.div[i]);//supprime les div élément soulevable
      }
      if( this.collisionListe[this.stage][i].exitWay.boul ){ //vérifi les objet soulevable
        this.divJeux.removeChild(this.div[i]);//supprime les éléments de sortie.
      }
    }
    this.stage = stage;
    this.creatImage2();
    linkEtat.collision.position = 0;
  },
  // liste des collisition
  collisionListe : [[//indice 0 chambre de link
    new ConstructOfPosition(178, 114, 15, 15, {chest : true, lift : false}, 0, undefined, function(){linkEtat.item.shield = true; linkAction.walk = 1;}), /* coffre */
    new ConstructOfPosition(25, 57, 15, 13, {chest : false, lift : true, indice : 3, destructible : true}), /* Liste des pot - pot bas */
    new ConstructOfPosition(25, 41, 15, 13, {chest : false, lift : true, indice : 3, destructible : true}), /* pot milieu */
    new ConstructOfPosition(25, 25, 15, 13, {chest : false, lift : true, indice : 3, destructible : true}), /* pot haut */
    new ConstructOfPosition(97, 178, 20, 0, 0, 0, {axies : 'top', boul : true, stage : 1, positionX : 186, positionY : 272}), /* sortie */
    new ConstructOfPosition(1, 152, 103, 26),/* bord bas gauche */
    new ConstructOfPosition(122, 152, 104, 26),/* bord bas droit */
    new ConstructOfPosition(0, 0, 226, 26),/* bord haut */
    new ConstructOfPosition(0, 0, 26, 178), /* bord gauche */
    new ConstructOfPosition(200, 0, 26, 178), /* bord droit */
    new ConstructOfPosition(153, 97, 16, 16),  /* tabouré du bas */
    new ConstructOfPosition(153, 49, 16, 16), /* tabouré du haut */
    new ConstructOfPosition(137, 64, 48, 34), /* grande table */
    new ConstructOfPosition(40, 112, 32, 23),  /* petite table */
    new ConstructOfPosition(41, 26, 32, 39), /* lit */
    new ConstructOfPosition(153, 19, 31, 12)
  ],[//indice 1 zone de la maison de link
    new ConstructOfPosition(41, 26, 32, 39), /* test */
  ]
  ], /* cheminé */
  exitListe :[[//indice 0 chambre de link
    new ConstructOfPosition(97, 170, 20, 26, {axies : 'top', boul : true, stage : 1}), /* sortie */]],
  backgroundListe : ['../image/home/Link_House.png','../image/zone/SNES - The Legend of Zelda A Link to the Past - Links House Area 2.png'],
  decorObject : [
    new ConstructOfPosition(-571, -430, 35, 7), //partie supérieur de la sortie
    new ConstructOfPosition(-121, -660, 14, 14), //coffre ouvert
    new ConstructOfPosition(-46, -707, 16, 16), //emplacement pot
  ],
  itemPosition : [
    new ConstructOfPosition(16.933, 10.847, 85, 97), //HTML - bouclier
  ],
  image : [],
  div : []
};
