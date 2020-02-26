$(document).ready(function () {
	class Item {
		constructor(price, size) {
			this.price = price;
			this.size = size;
		}

		getSize() {
			return this.size;
		}
		getPrice() {
			return this.price;
		}
	}

	class Vector {
		constructor() {
			this.array = [];
		}

		addItem(obj) {
			this.array.push(obj);
		}

		getAll() {
			return this.array;
		}
	}
	var lines = [];
	var N = parseInt(lines);
	var v = new Vector();
	var H = 0;
});