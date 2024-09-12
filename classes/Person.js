class Person {
  constructor(name, destination) {
    this.name = name;
    this.destination = destination;
    this.bags = [];
  }

  getBags() {
    return this.bags;
  }
  addBag(bag) {
    this.bags.push(bag);
  }
}

module.exports = Person;
