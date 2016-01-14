/**
 * Created by quentinmachard on 14/01/2016.
 */
"use strict";

import FoodView from "../views/FoodView.js";

class Food {
	constructor(game) {
		this.game = game;
		this.position = {x: 0, y: 0};

		this.view = new FoodView(this);
	}

	changePosition() {
		this.position = this.game.board.getRandomPosition();
	}
}
export default Food;