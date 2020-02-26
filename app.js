$(document).ready(function () {
	//
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
	var v = new Vector();
	var H = 0;


	document.getElementById("fileInput").addEventListener("change", function selectedFileChanged() {
		if (this.files.length === 0) {
			console.log("No file selected.");
			return;
		}

		const reader = new FileReader();
		reader.onload = function fileReadCompleted() {
			var text = reader.result;
			lines = text.split(/\s+/).shift();
			var split = text.split("\n");

			for (var i = 1; i <= lines; i++) {
				let string = split[i].split(/\s+/);
				let item = new Item(string[2], string[3]);
				v.addItem(item);
			}

			H = split[parseInt(lines) + 1];
			var items_val = [], items_w = [];
			for (var obj of v.getAll()) {
				items_val.push(obj.getPrice());
				items_w.push(obj.getSize());
			}

			console.log(knapsnack(H, items_val, items_w, parseInt(lines)));


		};
		reader.readAsText(this.files[0]);
	});

	function getMax(x, y) {
		if (x > y) {
			return x;
		}
		return y;
	}

	function knapsnack(Size, Price, Weight, N) {
		if (N == 0 || Size == 0) return 0;
		if (Weight[N - 1] > Size)
			return knapsnack(Size, Price, Weight, N - 1);
		else
			return getMax(Price[N - 1] + knapsnack(Size - Weight[N - 1], Price, Weight, N - 1), knapsnack(Size, Price, Weight, N - 1));
	}

});