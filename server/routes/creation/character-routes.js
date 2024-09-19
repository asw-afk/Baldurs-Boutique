const router = require('express').Router();
const { Character } = require('../../models');

router.get('/', async (req, res) => {

    try {
        const characterData = await Character.findAll();
        res.status(200).json(characterData);
    } catch (err) {
        res.status(500).json(err);
    }

});