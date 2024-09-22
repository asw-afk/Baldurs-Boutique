DROP DATABASE IF EXISTS character_db;
CREATE DATABASE character_db;
\c character_db;
-- DROP TABLE IF EXISTS skills;
CREATE TABLE skills (
    id SERIAL PRIMARY KEY,
    name VARCHAR(500) NOT NULL
);
-- DROP TABLE IF EXISTS attributes;
CREATE TABLE attributes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    -- score INTEGER,
    -- modifier_value INTEGER,
    skills_id INTEGER,
    CONSTRAINT fk_skills FOREIGN KEY (skills_id) REFERENCES skills(id) ON DELETE CASCADE
);
-- DROP TABLE IF EXISTS subrace;
CREATE TABLE subrace (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    skills_id INTEGER,
    CONSTRAINT fk_skills FOREIGN KEY (skills_id) REFERENCES skills(id) ON DELETE CASCADE
);
-- DROP TABLE IF EXISTS race;
CREATE TABLE race (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    subrace_id INTEGER,
    CONSTRAINT fk_subrace FOREIGN KEY (subrace_id) REFERENCES subrace(id) ON DELETE CASCADE,
    skills_id INTEGER,
    CONSTRAINT fk_skills FOREIGN KEY (skills_id) REFERENCES skills(id) ON DELETE CASCADE
);
-- DROP TABLE IF EXISTS class;
CREATE TABLE class (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    attributes_id INTEGER,
    CONSTRAINT fk_attributes FOREIGN KEY (attributes_id) REFERENCES attributes(id) ON DELETE CASCADE
);
CREATE TABLE backgrounds (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    description VARCHAR(500),
    skills_id INTEGER,
    CONSTRAINT fk_skills FOREIGN KEY (skills_id) REFERENCES skills(id) ON DELETE CASCADE
);
CREATE TABLE character (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    race_id INTEGER,
    background_id INTEGER,
    class_id INTEGER,
    CONSTRAINT fk_race FOREIGN KEY (race_id) REFERENCES race(id) ON DELETE CASCADE,
    CONSTRAINT fk_background FOREIGN KEY (background_id) REFERENCES backgrounds(id) ON DELETE CASCADE,
    CONSTRAINT fk_class FOREIGN KEY (class_id) REFERENCES class(id) ON DELETE CASCADE
);









