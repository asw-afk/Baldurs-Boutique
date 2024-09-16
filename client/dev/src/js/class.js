class Classes {
  constructor(
    
    actions,
    armour,
    cantrips,
    classFeats,
    // hp,
    // initiativeMod,
    // proficiencies,
    // skills,
    // spells
  ) {
    
      this.actions = actions,
      this.cantrips = cantrips,
      this.classFeatures = classFeats,
      this.hp,
      this.initiativeMod,
      this.weaponsProf,
      this.armourProf,
      this.skillsProf
      this.spells;
  }
}


class UserChar {
  constructor(name, age) {
    this.name = name;
    this.age = age
  }
};

const newAnna = new UserChar("Anna", 20);
console.log(newAnna);
const newJung = new UserChar('Jung', 30);
console.log(newJung);

//Unarmored Defence adds you con modifier to your armor class while not wearing armor
//heavy armor impedes your rage
class Barbarian extends Classes { 
  constructor()
  {
    
    (actions = 'Rage'),
    cantrips = 'n/a',
    classFeatures = 'Unarmored Defence',
    hp = 14,
    weaponsProf = ['Simple Weapons', 'Martial Weapons', 'Longswords', 'Shortswords', 'Longbows', 'Shortbows'],
    armourProf = ['Light Armor', 'Medmium Armour', 'Shields'],
    skillsProf = ['Athletics', 'Sleight of Hand', 'Perception', 'Deception', 'Intimidation']
  }
}

class Cleric extends Classes {
  constructor() {
    
    actions ='n/a',
    cantrips = ['Resistence', 'Guidance', 'Sacred Flame'],
    classFeatures = ['LvlOne SpellSlots', 'Domain Spells'],
    hp = 9,
    weaponsProf = ['Simple Weapons', 'Morningstars', 'Longswrods', 'Shortswords', 'Longbows', 'Shortbows' ],
    armourProf = ['Light Armor', 'Medium Armor', 'Shields', 'Heavy Armor'],
    skillsProf = ['Sleight of Hand', 'Religion', 'Insight', 'Perception', 'Deception'],
    spells = ['Guiding Bolt', 'Healing Word', 'Inflict Wound', 'Shield of Faith', 'Bane']
  }
}


