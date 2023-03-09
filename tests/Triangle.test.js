const Triangle = require("../lib/Triangle.js");

describe("Triangle", () => {
  // Test to verify that the Triangle class can be instantiated.
  describe("Instantiate", () => {
    it("should be an instance of Triangle class", () => {
      const triangle = new Triangle();

      expect(triangle).toBeInstanceOf(Triangle);
    });
  });

  // Test to verify that render() returns the correct data.
  describe("render() method", () => {
    it("should return data", () => {
      const triangle = new Triangle();
      triangle.setShapeColor("red");

      expect(triangle.render()).toBe(
        `<polygon points="150, 18 244, 182 56, 182" fill="red"/>`
      );
    });
  });
});
