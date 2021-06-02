
// Create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
}

// Create Dino Objects
let triceratops = new Dino('Triceratops', 13000, 114, 'herbivore', 'North America', 'Late Cretaceous', 'First Discovered in 1889 by Othniel Charles Marsh');
let tyrannosaurusRex = new Dino('Tyrannosaurus Rex', 11905, 114, 'carnivore', 'North America', 'Late Cretaceous', 'The largest known skull is 5 feet long');
let anklyosaurus = new Dino('Anklyosaurus', 10500, 55, 'herbivore', 'North America', 'Late Cretaceous', 'Anklyosaurus survived for approximately 135 million years');
let brachiosaurus = new Dino('Brachiosaurus', 70000, 372, 'herbivore', 'North America', 'Late Jurassic', 'An asteroid was named 9954 Brachiosaurus in 1991.');
let stegosaurus = new Dino('Stegosaurus', 11600, 79, 'herbivore', 'North America, Europe, and Asia', 'Late Jurassic - Early Cretaceous', 'The stegosaurus had 17-22 plates.');
let elasmosaurus = new Dino('Elasmosaurus', 16000, 59, 'carnivore', 'North America', 'Late Cretaceous', 'Elasmosaurus was a marine reptile first discovered in Kansas.')
let pteranodon = new Dino('Pteranodon', 44, 20, 'carnivore', 'North America', 'Late Cretaceous', 'The Pteranodon is technically not a dinosaur, but a type of flying reptile.')
let pigeon = new Dino('Pigeon', 0.5, 9, 'herbivore', 'the whole world', 'holocene', 'All birds are living dinosaurs');
let dinoArray = [triceratops, tyrannosaurusRex, anklyosaurus, brachiosaurus, stegosaurus, elasmosaurus, pteranodon, pigeon];

// Create Human Object
let human = {}
let facts = ["weight", "height", "diet", "where", "when", "fact"];


// Use IIFE to get human data from form
document.getElementById('btn').addEventListener('click', getData, false);
document.getElementById('btn').addEventListener('click', (function () { document.getElementById('dino-compare').style.display = "none" }), false)

// Create Dino Compare Method 1
function weightDiff(dinoWeight, humanWeight) {
    if (dinoWeight > humanWeight) {
        return (dinoWeight - humanWeight)
    }
    else {
        return (humanWeight - dinoWeight)
    }
};


// Create Dino Compare Method 2
function heightDiff(dinoWeight, humanWeight) {
    if (dinoHeight > humanHeight) {
        return (dinoHeight - humanHeight)
    } else {
        return (humanHeight - dinoHeight)
    };
}

// Create Dino Compare Method 3
function dietDiff(dinoDiet, humanDiet) {
    if (dinoDiet.toLowerCase() == humanDiet.toLowerCase()) {
        return true;
    } else {
        return false;
    };
}


// Generate Tiles for each Dino in Array
function randomInt(max) {
    return Math.floor(Math.random() * max);
}

//On submit, get user data and build tiles, and then the grid.
function getData() {
    human.name = document.getElementById('name').value;
    human.height = parseInt(document.getElementById('feet').value * 12) + parseInt(document.getElementById('inches').value);
    human.weight = document.getElementById('weight').value;
    human.diet = document.getElementById('diet').value;
    if (dinoArray.length == 0) {
        dinoArray = [triceratops, tyrannosaurusRex, anklyosaurus, brachiosaurus, stegosaurus, elasmosaurus, pteranodon, pigeon];
    }
    // Here we immediately build the tiles
    (function buildTiles() {
        dinoGridArray = [];
        for (i = 0; i < 8; i++) {
            let randomDino = dinoArray[randomInt(dinoArray.length)];
            if (randomDino.species == 'Pigeon') {
                var randomFact = facts[facts.length - 1];  //using either 'let' or 'const' on this variable cause it to be undefined.
            } else {
                var randomFact = facts[randomInt(facts.length)]; //using either 'let' or 'const' on this variable cause it to be undefined.
            }
            let dinoObject = {};
            dinoObject.name = randomDino.species;
            dinoObject.img = `${randomDino.species}.png`;
            dinoObject.factType = randomFact;

            if (randomFact == "weight") {
                let weightFact = weightDiff(human.weight, randomDino.weight)
                dinoObject.fact = `The difference in weight between you and ${randomDino.species} is ` + weightFact + ` pounds!`;
            } else if (randomFact == "height") {
                let heightFact = weightDiff(human.height, randomDino.height)
                dinoObject.fact = `The difference in height between you and ${randomDino.species} is ` + heightFact + ` inches!`;
            } else if (randomFact == "diet") {
                let dietFact = dietDiff(human.diet, randomDino.diet)
                if (dietFact == true) {
                    dinoObject.fact = `You and ${randomDino.species} have the same diet!`
                } else {
                    dinoObject.fact = `You are a ${human.diet.toLowerCase()} while ${randomDino.species} is a ${randomDino.diet}`;
                }
            } else if (randomFact == "when") {
                dinoObject.fact = `${randomDino.species} lived during the ${randomDino.when}`
            } else if (randomFact == "where") {
                dinoObject.fact = `${randomDino.species} lived on ${randomDino.where}`
            } else {
                dinoObject.fact = randomDino[randomFact];
            }
            dinoGridArray.push(dinoObject);
            dinoArray.splice(dinoArray.indexOf(randomDino), 1);

        }
    })()

    let grid = document.getElementById('grid');

    dinoGridArray1 = [dinoGridArray[0], dinoGridArray[1], dinoGridArray[2], dinoGridArray[3]];
    dinoGridArray2 = [dinoGridArray[4], dinoGridArray[5], dinoGridArray[6], dinoGridArray[7]];
    humanArray = [human];

    //Having put the information in tiles, we put them into an array to build the grid. It's broken up to ensure the human is in the middle.
    function buildGrid(array) {
        array.forEach(function (dinoItem) {
            let gridTile = document.createElement('div');
            gridTile.classList.add('grid-item');
            if (array.length == 1) {
                gridTile.innerHTML = `<h3>${human.name}</h3><img src = "images/human.png"> `
            } else {
                gridTile.innerHTML = `<h3>${dinoItem.name}</h3><p>${dinoItem.fact}</p><img src = "images/${dinoItem.img}"> `
            }
            grid.appendChild(gridTile);
        })
    }

    buildGrid(dinoGridArray1);
    buildGrid(humanArray)
    buildGrid(dinoGridArray2);

    //A bit of an extra credit function that adds buttons to make it easier to restart or regenerate without having to refresh :)
    function addButtons(id, buttonText) {
        let div = document.createElement('div');
        let divButtonText = document.createTextNode(buttonText);
        div.appendChild(divButtonText);
        div.id = id;
        grid.appendChild(div);
        document.getElementById(id).addEventListener('click', (function () { document.getElementById('grid').innerHTML = "" }), false);
    }

    addButtons('restart', 'Do Another Person!')
    addButtons('moreFacts', 'Get More Facts!')

    document.getElementById('moreFacts').addEventListener('click', getData, false);
    document.getElementById('restart').addEventListener('click', (function () { document.getElementById('dino-compare').style.display = "block" }), false)
}


