const router = require('express').Router();
const { Skills } = require('../../models/buildMenu');

router.get('/', async (req, res) => {

    try {
        const skillsData = await Skills.findAll();
        res.status(200).json(skillsData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {

    try{
        const skillsData = await Skills.findByPk(req.params.idm);

        if (!skillsData) {
            res.status(404).json({ message: 'No skills found with this id.'});
            return;
        }

        res.status(200).json(skillsData);
    }catch (err) {
        res.status(500).json(err);
    }

});

