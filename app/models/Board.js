/**
 * Created by quentinmachard on 14/01/2016.
 */
"use strict";

import BoardView from "../views/BoardView.js";

class Board {
	constructor(sizeCase, game) {
		this.game = game;

		this.width = 400;
		this.height = 400;
		this.sizeCase = sizeCase;

		this.view = new BoardView(this);
	}

	getRandomPosition() {
		return {
			x: Math.round(Math.random() * (this.width / this.sizeCase  - 1)),
			y: Math.round(Math.random() * (this.height / this.sizeCase  - 1))
		}
	}
}
export default Board;