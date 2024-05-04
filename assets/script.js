let lvl = 1


const lvlUP = document.querySelector('#Up');
const lvlDown = document.querySelector('#Down');
const lvlf = document.querySelector('#lvl');

//updates level ALLEGEDLY
function setlvlText() {
    lvlf.textContent = lvl;
}
lvlUP.addEventListener('click', function () {
    //label later
    lvl++;
    setlvlText();
});


lvlDown.addEventListener('click', function () {
    if (lvl > 1) {
        lvl --;
        setlvlText();
    }
    console.log("efsdf");
});



let str = 1; 
let dex = 1;
let con = 1;
let int = 1;
let wis = 1;
let cha = 1;



// function editLVL ('click', 




// add stat variables 




// compile into array?

// make array affected by user input

