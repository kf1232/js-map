const Metric = require('../models/Metric');

const getMetrics = async (req, res) => {
  try {
    const metrics = await Metric.find();
    res.status(200).json(metrics);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addMetric = async (req, res) => {
  const { name, value, timestamp } = req.body;
  try {
    const newMetric = new Metric({ name, value, timestamp });
    await newMetric.save();
    res.status(201).json(newMetric);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getMetrics, addMetric };
