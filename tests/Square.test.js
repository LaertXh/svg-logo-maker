const Square = require("../lib/Square.js");

describe("Square", () => {
  // Test to verify that the Square class can be instantiated.
  describe("Instantiate", () => {
    it("should be an instance of Square class", () => {
      const square = new Square();

      expect(square).toBeInstanceOf(Square);
    });
  });

  // Test to verify that render() returns the correct data.
  describe("render() method", () => {
    it("should return data", () => {
      const square = new Square();
      square.setShapeColor("red");

      expect(square.render()).toBe(
        `<rect x="10" y="10" width="30" height="30" fill="red"/>`
      );
    });
  });
});
