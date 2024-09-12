const Person = require("../../classes/Person");
const Bag = require("../../classes/Bag")

describe("Person property test", () => {
  const person = new Person("thomas", "Maldive");
  test("Person class should create Person instance", () => {
    expect(person).toBeInstanceOf(Person);
  });
  test("name should be a string", () => {
    expect(typeof person.name).toBe("string");
  });
  test("destination should be a string", () => {
    expect(typeof person.destination).toBe("string");
  });
  test("bags array initial value should be empty array", () => {
    expect(person.getBags()).toEqual([]);
  });
});

describe("Person Methods", () => {
  const person = new Person("thomas", "Maldive");

  test("addBag(bag) should Updates the bags array with a bag.", () => {
    const bag = new Bag()
    person.addBag(bag);
    expect(person.getBags().includes(bag)).toBe(true);
  });
  test("getBags() should Returns the array of bags.", () => {
    expect(person.getBags()).toBe(person.#bags);
  });
});
