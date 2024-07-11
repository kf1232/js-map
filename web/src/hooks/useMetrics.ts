import { useState, useEffect } from 'react';
import { fetchMetrics, addMetric } from '../services/metricsService';
import { Metric } from '../types/Metric';

const useMetrics = () => {
  const [metrics, setMetrics] = useState<Metric[]>([]);

  useEffect(() => {
    fetchMetrics().then(setMetrics);

    const interval = setInterval(() => {
      const newMetric = {
        name: 'Random Metric',
        value: Math.floor(Math.random() * 100),
        timestamp: new Date().toISOString()
      };
      setMetrics(prevMetrics => [...prevMetrics, newMetric]);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleAddMetric = (metric: { name: string; value: number }) => {
    const newMetric: Metric = { ...metric, timestamp: new Date().toISOString() };
    addMetric(newMetric).then(returnedMetric => setMetrics(prevMetrics => [...prevMetrics, returnedMetric]));
  };

  const handleClearMetrics = () => {
    setMetrics([]);
  };

  return {
    metrics,
    handleAddMetric,
    handleClearMetrics
  };
};

export default useMetrics;
