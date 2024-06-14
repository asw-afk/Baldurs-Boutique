let lvl = 1;

// const lvlUP = document.querySelector("#Up");
// const lvlDown = document.querySelector("#Down");
// const lvlf = document.querySelector("#lvl");

// //updates level
// function setlvlText() {
//   lvlf.textContent = lvl;
// }
// lvlUP.addEventListener("click", function () {
//   //Increase Level
    //if (lvl < 10){
//   lvl++;
//   setlvlText();
// });

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
//Calculates modifier based on stat
const modifierMaker = (stat) => {
  //subtract 10 then divide by 2
 
 return Math.floor((stat -10) / 2);
};

//Start at a certain value in all your stats then spend points to get 
//stats higher or lower

//Starting


console.log(modifierMaker(9))

//Discuss point build later

// function editLVL ('click',

// add stat variables

// implement fetch to retrieve data from the bg3 wiki
//get it to display the data in the search menu
//fetch the data then display relevant data in an array(?)
//does it have to be an array? i think so
