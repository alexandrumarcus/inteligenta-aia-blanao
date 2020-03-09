class UI {
  nitems = 0;
  constructor() {
    this.items = [];
    this.maxim = -1;
    this.vector = [];
    this.randVector = [];
    this.Weight = [];
    this.Prices = [];
    this.n = null;
  }

  start() {
    //
  }

  getElementsFromFile(input) {
    let items = this.items;
    var lines = 0;
    var Maxim = this.maxim;
    var Weight = this.Weight;
    var Prices = this.Prices;
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function () {
      var text = reader.result;
      lines = text.split(/\s+/).shift();
      var split = text.split("\n");
      
      for (var i = 1; i <= lines; i++) {
        let item = new Item(null, null);
        let string = split[i].split(/\s+/);
        item.setPrice(string[2]);
        item.setWeight(string[3]);
        items.push([i, item.getPrice(), item.getWeight()]);
        Prices.push(item.getPrice());
        Weight.push(item.getWeight());
      }

      Maxim = split[parseInt(lines) + 1];
      const ctrl = new Controller(items);
      let vector = ctrl.makeVectorOfItems(lines, Weight, Prices);
      let randomVector = ctrl.generate(1000, lines, vector, Maxim);
      console.log(randomVector);
      
    }
  }
}

let ui = new UI();
ui.start();