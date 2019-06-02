//Welcome
var playerName = prompt("Please Enter Your Name");
alert("Hello " + playerName);

// Variable declarations

//Array containing all letters is alphabet
const startingLettersArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(" ");  //console.log(alphabet);
var alphabet = startingLettersArray;

//Fill Array called words with strings
const words = ["Adult","Aeroplane","Air","AircraftCarrier","Airforce","Airport","Album","Alphabet","Apple","Arm","Army","Baby","Baby","Backpack","Balloon","Banana","Bank","Barbecue","Bathroom","Bathtub","Bed","Bed","Bee","Bible","Bible","Bird","Bomb","Book","Boss","Bottle","Bowl","Box","Boy","Brain","Bridge","Butterfly","Button","Cappuccino","Car","Carrace","Carpet","Carrot","Cave","Chair","Chess Board","Chief","Child","Chisel","Chocolates","Church","Circle","Circus","Clock","Clown","Coffee","Coffeeshop","Comet","Compact Disc","Compass","Computer","Crystal","Cup","Cycle","Data Base","Desk","Diamond","Dress","Drill","Drink","Drum","Dung","Ears","Earth","Egg","Electricity","Elephant","Eraser","Explosive","Eyes","Family","Fan","Feather","Festival","Film","Finger","Fire","Floodlight","Flower","Foot","Fork","Freeway","Fruit","Fungus","Game","Garden","Gas","Gate","Gemstone","Girl","Gloves","God","Grapes","Guitar","Hammer","Hat","Hieroglyph","Highway","Horoscope","Horse","Hose","Ice","Ice-cream","Insect","Jetfighter","Junk","Kaleidoscope","Kitchen","Knife","Leather jacket","Leg","Library","Liquid","Magnet","Man","Map","Maze","Meat","Meteor","Microscope","Milk","Milkshake","Mist","Money $$$$","Monster","Mosquito","Mouth","Nail","Navy","Necklace","Needle","Onion","PaintBrush","Pants","Parachute","Passport","Pebble","Pendulum","Pepper","Perfume","Pillow","Plane","Planet","Pocket","Post-office","Potato","Printer","Prison","Pyramid","Radar","Rainbow","Record","Restaurant","Rifle","Ring","Robot","Rock","Rocket","Roof","Room","Rope","Saddle","Salt","Sandpaper","Sandwich","Satellite","School","Sex","Ship","Shoes","Shop","Shower","Signature","Skeleton","Slave","Snail","Software","Solid","Space Shuttle","Spectrum","Sphere","Spice","Spiral","Spoon","Sports-car","Spot Light","Square","Staircase","Star","Stomach","Sun","Sunglasses","Surveyor","Swimming Pool","Sword","Table","Tapestry","Teeth","Telescope","Television","Tennis racquet","Thermometer","Tiger","Toilet","Tongue","Torch","Torpedo","Train","Treadmill","Triangle","Tunnel","Typewriter","Umbrella","Vacuum","Vampire","Videotape","Vulture","Water","Weapon","Web","Wheelchair","Window","Woman","Worm","Xray"];

//word takes words Array using Math.random, and 
//Math.floor to pick a random word from array.
var word = words[Math.floor(Math.random() * words.length)].toLowerCase();
//answerArray starts empty, uses a
//for loop to iterate the word so 
//it has the correct num of blanks 
var answerArray = [];
  for(let i = 0; i < word.length; i++) {
    answerArray[i] = " _ ";
  };

var lettersRemaining = word.length;
var turns = 10;

while (lettersRemaining > 0  && turns > 0) {
alert(answerArray);
var guess = prompt(playerName + " Select a Letter! You have " + turns + ' left');

//if they cancel break and show word
  if (guess === null) {
    break;
//if guess is 0 or > 1 annoyingly alert them
  } else if (guess.length !== 1) {
    alert("Select 1 letter to stop seeing this message!");
//else for getting the correct letter display in the correct spaces
  } else {
    for (var i = 0; i < word.length; i++) {
      if (word[i] === guess) {
        answerArray[i] = guess;
        lettersRemaining--;
      } else if (word[i] !== guess) {
        turns--;
      }
    }
  }
};

  //    //has player progress and input, 
  //    //turns remaining, 
    
  //    //update answerArray when selection is correct



//alert(name + " you have " + move + "remaining");
// HTML Element References



// Create all event listeners




// Any additional functions

//random word generator
// function createWord() {
  
// return word;
// }
// alert(createWord());

// createWord();
// //what to do when out of moves
// function amountOfTurns() {
//   if (turnsLeft) {
//     alert('Nice work Law Dog');
//     return resetGame;
//   } else {
//     alert("You Saved The Day!");
//   }
// }

// function chosenLetter(alphabet) {
//   var picked 
// }
// function deincrementTurnCounter() {
//   if () {
// }
// }



// turns to start with = turns = 10
// create a container with all the letters in alphabet = alphabet
// letter choosen 
// compare with array of letters in the phrase
// if its there fill those spots
// loop back to choose a letter
// if not deincrement for incorrect guess and delete letter and add body part to hang