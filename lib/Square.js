const Shape = require("./Shape.js");

class Square extends Shape {
  constructor() {
    super();
  }

  render() {
    const str = `<rect x="70" y="25" width="150" height="150" fill="${this.shapeColor}"/>`;

    return str;
  }
}

module.exports = Square;
