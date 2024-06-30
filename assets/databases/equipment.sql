DROP DATABASE IF EXISTS equipment_db;

CREATE DATABASE equipment_db;

CREATE TABLE equipment;

CREATE TABLE weapons; 



CREATE TABLE quarterstaves (
    id INTEGER NOT NULL, 
    name VARCHAR(30) NOT NULL,
    rarity INTEGER(30),
    
  
    Damage VARCHAR(30) NOT NULL,
      -- Keep Damage format consistent; as an example
    --1d8 (1d6)
    --This means the item will roll two dice, one d8 and one d6.

    --If the item has an extra dice of damage
    --Please label it like this
    --1d8 (1d6) + 1d4 Force 
    --1d8 (1d6) + 1d4 Necrotic

    --Please look into what conditional damage is, as it may affect
    -- this table 

    Special Properties VARCHAR(30),
   -- Weapon Enchantments INTEGER,
    
    Enchant

    Weapon Actions VARCHAR (30) NOT NULL,
    Spells VARCHAR(30), 
    Spell 


)

    -------
    --The note below has been taken out of the 
    --damage guidelines and needs additional review. 
    --All plus one or greater staves get their flat damage buff
    --from weapon enchantments
    --I'm unsure if it's prudent to just include this as a +1 on
    --the damage category, or to keep the weapon enchantment category
    --it seems a little bloated to have an entire category just 
    --for a measly +1 that not every item has. 
    --
    --On the other hand; what if someone searches for Weapon Enchantment?
    --It's really sloppy if nothing comes up for such a basic search term
    -------
    ---The note in question; 

    --Some items will have an additional point of damage or two they
    --wont have to roll for; Please use this format for that.
    
    --1d8 (1d6) +1
    --1d4 (1d4) +2