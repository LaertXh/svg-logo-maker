const Shape = require("./Shape.js");

class Triangle extends Shape{
    constructor(bgColor, shapeColor, text, textColor){
        super(this, bgColor, shapeColor, text, textColor);
    }

    render(){

        const str =  `<polygon points="150, 18 244, 182 56, 182" fill="${Shape.shapeColor}"/>`

        return str;
    
    }
}

module.exports = Triangle;