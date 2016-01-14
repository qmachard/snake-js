"use strict";

class SnakeElementView {
	constructor(snakeElement) {
		this.snakeElement = snakeElement;

		this.domElement = this.create();
	}

	create() {
		var element = document.createElement('span');
		element.className = 'snake_element';

		element.style.left = '-'+this.snakeElement.snake.game.board.sizeCase+'px';
		element.style.top = '-'+this.snakeElement.snake.game.board.sizeCase+'px';
		element.position = { x: -1, y: -1};

		this.snakeElement.snake.view.domElement.appendChild(element);
		return element;
	}

	render() {
		this.domElement.style.left = this.snakeElement.position.x * this.snakeElement.snake.game.board.sizeCase + 'px';
		this.domElement.style.top = this.snakeElement.position.y * this.snakeElement.snake.game.board.sizeCase + 'px';
	}
}
export default SnakeElementView;