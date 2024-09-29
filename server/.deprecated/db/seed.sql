INSERT INTO skills (name)
VALUES ('Athletics'),
('Acrobatics'),
('Slight of Hand'),
('Stealth'),
('Arcana'),
('History'),
('Investigation'),
('Nature'),
('Religion'),
('Animal Handling'),
('Insight'),
('Medicine'),
('Perception'),
('Survival'),
('Deception'),
('Intimidation'),
('Performance'),
('Persuasion');

INSERT INTO attributes (name)
VALUES ('Strength'),
('Dexterity'),
('Intelligence'),
('Wisdom'),
('Charisma');

INSERT INTO class (name, attributes)
VALUES ('Barbarian', 'Strength +2, Dexterity +2'),
('Bard', 'Charisma +2, Dexterity +2'),
('Cleric', 'Wisdom +2, Charisma +2'),
('Druid', 'Wisdom +2, Intelligence +2'),
('Fighter', 'Strength +2, Intelligence +2'),
('Monk', 'Wisdom +2, Dexterity +2'),
('Paladin', 'Strength +2, Wisdom +2'),
('Ranger', 'Dexterity +2, Wisdom +2'),
('Rogue', 'Dexterity +2, Intelligence +2'),
('Sorcerer', 'Charisma +2, Dexterity +2'),
('Warlock', 'Charisma +2, Wisdom +2'),
('Wizard', 'Intelligence +2, Wisdom +2');

INSERT INTO race (name)
VALUES ('Human'),
('Elf'),
('Drow'),
('Half-Elf'),
('Half-Orc'),
('Halfling'),
('Dwarf'),
('Gnome'),
('Tiefling'),
('Githyanki'),
('Dragonborn');

INSERT INTO subrace (name)
VALUES ('High Elf'),
('Wood Elf'),
('Lolth-sworn Drow'),
('Seldarine Drow'),
('High Half-Elf'),
('Wood Half-Elf'),
('Drow Half-Elf'),
('Lightfoot Halfling'),
('Strongheart Halfling'),
('Gold Dwarf'),
('Shield Dwarf'),
('Duergar Dwarf'),
('Forest Gnome'),
('Deep Gnome'),
('Rock Dwarf'),
('Asmodeus Tiefling'),
('Mephistopheles Tiefling'),
('Zariel Tiefling'),
('Black Dragonborn'),
('BLue Dragonborn'),
('Brass Dragonborn'),
('Bronze Dragonborn'),
('Copper Dragonborn'),
('Gold Dragonborn'),
('Green Dragonborn'),
('Red Dragonborn'),
('Silver Dragonborn'),
('White Dragonborn');

INSERT INTO backgrounds (name, description)
VALUES ('Acolyte', 'You have spent your life in service to a temple, learning sacred rites and providing sacrifices to the god or gods you worship. Serving the gods and discovering their sacred works will guide you to greatness.'),
('Charlatan', 'Youre an expert in manipulation, prone to exaggeration and more than happy to profit from it. Bending the truth and turning allies against each other will lead to greater success down the road.'),
('Criminal', 'You have a history of breaking the law and survive by leveraging less-than-legal connections. Profiting from criminal enterprise will lead to greater opportunities in the future.'),
('Entertainer', 'You live to sway and subvert your audience, engaging common crowds and high society alike. Preserving art and bringing joy to the hapless and downtrodden heightens your charismatic aura.'),
('Folk Hero', 'Youre a champion of the common people, challenging tyrants and monsters to protect the helpless. Saving innocents in imminent danger will make your legend grow.'),
('Guild Artisan', 'Your skill in a particular craft has earned you membership in a mercantile guild, offering privileges and protection while engaging in your art. Repairing and discovering rare crafts will bring new inspiration.'),
('Noble', 'You were raised in a family among the social elite, accustomed to power and privilege. Accumulating renown, power, and loyalty will raise your status.'),
('Outlander', 'You grew up in the wilds, learning to survive far from the comforts of civilisation. Surviving unusual hazards of the wild will enhance your prowess and understanding.'),
('Sage', 'You are curious and well-read, with an unending thirst for knowledge. Learning about rare lore of the world will inspire you to put this knowledge to greater purpose.'),
('Soldier', 'You are trained in battlefield tactics and combat, having served in a militia, mercenary company, or officer corps. Show smart tactics and bravery on the battlefield to enhance your prowess.'),
('Urchin', 'After surviving a poor and bleak childhood, you know how to make the most out of very little. Using your street smarts bolsters your spirit for the journey ahead.');

INSERT INTO spells (name, description)
VALUES ('Eldritch Blast', 'The cantrip allows the spellcaster to shoot out an energy beam that deals Force damage, and that can be upgraded with Warlock abilities.'),
('Fireball', 'This spell allows spellcasters to unleash a streak of fire from their hands that ignites into a large explosion at a chosen point within range.'),
('Song of Rest', 'This ability allows the Bard to restore their allies strength by granting an additional Short Rest once per day.'),
('Healing Word', 'This spell allows spellcasters to heal allies that they can see within range.'),
('Wild Shape', 'An Action gained by Druids that allows them to magically transform into various creatures in order to fight in combat or explore the environment.'),
('Mage Hand', 'It conjures a spectral hand that can interact with objects.'),
('Counterspell', 'This spell allows spellcasters to interrupt another casters spellcasting, causing it to fail and have no effect.'),
('Lay on Hands', 'This ability allows the Paladin to heal a creature or cure it of diseases and poisons.'),
('Hunters Mark', 'This spell allows spellcasters to mark a creature as their prey and deal additional Weapon damage to the targeted creature.')

-- Spell Association
-- Eldritch Blast = Warlock
-- Fireball = Wizard
-- Song of Rest = Bard
-- Healing Word = Cleric
-- Wild Shape = Druid
-- Mage Hand = Sorcerer
-- Lay on Hands = Paladin
-- Hunters Mark = Ranger