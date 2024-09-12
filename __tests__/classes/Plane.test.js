const Plane = require("../../classes/Plane")
const Person = require("../../classes/Person")

describe("Plane property test", () => {
    const plane = new Plane("AAA", "Maldive","Paris");
    test("Plane class should create Plane instance", () => {
      expect(plane).toBeInstanceOf(Plane);
    });
    test("company should be a string", () => {
      expect(typeof plane.company).toBe("string");
    });
    test("origin should be a string", () => {
      expect(typeof plane.origin).toBe("string");
    });
    test("destination should be a string", () => {
      expect(typeof plane.destination).toBe("string");
    });
    test("passengers array initial value should be empty array", () => {
      expect(plane.getPassengers()).toEqual([]);
    });
  });
  describe("Plane Methods", () => {
    const plane = new Plane("AAA", "Maldive","Paris");

    test("getPassengers()should  Returns the array of passengers.",()=>{
        expect(plane.getPassengers()).toBe(plane.passengers)

    })  
    test("addPassenger(passenger)should Adds the passenger to the passengers array.",()=>{
        const passenger = new Person()
       plane.addPassengers(passenger)
       expect(plane.passengers.includes(passenger)).toBe(true)
    })  

  });