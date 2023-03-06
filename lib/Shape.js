class Shape{
    constructor(bgColor, shapeColor, text, textColor){
        this.height = 200;
        this.width = 300;
        this.bgColor = bgColor;
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    setBgColor(bgColor){
        this.bgColor = bgColor;
    }
    setText(text){
        this.text = text;
    }
    setTextColor(textColor){
        this.textColor = textColor;
    }
    setShapeColor(shapeColor){
        this.shapeColor = shapeColor;
    }


}

module.exports(Shape);