var express = require('express'),
	fs = require("fs"),
	Canvas = require('canvas'),
  	canvas = new Canvas(200, 200),
 	ctx = canvas.getContext('2d'),
  	Chart = require('nchart'),
	hortId = require('shortid'),
	app = express(),
	content;

// chemin pour les fichiers statics
app.use("/views/images", express.static(__dirname + '/views/images'));
app.use("/views", express.static(__dirname + '/views'));

console.log("Starting");
//lit le fichier
fs.exists("data/data.js", function(fileok){
  if(fileok)fs.readFile("data/data.js", function(error, data) {
	content = JSON.parse(data);
  });
  else console.log("file not found");
});
console.log("Carry on executing");

/* On utilise les cookies, les sessions et les formulaires */
app.use(express.cookieParser())
.use(express.session({secret: 'doodletopsecret'}))
.use(express.bodyParser())

/* S'il n'y a pas de doodlelist dans la session,
on en crée une vide sous forme d'array avant la suite */
.use(function(req, res, next){
    if (typeof(req.session.doodlelist) == 'undefined') {
        req.session.doodlelist = [];
    }
	if (typeof(req.session.choicelist) == 'undefined') {
        req.session.choicelist = [];
    }
    next();
})

/* On affiche la doodlelist et le formulaire */
.get('/doodle', function(req, res) { 
    res.render('doodle.ejs');
})

/* On affiche la doodlelist et le formulaire */
.get('/doodle/about', function(req, res) { 
    res.render('about.ejs');
})

.get('/doodle/creation', function(req, res) { 
    res.render('creation.ejs');
})

.get('/doodle/aide', function(req, res) { 
    res.render('aide.ejs');
})

/* On ajoute un élément à la doodlelist */
.post('/doodle/ajouter/:question', function(req, res) {
	console.log("test");
	//vérif si existe le typeof bug
	if (req.params.question === '' || typeof(content[req.params.question]) === "undefined") {
		console.log('empty');
		res.redirect('/doodle');
	}
	
	console.log(typeof(req.params.question));
	content[req.params.question].listeNoms = content[req.params.question].listeNoms + req.body.nom + ',';
	console.log(req.body.nom);

	//Calculer nb choix
	var taille = [];
	taille = content[req.params.question].listeOptions.split(",");

	for (var i = 0; i < taille.length - 1; i++) {
		if(typeof(req.body['option' + i]) !== 'undefined') {
			content[req.params.question].listeChoix = content[req.params.question].listeChoix + taille[i] + ',';
		}
	}
	content[req.params.question].listeChoix = content[req.params.question].listeChoix + ';';

	fs.writeFile('data/data.js', JSON.stringify(content), function (err) {
		if (err) throw err;
		console.log('It\'s saved!');
	});
    res.redirect('/doodle/questionnaire/' + req.params.question);
})

.get('/doodle/questionnaire/:question', function(req, res) {
	var adresse = __dirname + '/views/images/pie.png',
		color = ["#FFFF00", "#0000FF", "#FF0000", "#00FF00", "#FF6600", "#000000"],
		addresseUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

	if (typeof(content[req.params.question]) !== 'undefined') {
		var tabNoms = content[req.params.question].listeNoms.split(","),
			tabChoix = content[req.params.question].listeChoix.split(";"),
			tabOptions = content[req.params.question].listeOptions.split(",");
	} else {
		console.log("wrong id");
		res.render('doodle.ejs');
	}

	var size = tabOptions.length - 1,
		 tmp = [0, 0, 0, 0, 0, 0];

	for (var i = 0; i < size; i++){
		tmp[i] = content[req.params.question].listeChoix.split(tabOptions[i]).length-1;
	}

	//crée le graph
	var test = Chart(ctx).Pie(
    [
        {
            "value": tmp[0]
          , "color": color[0]
        }
      , {
            "value": tmp[1]
          , "color": color[1]
        }
      , {
            "value": tmp[2]
          , "color": color[2]
        }
      , {
            "value": tmp[3]
          , "color": color[3]
        }
      , {
            "value": tmp[4]
          , "color": color[4]
        }
      , {
            "value": tmp[5]
          , "color": color[5]
        }
    ]
);

canvas.toBuffer(function (err, buf) {
  if (err) throw err;
  fs.writeFile(__dirname + '/views/images/pie.png', buf);
});

	res.render('questionnaire.ejs', {questions: content[req.params.question].question, noms: tabNoms, choix: tabChoix, options: tabOptions, idQuestion: req.params.question, url: addresseUrl, clr: color, votes: tmp});
console.log("available to : " + addresseUrl);

})

.post('/doodle/creation/', function(req, res) {
	var str = "",
		boo = 0,
		ID = shortId.generate();

	for(var i = 1; i < 7; i++) {
		if (req.body["Option" + i] !== '') {
			str = str + req.body["Option" + i] + ',';
			boo = 1;
		}
	}
	
	if(boo === 1) {
		str = ',"' + ID + '": {"listeNoms": "", "listeChoix": "", "question": "' + req.body.question + '", "listeOptions": "' + str + '"}}';
		content = JSON.stringify(content);
		content = content.substring(0, content.length - 1);
	
	fs.writeFile('data/data.js', content + str, function (err) {
		if (err) throw err;
		console.log('It\'s saved!');
	});
		content = JSON.parse(content + str);
		boo = 0;
		res.redirect('/doodle/questionnaire/' + ID);
	} else {
		res.redirect('/doodle');
	}
})

/* On redirige vers la doodlelist si la page demandée n'est pas trouvée */
.use(function(req, res, next){
    res.redirect('/doodle');
})

.listen(8080);
