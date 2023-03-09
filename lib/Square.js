const Shape = require("./Shape.js");

class Square extends Shape {
  constructor() {
    super();
  }

  render() {
    const str = `<rect x="10" y="10" width="30" height="30" fill="${this.shapeColor}"/>`;

    return str;
  }
}

module.exports = Square;
