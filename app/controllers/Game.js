"use strict";

import Snake from "../models/Snake.js";
import Board from "../models/Board.js";
import Food from "../models/Food.js";

class Game {
	constructor() {
		this.board = new Board(20, this);
		this.snake = new Snake(this);
		this.food = new Food(this);
		this.frames = null;

		this.speed = 100;
	}

	init() {
		this.start();
		this.controls();

		this.food.changePosition();
	}

	frame() {
		this.snake.move();

		// Détecter les bords du jeu
		if(this.snake.position.x < 0 || this.snake.position.x > this.board.width / this.board.sizeCase - 1 || this.snake.position.y < 0 || this.snake.position.y > this.board.height / this.board.sizeCase - 1) {
			this.gameOver();
		}

		// Manger l'aliment
		if(this.snake.position.x == this.food.position.x && this.snake.position.y == this.food.position.y) {
			this.snake.addElement();
			this.food.changePosition();
			//score.increment();
		}

		// Collisions
		for(var i=1, element; element = this.snake.elements[i]; i++) {
			if (this.snake.position.x == element.position.x && this.snake.position.y == element.position.y) {
				gameOver();
			}
		}
	}

	start() {
		var self = this;
		if(this.frames == null) {
			console.log('Start!');
			this.frames = setInterval(function() { self.frame() }, this.speed);
		}
	}

	gameOver() {
		console.log('Game Over !');
		clearInterval(this.frames);
	}

	controls() {
		var self = this;
		document.addEventListener('keydown', function(e) {
			if(e.keyCode >= 32 && e.keyCode <= 40) {
				e.preventDefault();

				switch(e.keyCode) {
					case 32:
						self.start();
						break;
					case 37: // Gauche
						self.snake.moveLeft();
						break;
					case 38: // Haut
						self.snake.moveUp();
						break;
					case 39: // Droite
						self.snake.moveRight();
						break;
					case 40: // Bas
						self.snake.moveDown();
						break;
				}
			}
		}, false);
	}
}
export default Game;