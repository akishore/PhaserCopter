var innerWidth = window.innerWidth;
var innerHeight = window.innerHeight;
var gameRatio = innerWidth/innerHeight;	
var game = new Phaser.Game(Math.ceil(480*gameRatio), 480, Phaser.AUTO);
	
var main = function(game){}
	main.prototype = {
		preload: function() { 
			game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			game.scale.setScreenSize(true);
			game.load.image("company", "company.png");
			game.load.image("splash", "splash.png");
		
		},
		create: function() { 
		company = game.add.sprite(innerWidth/1.1, 240, 'company');
		company.width = company.width/2;
		company.anchor.set(0.5,0.5);
		
		timer = game.time.events.loop(2000, splashPage, this);
		
		},
		update: function() {
			
		}
	}
	
game.state.add("Main",main);
game.state.start("Main");

function splashPage(){

			
	company.alpha = 0;
	splash1 = game.add.sprite(0, 0, 'splash');
	splash1.width = game.width;
	splash1.height = game.height;
	game.input.onDown.add(startMenuPage, this);
	setTimeout(function(){
		startMenuPage()
	},5000);
}

function startMenuPage(){
	game.state.add("Home",home);
	game.state.start("Home");
}
 