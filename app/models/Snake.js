"use strict";

import SnakeElement from './SnakeElement.js'

class Snake {
	constructor(game) {
		this.game = game;
		this.position = { x: 0, y: 0 };
		this.direction = { x: 1, y: 0};
		this.elements = [];

		this.addElement();
	}

	/**
	 * Set mouvement up
	 */
	moveUp() {
		this.direction = {x: 0, y: -1};
	}

	/**
	 * Set mouvement down
	 */
	moveDown() {
		this.direction = {x: 0, y: 1};
	}

	/**
	 * Set mouvement left
	 */
	moveLeft() {
		this.direction = {x: -1, y: 0}
	}

	/**
	 * Set mouvement right
	 */
	moveRight() {
		this.direction = {x: 1, y: 0}
	}

	/**
	 * Move the snake
	 */
	move() {
		this.position.x += this.direction.x;
		this.position.y += this.direction.y;

		var element = this.elements.pop();
		element.position = {x: this.position.x, y: this.position.y};
		this.elements.unshift(element);
	}

	/**
	 * Add new element to the snake
	 */
	addElement() {
		this.elements.push(new SnakeElement());
	}
}
export default Snake;