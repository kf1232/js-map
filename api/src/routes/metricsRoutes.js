const express = require('express');
const router = express.Router();
const { getMetrics, addMetric } = require('../controllers/metricsController');

router.get('/', getMetrics);
router.post('/', addMetric);

module.exports = router;
