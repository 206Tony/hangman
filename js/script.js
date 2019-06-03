
var startingLetters = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(",");
var alphabet = startingLetters.join('');
var words = ["Adult","Aeroplane","Air","AircraftCarrier","Airforce","Airport","Album","Alphabet","Apple","Arm","Army","Baby","Baby","Backpack","Balloon","Banana","Bank","Barbecue","Bathroom","Bathtub","Bed","Bed","Bee","Bible","Bible","Bird","Bomb","Book","Boss","Bottle","Bowl","Box","Boy","Brain","Bridge","Butterfly","Button","Cappuccino","Car","Carrace","Carpet","Carrot","Cave","Chair","Chess Board","Chief","Child","Chisel","Chocolates","Church","Circle","Circus","Clock","Clown","Coffee","Coffeeshop","Comet","Compact Disc","Compass","Computer","Crystal","Cup","Cycle","Data Base","Desk","Diamond","Dress","Drill","Drink","Drum","Dung","Ears","Earth","Egg","Electricity","Elephant","Eraser","Explosive","Eyes","Family","Fan","Feather","Festival","Film","Finger","Fire","Floodlight","Flower","Foot","Fork","Freeway","Fruit","Fungus","Game","Garden","Gas","Gate","Gemstone","Girl","Gloves","God","Grapes","Guitar","Hammer","Hat","Hieroglyph","Highway","Horoscope","Horse","Hose","Ice","Ice-cream","Insect","Jetfighter","Junk","Kaleidoscope","Kitchen","Knife","Leather jacket","Leg","Library","Liquid","Magnet","Man","Map","Maze","Meat","Meteor","Microscope","Milk","Milkshake","Mist","Money $$$$","Monster","Mosquito","Mouth","Nail","Navy","Necklace","Needle","Onion","PaintBrush","Pants","Parachute","Passport","Pebble","Pendulum","Pepper","Perfume","Pillow","Plane","Planet","Pocket","Post-office","Potato","Printer","Prison","Pyramid","Radar","Rainbow","Record","Restaurant","Rifle","Ring","Robot","Rock","Rocket","Roof","Room","Rope","Saddle","Salt","Sandpaper","Sandwich","Satellite","School","Sex","Ship","Shoes","Shop","Shower","Signature","Skeleton","Slave","Snail","Software","Solid","Space Shuttle","Spectrum","Sphere","Spice","Spiral","Spoon","Sports-car","Spot Light","Square","Staircase","Star","Stomach","Sun","Sunglasses","Surveyor","Swimming Pool","Sword","Table","Tapestry","Teeth","Telescope","Television","Tennis racquet","Thermometer","Tiger","Toilet","Tongue","Torch","Torpedo","Train","Treadmill","Triangle","Tunnel","Typewriter","Umbrella","Vacuum","Vampire","Videotape","Vulture","Water","Weapon","Web","Wheelchair","Window","Woman","Worm","Xray"];
var word = words[Math.floor(Math.random() * words.length)].toUpperCase();
var tileArray = [];
// for(let i = 0; i < word.length; i++) {
//   tileArray[i] = "_";
// } 
var turns = 10;
var guess;


document.addEventListener('DOMContentLoaded', function() {
  initGame();
  refreshPage();
  start();
  newBoard();
  selectLetter(selected);
  correct(right);
  buttonSetup();

  var div_used;
  var div_tile;
  var div_available;

  function initGame() {
    div_used = document.getElementById('used');
    div_tile = document.getElementById('tile');
    div_available = document.getElementById('avaliable');
    buttonSetup();
  }

  function start(){
    document.getElementById('gameContent').style.display = none;
    newBoard();
  }

  function newBoard() {
    var tile;
    var tileId = Math.floor(Math.floor() * tiles.length);
    tile = tileArray[tileId];
    div_tile.innerHTML = '_';
    for(let i = 0; i < word.length; i++) {
      div_tile.innerHTMl += tile[i];
    }
  }

  function buttonSetup() {
    for (var i = 0; i < alphabet.length; i++) {
      var l = document.createElement('div');
      l.innerHTML = alphabet[i];
      l.className = 'btnLetter';
      l.onclick = function() {
        selectLetter(this); 
      };
      div_available.appendChild(l);
    }
  }

  function correct() {
    
  }

  function selectLetter(selected) {
    selected.style.display='none';
    var letter = document.createElement('div');
    letter.innerHTML = selected.innerHTML;
    letter.className = 'lbtnUsed';
    used = tile.search[i];
    letter.onclick = function() {

    }
    div_used.appendChild(l);
  
    while (used > 0) {
      if (used === null) {
        break;
      } else if (used !== 1) {
        return "Select 1 letter to stop seeing this message!";
      } else {
        for (var j = 0; j < tile.length; ++j) {
          if (tile[j] === used) {
            tileArray[j] = word[j];
            used--;
          } else {
              turns--;
          }
        }
      }
    }
  }

  

});
// function refreshPage() {
//   window.location.reload();
// }


  
    

  