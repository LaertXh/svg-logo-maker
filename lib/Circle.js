const Shape = require("./Shape.js");

class Circle extends Shape{
    constructor(bgColor, shapeColor, text, textColor){
        super(this, bgColor, shapeColor, text, textColor);
    }

    render(){

        const str =  `<circle cx="150" cy="100" r="80" fill="${Shape.shapeColor}" />`

        return str;
    
    }
}

module.exports = Circle;





