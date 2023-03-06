const Shape = require("./Shape.js");

class Square extends Shape{
    constructor(bgColor, shapeColor, text, textColor){
        super(this, bgColor, shapeColor, text, textColor);
    }

    render(){

        const str =  `<rect x="10" y="10" width="30" height="30" fill="${Shape.shapeColor}"/>`

        return str;
    
    }
}

module.exports = Square;