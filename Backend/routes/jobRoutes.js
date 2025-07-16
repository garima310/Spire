const express = require('express');
const router = express.Router();
const jobsController = require('../controllers/jobsController');

router.get('/jobs', jobsController.getAllJobs);

module.exports = router;
