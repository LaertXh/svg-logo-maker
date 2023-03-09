const Circle = require("../lib/Circle.js");

describe("Circle", () => {
  // Test to verify that the Circle class can be instantiated.
  describe("Instantiate", () => {
    it("should be an instance of Circle class", () => {
      const circle = new Circle();

      expect(circle).toBeInstanceOf(Circle);
    });
  });

  // Test to verify that render() returns the correct data.
  describe("render() method", () => {
    it("should return data", () => {
      const circle = new Circle();
      circle.setShapeColor("red");

      expect(circle.render()).toBe(
        `<circle cx="150" cy="100" r="80" fill="red" />`
      );
    });
  });
});
