const Airport = require("../../classes/Airport");
const Plane = require("../../classes/Plane");

describe("Airport property test", () => {
  const airport = new Airport("AAA");
  test("Airport class should create Plane instance", () => {
    expect(airport).toBeInstanceOf(Airport);
  });
  test("name should be a string", () => {
    expect(typeof airport.name).toBe("string");
  });
  test("airportcode was assigned with a correct value", () => {
    expect(Airport.airportCode).toBe("JFK");
  });

  test("planes array initial value should be empty array", () => {
    expect(airport.getPlanes()).toEqual([]);
  });
});
describe("Plane Methods", () => {
  const airport = new Airport("Philadelphia");

  test("getPlanes()should  Returns the array of planes.", () => {
    airport.addPlane("Boeing 777");
    expect(airport.getPlanes()).toEqual(["Boeing 777"]);
  });
  test("addPlane(plane)should Adds the plane to the planes array.", () => {
    const plane = new Plane();
    airport.addPlane(plane);
    expect(airport.getPlanes().includes(plane)).toBe(true);
  });
});
