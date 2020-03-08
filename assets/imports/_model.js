
class Item {
  constructor(price, weight) {
    this.price = price;
    this.weight = weight;
    this.init();
  }

  init() {
  }

  getPrice() {
    return this.price;
  }

  getWeight() {
    return this.weight;
  }

  setPrice(price) {
    this.price = price;
  }

  setWeight(weight) {
    this.weight = weight;
  }
}