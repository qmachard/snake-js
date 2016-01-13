/**
 * Created by quentinmachard on 13/01/2016.
 */
var conf = {
	sizeCase: 20,
	speed: 50
};

function Tray () {
	var el = {};
	var game = document.getElementById('game');
	el.width = game.offsetWidth;
	el.height = game.offsetHeight;

	el.snackPosition = {x:0, y:0};

	window.addEventListener('resize', function() {
		el.width = game.offsetWidth;
		el.height = game.offsetHeight;
	}, false);

	var snack = document.getElementById('snack');

	el.updateSnack = function() {
		el.snackPosition = {
			x: Math.round(Math.random() * (el.width / conf.sizeCase  - 1)),
			y: Math.round(Math.random() * (el.height / conf.sizeCase  - 1))
		};

		snack.style.left = el.snackPosition.x * conf.sizeCase + 'px';
		snack.style.top = el.snackPosition.y * conf.sizeCase + 'px';
	};

	el.init = function() {
		el.updateSnack();
	};

	return el;
}

function Snake () {
	var el = {};

	el.position = { x: 5, y: 5 };
	el.direction = { x: 1, y: 0};

	var snake = document.getElementById('snake');
	el.elements = [];

	el.addCase = function() {
		var element = document.createElement('span');
		element.className = 'snake_element';

		element.style.left = '-'+conf.sizeCase+'px';
		element.style.top = '-'+conf.sizeCase+'px';
		element.position = { x: -1, y: -1};

		snake.appendChild(element);
		el.elements.push(element);
	};

	el.moveUp = function() {
		el.direction = {x: 0, y: -1};
	};

	el.moveDown = function() {
		el.direction = {x: 0, y: 1};
	};

	el.moveLeft = function() {
		el.direction = {x: -1, y: 0}
	};

	el.moveRight = function() {
		el.direction = {x: 1, y: 0}
	};

	el.move = function() {
		el.position.x += el.direction.x;
		el.position.y += el.direction.y;

		var element = el.elements.pop();
		element.style.left = el.position.x * conf.sizeCase + 'px';
		element.style.top = el.position.y * conf.sizeCase + 'px';
		element.position = {x: el.position.x, y:el.position.y};
		el.elements.unshift(element);
	};

	el.init = function() {
		snake.innerHTML = "";
		el.position = { x: 0, y: 0 };
		el.direction = { x: 1, y: 0 };
		el.elements = [];
		el.addCase();
	};

	return el;
}

function Score() {
	var el = {};
	var score = 0;
	var element = document.getElementById('score');

	el.increment = function() {
		element.innerHTML = "" + ++score;
	};

	el.reset = function() {
		element.innerHTML = "" + 0;
	};

	return el;
}

function Game() {
	var snake = Snake();
	var tray = Tray();
	var score = Score();

	var interval = null;

	var start = function() {
		document.getElementById('splash').style.display = 'none';

		if(interval == null) {
			snake.init();
			tray.init();
			score.reset();

			interval = setInterval(frame, conf.speed);
		}
	};

	var gameOver = function() {
		clearInterval(interval);
		interval = null;
		document.getElementById('splash').style.display = 'table';
	};

	var frame = function() {
		snake.move();

		// Détecter les bords du jeu
		if(snake.position.x < 0 || snake.position.x > tray.width / conf.sizeCase - 1 || snake.position.y < 0 || snake.position.y > tray.height / conf.sizeCase - 1) {
			gameOver();
		}

		// Manger l'aliment
		if(snake.position.x == tray.snackPosition.x && snake.position.y == tray.snackPosition.y) {
			snake.addCase();
			tray.updateSnack();
			score.increment();
		}

		// Collision
		for(var i=1, element; element=snake.elements[i]; i++) {
			if (snake.position.x == element.position.x && snake.position.y == element.position.y) {
				gameOver();
			}
		}
	};

	document.addEventListener('keydown', function(e) {
		if(e.keyCode >= 32 && e.keyCode <= 40) {
			e.preventDefault();

			switch(e.keyCode) {
				case 32:
					start();
					break;
				case 37: // Gauche
					snake.moveLeft();
					break;
				case 38: // Haut
					snake.moveUp();
					break;
				case 39: // Droite
					snake.moveRight();
					break;
				case 40: // Bas
					snake.moveDown();
					break;
			}
		}
	}, false);

	document.getElementById('btnStart').addEventListener('click', start, false);
}
Game();