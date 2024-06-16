// let lvl = 1;

// const lvlUP = document.querySelector("#Up");
// const lvlDown = document.querySelector("#Down");
// const lvlf = document.querySelector("#lvl");

// //updates level
// function setlvlText() {
//   lvlf.textContent = lvl;
// }
// lvlUP.addEventListener("click", function () {
//   //Increase Level
//     if (lvl < 10){
//   lvl++;
//   setlvlText();
// }});

// lvlDown.addEventListener("click", function () {
//   //Decrease Level
//   if (lvl > 1) {
//     lvl--;
//     setlvlText();
//   }
//   console.log("efsdf");
// });

//Add all level one information

//Stat Variable
// let str = 10;
// let dex = 10;
// let con = 10;
// let int = 10;
// let wis = 10;
// let cha = 10;

class Stats {
  constructor(str, dex, con, int, wis, cha) {
    this.str = str;
    this.dex = dex;
    this.con = con;
    this.int = int;
    this.wis = wis;
    this.cha = cha;
  }
}

//Both cheater and Greg need to be run through tests so that they do not
//allow the user to continue with character creation
//Has spent too many points
const cheater = new Stats (
    '28', 
    '21', 
    '21', 
    '21', 
    '21', 
    '21',
);

//has too many points in reserve, not valid
const greg = new Stats (
    '8', 
    '1', 
    '1', 
    '1', 
    '1', 
    '1',
);

//valid stat spread
const coolerGreg = new Stats (
    '17', 
    '13', 
    '15', 
    '8', 
    '12', 
    '10',
)

console.log(greg);
console.log(coolerGreg);

//Calculates modifier based on stat
const modifierMaker = (stat) => {
  //subtract 10 then divide by 2
 
 return Math.floor((stat -10) / 2);
};
console.log(modifierMaker(9))

//Start at a certain value in all your stats then spend points to get 
//stats higher or lower

let pointTotal = 27

//logic that increases the cost of abilities based on the number already entered 
//function that takes in all of the stats at once then checks to see if its valid

const statValidation = () => {

// cheater, greg, 

let gregString = greg.toString();


return Math.floor((stat -10) / 2);

//need an equation that returns false if numbers in stat sheet 
//go over 75, or are below 48
//the outcome has to be 75 
// if(gregString > 75) {
//     return false
// } else {
//     return true
// }
//coolerGreg

};


// There are 27 total points to spend.
// The base value of each Ability Score is 8.
// Each Ability Score above 8 costs 1 point to buy, except for 14 and 15, which cost 2 points each.
// Points cannot buy Ability Scores higher than 15.
// You must spend all of your points at Level 1. They cannot be saved for later.

let ability = 27 




//Discuss point build later

// function editLVL ('click',

// add stat variables

// implement fetch to retrieve data from the bg3 wiki
//get it to display the data in the search menu
//fetch the data then display relevant data in an array(?)
//does it have to be an array? i think so


//button that increases or decreased numbrer on event listener you would havea function that would check the number between however many stats you have and if that number is less than a certain number itcontinues 
//2  buttons and 2 numbers
//they have a value that checks the sum of two numbers 


function openSheet(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}