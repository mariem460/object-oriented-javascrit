// Create Dino Constructor
import dataOfDinos from './dino.json' assert {type: "json"};

function DinoConstructor (species,fact, weight, height, diet) {
    this.species = species,
    this.image = `./images/${species}.png`
    this.fact = fact,
    this.weight = weight,
    this.height = height,
    this.diet = diet
}

console.log(dataOfDinos)

    const dinoObjects = dataOfDinos.map((everyElmt => {
        const species = everyElmt.species;
        const fact = everyElmt.fact;
        const weight = everyElmt.weight;
        const height = everyElmt.height;
        const image = everyElmt.images;
        const diet = everyElmt.diet
        return new DinoConstructor (species, fact, weight, height, image, diet)
    }))

    // Create Human Object
    function HumanConstructor (name,heightInches,heightFeet, weight, diet) {
        this.name =name,
        this.image = "./images/human.png",
        this.heightTotal = heightInches + heightFeet,
        this.weight = weight,
        this.diet = diet
    }

    // Use IIFE to get human data from form
    const humanData = (function humanData () {
        let name = document.getElementById("name").value;
        let heightFeet = document.getElementById("feet").value * 12; // multiply value by 12 to make it in inches
        let heightInches = document.getElementById("inches").value;
        let weight = document.getElementById("weight").value;
        let diet = document.getElementById("diet").value.toLowerCase();
        return new HumanConstructor(name, heightFeet, heightInches, weight, diet)
    }())


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    DinoConstructor.prototype.weightCompare = function (humanDataObject) {
        if(this.weight > humanDataObject.weight ) {
            DinoConstructor.prototype.newFact =  "The dinos is bigger than human";
        }
    }
    dinoObjects[0].weightCompare(humanData);

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    DinoConstructor.prototype.heightCopmare = function (humanDataObject) {
        if(this.height > humanDataObject.height ) {
            DinoConstructor.prototype.newFact =  "The dinos is higher than human";
        }
    }
    dinoObjects[0].weightCompare(humanData);
    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    DinoConstructor.prototype.dietCopmare = function (humanDataObject) {
        if(this.diet === humanDataObject.diet ) {
            DinoConstructor.prototype.newFact =  "The dinos and human have the same diet";
        }else {
            DinoConstructor.prototype.newFact =  "The dinos and human have diffrent diet";

        }
    }
    dinoObjects[0].weightCompare(humanData);

    // Generate Tiles for each Dino in Array
 function generateGrid () {
    for(let index = 0; index < dataOfDinos.length; index++) {
        const tiles =  document.createElement("div");
        tiles.className = "grid-item";
         // Add tiles to DOM
        tiles.innerHTML = document.getElementById("grid")
        document.body.appendChild(tiles)
    }
 }

    // Remove form from screen
    function removeForm() {
        const form =  document.getElementById("form-container");
        if(form.style.visibility = "visible") {
           form.style.visibility = "hidden"
           generateGrid()
        }else {
            console.log("smthg went wrong")
        }
       
      }
        const button = document.getElementById("btn");
        button.addEventListener("click",  removeForm());
 
// On button click, prepare and display infographic

