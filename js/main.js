/**
 * Created by quentinmachard on 13/01/2016.
 */
function Tray () {
	var el = {};
	el.width = 400;
	el.height = 400;
	el.sizeCase = 10;

	el.snackPosition = {x:0, y:0};

	var snack = document.getElementById('snack');

	var getRandomPosition = function() {
		return Math.round(Math.random() * (el.width / el.sizeCase  - 1));
	};

	el.updateSnack = function() {
		el.snackPosition = {x: getRandomPosition(), y: getRandomPosition()};

		snack.style.left = el.snackPosition.x * el.sizeCase + 'px';
		snack.style.top = el.snackPosition.y * el.sizeCase + 'px';
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

		element.style.left = '-10px';
		element.style.top = '-10px';
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
		element.style.left = el.position.x * 10 + 'px';
		element.style.top = el.position.y * 10 + 'px';
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

function Game() {
	var snake = Snake();
	var tray = Tray();

	var interval = null;

	var start = function() {
		if(interval == null) {
			snake.init();
			tray.init();

			interval = setInterval(frame, 70);
		}
	};

	var gameOver = function() {
		clearInterval(interval);
		interval = null;
		alert('Perdu !');
	};

	var frame = function() {
		snake.move();

		// Détecter les bords du jeu
		if(snake.position.x < 0 || snake.position.x > tray.width / tray.sizeCase - 1 || snake.position.y < 0 || snake.position.y > tray.height / tray.sizeCase - 1) {
			gameOver();
		}

		// Manger l'aliment
		if(snake.position.x == tray.snackPosition.x && snake.position.y == tray.snackPosition.y) {
			snake.addCase();
			tray.updateSnack();
		}

		// Collision
		for(var i=1, element; element=snake.elements[i]; i++) {
			if (snake.position.x == element.position.x && snake.position.y == element.position.y) {
				gameOver();
			}
		}
	};

	document.addEventListener('keydown', function(e) {
		switch(e.keyCode) {
			case 38: // Haut
				snake.moveUp();
				break;
			case 40: // Bas
				snake.moveDown();
				break;
			case 37: // Gauche
				snake.moveLeft();
				break;
			case 39: // Droite
				snake.moveRight();
				break;
		}
	}, false);

	document.getElementById('game').addEventListener('click', start, false);
}
Game();