DROP DATABASE IF EXISTS equipment_db;

CREATE DATABASE equipment_db;


CREATE TABLE weapons (
   id INTEGER NOT NULL, 
   name VARCHAR(30) NOT NULL,
   weapon_type INTEGER NOT NULL
)

CREATE TABLE weapon_description (
  id INTEGER NOT NULL, 
  rarity INTEGER NOT NULL,
  Default_Damage_Dice VARCHAR(30) NOT NULL, --Better to have separate columns for these dice (Follows Normalization Form rules) 1d8
  Default_Damage_Modifier INTEGER,
  Second_Damage_Dice (INTEGER), 
  Second_Damage_Modifier (VARCHAR)(30), -- Store Damage Type as B for Blunt, F for Force, etc
  Third_Damage_Dice (INTEGER),
  Third_Damage_Modifier (VARCHAR)(30),  -- Afterwards, use javascript logic to remove the last character in this value and apply logic as necessary. 
  weapon_damage_type VARCHAR(30) NOT NULL,
  weight INTEGER NOT NULL,
  special jsonb,
  weapons_id INTEGER FOREIGN KEY REFERENCES weapons(id)
)

CREATE TABLE spells(
  id INTEGER NOT NULL,
  name VARCHAR(30) NOT NULL,
  desc VARCHAR(500) NOT NULL,
  level VARCHAR(30),
  school VARCHAR(30),
  casting_time VARCHAR(30),
  range VARCHAR(30),
  requires_concentration VARCHAR(30),
  saving_throw VARCHAR(30),
  classes VARCHAR(150),
  races VARCHAR(150)
)