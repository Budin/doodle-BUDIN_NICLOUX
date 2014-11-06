--------------------------------------
	Pr�sentation du projet
--------------------------------------

Le projet est une application WEB avec les fonctionnalit�s qui reprend le m�me principe de base que doodle (http://doodle.com/ pour plus d'informations) pour la planification de t�ches ou de r�unions.
N�anmoins, il d�passe cette simple perspective. Il permet de r�aliser des sondages en proposant aux utilisateurs des choix possibles.
Ces enqu�tes sont accessibles au moyen d'un lien qui sera g�n�r� une fois le questionnnaire cr�e.
Il suffira de partager ce lien avec les personnes souhait�es pour qu'elles puissent y r�pondre. 
� chaque r�ponse, des statistiques sont �tablies ou recalcul�es. Ces donn�es sont repr�sent�es sous forme de graphiques convertis eux-m�mes sous forme d'image au format png.
Tout ceci dans l'optique de pouvoir �tre r�cup�r� et r�utilis� plus facilement par l'utilisateur s'il le d�sire.



-------------------------------------
	   Choix du projet
-------------------------------------

Au cours de ce projet plusieurs 6 grands choix ont �t� faits :

I) Utilisation de node.js
Nous avons choisi d'utiliser node.js pour 3 raisons :
1) L'utilisation du php est fortement d�conseill�e c'�tait notre choix de d�part.
2) Node.js permet d'effectuer des op�rations c�t� serveur avec du javascript et nous connaissions d�j� ce langage.
3) Node.js est un outil r�cent et tr�s puissant de plus en plus populaire et nous avions envie de l'essayer avant de commencer ce projet.

II) Choix du sujet
Au d�part nous ne savions pas quel sujet choisir. L'id�e nous est venue � l'issue d'une planification doodle pour une r�union.

III) Choix des modules
Tous les modules utilis�s dans ce projet ont �t� choisis pour des raisons de popularit� ou de simplicit� d'utilisation.

IV) Utilisation d�tourn�e du graphe en se servant d'une image au lieu d'un objet
Nous avons choisi cette m�thode pour pouvoir faciliter la t�che aux utilisateurs pour conserver ou pour r�cup�rer les r�sultats des sondages s'ils le d�sirent.

V) Base de donn�es enregistr�e dans un fichier JSON
Nous avons d�cid� d'enregistrer les donn�es dans un fichier JSON pour des raisons de simplicit� d'impl�mentation et de consultation
En effet, le format JSON est nativement reconnu par le langage javascript qui poss�de un parser d�j� impl�ment� donc pas besoin d'en importer un.
Ensuite, La base de donn�e peut �tre consult�e facilement en un coup d'oeil en observant ce fichier il est donc plus ais� de v�rifier ce que l'on a fait.
Pour finir, c'est un moyen simple d'acc�s pour les d�butants si ce projet venait � �tre r�utilis� par d'autres personnes qui le r�cup�reront depuis gitHub.

VI) Redirection vers la page principale en cas de page non existante ou de probl�me
Pour avoir acc�s en quelques clics � la page souhait�e plus rapidement est la premi�re id�e que nous avons eu.
Cependant, c'est un choix fait arbitrairement. D'autres solutions auraient pu �tre envisag�es mais par manque de temps nous n'avons pas pu r�fl�chir davantage � la question.

-------------------------------------
	   Fonctionnalit�s
-------------------------------------

Les fonctionnalit�s suivantes ont �t� d�velopp�es :
_ Cr�ation de sondage.
_ Gestion d'une base de donn�e (fichier au format JSON : data.js).
_ G�n�ration d'identifiant pour chaque sondage.
_ Enregistrement du contenu de chaque sondage.
_ G�n�ration de liens pour r�pondre au sondage.
_ G�n�ration des r�sultats sous forme de graphiques.
_ Conversion des graphiques sous forme d'images au format png et directement int�gr�s dans la page internet la rendant t�l�chargeable et r�utilisable facilement.
