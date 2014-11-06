--------------------------------------
	Présentation du projet
--------------------------------------

Le projet est une application WEB avec les fonctionnalités qui reprend le même principe de base que doodle (http://doodle.com/ pour plus d'informations) pour la planification de tâches ou de réunions.
Néanmoins, il dépasse cette simple perspective. Il permet de réaliser des sondages en proposant aux utilisateurs des choix possibles.
Ces enquêtes sont accessibles au moyen d'un lien qui sera généré une fois le questionnnaire crée.
Il suffira de partager ce lien avec les personnes souhaitées pour qu'elles puissent y répondre. 
À chaque réponse, des statistiques sont établies ou recalculées. Ces données sont représentées sous forme de graphiques convertis eux-mêmes sous forme d'image au format png.
Tout ceci dans l'optique de pouvoir être récupéré et réutilisé plus facilement par l'utilisateur s'il le désire.



-------------------------------------
	   Choix du projet
-------------------------------------

Au cours de ce projet plusieurs 6 grands choix ont été faits :

I) Utilisation de node.js
Nous avons choisi d'utiliser node.js pour 3 raisons :
1) L'utilisation du php est fortement déconseillée c'était notre choix de départ.
2) Node.js permet d'effectuer des opérations côté serveur avec du javascript et nous connaissions déjà ce langage.
3) Node.js est un outil récent et très puissant de plus en plus populaire et nous avions envie de l'essayer avant de commencer ce projet.

II) Choix du sujet
Au départ nous ne savions pas quel sujet choisir. L'idée nous est venue à l'issue d'une planification doodle pour une réunion.

III) Choix des modules
Tous les modules utilisés dans ce projet ont été choisis pour des raisons de popularité ou de simplicité d'utilisation.

IV) Utilisation détournée du graphe en se servant d'une image au lieu d'un objet
Nous avons choisi cette méthode pour pouvoir faciliter la tâche aux utilisateurs pour conserver ou pour récupérer les résultats des sondages s'ils le désirent.

V) Base de données enregistrée dans un fichier JSON
Nous avons décidé d'enregistrer les données dans un fichier JSON pour des raisons de simplicité d'implémentation et de consultation
En effet, le format JSON est nativement reconnu par le langage javascript qui possède un parser déjà implémenté donc pas besoin d'en importer un.
Ensuite, La base de donnée peut être consultée facilement en un coup d'oeil en observant ce fichier il est donc plus aisé de vérifier ce que l'on a fait.
Pour finir, c'est un moyen simple d'accès pour les débutants si ce projet venait à être réutilisé par d'autres personnes qui le récupèreront depuis gitHub.

VI) Redirection vers la page principale en cas de page non existante ou de problème
Pour avoir accès en quelques clics à la page souhaitée plus rapidement est la première idée que nous avons eu.
Cependant, c'est un choix fait arbitrairement. D'autres solutions auraient pu être envisagées mais par manque de temps nous n'avons pas pu réfléchir davantage à la question.

-------------------------------------
	   Fonctionnalités
-------------------------------------

Les fonctionnalités suivantes ont été développées :
_ Création de sondage.
_ Gestion d'une base de donnée (fichier au format JSON : data.js).
_ Génération d'identifiant pour chaque sondage.
_ Enregistrement du contenu de chaque sondage.
_ Génération de liens pour répondre au sondage.
_ Génération des résultats sous forme de graphiques.
_ Conversion des graphiques sous forme d'images au format png et directement intégrés dans la page internet la rendant téléchargeable et réutilisable facilement.
