const Shape = require("./Shape.js");

class Circle extends Shape{
    constructor(bgColor, shapeColor, text, textColor){
        super(this, bgColor, shapeColor, text, textColor);
    }

    render(){

        const str =  `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`

        return str;
    
    }
}








const str = 
`<svg version="1.1"
width="${Shape.width}" height="${Shape.height}"
xmlns="http://www.w3.org/2000/svg">

<rect width="100%" height="100%" fill="${Shape.color}" />

<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${Shape.textColor}">SVG</text>

</svg>`