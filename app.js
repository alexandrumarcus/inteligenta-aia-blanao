$(document).ready(function() {
  var lines = [];
	var H = 0;
	var val_maxima = 0;

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

        var vector_of_perc = [];

        for (var i = 0; i < v2.length; i++) {
          vector_of_perc.push({
            perc: (v2.data[i].getPrice() / v2.data[i].getSize()),
            position: i,
            weight: v2.data[i].getSize(),
            price: v2.data[i].getPrice()
          });
        }

        sortByKey(vector_of_perc, "perc");
				var H2 = 0,
					i = 0;
				console.log(vector_of_perc);
				
				for (var i = 0; i < vector_of_perc.length && (H2 + parseInt(vector_of_perc[i].weight) <= H); i++) {
					H2 = H2 + parseInt(vector_of_perc[i].weight);
					val_maxima += parseInt(vector_of_perc[i].price);
					console.log(H2);
				}
				
				
      };
      reader.readAsText(this.files[0]);
    });

  function sortByKey(array, key) {
    return array.sort(function(a, b) {
      var x = a[key];
      var y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });
	}
	
});
