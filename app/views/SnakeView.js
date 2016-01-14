"use strict";

class SnakeView {
	constructor(snake) {
		this.snake = snake;

		this.domElement = document.getElementById('snake');
	}

	render() {
		for (var i=0, element; element = this.snake.elements[i]; i++) {
			element.view.render();
		}
	}
}
export default SnakeView;