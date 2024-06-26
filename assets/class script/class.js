class Classes {
  constructor(
    attribute,
    actions,
    armour,
    cantrips,
    classFeats,
    hp,
    initiativeMod,
    proficiencies,
    skills,
    spells
  ) {
    (this.attribute = []),
      this.actions,
      this.armour,
      this.cantrips,
      this.classFeats,
      this.hp,
      this.initiativeMod,
      this.proficiencies,
      this.skills,
      this.spells;
  }
}

class Cleric extends Classes {
  render() {
    (attribute = [15, 10, 13, 8, 17, 12]),
      (actions = ""),
      (cantrips = ""),
      (classFeats = "lvl1 Spell Slots");
    ("Domain Spells");
  }
}
