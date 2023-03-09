const Shape = require("./Shape.js");

class Circle extends Shape {
  constructor() {
    super();
  }

  render() {
    const str = `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;

    return str;
  }
}

module.exports = Circle;
