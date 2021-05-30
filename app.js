
    // Create Dino Constructor
    function Dino(species, weight, height, diet, where, when, fact){
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
    let brachiosaurus = new Dino('Brachiosaurus', 70000, 372, 'herbivore', 'North America', 'Jate Jurassic', 'An asteroid was named 9954 Brachiosaurus in 1991.');
    let stegosaurus = new Dino('Stegosaurus', 11600, 79, 'herbivore', 'North America, Europe, and Asia', 'Late Jurassic - Early Cretaceous', 'The stegosaurus had 17-22 plates.');
    let elasmosaurus = new Dino('Elasmosaurus', 16000, 59, 'carnivore', 'North America', 'Late Cretaceous', 'Elasmosaurus was a marine reptile first discovered in Kansas.')
    let pteranodon = new Dino('Pteranodon', 44, 20, 'carnivore', 'North America', 'Late Cretaceous', 'The Pteranodon is technically not a dinosaur, but a type of flying reptile.')
    let pigeon = new Dino('Pigeon', 0.5, 9, 'herbivore', 'world wide', 'holocene', 'All birds are living dinosaurs');
    let dinoArray = [triceratops, tyrannosaurusRex, anklyosaurus, brachiosaurus, stegosaurus, elasmosaurus, pteranodon, pigeon];

    // Create Human Object
    var human = {}
    var facts = {};


    // Use IIFE to get human data from form
    function getData(){
        human.name = document.getElementById('name').value;
        human.height = parseInt(document.getElementById('feet').value * 12) + parseInt(document.getElementById('inches').value);
        human.weight = document.getElementById('weight').value;
        human.diet = document.getElementById('diet').value;
        }

    document.getElementById('btn').addEventListener('click', getData, false);  //This works, but I'm wondering if there was a better way?

    // Create Dino Compare Method 1
    function randomInt(max){
        return Math.floor(Math.random() * max);
    }
    var randomDino = dinoArray[randomInt()];

    function weightDiff(dinoWeight, humanWeight){
        if(dinoWeight > humanWeight){
            return (dinoWeight - humanWeight)
        }
        else{
            return (humanWeight - dinoWeight)
        }
    };


    // Create Dino Compare Method 2
    function heightDiff(dinoWeight, humanWeight){
        if(dinoHeight > humanHeight){
            return (dinoHeight - humanHeight)
        }else{
            return(humanHeight - dinoHeight)
        };
    }
    
    // Create Dino Compare Method 3
    if(randomDino3.diet == human.diet){
        var dietDiff = true;
    }else{
        var dietDiff = {"dinodiet": randomDino3.diet, "humandiet": human.diet}
    };

    facts.push(weightDiff, heightDiff,dietDiff);


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
