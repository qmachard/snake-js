"use strict";

class BoardView {
	constructor(board) {
		this.board = board;
		this.element = document.getElementById('board');

		var self = this;
		window.addEventListener('resize', function() {
			self.resize();
		}, false);
		this.resize();
	}

	resize() {
		this.board.width = this.element.offsetWidth;
		this.board.height = this.element.offsetHeight;
	}
}
export default BoardView;