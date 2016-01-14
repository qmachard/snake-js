"use strict";

import SnakeElementView from '../views/SnakeElementView.js'

class SnakeElement {
	constructor(snake) {
		this.snake = snake;
		this.position = {x: 0, y: 0};

		this.view = new SnakeElementView(this);
	}
}
export default SnakeElement;