const express = require('express')
const router = express.Router()
const Request = require('../database/models/request')

router.post('/', async (req, res) => {
    const { name, model, option, price } = req.body;
    const task = new Request({
        name,
        model,
        option,
        price
    });
    await task.save();
    res.json({status: 'Task Saved'});
});

router.get('/', async (req, res) => {
    const request = await Request.find(); 
    res.json(request);
});

router.get('/:id', async (req, res) => {
    const request = await Request.findById(req.params.id);
    res.json(request);
});

router.delete('/:id', async (req, res) => {
    await Request.findByIdAndRemove(req.params.id);
    res.json({status: 'Task Deleted'});
});

module.exports = router