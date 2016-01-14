"use strict";

class FoodView {
	constructor(food) {
		this.food = food;

		this.domElement = document.getElementById('food');
	}

	render() {
		this.domElement.style.left = this.food.position.x * this.food.game.board.sizeCase + 'px';
		this.domElement.style.top = this.food.position.y * this.food.game.board.sizeCase + 'px';
	}
}
export default FoodView;