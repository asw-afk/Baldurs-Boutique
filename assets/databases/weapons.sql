DROP DATABASE IF EXISTS weapons_db;

CREATE DATABASE weapons_db;

CREATE TABLE quarterstaves (
    id INTEGER NOT NULL, 
    name VARCHAR(30) NOT NULL,
    rarity INTEGER(30),
    
  
    Damage VARCHAR(30) NOT NULL,
      -- Keep Damage format consistent as an example
    --1d8 (1d6)
    --This means the item will roll two dice, one d8 and one d6.
    
    --Some items will have an additional point of damage or two they
    --wont have to roll for; Please use this format for that.
    
    --1d8 (1d6) +1
    --1d4 (1d4) +2

    --If the item has an extra dice of damage
    --Please label it like this

    --1d8 (1d6) + 1d4 Force 
    --1d8 (1d6) + 1d4 Necrotic

    --Please look into what conditional damage is, as it may affect
    -- this table 

    Special Properties VARCHAR(30),
    Weapon Enchantments INTEGER,
    
    Enchant

    Weapon Actions VARCHAR (30) NOT NULL,
    Spells VARCHAR(30), 
    Spell 


)