$(document).ready(function () {
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
});