const Bag = require("../../classes/Bag");
const Person = require("../../classes/Person");

describe("Bag property test", () => {
  const bag = new Bag(180, 1, "thomas");
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
    const bag1 = new Bag(180, 1);

    expect(bag1.getOwner()).toBe(null);
  });
});
describe("Bag Methods", () => {
  const bag = new Bag(180, 1, "amazigh");

  test("getOwner() Method should return a Person Object", () => {
    expect(bag.getOwner()).toBe("amazigh");
  });
  test("assignOwner(person) should Updates owner with a person assigned to a Bag", () => {
    bag.assignOwner("matoub");
    expect(bag.getOwner()).toBe("matoub");
  });
});
