/**
 * Created by quentinmachard on 14/01/2016.
 */
"use strict";
class Food {
	constructor(game) {
		this.game = game;
		this.position = {x: 0, y: 0};
	}

	changePosition() {
		this.position = this.game.board.getRandomPosition();
	}
}
export default Food;