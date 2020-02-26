$(document).ready(function () {
	var lines = [];
	var H = 0;

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
			this.length = 0;
			this.data = {};
		}

		push(element) {
			this.data[this.length] = element;
			this.length++;
			return this.data;
		}

		pop() {
			let item = this.data[this.length - 1];
			delete this.data[this.length - 1];
			this.length--;
			return this.data;
		}
	}

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
			var v2 = new Vector();

			for (var i = 1; i <= lines; i++) {
				let string = split[i].split(/\s+/);
				let item = new Item(string[2], string[3]);
				v2.push(item);
			}

			H = split[parseInt(lines) + 1];

			var vectOfSizes = [];

			for (var i = 0; i < v2.length; i++) {
				vectOfSizes[i] = v2.data[i].getSize();
			}

			let randvect = randomVector(v2.length);
			while(solutie(randvect, H, vectOfSizes) === 0){
				randvect = randomVector(v2.length);
			}
			console.log(randvect);
			
		}

		reader.readAsText(this.files[0]);
	});


	function solutie(vector, maxim, vector2) {
		var minim = 0;
		for (var i = 0; i < vector.length; i++) {
			if (vector[i] == 1) {
				minim += parseInt(vector2[i]);
			}
		}

		if (minim <= maxim) {
			return minim;
		}

		else {
			if(minim > maxim) {
				return 0;
			}
		}
	}

	function randomVector(n) {
		var vector = [];
		for (var i = 0; i < n; i++) {
			vector[i] = Math.round(Math.random());
		}

		return vector;
	}



});
