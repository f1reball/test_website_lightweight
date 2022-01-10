const router = require('express').Router();
let runner = require('../models/runners.model');

router.route('/').get((req, res) => {
    runner.find()
        .then(runners => res.json(runners))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const SIID = req.body.SIID;
    const newRunner = new runner({firstName, lastName, SIID});

    newRunner.save()
        .then(() => res.json("User Added"))
        .catch(err => res.status(400).json('Erorr: ' + err));
});

router.route('/:id').get((req, res) => {
    runner.findById(req.params.id)
        .then(runner => res.json(runner))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((res, req) => {
    runner.findByIdAndDelete(req.params.id)
        .then(() => res.json('Runner Deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) =>{
    runner.findById(req.params.id)
        .then(runner => {
            runner.firstName = req.body.firstName;
            runner.lastName = req.body.lastName;
            runner.SIID = Number(req.body.SIID);

            runner.save()
                .then(() => res.json('Runner Updated'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
