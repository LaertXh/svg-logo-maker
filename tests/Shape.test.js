const Shape = require("../lib/Shape.js");

describe("Shape", () => {
  // Test to verify that the Shape class can be instantiated.
  describe("Instantiate", () => {
    it("should be an instance of Shape class", () => {
      const shape = new Shape();

      expect(shape).toBeInstanceOf(Shape);
    });
  });

  // Test to verify that setShapeColor(shapeColor) sets shapeColor to the correct value
  describe("setShapeColor(shapeColor) method", () => {
    it("should set shapeColor to the correct value", () => {
      const shape = new Shape();
      shape.setShapeColor("red");

      expect(shape.shapeColor).toBe("red");
    });
  });
});
