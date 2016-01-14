"use strict";

class Score {
	constructor(game) {
		this.game = game;

		this.score = 0;
	}

	increment() {
		this.score++;
	}

	reset() {
		this.score = 0;
	}

	saveHighScore() {
		if(typeof(Storage) != undefined) {
			var currentHighScore = localStorage.getItem("highScore");

			if(currentHighScore == null || this.score > currentHighScore) {
				localStorage.setItem("highScore", this.score);
			}
		}
	}

	getHighScore() {
		if(typeof(Storage) != undefined) {
			var currentHighScore = localStorage.getItem("highScore");

			if(currentHighScore != null) {
				return currentHighScore;
			} else {
				return 0;
			}
		}
		return null;
	}


}