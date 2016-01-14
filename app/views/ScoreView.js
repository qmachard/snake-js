/**
 * Created by quentinmachard on 14/01/2016.
 */
"use strict";

class ScoreView {
	constructor(score) {
		this.score = score;

		this.domElement = document.getElementById('score');
		this.domElementTable = document.getElementById('tableScore');
	}

	render() {
		this.domElement.innerHTML = this.score.score;
	}

	renderTable() {
		this.domElementTable.querySelector('.txt-score').innerHTML = this.score.score;
		this.domElementTable.querySelector('.txt-highscore').innerHTML = this.score.getHighScore();
	}
}
export default ScoreView;