var linkAction = {
  spriteLink : [[  // indice 0 sort du lit
      new ConstructOfPosition(-22, -23, 30, 31),//link dans son lit 1
      new ConstructOfPosition(-58, -23, 30, 31),//link dans son lit 2
      new ConstructOfPosition(-94, -23, 30, 31),//link dans son lit 3
      new ConstructOfPosition(-128, -23, 30, 31),//link dans son lit 4
      new ConstructOfPosition(-163, -23, 30, 31),//link dans son lit 5
      new ConstructOfPosition(-197, -23, 30, 31),//link dans son lit 6
      new ConstructOfPosition(-231, -23, 30, 31),//link dans son lit 7
      new ConstructOfPosition(-265, -23, 30, 31),//link dans son lit 8
      new ConstructOfPosition(-299, -23, 30, 31),//link dans son lit 9
      new ConstructOfPosition(-335, -22, 30, 32),//link dans son lit 10
      new ConstructOfPosition(-370, -21, 30, 33),//link dans son lit 11
      new ConstructOfPosition(-405, -20, 30, 34),//link dans son lit 12
      new ConstructOfPosition(-440, -19, 30, 35),//link dans son lit 13
      new ConstructOfPosition(-475, -19, 30, 35),//link dans son lit 14
      new ConstructOfPosition(-509, -18, 30, 36),//link dans son lit 15
      new ConstructOfPosition(-544, -17, 30, 37),//link dans son lit 16
      new ConstructOfPosition(-578, -16, 30, 38),//link dans son lit 17
      new ConstructOfPosition(-611, -15, 30, 39),//link dans son lit 18
      new ConstructOfPosition(-646, -14, 30, 40),//link dans son lit 19
      new ConstructOfPosition(-680, -13, 30, 41),//link dans son lit 20
      new ConstructOfPosition(-714, -13, 30, 41),//link dans son lit 21
      new ConstructOfPosition(-748, -12, 30, 42),//link dans son lit 22
      new ConstructOfPosition(-783, -12, 30, 42),//link dans son lit 23
      new ConstructOfPosition(-818, -13, 30, 41),//link dans son lit 24
      new ConstructOfPosition(-856, -12, 30, 42),//link dans son lit 25
      new ConstructOfPosition(-82, -71, 30, 31),//link sort de son lit 1
      new ConstructOfPosition(-127, -70, 30, 32),//link sort de son lit 2
      new ConstructOfPosition(-167, -68, 30, 34),//link sort de son lit 3
      new ConstructOfPosition(-208, -67, 30, 35),//link sort de son lit 4
      new ConstructOfPosition(-248, -67, 30, 35),//link sort de son lit 5
      new ConstructOfPosition(-287, -65, 30, 37),//link sort de son lit 6
      new ConstructOfPosition(-332, -65, 30, 37),//link sort de son lit 7
      new ConstructOfPosition(-374, -65, 30, 37),//link sort de son lit 8
      new ConstructOfPosition(-422, -64, 35, 38),//link sort de son lit 9
      new ConstructOfPosition(-468, -64, 35, 38),//link sort de son lit 10
      new ConstructOfPosition(-468, -64, 35, 38),//link sort de son lit 11
      new ConstructOfPosition(-514, -66, 41, 36),//link sort de son lit 12
      new ConstructOfPosition(-570, -67, 43, 35),//link sort de son lit 13
      new ConstructOfPosition(-624, -69, 44, 33),//link sort de son lit 14
      new ConstructOfPosition(-679, -69, 44, 33),//link sort de son lit 15
      new ConstructOfPosition(-732, -72, 47, 30),//link sort de son lit 16
      new ConstructOfPosition(-788, -73, 48, 29),//link sort de son lit 17
      new ConstructOfPosition(-846, -74, 49, 28)//link sort de son lit 18
    ],[//indice 1 en vert
      [//indice 0 vers le bas
        [//indice 0 marche
          new ConstructOfPosition(-101, -127, 16, 24),//marche vers l'avent 1
          new ConstructOfPosition(-124, -128, 16, 23),//marche vers l'avent 2
          new ConstructOfPosition(-148, -129, 16, 22),//marche vers l'avent 3
          new ConstructOfPosition(-171, -129, 16, 22),//marche vers l'avent 4 statick
          new ConstructOfPosition(-194, -130, 16, 22),//marche vers l'avent 5
          new ConstructOfPosition(-218, -128, 16, 23),//marche vers l'avent 6
          new ConstructOfPosition(-241, -127, 16, 24)//marche vers l'avent 7
        ],[ //indice 1 marche avec bouclier
          new ConstructOfPosition(-101, -157, 16, 24),//marche vers l'avent 1 avec un bouclier
          new ConstructOfPosition(-124, -158, 16, 23),//marche vers l'avent 2 avec un bouclier
          new ConstructOfPosition(-148, -159, 16, 22),//marche vers l'avent 3 avec un bouclier
          new ConstructOfPosition(-171, -159, 16, 22),//marche vers l'avent 4 avec un bouclier statick
          new ConstructOfPosition(-194, -159, 16, 22),//marche vers l'avent 5 avec un bouclier
          new ConstructOfPosition(-218, -158, 16, 23),//marche vers l'avent 6 avec un bouclier
          new ConstructOfPosition(-241, -157, 16, 24)//marche vers l'avent 7 avec un bouclier
        ],[//indice 2 Tiré
          new ConstructOfPosition(-107, -194, 16, 20),//Tiré vers le bas 1
          new ConstructOfPosition(-129, -194, 16, 20),//Tiré vers le bas 2
          new ConstructOfPosition(-149, -194, 24, 20),//Tiré vers le bas 3
          new ConstructOfPosition(-183, -193, 30, 21)//Tiré vers le bas 4
        ],[//indice 3 souléve un objet
          new ConstructOfPosition(-96, -242, 16, 19),//souléve vers le bas 1 un objet
          new ConstructOfPosition(-117, -243, 30, 18),//souléve vers le bas 1 un objet
          new ConstructOfPosition(-151, -243, 34, 19),//souléve vers le bas 2 un objet
          new ConstructOfPosition(-189, -233, 34, 28),//souléve vers le bas 3 un objet
          new ConstructOfPosition(-233, -221, 16, 40),//souléve vers le bas 4 un objet
          new ConstructOfPosition(-262, -227, 16, 34)//souléve vers le bas 5 un objet
        ],[//indice 4 pousse
          new ConstructOfPosition(-152, -281, 16, 20),//pousser vers le bas 1
          new ConstructOfPosition(-172, -282, 16, 19),//pousser vers le bas 2
          new ConstructOfPosition(-191, -283, 16, 18)//pousser vers le bas 3
        ],[//indice 5 marche avec un objet
          new ConstructOfPosition(-220, -281, 16, 22),//marche avec un objet vers le bas 1 et trouver objet
          new ConstructOfPosition(-241, -282, 16, 21),//marche avec un objet vers le bas 2
          new ConstructOfPosition(-261, -282, 16, 21),//marche avec un objet vers le bas 3
          new ConstructOfPosition(-283, -282, 16, 21)//marche avec un objet vers le bas 4
        ],[//indice 6 lancer un objet
          new ConstructOfPosition(-306, -282, 17, 21)//lancer un objet vers le bas 1
        ],[//indice 7 coup d'épée
          new ConstructOfPosition(-82, -308, 20, 23),//coup d'épée vers le bas 1
          new ConstructOfPosition(-107, -309, 21, 29),//coup d'épée vers le bas 2
          new ConstructOfPosition(-136, -309, 20, 31),//coup d'épée vers le bas 3
          new ConstructOfPosition(-162, -310, 20, 31),//coup d'épée vers le bas 4
          new ConstructOfPosition(-186, -310, 28, 29),//coup d'épée vers le bas 5
          new ConstructOfPosition(-217, -310, 32, 27)//coup d'épée vers le bas 6
        ],[//indice 8 charge épée
          new ConstructOfPosition(-11, -350, 19, 29),//charge épée vers le bas 1
          new ConstructOfPosition(-32, -350, 19, 29),//charge épée vers le bas 2
          new ConstructOfPosition(-55, -350, 19, 29),//charge épée vers le bas 3
          new ConstructOfPosition(-76, -350, 19, 29),//charge épée vers le bas 4
          new ConstructOfPosition(-98, -350, 19, 29),//charge épée vers le bas 5
          new ConstructOfPosition(-120, -350, 19, 29),//charge épée vers le bas 6
          new ConstructOfPosition(-145, -350, 19, 29),//charge épée vers le bas 7
          new ConstructOfPosition(-191, -350, 19, 29),//charge épée vers le bas 8
          new ConstructOfPosition(-215, -350, 19, 29),//charge épée vers le bas 9
          new ConstructOfPosition(-238, -350, 19, 29),//charge épée vers le bas 10
          new ConstructOfPosition(-262, -350, 19, 34),//charge épée vers le bas 11
          new ConstructOfPosition(-284, -350, 19, 34),//charge épée vers le bas 12
          new ConstructOfPosition(-307, -349, 19, 31),//charge épée vers le bas 13
          new ConstructOfPosition(-328, -349, 20, 32),//charge épée vers le bas 14
          new ConstructOfPosition(-24, -393, 19, 29)//charge épée vers le bas 15
        ],[//indice 9 épée chargé
          new ConstructOfPosition(-24, -393, 19, 29)
        ],[//indice 10 marche avec l'épée chargé
          new ConstructOfPosition(-14, -442, 19, 29),//marche avec l'épée vers le bas 1
          new ConstructOfPosition(-38, -442, 19, 29),//marche avec l'épée vers le bas 2
          new ConstructOfPosition(-60, -441, 19, 29),//marche avec l'épée vers le bas 3
          new ConstructOfPosition(-82, -442, 19, 29),//marche avec l'épée vers le bas 4
          new ConstructOfPosition(-103, -443, 19, 29)//marche avec l'épée vers le bas 5
        ],[//indice 11 coup d'épée chargé
          new ConstructOfPosition(-17, -915, 20, 26),//coup d'épée chargé vers le bas 1
          new ConstructOfPosition(-45, -913, 15, 35),//coup d'épée chargé vers le bas 2
          new ConstructOfPosition(-67, -903, 16, 38),//coup d'épée chargé vers le bas 3
          new ConstructOfPosition(-89, -914, 20, 26),//coup d'épée chargé vers le bas 4
          new ConstructOfPosition(-117, -918, 28, 22),//coup d'épée chargé vers le bas 5
          new ConstructOfPosition(-151, -918, 28, 22),//coup d'épée chargé vers le bas 6
          new ConstructOfPosition(-186, -917, 17, 31),//coup d'épée chargé vers le bas 7
          new ConstructOfPosition(-208, -918, 28, 22),//coup d'épée chargé vers le bas 8
          new ConstructOfPosition(-242, -918, 28, 22),//coup d'épée chargé vers le bas 9
          new ConstructOfPosition(-277, -912, 16, 28),//coup d'épée chargé vers le bas 10
          new ConstructOfPosition(-304, -914, 20, 26),//coup d'épée chargé vers le bas 11
          new ConstructOfPosition(-331, -918, 16, 22)//coup d'épée chargé vers le bas 12
        ],[//indice 12 tir à l'arc
          new ConstructOfPosition(-123, -497, 17, 24),//tir à l'arc vers le bas 1
          new ConstructOfPosition(-154, -498, 18, 21),//tir à l'arc vers le bas 2
          new ConstructOfPosition(-183, -497, 18, 22)//tir à l'arc vers le bas 3
        ],[//indice 13 fléche
          new ConstructOfPosition(-216, -503, 5, 15),//fléche vers le bas 1
          new ConstructOfPosition(-224, -503, 6, 11),//fléche vers le bas 2
          new ConstructOfPosition(-232, -503, 5, 11),//fléche vers le bas 3
          new ConstructOfPosition(-239, -503, 6, 11)//fléche vers le bas 4
        ],[//indice 14 bléssé
          new ConstructOfPosition(-271, -192, 16, 21)//bléssé vers le bas
        ]
    ],[//indice 1 vers le haut
        [//indice 0 marche
          new ConstructOfPosition(-456, -131, 16, 24),//marche vers le haut 1
          new ConstructOfPosition(-479, -132, 16, 23),//marche vers le haut 2
          new ConstructOfPosition(-503, -133, 16, 22),//marche vers le haut 3
          new ConstructOfPosition(-526, -133, 16, 22),//marche vers le haut 4 statick
          new ConstructOfPosition(-550, -133, 16, 22),//marche vers le haut 5
          new ConstructOfPosition(-573, -132, 16, 23),//marche vers le haut 6
          new ConstructOfPosition(-595, -131, 16, 24)//marche vers le haut 7
        ],[ //indice 1 marche avec bouclier
          new ConstructOfPosition(-456, -161, 17, 24),//marche vers le haut 1 avec un bouclier
          new ConstructOfPosition(-479, -162, 17, 23),//marche vers le haut 2 avec un bouclier
          new ConstructOfPosition(-503, -163, 17, 22),//marche vers le haut 3 avec un bouclier
          new ConstructOfPosition(-526, -163, 17, 22),//marche vers le haut 4 avec un bouclier statick
          new ConstructOfPosition(-550, -163, 17, 22),//marche vers le haut 5 avec un bouclier
          new ConstructOfPosition(-573, -162, 17, 23),//marche vers le haut 6 avec un bouclier
          new ConstructOfPosition(-595, -161, 17, 24)//marche vers le haut 7 avec un bouclier
        ],[//indice 2 Tiré
          new ConstructOfPosition(-473, -196, 16, 21),//Tiré vers le haut 1
          new ConstructOfPosition(-493, -197, 16, 20),//Tiré vers le haut 2
          new ConstructOfPosition(-514, -197, 24, 20),//Tiré vers le haut 3
          new ConstructOfPosition(-544, -197, 30, 20)//Tiré vers le haut 4
        ],[//indice 3 souléve un objet
          new ConstructOfPosition(-453, -226, 16, 31),//souléve vers le haut 1 un objet
          new ConstructOfPosition(-480, -226, 22, 31),//souléve vers le haut 1 un objet
          new ConstructOfPosition(-510, -226, 32, 31),//souléve vers le haut 2 un objet
          new ConstructOfPosition(-547, -225, 32, 32),//souléve vers le haut 3 un objet
          new ConstructOfPosition(-585, -224, 16, 33),//souléve vers le haut 4 un objet
          new ConstructOfPosition(-610, -223, 16, 34)//souléve vers le haut 5 un objet
        ],[//indice 4 pousse
          new ConstructOfPosition(-514, -278, 16, 22),//pousser vers le haut 1
          new ConstructOfPosition(-534, -279, 16, 21),//pousser vers le haut 2
          new ConstructOfPosition(-554, -279, 16, 21)//pousser vers le haut 3
        ],[//indice 5 marche avec un objet
          new ConstructOfPosition(-585, -279, 16, 22),//marche avec un objet vers le haut 1
          new ConstructOfPosition(-611, -280, 16, 21),//marche avec un objet vers le haut 2
          new ConstructOfPosition(-635, -279, 16, 22),//marche avec un objet vers le haut 3
          new ConstructOfPosition(-657, -280, 16, 21)//marche avec un objet vers le haut 4
        ],[//indice 6 lancer un objet
          new ConstructOfPosition(-585, -279, 16, 22)//lancer un objet vers le haut
        ],[//indice 7 coup d'épée
        new ConstructOfPosition(-407, -317, 23, 22),//coup d'épée vers le haut 1
        new ConstructOfPosition(-438, -317, 22, 22),//coup d'épée vers le haut 2
        new ConstructOfPosition(-469, -315, 23, 24),//coup d'épée vers le haut 3
        new ConstructOfPosition(-500, -309, 22, 30),//coup d'épée vers le haut 4
        new ConstructOfPosition(-530, -307, 20, 32),//coup d'épée vers le haut 5
        new ConstructOfPosition(-555, -304, 20, 35),//coup d'épée vers le haut 6
        new ConstructOfPosition(-579, -309, 24, 30),//coup d'épée vers le haut 7
        new ConstructOfPosition(-606, -312, 29, 27),//coup d'épée vers le haut 8
        new ConstructOfPosition(-641, -316, 32, 23)//coup d'épée vers le haut 9
      ],[//indice 9 charge épée
        new ConstructOfPosition(-402, -352, 19, 26),//charge épée vers le haut 1
        new ConstructOfPosition(-425, -352, 19, 26),//charge épée vers le haut 2
        new ConstructOfPosition(-447, -352, 19, 26),//charge épée vers le haut 3
        new ConstructOfPosition(-468, -352, 19, 26),//charge épée vers le haut 4
        new ConstructOfPosition(-490, -352, 19, 26),//charge épée vers le haut 5
        new ConstructOfPosition(-511, -352, 19, 26),//charge épée vers le haut 6
        new ConstructOfPosition(-533, -352, 19, 26),//charge épée vers le haut 7
        new ConstructOfPosition(-554, -352, 19, 26),//charge épée vers le haut 8
        new ConstructOfPosition(-575, -352, 19, 26),//charge épée vers le haut 9
        new ConstructOfPosition(-597, -351, 19, 27),//charge épée vers le haut 10
        new ConstructOfPosition(-618, -350, 19, 28),//charge épée vers le haut 11
        new ConstructOfPosition(-639, -347, 19, 31),//charge épée vers le haut 12
        new ConstructOfPosition(-660, -348, 19, 30),//charge épée vers le haut 13
        new ConstructOfPosition(-402, -383, 19, 31),//charge épée vers le haut 14
        new ConstructOfPosition(-424, -382, 19, 32),//charge épée vers le haut 15
        new ConstructOfPosition(-448, -381, 19, 33)//charge épée vers le haut 16
      ],[//indice 10 épée chargé
        new ConstructOfPosition(-496, -394, 19, 26)
      ],[//indice 11 marche avec l'épée chargé
        new ConstructOfPosition(-411, -436, 19, 25),//marche avec l'épée vers le bas 1
        new ConstructOfPosition(-432, -436, 19, 25),//marche avec l'épée vers le bas 2
        new ConstructOfPosition(-455, -436, 19, 25),//marche avec l'épée vers le bas 3
        new ConstructOfPosition(-477, -436, 19, 25),//marche avec l'épée vers le bas 4
        new ConstructOfPosition(-501, -436, 19, 25)//marche avec l'épée vers le bas 5
      ],[//indice 12 coup d'épée chargé
        new ConstructOfPosition(-368, -914, 20, 27),//coup d'épée chargé vers le bas 1
        new ConstructOfPosition(-397, -915, 15, 35),//coup d'épée chargé vers le bas 2
        new ConstructOfPosition(-422, -914, 17, 38),//coup d'épée chargé vers le bas 3
        new ConstructOfPosition(-449, -914, 17, 38),//coup d'épée chargé vers le bas 4
        new ConstructOfPosition(-476, -914, 20, 27),//coup d'épée chargé vers le bas 5
        new ConstructOfPosition(-501, -914, 28, 22),//coup d'épée chargé vers le bas 6
        new ConstructOfPosition(-538, -908, 16, 28),//coup d'épée chargé vers le bas 7
        new ConstructOfPosition(-562, -914, 28, 22),//coup d'épée chargé vers le bas 8
        new ConstructOfPosition(-601, -914, 16, 31),//coup d'épée chargé vers le bas 9
        new ConstructOfPosition(-627, -915, 17, 31),//coup d'épée chargé vers le bas 10
        new ConstructOfPosition(-648, -915, 20, 27),//coup d'épée chargé vers le bas 11
        new ConstructOfPosition(-678, -915, 17, 22)//coup d'épée chargé vers le bas 12
      ],[//indice 13 tir à l'arc
        new ConstructOfPosition(-432, -492, 18, 22),//tir à l'arc vers le bas 1
        new ConstructOfPosition(-457, -493, 21, 21),//tir à l'arc vers le bas 2
        new ConstructOfPosition(-486, -492, 21, 22)//tir à l'arc vers le bas 3
      ],[//indice 14 fléche
        new ConstructOfPosition(-517, -499, 5, 15),//fléche vers le bas 1
        new ConstructOfPosition(-525, -503, 6, 11),//fléche vers le bas 2
        new ConstructOfPosition(-533, -503, 5, 11),//fléche vers le bas 3
        new ConstructOfPosition(-540, -503, 6, 11)//fléche vers le bas 4
      ],[//indice 15 bléssé
        new ConstructOfPosition(-635, -197, 20, 19)//bléssé vers le bas
      ]
    ],[//indice 2 vers la droite
        [//indice 0 marche
          new ConstructOfPosition(-787, -128, 16, 23),//marche vers la droite 1
          new ConstructOfPosition(-810, -127, 16, 24),//marche vers la droite 2
          new ConstructOfPosition(-835, -127, 16, 24),//marche vers la droite 3
          new ConstructOfPosition(-857, -128, 16, 23),//marche vers la droite 4 statick
          new ConstructOfPosition(-881, -127, 16, 24),//marche vers la droite 5
          new ConstructOfPosition(-905, -127, 16, 24),//marche vers la droite 6
          new ConstructOfPosition(-927, -128, 17, 23),//marche vers la droite 7
          new ConstructOfPosition(-948, -128, 16, 23)//marche vers la droite 8
        ],[ //indice 1 marche avec bouclier
          new ConstructOfPosition(-789, -158, 18, 23),//marche vers la droite 1 avec un bouclier
          new ConstructOfPosition(-812, -157, 18, 24),//marche vers la droite 2 avec un bouclier
          new ConstructOfPosition(-837, -157, 19, 24),//marche vers la droite 3 avec un bouclier
          new ConstructOfPosition(-859, -158, 19, 23),//marche vers la droite 4 avec un bouclier statick
          new ConstructOfPosition(-883, -157, 19, 24),//marche vers la droite 5 avec un bouclier
          new ConstructOfPosition(-907, -157, 18, 24),//marche vers la droite 6 avec un bouclier
          new ConstructOfPosition(-929, -158, 19, 23)//marche vers la droite 7 avec un bouclier
        ],[//indice 2 Tiré
          new ConstructOfPosition(-815, -186, 16, 23),//Tiré vers la droite 1
          new ConstructOfPosition(-838, -187, 19, 22),//Tiré vers la droite 2
          new ConstructOfPosition(-867, -187, 21, 22),//Tiré vers la droite 2
          new ConstructOfPosition(-897, -187, 20, 22)//Tiré vers la droite 2
        ],[//indice 3 souléve un objet
          new ConstructOfPosition(-790, -217, 25, 20),//souléve vers la droite 1 sans objet
          new ConstructOfPosition(-822, -216, 31, 21),//souléve vers la droite 2 sans objet
          new ConstructOfPosition(-860, -216, 34, 21),//souléve vers la droite 3 sans objet
          new ConstructOfPosition(-899, -216, 31, 21),//souléve vers la droite 4 sans objet
          new ConstructOfPosition(-937, -214, 16, 23),//souléve vers la droite 5 sans objet
          new ConstructOfPosition(-768, -251, 27, 27),//souléve vers la droite 1 un objet
          new ConstructOfPosition(-800, -251, 33, 27),//souléve vers la droite 2 un objet
          new ConstructOfPosition(-838, -251, 36, 27),//souléve vers la droite 3 un objet
          new ConstructOfPosition(-877, -248, 33, 30),//souléve vers la droite 4 un objet
          new ConstructOfPosition(-921, -245, 22, 33),//souléve vers la droite 5 un objet
          new ConstructOfPosition(-949, -243, 17, 35)//souléve vers la droite 6 un objet
        ],[//indice 4 pousse
          new ConstructOfPosition(-833, -285, 16, 23),//pousser vers la droite 1
          new ConstructOfPosition(-853, -286, 16, 23),//pousser vers la droite 2
          new ConstructOfPosition(-873, -287, 16, 22),//pousser vers la droite 3
          new ConstructOfPosition(-894, -288, 16, 21)//pousser vers la droite 4
        ],[//indice 5 marche avec un objet
          new ConstructOfPosition(-922, -286, 16, 24),//marche avec un objet vers la droite 1
          new ConstructOfPosition(-944, -288, 16, 22),//marche avec un objet vers la droite 2
          new ConstructOfPosition(-967, -289, 17, 21)//marche avec un objet vers la droite 3
        ],[//indice 6 lancer un objet
          new ConstructOfPosition(-1013, -286, 16, 23)//lancer un objet vers la droite 1
        ],[//indice 7 coup d'épée
          new ConstructOfPosition(-751, -318, 16, 23),//coup d'épée vers la droite 1
          new ConstructOfPosition(-774, -318, 18, 23),//coup d'épée vers la droite 2
          new ConstructOfPosition(-797, -317, 23, 24),//coup d'épée vers la droite 3
          new ConstructOfPosition(-826, -317, 26, 24),//coup d'épée vers la droite 4
          new ConstructOfPosition(-856, -320, 29, 21),//coup d'épée vers la droite 5
          new ConstructOfPosition(-890, -320, 28, 21),//coup d'épée vers la droite 6
          new ConstructOfPosition(-928, -320, 28, 21),//coup d'épée vers la droite 4
          new ConstructOfPosition(-958, -319, 28, 28),//coup d'épée vers la droite 5
          new ConstructOfPosition(-997, -317, 23, 31)//coup d'épée vers la droite 6
        ],[//indice 9 charge épée
          new ConstructOfPosition(-700, -358, 24, 23),//charge épée vers la droite 1
          new ConstructOfPosition(-726, -358, 24, 23),//charge épée vers la droite 2
          new ConstructOfPosition(-752, -358, 24, 23),//charge épée vers la droite 3
          new ConstructOfPosition(-778, -358, 24, 23),//charge épée vers la droite 4
          new ConstructOfPosition(-804, -358, 24, 23),//charge épée vers la droite 5
          new ConstructOfPosition(-830, -358, 24, 23),//charge épée vers la droite 6
          new ConstructOfPosition(-856, -358, 24, 23),//charge épée vers la droite 7
          new ConstructOfPosition(-882, -358, 24, 23),//charge épée vers la droite 8
          new ConstructOfPosition(-908, -358, 24, 23),//charge épée vers la droite 9
          new ConstructOfPosition(-934, -358, 24, 23),//charge épée vers la droite 10
          new ConstructOfPosition(-960, -358, 24, 23),//charge épée vers la droite 11
          new ConstructOfPosition(-986, -358, 24, 23),//charge épée vers la droite 12
          new ConstructOfPosition(-1012, -358, 24, 23),//charge épée vers la droite 13
          new ConstructOfPosition(-1038, -358, 24, 23),//charge épée vers la droite 14
          new ConstructOfPosition(-1064, -358, 24, 23),//charge épée vers la droite 15
          new ConstructOfPosition(-700, -383, 24, 23),//charge épée vers la droite 16
          new ConstructOfPosition(-726, -383, 24, 23),//charge épée vers la droite 17
          new ConstructOfPosition(-752, -383, 24, 23),//charge épée vers la droite 18
          new ConstructOfPosition(-780, -383, 24, 23),//charge épée vers la droite 19
          new ConstructOfPosition(-806, -383, 24, 23),//charge épée vers la droite 20
          new ConstructOfPosition(-832, -383, 29, 23),//charge épée vers la droite 21
          new ConstructOfPosition(-865, -383, 29, 23),//charge épée vers la droite 22
          new ConstructOfPosition(-896, -383, 29, 23),//charge épée vers la droite 23
          new ConstructOfPosition(-927, -383, 26, 23),//charge épée vers la droite 24
          new ConstructOfPosition(-955, -383, 25, 23),//charge épée vers la droite 25
          new ConstructOfPosition(-982, -383, 26, 23),//charge épée vers la droite 26
          new ConstructOfPosition(-1009, -383, 28, 23),//charge épée vers la droite 27
          new ConstructOfPosition(-1038, -383, 27, 23)//charge épée vers la droite 28
        ],[//indice 10 épée chargé
          new ConstructOfPosition(-722, -414, 24, 23)
        ],[//indice 11 marche avec l'épée chargé
          new ConstructOfPosition(-773, -457, 24, 23),//marche avec l'épée vers la droite 1
          new ConstructOfPosition(-799, -459, 24, 22),//marche avec l'épée vers la droite 2
          new ConstructOfPosition(-826, -459, 24, 22),//marche avec l'épée vers la droite 3
          new ConstructOfPosition(-853, -460, 24, 21)//marche avec l'épée vers la droite 4
        ],[//indice 12 coup d'épée chargé
          new ConstructOfPosition(-707, -911, 23, 23),//coup d'épée chargé vers la droite 1
          new ConstructOfPosition(-743, -911, 31, 23),//coup d'épée chargé vers la droite 2
          new ConstructOfPosition(-784, -912, 34, 23),//coup d'épée chargé vers la droite 3
          new ConstructOfPosition(-828, -911, 34, 23),//coup d'épée chargé vers la droite 4
          new ConstructOfPosition(-871, -911, 23, 23),//coup d'épée chargé vers la droite 5
          new ConstructOfPosition(-904, -911, 16, 31),//coup d'épée chargé vers la droite 6
          new ConstructOfPosition(-925, -911, 28, 23),//coup d'épée chargé vers la droite 7
          new ConstructOfPosition(-957, -911, 28, 23),//coup d'épée chargé vers la droite 8
          new ConstructOfPosition(-996, -905, 17, 29),//coup d'épée chargé vers la droite 9
          new ConstructOfPosition(-1022, -911, 28, 23),//coup d'épée chargé vers la droite 10
          new ConstructOfPosition(-1052, -911, 28, 23),//coup d'épée chargé vers la droite 11
          new ConstructOfPosition(-1086, -911, 23, 23)//coup d'épée chargé vers la droite 12
        ],[//indice 13 tir à l'arc
          new ConstructOfPosition(-772, -514, 17, 23),//tir à l'arc vers la droite 1
          new ConstructOfPosition(-796, -514, 19, 22),//tir à l'arc vers la droite 2
          new ConstructOfPosition(-823, -514, 20, 23)//tir à l'arc vers la droite 3
        ],[//indice 14 fléche
          new ConstructOfPosition(-885, -528, 15, 5),//fléche vers la droite 1
          new ConstructOfPosition(-910, -520, 11, 6),//fléche vers la droite 2
          new ConstructOfPosition(-910, -528, 11, 5),//fléche vers la droite 3
          new ConstructOfPosition(-910, -535, 11, 6)//fléche vers la droite 4
        ],[//indice 15 bléssé
          new ConstructOfPosition(-969, -188, 16, 21)//bléssé vers la droite
        ]
      ],[//indice 3 tomber
        new ConstructOfPosition(-914, -38, 22, 21),//tomber 1
        new ConstructOfPosition(-942, -40, 16, 16),//tomber 2
        new ConstructOfPosition(-963, -40, 13, 13),//tomber 3
        new ConstructOfPosition(-981, -42, 8, 8),//tomber 4
        new ConstructOfPosition(-930, -65, 7, 7),//tomber 5
        new ConstructOfPosition(-942, -67, 3, 3)//tomber 6
      ],[//indice 4 game over
        new ConstructOfPosition(-918, -80, 18, 21),//game over 1
        new ConstructOfPosition(-941, -87, 24, 22),//game over 2
        new ConstructOfPosition(-971, -87, 24, 15)//game over 3
      ],[[//indice 5 diagonal haut gauche et 0 pour marcher
        new ConstructOfPosition(-1013, -53, 14, 21),//diagonal haut gauche 1
        new ConstructOfPosition(-1034, -52, 14, 22),//diagonal haut gauche 2
        new ConstructOfPosition(-1054, -52, 16, 22)//diagonal haut gauche 3
        ]
      ],[[//indice 6 diagonal bas droite et 0 pour marcher
        new ConstructOfPosition(-1014, -80, 14, 20),//diagonal bas droite 1
        new ConstructOfPosition(-1035, -78, 14, 22),//diagonal bas droite 2
        new ConstructOfPosition(-1055, -78, 15, 22)//diagonal bas droite 3
        ]
      ]
    ],[//indice 2 bleu
      [//indice 0 vers le bas
        [//indice 1 marche
          new ConstructOfPosition(-101, -127, 16, 24),//marche vers l'avent 1
          new ConstructOfPosition(-124 -128, 16, 23),//marche vers l'avent 2
          new ConstructOfPosition(-148, -129, 16, 22),//marche vers l'avent 3
          new ConstructOfPosition(-171, -129, 16, 22),//marche vers l'avent 4 statick
          new ConstructOfPosition(-194, -130, 16, 22),//marche vers l'avent 5
          new ConstructOfPosition(-218, -128, 16, 23),//marche vers l'avent 6
          new ConstructOfPosition(-241, -127, 16, 24)//marche vers l'avent 7
        ],[ //indice 2 marche avec bouclier
          new ConstructOfPosition(-101, -157, 16, 24),//marche vers l'avent 1 avec un bouclier
          new ConstructOfPosition(-124, -158, 16, 23),//marche vers l'avent 2 avec un bouclier
          new ConstructOfPosition(-148, -159, 16, 22),//marche vers l'avent 3 avec un bouclier
          new ConstructOfPosition(-171, -159, 16, 22),//marche vers l'avent 4 avec un bouclier statick
          new ConstructOfPosition(-194, -159, 16, 22),//marche vers l'avent 5 avec un bouclier
          new ConstructOfPosition(-218, -158, 16, 23),//marche vers l'avent 6 avec un bouclier
          new ConstructOfPosition(-241, -157, 16, 24)//marche vers l'avent 7 avec un bouclier
        ],[//indice 3 Tiré
          new ConstructOfPosition(-107, -194, 16, 20),//Tiré vers le bas 1
          new ConstructOfPosition(-129, -194, 16, 20),//Tiré vers le bas 2
          new ConstructOfPosition(-149, -194, 24, 20),//Tiré vers le bas 3
          new ConstructOfPosition(-183, -193, 30, 21)//Tiré vers le bas 4
        ],[//indice 4 souléve un objet
          new ConstructOfPosition(-96, -242, 16, 19),//souléve vers le bas 1 un objet
          new ConstructOfPosition(-117, -243, 30, 18),//souléve vers le bas 1 un objet
          new ConstructOfPosition(-151, -243, 34, 19),//souléve vers le bas 2 un objet
          new ConstructOfPosition(-189, -233, 34, 28),//souléve vers le bas 3 un objet
          new ConstructOfPosition(-233, -221, 16, 40),//souléve vers le bas 4 un objet
          new ConstructOfPosition(-262, -227, 16, 34)//souléve vers le bas 5 un objet
        ],[//indice 5 pousse
          new ConstructOfPosition(-152, -281, 16, 20),//pousser vers le bas 1
          new ConstructOfPosition(-172, -282, 16, 19),//pousser vers le bas 2
          new ConstructOfPosition(-191, -283, 16, 18)//pousser vers le bas 3
        ],[//indice 6 marche avec un objet
          new ConstructOfPosition(-220, -281, 16, 22),//marche avec un objet vers le bas 1 et trouver objet
          new ConstructOfPosition(-241, -282, 16, 21),//marche avec un objet vers le bas 2
          new ConstructOfPosition(-261, -282, 16, 21),//marche avec un objet vers le bas 3
          new ConstructOfPosition(-283, -282, 16, 21)//marche avec un objet vers le bas 4
        ],[//indice 7 lancer un objet
          new ConstructOfPosition(-306, -282, 17, 21)//lancer un objet vers le bas 1
        ],[//indice 8 coup d'épée
          new ConstructOfPosition(-82, -308, 20, 23),//coup d'épée vers le bas 1
          new ConstructOfPosition(-107, -309, 21, 29),//coup d'épée vers le bas 2
          new ConstructOfPosition(-136, -309, 20, 31),//coup d'épée vers le bas 3
          new ConstructOfPosition(-162, -310, 20, 31),//coup d'épée vers le bas 4
          new ConstructOfPosition(-186, -310, 28, 29),//coup d'épée vers le bas 5
          new ConstructOfPosition(-217, -310, 32, 27)//coup d'épée vers le bas 6
        ],[//indice 9 charge épée
          new ConstructOfPosition(-11, -350, 19, 29),//charge épée vers le bas 1
          new ConstructOfPosition(-32, -350, 19, 29),//charge épée vers le bas 2
          new ConstructOfPosition(-55, -350, 19, 29),//charge épée vers le bas 3
          new ConstructOfPosition(-76, -350, 19, 29),//charge épée vers le bas 4
          new ConstructOfPosition(-98, -350, 19, 29),//charge épée vers le bas 5
          new ConstructOfPosition(-120, -350, 19, 29),//charge épée vers le bas 6
          new ConstructOfPosition(-145, -350, 19, 29),//charge épée vers le bas 7
          new ConstructOfPosition(-191, -350, 19, 29),//charge épée vers le bas 8
          new ConstructOfPosition(-215, -350, 19, 29),//charge épée vers le bas 9
          new ConstructOfPosition(-238, -350, 19, 29),//charge épée vers le bas 10
          new ConstructOfPosition(-262, -350, 19, 34),//charge épée vers le bas 11
          new ConstructOfPosition(-284, -350, 19, 34),//charge épée vers le bas 12
          new ConstructOfPosition(-307, -349, 19, 31),//charge épée vers le bas 13
          new ConstructOfPosition(-328, -349, 20, 32),//charge épée vers le bas 14
          new ConstructOfPosition(-24, -393, 19, 29)//charge épée vers le bas 15
        ],[//indice 10 épée chargé
          new ConstructOfPosition(-24, -393, 19, 29)
        ],[//indice 11 marche avec l'épée chargé
          new ConstructOfPosition(-14, -442, 19, 29),//marche avec l'épée vers le bas 1
          new ConstructOfPosition(-38, -442, 19, 29),//marche avec l'épée vers le bas 2
          new ConstructOfPosition(-60, -441, 19, 29),//marche avec l'épée vers le bas 3
          new ConstructOfPosition(-82, -442, 19, 29),//marche avec l'épée vers le bas 4
          new ConstructOfPosition(-103, -443, 19, 29)//marche avec l'épée vers le bas 5
        ],[//indice 12 coup d'épée chargé
          new ConstructOfPosition(-17, -915, 20, 26),//coup d'épée chargé vers le bas 1
          new ConstructOfPosition(-45, -913, 15, 35),//coup d'épée chargé vers le bas 2
          new ConstructOfPosition(-67, -903, 16, 38),//coup d'épée chargé vers le bas 3
          new ConstructOfPosition(-89, -914, 20, 26),//coup d'épée chargé vers le bas 4
          new ConstructOfPosition(-117, -918, 28, 22),//coup d'épée chargé vers le bas 5
          new ConstructOfPosition(-151, -918, 28, 22),//coup d'épée chargé vers le bas 6
          new ConstructOfPosition(-186, -917, 17, 31),//coup d'épée chargé vers le bas 7
          new ConstructOfPosition(-208, -918, 28, 22),//coup d'épée chargé vers le bas 8
          new ConstructOfPosition(-242, -918, 28, 22),//coup d'épée chargé vers le bas 9
          new ConstructOfPosition(-277, -912, 16, 28),//coup d'épée chargé vers le bas 10
          new ConstructOfPosition(-304, -914, 20, 26),//coup d'épée chargé vers le bas 11
          new ConstructOfPosition(-331, -918, 16, 22)//coup d'épée chargé vers le bas 12
        ],[//indice 13 tir à l'arc
          new ConstructOfPosition(-123, -497, 17, 24),//tir à l'arc vers le bas 1
          new ConstructOfPosition(-154, -498, 18, 21),//tir à l'arc vers le bas 2
          new ConstructOfPosition(-183, -497, 18, 22)//tir à l'arc vers le bas 3
        ],[//indice 14 fléche
          new ConstructOfPosition(-216, -503, 5, 15),//fléche vers le bas 1
          new ConstructOfPosition(-224, -503, 6, 11),//fléche vers le bas 2
          new ConstructOfPosition(-232, -503, 5, 11),//fléche vers le bas 3
          new ConstructOfPosition(-239, -503, 6, 11)//fléche vers le bas 4
        ],[//indice 15 bléssé
          new ConstructOfPosition(-271, -192, 16, 21)//bléssé vers le bas
        ]
    ],[//indice 1 vers le haut
        [//indice 0 marche
          new ConstructOfPosition(-456, -131, 16, 24),//marche vers le haut 1
          new ConstructOfPosition(-479, -132, 16, 23),//marche vers le haut 2
          new ConstructOfPosition(-503, -133, 16, 22),//marche vers le haut 3
          new ConstructOfPosition(-526, -133, 16, 22),//marche vers le haut 4 statick
          new ConstructOfPosition(-550, -133, 16, 22),//marche vers le haut 5
          new ConstructOfPosition(-573, -132, 16, 23),//marche vers le haut 6
          new ConstructOfPosition(-595, -131, 16, 24)//marche vers le haut 7
        ],[ //indice 1 marche avec bouclier
          new ConstructOfPosition(-456, -161, 17, 24),//marche vers le haut 1 avec un bouclier
          new ConstructOfPosition(-479, -162, 17, 23),//marche vers le haut 2 avec un bouclier
          new ConstructOfPosition(-503, -163, 17, 22),//marche vers le haut 3 avec un bouclier
          new ConstructOfPosition(-526, -163, 17, 22),//marche vers le haut 4 avec un bouclier statick
          new ConstructOfPosition(-550, -163, 17, 22),//marche vers le haut 5 avec un bouclier
          new ConstructOfPosition(-573, -162, 17, 23),//marche vers le haut 6 avec un bouclier
          new ConstructOfPosition(-595, -161, 17, 24)//marche vers le haut 7 avec un bouclier
        ],[//indice 2 Tiré
          new ConstructOfPosition(-473, -196, 16, 21),//Tiré vers le haut 1
          new ConstructOfPosition(-493, -197, 16, 20),//Tiré vers le haut 2
          new ConstructOfPosition(-514, -197, 24, 20),//Tiré vers le haut 3
          new ConstructOfPosition(-544, -197, 30, 20)//Tiré vers le haut 4
        ],[//indice 3 souléve un objet
          new ConstructOfPosition(-453, -226, 16, 31),//souléve vers le haut 1 un objet
          new ConstructOfPosition(-480, -226, 22, 31),//souléve vers le haut 1 un objet
          new ConstructOfPosition(-510, -226, 32, 31),//souléve vers le haut 2 un objet
          new ConstructOfPosition(-547, -225, 32, 32),//souléve vers le haut 3 un objet
          new ConstructOfPosition(-585, -224, 16, 33),//souléve vers le haut 4 un objet
          new ConstructOfPosition(-610, -223, 16, 34)//souléve vers le haut 5 un objet
        ],[//indice 4 pousse
          new ConstructOfPosition(-514, -278, 16, 22),//pousser vers le haut 1
          new ConstructOfPosition(-534, -279, 16, 21),//pousser vers le haut 2
          new ConstructOfPosition(-554, -279, 16, 21)//pousser vers le haut 3
        ],[//indice 5 marche avec un objet
          new ConstructOfPosition(-585, -279, 16, 22),//marche avec un objet vers le haut 1
          new ConstructOfPosition(-611, -280, 16, 21),//marche avec un objet vers le haut 2
          new ConstructOfPosition(-635, -279, 16, 22),//marche avec un objet vers le haut 3
          new ConstructOfPosition(-657, -280, 16, 21)//marche avec un objet vers le haut 4
        ],[//indice 6 lancer un objet
          new ConstructOfPosition(-585, -279, 16, 22)//lancer un objet vers le haut
        ],[//indice 7 coup d'épée
        new ConstructOfPosition(-407, -317, 23, 22),//coup d'épée vers le haut 1
        new ConstructOfPosition(-438, -317, 22, 22),//coup d'épée vers le haut 2
        new ConstructOfPosition(-469, -315, 23, 24),//coup d'épée vers le haut 3
        new ConstructOfPosition(-500, -309, 22, 30),//coup d'épée vers le haut 4
        new ConstructOfPosition(-530, -307, 20, 32),//coup d'épée vers le haut 5
        new ConstructOfPosition(-555, -304, 20, 35),//coup d'épée vers le haut 6
        new ConstructOfPosition(-579, -309, 24, 30),//coup d'épée vers le haut 7
        new ConstructOfPosition(-606, -312, 29, 27),//coup d'épée vers le haut 8
        new ConstructOfPosition(-641, -316, 32, 23)//coup d'épée vers le haut 9
      ],[//indice 9 charge épée
        new ConstructOfPosition(-402, -352, 19, 26),//charge épée vers le haut 1
        new ConstructOfPosition(-425, -352, 19, 26),//charge épée vers le haut 2
        new ConstructOfPosition(-447, -352, 19, 26),//charge épée vers le haut 3
        new ConstructOfPosition(-468, -352, 19, 26),//charge épée vers le haut 4
        new ConstructOfPosition(-490, -352, 19, 26),//charge épée vers le haut 5
        new ConstructOfPosition(-511, -352, 19, 26),//charge épée vers le haut 6
        new ConstructOfPosition(-533, -352, 19, 26),//charge épée vers le haut 7
        new ConstructOfPosition(-554, -352, 19, 26),//charge épée vers le haut 8
        new ConstructOfPosition(-575, -352, 19, 26),//charge épée vers le haut 9
        new ConstructOfPosition(-597, -351, 19, 27),//charge épée vers le haut 10
        new ConstructOfPosition(-618, -350, 19, 28),//charge épée vers le haut 11
        new ConstructOfPosition(-639, -347, 19, 31),//charge épée vers le haut 12
        new ConstructOfPosition(-660, -348, 19, 30),//charge épée vers le haut 13
        new ConstructOfPosition(-402, -383, 19, 31),//charge épée vers le haut 14
        new ConstructOfPosition(-424, -382, 19, 32),//charge épée vers le haut 15
        new ConstructOfPosition(-448, -381, 19, 33)//charge épée vers le haut 16
      ],[//indice 10 épée chargé
        new ConstructOfPosition(-496, -394, 19, 26)
      ],[//indice 11 marche avec l'épée chargé
        new ConstructOfPosition(-411, -436, 19, 25),//marche avec l'épée vers le bas 1
        new ConstructOfPosition(-432, -436, 19, 25),//marche avec l'épée vers le bas 2
        new ConstructOfPosition(-455, -436, 19, 25),//marche avec l'épée vers le bas 3
        new ConstructOfPosition(-477, -436, 19, 25),//marche avec l'épée vers le bas 4
        new ConstructOfPosition(-501, -436, 19, 25)//marche avec l'épée vers le bas 5
      ],[//indice 12 coup d'épée chargé
        new ConstructOfPosition(-368, -914, 20, 27),//coup d'épée chargé vers le bas 1
        new ConstructOfPosition(-397, -915, 15, 35),//coup d'épée chargé vers le bas 2
        new ConstructOfPosition(-422, -914, 17, 38),//coup d'épée chargé vers le bas 3
        new ConstructOfPosition(-449, -914, 17, 38),//coup d'épée chargé vers le bas 4
        new ConstructOfPosition(-476, -914, 20, 27),//coup d'épée chargé vers le bas 5
        new ConstructOfPosition(-501, -914, 28, 22),//coup d'épée chargé vers le bas 6
        new ConstructOfPosition(-538, -908, 16, 28),//coup d'épée chargé vers le bas 7
        new ConstructOfPosition(-562, -914, 28, 22),//coup d'épée chargé vers le bas 8
        new ConstructOfPosition(-601, -914, 16, 31),//coup d'épée chargé vers le bas 9
        new ConstructOfPosition(-627, -915, 17, 31),//coup d'épée chargé vers le bas 10
        new ConstructOfPosition(-648, -915, 20, 27),//coup d'épée chargé vers le bas 11
        new ConstructOfPosition(-678, -915, 17, 22)//coup d'épée chargé vers le bas 12
      ],[//indice 13 tir à l'arc
        new ConstructOfPosition(-432, -492, 18, 22),//tir à l'arc vers le bas 1
        new ConstructOfPosition(-457, -493, 21, 21),//tir à l'arc vers le bas 2
        new ConstructOfPosition(-486, -492, 21, 22)//tir à l'arc vers le bas 3
      ],[//indice 14 fléche
        new ConstructOfPosition(-517, -499, 5, 15),//fléche vers le bas 1
        new ConstructOfPosition(-525, -503, 6, 11),//fléche vers le bas 2
        new ConstructOfPosition(-533, -503, 5, 11),//fléche vers le bas 3
        new ConstructOfPosition(-540, -503, 6, 11)//fléche vers le bas 4
      ],[//indice 15 bléssé
        new ConstructOfPosition(-635, -197, 20, 19)//bléssé vers le bas
      ]
    ],[//indice 2 vers la droite
        [//indice 0 marche
          new ConstructOfPosition(-787, -128, 16, 23),//marche vers la droite 1
          new ConstructOfPosition(-810, -127, 16, 24),//marche vers la droite 2
          new ConstructOfPosition(-835, -127, 16, 24),//marche vers la droite 3
          new ConstructOfPosition(-857, -128, 16, 23),//marche vers la droite 4 statick
          new ConstructOfPosition(-881, -127, 16, 24),//marche vers la droite 5
          new ConstructOfPosition(-905, -127, 16, 24),//marche vers la droite 6
          new ConstructOfPosition(-927, -128, 17, 23),//marche vers la droite 7
          new ConstructOfPosition(-948, -128, 16, 23)//marche vers la droite 8
        ],[ //indice 1 marche avec bouclier
          new ConstructOfPosition(-789, -158, 18, 23),//marche vers la droite 1 avec un bouclier
          new ConstructOfPosition(-812, -157, 18, 24),//marche vers la droite 2 avec un bouclier
          new ConstructOfPosition(-837, -157, 19, 24),//marche vers la droite 3 avec un bouclier
          new ConstructOfPosition(-859, -158, 19, 23),//marche vers la droite 4 avec un bouclier statick
          new ConstructOfPosition(-883, -157, 19, 24),//marche vers la droite 5 avec un bouclier
          new ConstructOfPosition(-907, -157, 18, 24),//marche vers la droite 6 avec un bouclier
          new ConstructOfPosition(-929, -158, 19, 23)//marche vers la droite 7 avec un bouclier
        ],[//indice 2 Tiré
          new ConstructOfPosition(-815, -186, 16, 23),//Tiré vers la droite 1
          new ConstructOfPosition(-838, -187, 19, 22),//Tiré vers la droite 2
          new ConstructOfPosition(-867, -187, 21, 22),//Tiré vers la droite 2
          new ConstructOfPosition(-897, -187, 20, 22)//Tiré vers la droite 2
        ],[//indice 3 souléve un objet
          new ConstructOfPosition(-790, -217, 25, 20),//souléve vers la droite 1 sans objet
          new ConstructOfPosition(-822, -216, 31, 21),//souléve vers la droite 2 sans objet
          new ConstructOfPosition(-860, -216, 34, 21),//souléve vers la droite 3 sans objet
          new ConstructOfPosition(-899, -216, 31, 21),//souléve vers la droite 4 sans objet
          new ConstructOfPosition(-937, -214, 16, 23),//souléve vers la droite 5 sans objet
          new ConstructOfPosition(-768, -251, 27, 27),//souléve vers la droite 1 un objet
          new ConstructOfPosition(-800, -251, 33, 27),//souléve vers la droite 2 un objet
          new ConstructOfPosition(-838, -251, 36, 27),//souléve vers la droite 3 un objet
          new ConstructOfPosition(-877, -248, 33, 30),//souléve vers la droite 4 un objet
          new ConstructOfPosition(-921, -245, 22, 33),//souléve vers la droite 5 un objet
          new ConstructOfPosition(-949, -243, 17, 35)//souléve vers la droite 6 un objet
        ],[//indice 4 pousse
          new ConstructOfPosition(-833, -285, 16, 23),//pousser vers la droite 1
          new ConstructOfPosition(-853, -286, 16, 23),//pousser vers la droite 2
          new ConstructOfPosition(-873, -287, 16, 22),//pousser vers la droite 3
          new ConstructOfPosition(-894, -288, 16, 21)//pousser vers la droite 4
        ],[//indice 5 marche avec un objet
          new ConstructOfPosition(-922, -286, 16, 24),//marche avec un objet vers la droite 1
          new ConstructOfPosition(-944, -288, 16, 22),//marche avec un objet vers la droite 2
          new ConstructOfPosition(-967, -289, 17, 21)//marche avec un objet vers la droite 3
        ],[//indice 6 lancer un objet
          new ConstructOfPosition(-1013, -286, 16, 23)//lancer un objet vers la droite 1
        ],[//indice 7 coup d'épée
        new ConstructOfPosition(-751, -318, 16, 23),//coup d'épée vers la droite 1
        new ConstructOfPosition(-774, -318, 18, 23),//coup d'épée vers la droite 2
        new ConstructOfPosition(-797, -317, 23, 24),//coup d'épée vers la droite 3
        new ConstructOfPosition(-826, -317, 26, 24),//coup d'épée vers la droite 4
        new ConstructOfPosition(-856, -320, 29, 21),//coup d'épée vers la droite 5
        new ConstructOfPosition(-890, -320, 28, 21),//coup d'épée vers la droite 6
        new ConstructOfPosition(-928, -320, 28, 21),//coup d'épée vers la droite 4
        new ConstructOfPosition(-958, -319, 28, 28),//coup d'épée vers la droite 5
        new ConstructOfPosition(-997, -317, 23, 31)//coup d'épée vers la droite 6
        ],[//indice 9 charge épée
          new ConstructOfPosition(-700, -358, 24, 23),//charge épée vers la droite 1
          new ConstructOfPosition(-726, -358, 24, 23),//charge épée vers la droite 2
          new ConstructOfPosition(-752, -358, 24, 23),//charge épée vers la droite 3
          new ConstructOfPosition(-778, -358, 24, 23),//charge épée vers la droite 4
          new ConstructOfPosition(-804, -358, 24, 23),//charge épée vers la droite 5
          new ConstructOfPosition(-830, -358, 24, 23),//charge épée vers la droite 6
          new ConstructOfPosition(-856, -358, 24, 23),//charge épée vers la droite 7
          new ConstructOfPosition(-882, -358, 24, 23),//charge épée vers la droite 8
          new ConstructOfPosition(-908, -358, 24, 23),//charge épée vers la droite 9
          new ConstructOfPosition(-934, -358, 24, 23),//charge épée vers la droite 10
          new ConstructOfPosition(-960, -358, 24, 23),//charge épée vers la droite 11
          new ConstructOfPosition(-986, -358, 24, 23),//charge épée vers la droite 12
          new ConstructOfPosition(-1012, -358, 24, 23),//charge épée vers la droite 13
          new ConstructOfPosition(-1038, -358, 24, 23),//charge épée vers la droite 14
          new ConstructOfPosition(-1064, -358, 24, 23),//charge épée vers la droite 15
          new ConstructOfPosition(-700, -383, 24, 23),//charge épée vers la droite 16
          new ConstructOfPosition(-726, -383, 24, 23),//charge épée vers la droite 17
          new ConstructOfPosition(-752, -383, 24, 23),//charge épée vers la droite 18
          new ConstructOfPosition(-780, -383, 24, 23),//charge épée vers la droite 19
          new ConstructOfPosition(-806, -383, 24, 23),//charge épée vers la droite 20
          new ConstructOfPosition(-832, -383, 29, 23),//charge épée vers la droite 21
          new ConstructOfPosition(-865, -383, 29, 23),//charge épée vers la droite 22
          new ConstructOfPosition(-896, -383, 29, 23),//charge épée vers la droite 23
          new ConstructOfPosition(-927, -383, 26, 23),//charge épée vers la droite 24
          new ConstructOfPosition(-955, -383, 25, 23),//charge épée vers la droite 25
          new ConstructOfPosition(-982, -383, 26, 23),//charge épée vers la droite 26
          new ConstructOfPosition(-1009, -383, 28, 23),//charge épée vers la droite 27
          new ConstructOfPosition(-1038, -383, 27, 23)//charge épée vers la droite 28
        ],[//indice 10 épée chargé
          new ConstructOfPosition(-722, -414, 24, 23)
        ],[//indice 11 marche avec l'épée chargé
          new ConstructOfPosition(-773, -457, 24, 23),//marche avec l'épée vers la droite 1
          new ConstructOfPosition(-799, -459, 24, 22),//marche avec l'épée vers la droite 2
          new ConstructOfPosition(-826, -459, 24, 22),//marche avec l'épée vers la droite 3
          new ConstructOfPosition(-853, -460, 24, 21)//marche avec l'épée vers la droite 4
        ],[//indice 12 coup d'épée chargé
          new ConstructOfPosition(-707, -911, 23, 23),//coup d'épée chargé vers la droite 1
          new ConstructOfPosition(-743, -911, 31, 23),//coup d'épée chargé vers la droite 2
          new ConstructOfPosition(-784, -912, 34, 23),//coup d'épée chargé vers la droite 3
          new ConstructOfPosition(-828, -911, 34, 23),//coup d'épée chargé vers la droite 4
          new ConstructOfPosition(-871, -911, 23, 23),//coup d'épée chargé vers la droite 5
          new ConstructOfPosition(-904, -911, 16, 31),//coup d'épée chargé vers la droite 6
          new ConstructOfPosition(-925, -911, 28, 23),//coup d'épée chargé vers la droite 7
          new ConstructOfPosition(-957, -911, 28, 23),//coup d'épée chargé vers la droite 8
          new ConstructOfPosition(-996, -905, 17, 29),//coup d'épée chargé vers la droite 9
          new ConstructOfPosition(-1022, -911, 28, 23),//coup d'épée chargé vers la droite 10
          new ConstructOfPosition(-1052, -911, 28, 23),//coup d'épée chargé vers la droite 11
          new ConstructOfPosition(-1086, -911, 23, 23)//coup d'épée chargé vers la droite 12
        ],[//indice 13 tir à l'arc
          new ConstructOfPosition(-772, -514, 17, 23),//tir à l'arc vers la droite 1
          new ConstructOfPosition(-796, -514, 19, 22),//tir à l'arc vers la droite 2
          new ConstructOfPosition(-823, -514, 20, 23)//tir à l'arc vers la droite 3
        ],[//indice 14 fléche
          new ConstructOfPosition(-885, -528, 15, 5),//fléche vers la droite 1
          new ConstructOfPosition(-910, -520, 11, 6),//fléche vers la droite 2
          new ConstructOfPosition(-910, -528, 11, 5),//fléche vers la droite 3
          new ConstructOfPosition(-910, -535, 11, 6)//fléche vers la droite 4
        ],[//indice 15 bléssé
          new ConstructOfPosition(-969, -188, 16, 21)//bléssé vers la droite
        ]
      ],[//indice 3 tomber
        new ConstructOfPosition(-914, -38, 22, 21),//tomber 1
        new ConstructOfPosition(-942, -40, 16, 16),//tomber 2
        new ConstructOfPosition(-963, -40, 13, 13),//tomber 3
        new ConstructOfPosition(-981, -42, 8, 8),//tomber 4
        new ConstructOfPosition(-930, -65, 7, 7),//tomber 5
        new ConstructOfPosition(-942, -67, 3, 3)//tomber 6
      ],[//indice 4 game over
        new ConstructOfPosition(-918, -80, 18, 21),//game over 1
        new ConstructOfPosition(-941, -87, 24, 22),//game over 2
        new ConstructOfPosition(-971, -87, 24, 15)//game over 3
      ],[//indice 5 diagonal haut gauche
        new ConstructOfPosition(-1013, -53, 14, 21),//diagonal haut gauche 1
        new ConstructOfPosition(-1034, -52, 14, 22),//diagonal haut gauche 2
        new ConstructOfPosition(-1054, -57, 16, 22)//diagonal haut gauche 3
      ],[//indice 6 diagonal bas droite
        new ConstructOfPosition(-1014, -80, 14, 20),//diagonal bas droite 1
        new ConstructOfPosition(-1035, -78, 14, 22),//diagonal bas droite 2
        new ConstructOfPosition(-1055, -78, 15, 22)//diagonal bas droite 3
      ]
    ],[//indice 3 rouge
      [//indice 0 vers le bas
        [//indice 1 marche
          new ConstructOfPosition(-101, -127, 16, 24),//marche vers l'avent 1
          new ConstructOfPosition(-124 -128, 16, 23),//marche vers l'avent 2
          new ConstructOfPosition(-148, -129, 16, 22),//marche vers l'avent 3
          new ConstructOfPosition(-171, -129, 16, 22),//marche vers l'avent 4 statick
          new ConstructOfPosition(-194, -130, 16, 22),//marche vers l'avent 5
          new ConstructOfPosition(-218, -128, 16, 23),//marche vers l'avent 6
          new ConstructOfPosition(-241, -127, 16, 24)//marche vers l'avent 7
        ],[ //indice 2 marche avec bouclier
          new ConstructOfPosition(-101, -157, 16, 24),//marche vers l'avent 1 avec un bouclier
          new ConstructOfPosition(-124, -158, 16, 23),//marche vers l'avent 2 avec un bouclier
          new ConstructOfPosition(-148, -159, 16, 22),//marche vers l'avent 3 avec un bouclier
          new ConstructOfPosition(-171, -159, 16, 22),//marche vers l'avent 4 avec un bouclier statick
          new ConstructOfPosition(-194, -159, 16, 22),//marche vers l'avent 5 avec un bouclier
          new ConstructOfPosition(-218, -158, 16, 23),//marche vers l'avent 6 avec un bouclier
          new ConstructOfPosition(-241, -157, 16, 24)//marche vers l'avent 7 avec un bouclier
        ],[//indice 3 Tiré
          new ConstructOfPosition(-107, -194, 16, 20),//Tiré vers le bas 1
          new ConstructOfPosition(-129, -194, 16, 20),//Tiré vers le bas 2
          new ConstructOfPosition(-149, -194, 24, 20),//Tiré vers le bas 3
          new ConstructOfPosition(-183, -193, 30, 21)//Tiré vers le bas 4
        ],[//indice 4 souléve un objet
          new ConstructOfPosition(-96, -242, 16, 19),//souléve vers le bas 1 un objet
          new ConstructOfPosition(-117, -243, 30, 18),//souléve vers le bas 1 un objet
          new ConstructOfPosition(-151, -243, 34, 19),//souléve vers le bas 2 un objet
          new ConstructOfPosition(-189, -233, 34, 28),//souléve vers le bas 3 un objet
          new ConstructOfPosition(-233, -221, 16, 40),//souléve vers le bas 4 un objet
          new ConstructOfPosition(-262, -227, 16, 34)//souléve vers le bas 5 un objet
        ],[//indice 5 pousse
          new ConstructOfPosition(-152, -281, 16, 20),//pousser vers le bas 1
          new ConstructOfPosition(-172, -282, 16, 19),//pousser vers le bas 2
          new ConstructOfPosition(-191, -283, 16, 18)//pousser vers le bas 3
        ],[//indice 6 marche avec un objet
          new ConstructOfPosition(-220, -281, 16, 22),//marche avec un objet vers le bas 1 et trouver objet
          new ConstructOfPosition(-241, -282, 16, 21),//marche avec un objet vers le bas 2
          new ConstructOfPosition(-261, -282, 16, 21),//marche avec un objet vers le bas 3
          new ConstructOfPosition(-283, -282, 16, 21)//marche avec un objet vers le bas 4
        ],[//indice 7 lancer un objet
          new ConstructOfPosition(-306, -282, 17, 21)//lancer un objet vers le bas 1
        ],[//indice 8 coup d'épée
          new ConstructOfPosition(-82, -308, 20, 23),//coup d'épée vers le bas 1
          new ConstructOfPosition(-107, -309, 21, 29),//coup d'épée vers le bas 2
          new ConstructOfPosition(-136, -309, 20, 31),//coup d'épée vers le bas 3
          new ConstructOfPosition(-162, -310, 20, 31),//coup d'épée vers le bas 4
          new ConstructOfPosition(-186, -310, 28, 29),//coup d'épée vers le bas 5
          new ConstructOfPosition(-217, -310, 32, 27)//coup d'épée vers le bas 6
        ],[//indice 9 charge épée
          new ConstructOfPosition(-11, -350, 19, 29),//charge épée vers le bas 1
          new ConstructOfPosition(-32, -350, 19, 29),//charge épée vers le bas 2
          new ConstructOfPosition(-55, -350, 19, 29),//charge épée vers le bas 3
          new ConstructOfPosition(-76, -350, 19, 29),//charge épée vers le bas 4
          new ConstructOfPosition(-98, -350, 19, 29),//charge épée vers le bas 5
          new ConstructOfPosition(-120, -350, 19, 29),//charge épée vers le bas 6
          new ConstructOfPosition(-145, -350, 19, 29),//charge épée vers le bas 7
          new ConstructOfPosition(-191, -350, 19, 29),//charge épée vers le bas 8
          new ConstructOfPosition(-215, -350, 19, 29),//charge épée vers le bas 9
          new ConstructOfPosition(-238, -350, 19, 29),//charge épée vers le bas 10
          new ConstructOfPosition(-262, -350, 19, 34),//charge épée vers le bas 11
          new ConstructOfPosition(-284, -350, 19, 34),//charge épée vers le bas 12
          new ConstructOfPosition(-307, -349, 19, 31),//charge épée vers le bas 13
          new ConstructOfPosition(-328, -349, 20, 32),//charge épée vers le bas 14
          new ConstructOfPosition(-24, -393, 19, 29)//charge épée vers le bas 15
        ],[//indice 10 épée chargé
          new ConstructOfPosition(-24, -393, 19, 29)
        ],[//indice 11 marche avec l'épée chargé
          new ConstructOfPosition(-14, -442, 19, 29),//marche avec l'épée vers le bas 1
          new ConstructOfPosition(-38, -442, 19, 29),//marche avec l'épée vers le bas 2
          new ConstructOfPosition(-60, -441, 19, 29),//marche avec l'épée vers le bas 3
          new ConstructOfPosition(-82, -442, 19, 29),//marche avec l'épée vers le bas 4
          new ConstructOfPosition(-103, -443, 19, 29)//marche avec l'épée vers le bas 5
        ],[//indice 12 coup d'épée chargé
          new ConstructOfPosition(-17, -915, 20, 26),//coup d'épée chargé vers le bas 1
          new ConstructOfPosition(-45, -913, 15, 35),//coup d'épée chargé vers le bas 2
          new ConstructOfPosition(-67, -903, 16, 38),//coup d'épée chargé vers le bas 3
          new ConstructOfPosition(-89, -914, 20, 26),//coup d'épée chargé vers le bas 4
          new ConstructOfPosition(-117, -918, 28, 22),//coup d'épée chargé vers le bas 5
          new ConstructOfPosition(-151, -918, 28, 22),//coup d'épée chargé vers le bas 6
          new ConstructOfPosition(-186, -917, 17, 31),//coup d'épée chargé vers le bas 7
          new ConstructOfPosition(-208, -918, 28, 22),//coup d'épée chargé vers le bas 8
          new ConstructOfPosition(-242, -918, 28, 22),//coup d'épée chargé vers le bas 9
          new ConstructOfPosition(-277, -912, 16, 28),//coup d'épée chargé vers le bas 10
          new ConstructOfPosition(-304, -914, 20, 26),//coup d'épée chargé vers le bas 11
          new ConstructOfPosition(-331, -918, 16, 22)//coup d'épée chargé vers le bas 12
        ],[//indice 13 tir à l'arc
          new ConstructOfPosition(-123, -497, 17, 24),//tir à l'arc vers le bas 1
          new ConstructOfPosition(-154, -498, 18, 21),//tir à l'arc vers le bas 2
          new ConstructOfPosition(-183, -497, 18, 22)//tir à l'arc vers le bas 3
        ],[//indice 14 fléche
          new ConstructOfPosition(-216, -503, 5, 15),//fléche vers le bas 1
          new ConstructOfPosition(-224, -503, 6, 11),//fléche vers le bas 2
          new ConstructOfPosition(-232, -503, 5, 11),//fléche vers le bas 3
          new ConstructOfPosition(-239, -503, 6, 11)//fléche vers le bas 4
        ],[//indice 15 bléssé
          new ConstructOfPosition(-271, -192, 16, 21)//bléssé vers le bas
        ]
    ],[//indice 1 vers le haut
        [//indice 0 marche
          new ConstructOfPosition(-456, -131, 16, 24),//marche vers le haut 1
          new ConstructOfPosition(-479, -132, 16, 23),//marche vers le haut 2
          new ConstructOfPosition(-503, -133, 16, 22),//marche vers le haut 3
          new ConstructOfPosition(-526, -133, 16, 22),//marche vers le haut 4 statick
          new ConstructOfPosition(-550, -133, 16, 22),//marche vers le haut 5
          new ConstructOfPosition(-573, -132, 16, 23),//marche vers le haut 6
          new ConstructOfPosition(-595, -131, 16, 24)//marche vers le haut 7
        ],[ //indice 1 marche avec bouclier
          new ConstructOfPosition(-456, -161, 17, 24),//marche vers le haut 1 avec un bouclier
          new ConstructOfPosition(-479, -162, 17, 23),//marche vers le haut 2 avec un bouclier
          new ConstructOfPosition(-503, -163, 17, 22),//marche vers le haut 3 avec un bouclier
          new ConstructOfPosition(-526, -163, 17, 22),//marche vers le haut 4 avec un bouclier statick
          new ConstructOfPosition(-550, -163, 17, 22),//marche vers le haut 5 avec un bouclier
          new ConstructOfPosition(-573, -162, 17, 23),//marche vers le haut 6 avec un bouclier
          new ConstructOfPosition(-595, -161, 17, 24)//marche vers le haut 7 avec un bouclier
        ],[//indice 2 Tiré
          new ConstructOfPosition(-473, -196, 16, 21),//Tiré vers le haut 1
          new ConstructOfPosition(-493, -197, 16, 20),//Tiré vers le haut 2
          new ConstructOfPosition(-514, -197, 24, 20),//Tiré vers le haut 3
          new ConstructOfPosition(-544, -197, 30, 20)//Tiré vers le haut 4
        ],[//indice 3 souléve un objet
          new ConstructOfPosition(-453, -226, 16, 31),//souléve vers le haut 1 un objet
          new ConstructOfPosition(-480, -226, 22, 31),//souléve vers le haut 1 un objet
          new ConstructOfPosition(-510, -226, 32, 31),//souléve vers le haut 2 un objet
          new ConstructOfPosition(-547, -225, 32, 32),//souléve vers le haut 3 un objet
          new ConstructOfPosition(-585, -224, 16, 33),//souléve vers le haut 4 un objet
          new ConstructOfPosition(-610, -223, 16, 34)//souléve vers le haut 5 un objet
        ],[//indice 4 pousse
          new ConstructOfPosition(-514, -278, 16, 22),//pousser vers le haut 1
          new ConstructOfPosition(-534, -279, 16, 21),//pousser vers le haut 2
          new ConstructOfPosition(-554, -279, 16, 21)//pousser vers le haut 3
        ],[//indice 5 marche avec un objet
          new ConstructOfPosition(-585, -279, 16, 22),//marche avec un objet vers le haut 1
          new ConstructOfPosition(-611, -280, 16, 21),//marche avec un objet vers le haut 2
          new ConstructOfPosition(-635, -279, 16, 22),//marche avec un objet vers le haut 3
          new ConstructOfPosition(-657, -280, 16, 21)//marche avec un objet vers le haut 4
        ],[//indice 6 lancer un objet
          new ConstructOfPosition(-585, -279, 16, 22)//lancer un objet vers le haut
        ],[//indice 7 coup d'épée
        new ConstructOfPosition(-407, -317, 23, 22),//coup d'épée vers le haut 1
        new ConstructOfPosition(-438, -317, 22, 22),//coup d'épée vers le haut 2
        new ConstructOfPosition(-469, -315, 23, 24),//coup d'épée vers le haut 3
        new ConstructOfPosition(-500, -309, 22, 30),//coup d'épée vers le haut 4
        new ConstructOfPosition(-530, -307, 20, 32),//coup d'épée vers le haut 5
        new ConstructOfPosition(-555, -304, 20, 35),//coup d'épée vers le haut 6
        new ConstructOfPosition(-579, -309, 24, 30),//coup d'épée vers le haut 7
        new ConstructOfPosition(-606, -312, 29, 27),//coup d'épée vers le haut 8
        new ConstructOfPosition(-641, -316, 32, 23)//coup d'épée vers le haut 9
      ],[//indice 9 charge épée
        new ConstructOfPosition(-402, -352, 19, 26),//charge épée vers le haut 1
        new ConstructOfPosition(-425, -352, 19, 26),//charge épée vers le haut 2
        new ConstructOfPosition(-447, -352, 19, 26),//charge épée vers le haut 3
        new ConstructOfPosition(-468, -352, 19, 26),//charge épée vers le haut 4
        new ConstructOfPosition(-490, -352, 19, 26),//charge épée vers le haut 5
        new ConstructOfPosition(-511, -352, 19, 26),//charge épée vers le haut 6
        new ConstructOfPosition(-533, -352, 19, 26),//charge épée vers le haut 7
        new ConstructOfPosition(-554, -352, 19, 26),//charge épée vers le haut 8
        new ConstructOfPosition(-575, -352, 19, 26),//charge épée vers le haut 9
        new ConstructOfPosition(-597, -351, 19, 27),//charge épée vers le haut 10
        new ConstructOfPosition(-618, -350, 19, 28),//charge épée vers le haut 11
        new ConstructOfPosition(-639, -347, 19, 31),//charge épée vers le haut 12
        new ConstructOfPosition(-660, -348, 19, 30),//charge épée vers le haut 13
        new ConstructOfPosition(-402, -383, 19, 31),//charge épée vers le haut 14
        new ConstructOfPosition(-424, -382, 19, 32),//charge épée vers le haut 15
        new ConstructOfPosition(-448, -381, 19, 33)//charge épée vers le haut 16
      ],[//indice 10 épée chargé
        new ConstructOfPosition(-496, -394, 19, 26)
      ],[//indice 11 marche avec l'épée chargé
        new ConstructOfPosition(-411, -436, 19, 25),//marche avec l'épée vers le bas 1
        new ConstructOfPosition(-432, -436, 19, 25),//marche avec l'épée vers le bas 2
        new ConstructOfPosition(-455, -436, 19, 25),//marche avec l'épée vers le bas 3
        new ConstructOfPosition(-477, -436, 19, 25),//marche avec l'épée vers le bas 4
        new ConstructOfPosition(-501, -436, 19, 25)//marche avec l'épée vers le bas 5
      ],[//indice 12 coup d'épée chargé
        new ConstructOfPosition(-368, -914, 20, 27),//coup d'épée chargé vers le bas 1
        new ConstructOfPosition(-397, -915, 15, 35),//coup d'épée chargé vers le bas 2
        new ConstructOfPosition(-422, -914, 17, 38),//coup d'épée chargé vers le bas 3
        new ConstructOfPosition(-449, -914, 17, 38),//coup d'épée chargé vers le bas 4
        new ConstructOfPosition(-476, -914, 20, 27),//coup d'épée chargé vers le bas 5
        new ConstructOfPosition(-501, -914, 28, 22),//coup d'épée chargé vers le bas 6
        new ConstructOfPosition(-538, -908, 16, 28),//coup d'épée chargé vers le bas 7
        new ConstructOfPosition(-562, -914, 28, 22),//coup d'épée chargé vers le bas 8
        new ConstructOfPosition(-601, -914, 16, 31),//coup d'épée chargé vers le bas 9
        new ConstructOfPosition(-627, -915, 17, 31),//coup d'épée chargé vers le bas 10
        new ConstructOfPosition(-648, -915, 20, 27),//coup d'épée chargé vers le bas 11
        new ConstructOfPosition(-678, -915, 17, 22)//coup d'épée chargé vers le bas 12
      ],[//indice 13 tir à l'arc
        new ConstructOfPosition(-432, -492, 18, 22),//tir à l'arc vers le bas 1
        new ConstructOfPosition(-457, -493, 21, 21),//tir à l'arc vers le bas 2
        new ConstructOfPosition(-486, -492, 21, 22)//tir à l'arc vers le bas 3
      ],[//indice 14 fléche
        new ConstructOfPosition(-517, -499, 5, 15),//fléche vers le bas 1
        new ConstructOfPosition(-525, -503, 6, 11),//fléche vers le bas 2
        new ConstructOfPosition(-533, -503, 5, 11),//fléche vers le bas 3
        new ConstructOfPosition(-540, -503, 6, 11)//fléche vers le bas 4
      ],[//indice 15 bléssé
        new ConstructOfPosition(-635, -197, 20, 19)//bléssé vers le bas
      ]
    ],[//indice 2 vers la droite
        [//indice 0 marche
          new ConstructOfPosition(-787, -128, 16, 23),//marche vers la droite 1
          new ConstructOfPosition(-810, -127, 16, 24),//marche vers la droite 2
          new ConstructOfPosition(-835, -127, 16, 24),//marche vers la droite 3
          new ConstructOfPosition(-857, -128, 16, 23),//marche vers la droite 4 statick
          new ConstructOfPosition(-881, -127, 16, 24),//marche vers la droite 5
          new ConstructOfPosition(-905, -127, 16, 24),//marche vers la droite 6
          new ConstructOfPosition(-927, -128, 17, 23),//marche vers la droite 7
          new ConstructOfPosition(-948, -128, 16, 23)//marche vers la droite 8
        ],[ //indice 1 marche avec bouclier
          new ConstructOfPosition(-789, -158, 18, 23),//marche vers la droite 1 avec un bouclier
          new ConstructOfPosition(-812, -157, 18, 24),//marche vers la droite 2 avec un bouclier
          new ConstructOfPosition(-837, -157, 19, 24),//marche vers la droite 3 avec un bouclier
          new ConstructOfPosition(-859, -158, 19, 23),//marche vers la droite 4 avec un bouclier statick
          new ConstructOfPosition(-883, -157, 19, 24),//marche vers la droite 5 avec un bouclier
          new ConstructOfPosition(-907, -157, 18, 24),//marche vers la droite 6 avec un bouclier
          new ConstructOfPosition(-929, -158, 19, 23)//marche vers la droite 7 avec un bouclier
        ],[//indice 2 Tiré
          new ConstructOfPosition(-815, -186, 16, 23),//Tiré vers la droite 1
          new ConstructOfPosition(-838, -187, 19, 22),//Tiré vers la droite 2
          new ConstructOfPosition(-867, -187, 21, 22),//Tiré vers la droite 2
          new ConstructOfPosition(-897, -187, 20, 22)//Tiré vers la droite 2
        ],[//indice 3 souléve un objet
          new ConstructOfPosition(-790, -217, 25, 20),//souléve vers la droite 1 sans objet
          new ConstructOfPosition(-822, -216, 31, 21),//souléve vers la droite 2 sans objet
          new ConstructOfPosition(-860, -216, 34, 21),//souléve vers la droite 3 sans objet
          new ConstructOfPosition(-899, -216, 31, 21),//souléve vers la droite 4 sans objet
          new ConstructOfPosition(-937, -214, 16, 23),//souléve vers la droite 5 sans objet
          new ConstructOfPosition(-768, -251, 27, 27),//souléve vers la droite 1 un objet
          new ConstructOfPosition(-800, -251, 33, 27),//souléve vers la droite 2 un objet
          new ConstructOfPosition(-838, -251, 36, 27),//souléve vers la droite 3 un objet
          new ConstructOfPosition(-877, -248, 33, 30),//souléve vers la droite 4 un objet
          new ConstructOfPosition(-921, -245, 22, 33),//souléve vers la droite 5 un objet
          new ConstructOfPosition(-949, -243, 17, 35)//souléve vers la droite 6 un objet
        ],[//indice 4 pousse
          new ConstructOfPosition(-833, -285, 16, 23),//pousser vers la droite 1
          new ConstructOfPosition(-853, -286, 16, 23),//pousser vers la droite 2
          new ConstructOfPosition(-873, -287, 16, 22),//pousser vers la droite 3
          new ConstructOfPosition(-894, -288, 16, 21)//pousser vers la droite 4
        ],[//indice 5 marche avec un objet
          new ConstructOfPosition(-922, -286, 16, 24),//marche avec un objet vers la droite 1
          new ConstructOfPosition(-944, -288, 16, 22),//marche avec un objet vers la droite 2
          new ConstructOfPosition(-967, -289, 17, 21)//marche avec un objet vers la droite 3
        ],[//indice 6 lancer un objet
          new ConstructOfPosition(-1013, -286, 16, 23)//lancer un objet vers la droite 1
        ],[//indice 7 coup d'épée
        new ConstructOfPosition(-751, -318, 16, 23),//coup d'épée vers la droite 1
        new ConstructOfPosition(-774, -318, 18, 23),//coup d'épée vers la droite 2
        new ConstructOfPosition(-797, -317, 23, 24),//coup d'épée vers la droite 3
        new ConstructOfPosition(-826, -317, 26, 24),//coup d'épée vers la droite 4
        new ConstructOfPosition(-856, -320, 29, 21),//coup d'épée vers la droite 5
        new ConstructOfPosition(-890, -320, 28, 21),//coup d'épée vers la droite 6
        new ConstructOfPosition(-928, -320, 28, 21),//coup d'épée vers la droite 4
        new ConstructOfPosition(-958, -319, 28, 28),//coup d'épée vers la droite 5
        new ConstructOfPosition(-997, -317, 23, 31)//coup d'épée vers la droite 6
        ],[//indice 9 charge épée
          new ConstructOfPosition(-700, -358, 24, 23),//charge épée vers la droite 1
          new ConstructOfPosition(-726, -358, 24, 23),//charge épée vers la droite 2
          new ConstructOfPosition(-752, -358, 24, 23),//charge épée vers la droite 3
          new ConstructOfPosition(-778, -358, 24, 23),//charge épée vers la droite 4
          new ConstructOfPosition(-804, -358, 24, 23),//charge épée vers la droite 5
          new ConstructOfPosition(-830, -358, 24, 23),//charge épée vers la droite 6
          new ConstructOfPosition(-856, -358, 24, 23),//charge épée vers la droite 7
          new ConstructOfPosition(-882, -358, 24, 23),//charge épée vers la droite 8
          new ConstructOfPosition(-908, -358, 24, 23),//charge épée vers la droite 9
          new ConstructOfPosition(-934, -358, 24, 23),//charge épée vers la droite 10
          new ConstructOfPosition(-960, -358, 24, 23),//charge épée vers la droite 11
          new ConstructOfPosition(-986, -358, 24, 23),//charge épée vers la droite 12
          new ConstructOfPosition(-1012, -358, 24, 23),//charge épée vers la droite 13
          new ConstructOfPosition(-1038, -358, 24, 23),//charge épée vers la droite 14
          new ConstructOfPosition(-1064, -358, 24, 23),//charge épée vers la droite 15
          new ConstructOfPosition(-700, -383, 24, 23),//charge épée vers la droite 16
          new ConstructOfPosition(-726, -383, 24, 23),//charge épée vers la droite 17
          new ConstructOfPosition(-752, -383, 24, 23),//charge épée vers la droite 18
          new ConstructOfPosition(-780, -383, 24, 23),//charge épée vers la droite 19
          new ConstructOfPosition(-806, -383, 24, 23),//charge épée vers la droite 20
          new ConstructOfPosition(-832, -383, 29, 23),//charge épée vers la droite 21
          new ConstructOfPosition(-865, -383, 29, 23),//charge épée vers la droite 22
          new ConstructOfPosition(-896, -383, 29, 23),//charge épée vers la droite 23
          new ConstructOfPosition(-927, -383, 26, 23),//charge épée vers la droite 24
          new ConstructOfPosition(-955, -383, 25, 23),//charge épée vers la droite 25
          new ConstructOfPosition(-982, -383, 26, 23),//charge épée vers la droite 26
          new ConstructOfPosition(-1009, -383, 28, 23),//charge épée vers la droite 27
          new ConstructOfPosition(-1038, -383, 27, 23)//charge épée vers la droite 28
        ],[//indice 10 épée chargé
          new ConstructOfPosition(-722, -414, 24, 23)
        ],[//indice 11 marche avec l'épée chargé
          new ConstructOfPosition(-773, -457, 24, 23),//marche avec l'épée vers la droite 1
          new ConstructOfPosition(-799, -459, 24, 22),//marche avec l'épée vers la droite 2
          new ConstructOfPosition(-826, -459, 24, 22),//marche avec l'épée vers la droite 3
          new ConstructOfPosition(-853, -460, 24, 21)//marche avec l'épée vers la droite 4
        ],[//indice 12 coup d'épée chargé
          new ConstructOfPosition(-707, -911, 23, 23),//coup d'épée chargé vers la droite 1
          new ConstructOfPosition(-743, -911, 31, 23),//coup d'épée chargé vers la droite 2
          new ConstructOfPosition(-784, -912, 34, 23),//coup d'épée chargé vers la droite 3
          new ConstructOfPosition(-828, -911, 34, 23),//coup d'épée chargé vers la droite 4
          new ConstructOfPosition(-871, -911, 23, 23),//coup d'épée chargé vers la droite 5
          new ConstructOfPosition(-904, -911, 16, 31),//coup d'épée chargé vers la droite 6
          new ConstructOfPosition(-925, -911, 28, 23),//coup d'épée chargé vers la droite 7
          new ConstructOfPosition(-957, -911, 28, 23),//coup d'épée chargé vers la droite 8
          new ConstructOfPosition(-996, -905, 17, 29),//coup d'épée chargé vers la droite 9
          new ConstructOfPosition(-1022, -911, 28, 23),//coup d'épée chargé vers la droite 10
          new ConstructOfPosition(-1052, -911, 28, 23),//coup d'épée chargé vers la droite 11
          new ConstructOfPosition(-1086, -911, 23, 23)//coup d'épée chargé vers la droite 12
        ],[//indice 13 tir à l'arc
          new ConstructOfPosition(-772, -514, 17, 23),//tir à l'arc vers la droite 1
          new ConstructOfPosition(-796, -514, 19, 22),//tir à l'arc vers la droite 2
          new ConstructOfPosition(-823, -514, 20, 23)//tir à l'arc vers la droite 3
        ],[//indice 14 fléche
          new ConstructOfPosition(-885, -528, 15, 5),//fléche vers la droite 1
          new ConstructOfPosition(-910, -520, 11, 6),//fléche vers la droite 2
          new ConstructOfPosition(-910, -528, 11, 5),//fléche vers la droite 3
          new ConstructOfPosition(-910, -535, 11, 6)//fléche vers la droite 4
        ],[//indice 15 bléssé
          new ConstructOfPosition(-969, -188, 16, 21)//bléssé vers la droite
        ]
      ],[//indice 3 tomber
        new ConstructOfPosition(-914, -38, 22, 21),//tomber 1
        new ConstructOfPosition(-942, -40, 16, 16),//tomber 2
        new ConstructOfPosition(-963, -40, 13, 13),//tomber 3
        new ConstructOfPosition(-981, -42, 8, 8),//tomber 4
        new ConstructOfPosition(-930, -65, 7, 7),//tomber 5
        new ConstructOfPosition(-942, -67, 3, 3)//tomber 6
      ],[//indice 4 game over
        new ConstructOfPosition(-918, -80, 18, 21),//game over 1
        new ConstructOfPosition(-941, -87, 24, 22),//game over 2
        new ConstructOfPosition(-971, -87, 24, 15)//game over 3
      ],[//indice 5 diagonal haut gauche
        new ConstructOfPosition(-1013, -53, 14, 21),//diagonal haut gauche 1
        new ConstructOfPosition(-1034, -52, 14, 22),//diagonal haut gauche 2
        new ConstructOfPosition(-1054, -57, 16, 22)//diagonal haut gauche 3
      ],[//indice 6 diagonal bas droite
        new ConstructOfPosition(-1014, -80, 14, 20),//diagonal bas droite 1
        new ConstructOfPosition(-1035, -78, 14, 22),//diagonal bas droite 2
        new ConstructOfPosition(-1055, -78, 15, 22)//diagonal bas droite 3
      ]
    ],[//indice 4 objet et autre
      new ConstructOfPosition(-314, -127, 16, 16, {indice : 6}),//indice 0 buisson
      new ConstructOfPosition(-335, -128, 16, 15, {indice : 7}),//indice 1 pierre claire
      new ConstructOfPosition(-358, -129, 16, 15, {indice : 7}),//indice 2 pierre foncé
      new ConstructOfPosition(-379, -128, 12, 13, {indice : 7}),//indice 3 jar
      new ConstructOfPosition(-315, -147, 7, 7),//indice 4 coeur plein
      new ConstructOfPosition(-331, -147, 7, 7)//indice 5 coeur vide
    ],[//indice 5 sinthiement aléatoir de l'épée haut et bas
      new ConstructOfPosition(-66, -398, 7, 7),//indice 2 coeur vide
      new ConstructOfPosition(-82, -398, 7, 7),//indice 2 coeur vide
      new ConstructOfPosition(-98, -398, 8, 7),//indice 2 coeur vide
      new ConstructOfPosition(-111, -398, 7, 7),//indice 2 coeur vide
      new ConstructOfPosition(-124, -398, 7, 7),//indice 2 coeur vide
      new ConstructOfPosition(-139, -398, 7, 7),//indice 2 coeur vide
      new ConstructOfPosition(-155, -398, 7, 7),//indice 2 coeur vide
      new ConstructOfPosition(-167, -398, 8, 7),//indice 2 coeur vide
      new ConstructOfPosition(-66, -408, 11, 7),//indice 2 coeur vide
      new ConstructOfPosition(-82, -408, 7, 7),//indice 2 coeur vide
      new ConstructOfPosition(-96, -408, 9, 7),//indice 2 coeur vide
      new ConstructOfPosition(-111, -408, 7, 7),//indice 2 coeur vide
      new ConstructOfPosition(-123, -408, 10, 7),//indice 2 coeur vide
      new ConstructOfPosition(-137, -408, 12, 7),//indice 2 coeur vide
      new ConstructOfPosition(-156, -409, 5, 5),//indice 2 coeur vide
      new ConstructOfPosition(-167, -408, 8, 7),//indice 2 coeur vide
      new ConstructOfPosition(-89, -419, 5, 5),//indice 2 coeur vide
      new ConstructOfPosition(-100, -418, 11, 7),//indice 2 coeur vide
      new ConstructOfPosition(-120, -419, 5, 5),//indice 2 coeur vide
      new ConstructOfPosition(-132, -418, 9, 7),//indice 2 coeur vide
      new ConstructOfPosition(-147, -418, 8, 7)//indice 2 coeur vide
    ],[//indice 6 slashing a bush
      new ConstructOfPosition(-332, -2923, 22, 18),//indice 0 slashing a bush
      new ConstructOfPosition(-365, -2921, 16, 23),//indice 1 slashing a bush
      new ConstructOfPosition(-396, -2920, 15, 26),//indice 2 slashing a bush
      new ConstructOfPosition(-427, -2919, 14, 29),//indice 3 slashing a bush
      new ConstructOfPosition(-454, -2918, 19, 32),//indice 4 slashing a bush
      new ConstructOfPosition(-480, -2916, 24, 35),//indice 5 slashing a bush
      new ConstructOfPosition(-509, -2913, 27, 40),//indice 6 slashing a bush
      new ConstructOfPosition(-537, -2911, 23, 43)//indice 7 slashing a bush
    ],[//indice 7 Destroying a pot
      new ConstructOfPosition(-335, -2981, 16, 16),//indice 0 slashing a bush
      new ConstructOfPosition(-364, -2980, 19, 19),//indice 1 slashing a bush
      new ConstructOfPosition(-393, -2978, 22, 22),//indice 2 slashing a bush
      new ConstructOfPosition(-422, -2977, 26, 24),//indice 3 slashing a bush
      new ConstructOfPosition(-453, -2977, 27, 25),//indice 4 slashing a bush
      new ConstructOfPosition(-482, -2977, 29, 28),//indice 5 slashing a bush
      new ConstructOfPosition(-518, -2977, 25, 25),//indice 6 slashing a bush
      new ConstructOfPosition(-550, -2981, 18, 23)//indice 7 slashing a bush
    ]],

  //test des objet dans l'espace.
  testObstacle : function(mouvementWay /* left ou top */, boul, /* vérifi avec un bouleen si le sens est positif ou négatif */ div,/* div à vérifier */ link/* bouleen qui vérifi si c'est la div de link */ ){
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
    for (var i=0;background.collisionListe[background.stage][i];i++){//boucle l'ensemble des objet
      if (parseFloat(div[divPosition]) + parseFloat(div[divSize]) <= background.collisionListe[background.stage][i][objectPosition] || parseFloat(div[divPosition]) >=  background.collisionListe[background.stage][i][objectPosition] + background.collisionListe[background.stage][i][objectSize])
    {//test si l'objet et au dessus ou en dessous ou a gauche ou a droite suivant le sens.
      //si tous les test sont vrai à la fin de la boucle retourne true.
      } else {
        if (boul){
          if( parseFloat(div[mouvementWay]) + parseFloat(div[divSizeSameAxis]) == (background.collisionListe[background.stage][i][objectPositionSameAxis]) )// test si le sens positif du mouvement est égale au premier point d'impact de l'objet
          {
            if(link){
              linkEtat.collision.collisionBooleen = false;
              linkEtat.collision.position = i;//numéro de l'objet dans le tableau
              if (linkEtat.spritePosition.position == 0) {
                linkEtat.collision.tailleX = this.spriteLink[7][linkEtat.spritePosition.position].tailleX;
              } else {
                linkEtat.collision.tailleX = this.spriteLink[7][linkEtat.spritePosition.position - 1].tailleX;
              }
            } else {
              this.collisionObjet = false;
            }
            return false; // si l'objet n'est pas décalé et le personnage le rencontre retourne false.
          }
        } else {
          if( parseFloat(div[mouvementWay]) == (background.collisionListe[background.stage][i][objectPositionSameAxis] + background.collisionListe[background.stage][i][objectSizeSameAxis]))// test si le sens négatif du mouvement est égale au premier point d'impact de l'objet
          {
            if(link){
              linkEtat.collision.collisionBooleen = false;
              linkEtat.collision.position = i;//numéro de l'objet dans le tableau
              if (linkEtat.spritePosition.position == 0) {
                linkEtat.collision.tailleY = this.spriteLink[7][linkEtat.spritePosition.position].tailleY;
              } else {
                linkEtat.collision.tailleY = this.spriteLink[7][linkEtat.spritePosition.position - 1].tailleY;
              }
            } else {
              this.collisionObjet = false;
            }
            return false; // si l'objet n'est pas décalé et le personnage le rencontre retourne false.
          }
        }
      }
    }
    linkEtat.collision.direction = 0;
    return true; //si tous les test sont vrai à la fin de la boucle retourne true.
  },
  spriteSelection : function ( temps, spriteAction, defautSprite, direction ){
    switch (linkEtat.touche.direction) {//met la direction du sprite corespondant
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
    linkEtat.spriteMouvement = true;
    if(temps && !linkEtat.touche.keyA){//vérifi si un obstacle est rencontré depuis plus d'une seconde
      linkEtat.spritePosition.action = 4;//initialise l'animation du sprite pour pousser
    } else {
      linkEtat.spritePosition.action = spriteAction;//initialise l'animation du sprite pour agire
    }
    linkEtat.actionOff.sprite = defautSprite;//sprite par defaut quand la touche est laché
    if( this.spriteLink[7][linkEtat.spritePosition.position] ){//vérifi la position du sprite pour incrémenter le compteur
      if( linkEtat.touche.direction == 'W' || linkEtat.touche.direction == 'NE' || linkEtat.touche.direction == 'SW' ){
        this.linkSprite.style.transform = 'scaleX(-1)';
        linkEtat.tailleSprite = -1111 + this.spriteLink[7][linkEtat.spritePosition.position].tailleX;//envoie la dimension en scale -1
      } else {
        this.linkSprite.style.transform = 'scaleX(1)';
        linkEtat.tailleSprite = 0;//envoie la dimension en scale 1
      }
      this.spriteDefaut(this.spriteLink[7][linkEtat.spritePosition.position]);//modifi la position du sprite visible
      if ( direction ) {
        linkEtat.spritePosition.position++;//quand une touche de direction est appuyé avence le sprite
      }
    } else {
      if ( !linkEtat.touche.keyA ){ //vérifi que la touche n'est pas enfoncé pour bloque la réinitalisation du compteur de position du sprite
        linkEtat.spritePosition.position = 0;//réinitialise la position du sprite
      } else {
        linkEtat.spritePosition.position-=2;//décrémente la position du sprite quand la touche a est enfoncé sur un obstacle.
      }
      this.spriteDefaut(this.spriteLink[7][linkEtat.spritePosition.position]);
      if( linkEtat.touche.direction == 'W' || linkEtat.touche.direction == 'NE' || linkEtat.touche.direction == 'SW' ){
        this.linkSprite.style.transform = 'scaleX(-1)';
        linkEtat.tailleSprite = -1111 + this.spriteLink[7][linkEtat.spritePosition.position].tailleX;//envoie la dimension en scale -1
      } else {
        this.linkSprite.style.transform = 'scaleX(1)';
        linkEtat.tailleSprite = 0;//envoie la dimension en scale 1
      }
    }
  },
  walk : 7,//valeur de marche
  defaut : 3,//valeur de la position par defaut
  lastPosition : -1,
  moving : function(axe/* x ou y */, sens /* positif ou negatif */, div /* element en mouvement */, direction /* direction au moment de l'impact */, link /* s'il s'agit de link */, collision /* bouleen qui enregistre la colision */){//fonction de déplacement de la div
    var deplacement = -1;
    if (sens){deplacement = 1}
    if( this.testObstacle(axe, sens, div, link, collision) ){
      div[axe] = (parseFloat(div[axe]) + deplacement) + 'px';
    } else {
      return direction;
    }
  },
  //test des touche directionnelle appuyé
  testDirection : function(){
    if ( !linkEtat.timeObstacle.actionObjet && !linkEtat.touche.keyA ){//les touches autre que direction ne sont pas enfoncé et il n'y a pas d'action lié au obstacle en cour
      //déplacement  vers la gauche
      if( linkEtat.touche.left && !linkEtat.touche.right && !linkEtat.touche.top && !linkEtat.touche.bottom ){
        linkEtat.touche.direction = 'W';
        this.spriteSelection( linkEtat.timeObstacle.supSecondeLeft, this.walk, this.spriteLink[7][this.defaut], linkEtat.touche.left );
        if( !(linkEtat.collision.direction == 'W' && linkEtat.collision.collisionBooleen) ){
          linkEtat.collision.direction = this.moving('left', false, this.divPersonnage, linkEtat.touche.direction, true, linkEtat.collision.collisionBooleen) || linkEtat.collision.direction; /* enregistre le sens de la collisition */
          linkEtat.collision.direction = this.moving('left', false, this.divPersonnage, linkEtat.touche.direction, true, linkEtat.collision.collisionBooleen) || linkEtat.collision.direction;
        }
      } else {
        linkEtat.timeObstacle.leftStart = 0;//vide le compteur de temps quand la touche n'est plus appuyé
        linkEtat.timeObstacle.supSecondeLeft = false;//repasse la valeur à false pour marcher de nouveau quand la touche sera enfoncé
      }
      //déplacement  vers le haut
      if(!linkEtat.touche.left && !linkEtat.touche.right && linkEtat.touche.top && !linkEtat.touche.bottom ){
        linkEtat.touche.direction = 'N';
        this.spriteSelection( linkEtat.timeObstacle.supSecondeTop, this.walk, this.spriteLink[7][this.defaut], linkEtat.touche.top );
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
        this.spriteSelection( linkEtat.timeObstacle.supSecondeRight, this.walk, this.spriteLink[7][this.defaut], linkEtat.touche.right );
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
        this.spriteSelection( linkEtat.timeObstacle.supSecondeBottom, this.walk, this.spriteLink[7][this.defaut], linkEtat.touche.bottom );
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
          this.spriteSelection( linkEtat.timeObstacle.supSecondeTop, 0, this.spriteLink[7][this.defaut], (linkEtat.touche.left && linkEtat.touche.top) );
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
          this.spriteSelection( linkEtat.timeObstacle.supSecondeTop, 00, this.spriteLink[7][this.defaut], (linkEtat.touche.right && linkEtat.touche.top) );
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
          this.spriteSelection( linkEtat.timeObstacle.supSecondeBottom, 0, this.spriteLink[7][this.defaut], (linkEtat.touche.bottom && linkEtat.touche.right) );
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
        if(linkEtat.touche.left && !linkEtat.touche.right && !linkEtat.touche.top && linkEtat.touche.bottom ){
          this.spriteSelection( linkEtat.timeObstacle.supSecondeBottom, 0, this.spriteLink[7][this.defaut], (linkEtat.touche.left && linkEtat.touche.bottom) );
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
      if ( background.collisionListe[background.stage][linkEtat.collision.position].exitWay.boul ){
        background.nextstage(background.collisionListe[background.stage][linkEtat.collision.position].exitWay.stage);
      }
    }
    if ( linkEtat.touche.keyAPlusObjet && linkEtat.touche.keyA && this.lastPosition < 0 ){//lancer objet
      this.directionObjet = linkEtat.touche.direction;//enregistre le sens du lancé
      this.collisionObjet = true;
      this.distanceObjectTop = parseFloat(background.item.top);//positionne le sprite de l'objet
      this.distanceObjectLeft = parseFloat(background.item.left);//positionne le sprite de l'objet
      this.requestID = window.requestAnimationFrame(function(timestamp){linkAction.launch(timestamp)});//lance l'objet
      linkEtat.touche.keyAPlusObjet = false;//passe l'objet soulevé à false
      this.defaut = 3;//position par defaut une foix l'objet lancé
      if ( linkEtat.item.shield ){//vérifi si le bouclier a été trouvé
        this.walk = 1;//sprite du bouclier
      } else {
        this.walk = 0;//sprite sans bouclier
      }
      linkEtat.actionOff.sprite = this.spriteLink[7][linkEtat.spritePosition.direction][this.walk][3]
    } else {
      if ( linkEtat.touche.keyA && !linkEtat.touche.left && !linkEtat.touche.right && !linkEtat.touche.top && !linkEtat.touche.bottom && !linkEtat.collision.collisionBooleen ){
        this.temps = 200;
        if (background.collisionListe[background.stage][linkEtat.collision.position].actionObjet.lift){//vérifie si on est devant un objet soulevable
          linkEtat.spritePosition.position = 0;
          this.lastPosition = this.spriteLink[7][linkEtat.spritePosition.direction][2].length;
          this.liftObject = this.spriteLink[4][background.collisionListe[background.stage][linkEtat.collision.position].actionObjet.indice];//enregistre l'objet soulevé
          background.affiche(this.liftObject, background.item);//objet soulevé
          background.div[background.collisionListe[background.stage][linkEtat.collision.position].id].style['z-index'] = 1;//monte l'image pour modifier le décor
          linkEtat.collision.collisionBooleen = true;//annule la colision
          background.save = background.collisionListe[background.stage].splice(linkEtat.collision.position, 1); //supression de l'objet
          this.walk = 5;//marche avec objet
          this.defaut = 0;//position par defaut
          linkEtat.touche.keyAPlusObjet = true;
        }
      }
      if( ( (linkEtat.touche.keyA && !linkEtat.touche.left && !linkEtat.touche.right && !linkEtat.touche.top && !linkEtat.touche.bottom) || linkEtat.touche.keyAPlusObstacle) && !linkEtat.collision.collisionBooleen ){
        if(!linkEtat.touche.left && !linkEtat.touche.right && !linkEtat.touche.top && !linkEtat.touche.bottom){ //sans direction
          linkEtat.spritePosition.position = 0;
        }
        linkEtat.touche.keyAPlusObstacle = true;
        switch(linkEtat.touche.direction){
          case 'E':
          this.spriteSelection( linkEtat.timeObstacle.supSecondeBottom, 2, this.spriteLink[7][this.defaut], linkEtat.touche.left );
          break;
          case 'W':
          this.spriteSelection( linkEtat.timeObstacle.supSecondeBottom, 2, this.spriteLink[7][this.defaut], linkEtat.touche.right );
          break;
          case 'S':
          this.spriteSelection( linkEtat.timeObstacle.supSecondeBottom, 2, this.spriteLink[7][this.defaut], linkEtat.touche.top );
          break;
          case 'N':
          if (background.collisionListe[background.stage][linkEtat.collision.position].actionObjet.chest){//vérifie si on est devant un coffre
            background.div[background.collisionListe[background.stage][linkEtat.collision.position].id].style['z-index'] = 1;//monte l'image pour modifier le décor
            this.temps = 2000;//passe le temps à 2s quand un objet est trouvé
            background.collisionListe[background.stage][linkEtat.collision.position].actionObjet.chest = false;//modifi l'état du coffre
            background.collisionListe[background.stage][linkEtat.collision.position].chestContent();
            background.affiche(background.itemPosition[background.collisionListe[background.stage][linkEtat.collision.position].item], background.skill);
            linkEtat.actionOff.sprite = this.spriteLink[7][0];//position de link quand il trouve un objet
          } else {//sur un obstacle
            this.spriteSelection( linkEtat.timeObstacle.supSecondeBottom, 2, this.spriteLink[7][this.defaut], linkEtat.touche.bottom );
          }
          break;
        }
      } else {
        if( this.lastPosition == -1 ){
          this.temps = 40;
        }
      }
    }
    if(!linkEtat.touche.left && !linkEtat.touche.right && !linkEtat.touche.top && !linkEtat.touche.bottom && !linkEtat.touche.keyA){//si aucune touche n'est appuyé l'action passe à false'
      linkEtat.spriteMouvement = false;
    }
  },
  startObjet : null,
  collisionObjet : false, //booleen qui enregistre la collision
  objetPosition : 0, //indice de l'animation des objet détruit
  launch : function(timestamp){
    var progress;
    var distanceParcouru = 0;
    var sens; // positif ou négatif
    var axies; // x ou y
    if (!this.startObjet) this.startObjet = timestamp;
    progress = timestamp - this.startObjet;
    if ( progress > 20 ){
      switch (this.directionObjet) {//met la direction du sprite corespondant
        case 'S':
          sens = true;
          axies = 'top';
          distanceParcouru = this.distanceObjectTop - parseFloat(background.item.top);
          break;
        case 'N':
          sens = false;
          axies = 'top';
          distanceParcouru = parseFloat(background.item.top) - this.distanceObjectTop;
          break;
        case 'E':
          sens = true;
          axies = 'left';
          distanceParcouru = this.distanceObjectLeft - parseFloat(background.item.left);
          break;
        case 'W':
          sens = false;
          axies = 'left';
          distanceParcouru = parseFloat(background.item.left) - this.distanceObjectLeft;
          break;
      }
      this.moving( axies, sens, background.item, this.directionObjet, false, this.collisionObjet );
    }
    if( this.collisionObjet && distanceParcouru < 60 ){
      this.requestID = window.requestAnimationFrame(function(timestamp){linkAction.launch(timestamp)});
    } else {
      if ( this.spriteLink[this.liftObject.actionObjet.indice][this.objetPosition] ){
        background.affiche(this.spriteLink[this.liftObject.actionObjet.indice][this.objetPosition], background.item);
        console.log(background.item['z-index']);
        this.objetPosition++;
        this.requestID = window.requestAnimationFrame(function(timestamp){linkAction.launch(timestamp)});
      } else {
        this.objetPosition = 0;
        background.item['z-index'] = -1;
        background.item[axies] = '0px';
        window.cancelAnimationFrame(this.requestID);
      }
    }
  },
  start : null,
  temps : 40,
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
    if( progressLeft > 1000 && progressLeft != timestamp ){//au bout d'une seconde le test deviens true
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
    if ( !linkEtat.timeObstacle.actionObjet ){
      if (progress > this.temps){
        if( this.temps == 2000 ){//vérifi si le temps est à 2s
          this.temps = 40;//repasse le temps à 40
          linkEtat.actionOff.sprite = this.spriteLink[7][3];
        }
        this.start = timestamp;
        if ( linkEtat.touche.keyAPlusObjet ){
          background.centreObjet();//centre l'objet transporté par link
        }
        if ( this.lastPosition > linkEtat.spritePosition.position && linkEtat.touche.keyAPlusObjet ){
          background.item['z-index'] = 2;
          this.spriteSelection( linkEtat.timeObstacle.supSecondeBottom, 2, this.spriteLink[7][0], linkEtat.touche.keyAPlusObjet );
          if (this.lastPosition == linkEtat.spritePosition.position){
            background.item['z-index'] = 3;
          }
        } else {
          this.lastPosition = -1;//réinitialise la position à -1
          this.testDirection();
          if(!linkEtat.spriteMouvement){//si aucune action n'est en cour
            this.spriteDefaut(linkEtat.actionOff.sprite);
          }
        }
      }
    } else {
      this.spriteDefaut(linkEtat.actionOff.sprite);
    }
    window.requestAnimationFrame(function(timestamp){linkAction.mouvement(timestamp)});
  },
  spriteDefaut : function(defautSprite){//affiche le sprite à la position donné
    switch (linkEtat.touche.direction) {
      case 'E':
        this.persoShow.left = ( parseFloat(this.divPersonnage.width) + 1 - defautSprite.tailleX ) + 'px'; //centre la div
        this.persoShow.top = ( parseFloat(this.divPersonnage.height) - defautSprite.tailleY ) + 'px'; //décale la div vers le haut
        break;
      case 'S':
        this.persoShow.left = (( parseFloat(this.divPersonnage.width) - defautSprite.tailleX ) / 2) + 'px'; //centre la div
        this.persoShow.top = ( parseFloat(this.divPersonnage.height) - defautSprite.tailleY ) + 'px'; //décale la div vers le haut
        break;
      case 'N':
        this.persoShow.left = (( parseFloat(this.divPersonnage.width) - defautSprite.tailleX ) / 2) + 'px';
        this.persoShow.top = '-7px'; //décale la div vers le haut
        break;
      case 'W':
        this.persoShow.left = '-1px';
        this.persoShow.top = '-7px'; //décale la div vers le haut
        break;

    }
      this.persoShow.width = defautSprite.tailleX + 'px';//largeur de l'image visible
      this.persoShow.height = defautSprite.tailleY + 'px';//hauteur de l'image visible
      this.linkSprite.style.top = defautSprite.positionY + 'px';//position de l'image en y
      this.linkSprite.style.left = -Math.abs(defautSprite.positionX - linkEtat.tailleSprite) + 'px';//position de l'image en x
  }
};
