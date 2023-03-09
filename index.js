//DEPENDENCIES
const inquirer = require("inquirer");
const fs = require("fs");
const Circle = require("./lib/Circle.js");
const Square = require("./lib/Square.js");
const Triangle = require("./lib/Triangle.js");

// INITIALIZATIONS
inquirer
  .prompt([
    {
      type: "input",
      message: "What text should the logo display? Three letters max.",
      name: "text",
      validate: function (input) {
        if (input.length > 3) {
          return "Logo text should be at most 3 characters. Try again";
        }
        return true;
      },
    },
    {
      type: "input",
      message: "What color should the text be?",
      name: "textColor",
    },
    {
      type: "input",
      message: "What color should the background be?",
      name: "bgColor",
    },
    {
      type: "list",
      message: "Choose a shape from the given list.",
      name: "shapes",
      choices: ["Triangle", "Circle", "Square"],
    },
    {
      type: "input",
      message: "What background color should the shape have?",
      name: "shapesColor",
    },
  ])
  .then((response) => {
    console.log("Your inputs were recorded");
    let shape;

    if (response.shapes === "Triangle") shape = new Triangle();
    else if (response.shapes === "Square") shape = new Square();
    else shape = new Circle();
    shape.setShapeColor(response.shapesColor);

    const str = `<svg version="1.1"
width="${shape.width}" height="${shape.height}"
xmlns="http://www.w3.org/2000/svg">

<rect width="100%" height="100%" fill="${response.bgColor}" />

${shape.render()}

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${
      response.textColor
    }">${response.text}</text>

</svg>`;

    fs.writeFile("test.svg", str, (err) =>
      err ? console.log(err) : console.log("Logo is now generated")
    );
  });
