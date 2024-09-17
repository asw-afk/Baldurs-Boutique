DROP DATABASE IF EXISTS character_db;

CREATE DATABASE character_db;

CREATE TABLE race (
    id INTEGER NOT NULL,
    name VARCHAR(30) NOT NULL,
    subrace VARCHAR(30) 
)

CREATE TABLE class (
    id INTEGER NOT NULL,
    name VARCHAR(30) NOT NULL,
    subclass VARCHAR(30) NOT NULL,
)

CREATE TABLE gender (
    id INTEGER NOT NULL,
    name VARCHAR(30)
)

CREATE TABLE feats (
    id INTEGER NOT NULL,
    name VARCHAR(30) NOT NULL,
    description VARCHAR(100)
)

CREATE TABLE backgrounds (
    id INTEGER NOT NULL,
    name VARCHAR(30) NOT NULL,
    description VARCHAR(100)
)

CREATE TABLE abilities (
    id INTEGER NOT NULL,
    name VARCHAR(30),
    score INTEGER,
    modifier_value INTEGER
)