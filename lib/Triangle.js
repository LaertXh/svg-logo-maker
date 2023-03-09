const Shape = require("./Shape.js");

class Triangle extends Shape {
  constructor() {
    super();
  }

  render() {
    const str = `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`;
    return str;
  }
}

module.exports = Triangle;
