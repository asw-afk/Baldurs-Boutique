DELETE from weapons;
INSERT INTO weapons (name, weapon_type);
VALUES
('Woe', 'Quarterstaff')

DELETE from weapon_description(rarity, Default_Damage_Dice, Default_Damage_Modifier, Second_Damage_Dice, Third_Damage_Dice, weapon_damage_type, weight, weapon)
    (
        'Very Rare',
        '2d9',
         1,
        '1d6',
        'B',
        '',
        1.8,
        [{
            name:Arcane Vampirism
            desc: 'When the creatures affected by your spells fail any associated Saving Throws regain 1~4 hit points'
        },
        {
            name: Blight,
            damage: '8~64'
        }]
        ''
    )
