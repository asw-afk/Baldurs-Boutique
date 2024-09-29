DELETE from character;
INSERT INTO character (name)
VALUES ('Bombadocious Boomtacticles');

DELETE from backgrounds;
INSERT INTO backgrounds (name, description)
VALUES ('Criminal', 'You have a history of breaking the law and survive by leveraging less-than-legal connections. Profiting from criminal enterprise will lead to greater opportunities in the future.');

DELETE from class;
INSERT INTO class (name, attributes)
VALUES ('Warlock', 'Charisma +2, Wisdom +2');

DELETE from race;
INSERT INTO race (name)
VALUES ('Dwarf');

DELETE from subrace;
INSERT INTO subrace (name)
VALUES ('Gold');

DELETE from attributes;
INSERT INTO attributes (name)
VALUES ('Charisma'), 
('Wisdom');

DELETE from skills;
INSERT INTO skills (name)
VALUES ('Arcana'), 
('Deception'), 
('History'), 
('Investigation'), 
('Nature'), 
('Religion');

DELETE from spells;
INSERT INTO spells (name, description)
VALUES ('Eldritch Blast', 'The cantrip allows the spellcaster to shoot out an energy beam that deals Force damage, and that can be upgraded with Warlock abilities.')

-- DELETE from weapons;
-- INSERT INTO weapons (name, weapon_type);
-- VALUES
-- ('Woe', 'Quarterstaff')

-- DELETE from weapon_description(rarity, Default_Damage_Dice, Default_Damage_Modifier, Second_Damage_Dice, Third_Damage_Dice, weapon_damage_type, weight, weapon)
--     (
--         'Very Rare',
--         '2d9',
--          1,
--         '1d6',
--         'B',
--         '',
--         1.8,
--         [{
--             name:Arcane Vampirism
--             desc: 'When the creatures affected by your spells fail any associated Saving Throws regain 1~4 hit points'
--         },
--         {
--             name: Blight,
--             damage: '8~64'
--         }]
--         ''
--     )
