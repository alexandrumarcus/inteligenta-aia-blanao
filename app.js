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
	var N = parseInt(lines);
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
			var items = [];
			for (var obj of v.getAll()) {
				items.push({
					"v": obj.getPrice(),
					"w": obj.getSize()
				})
			}
			solve(parseInt(lines), parseInt(lines),v)
		};
		reader.readAsText(this.files[0]);
	});

	function solve(He, Wi, matrice) {
		for(var obj of matrice.getAll()){
			console.log(obj.getPrice());
			
		}
		var matrix = [],
			H = He,
			W = Wi;

		for (var x = 0; x < H; x++) {
			matrix[x] = [];
			for (var y = 0; y < W; y++) {
				matrix[x][y] = 1;
				matrix[x][0] = 0;
				matrix[0][y] = 0;
			}
		}

		console.log(matrix.join('\n'));
	}


});