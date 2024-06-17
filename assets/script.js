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


//Start at a certain value in all your stats then spend points to get 
//stats higher or lower

let pointTotal = 27




let ability = 27 




//Discuss point build later

// function editLVL ('click',

// add stat variables

//get it to display the data in the search menu
//fetch the data then display relevant data in an array(?)
//does it have to be an array? i think so


//button that increases or decreased numbrer on event listener you would havea function that would check
// the number between however many stats you have and if that number is less than a certain number itcontinues 
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