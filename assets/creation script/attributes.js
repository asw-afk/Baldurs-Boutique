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
  