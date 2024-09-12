const Bag = require("../../classes/Bag");
const Person = require("../../classes/Person");

describe("Bag property test", () => {
  const bag = new Bag(180, 1);
  test("Bag class should create Bag instance", () => {
    expect(bag).toBeInstanceOf(Bag);
  });
  test("weight should be a number", () => {
    expect(typeof bag.weight).toBe("number");
  });
  test("id should be a number", () => {
    expect(typeof bag.id).toBe("number");
  });
  test("owner initial value should be null", () => {
    expect(bag.getOwner()).toBe(null);
  });
});
describe("Bag Methods", () => {
  const bag = new Bag(180, 1);

  test("getOwner() Method should return a Person Object", () => {
    expect(bag.getOwner()).toBe(bag.#owner);
  });
  test("assignOwner(person) should Updates owner with a person assigned to a Bag", () => {
    bag.assignOwner(person);
    expect(bag.getOwner()).toBe(person);
  });
});
