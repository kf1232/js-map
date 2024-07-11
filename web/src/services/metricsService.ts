import axios from 'axios';
import { Metric } from '../types/Metric';

const API_URL = 'http://localhost:5000/api/metrics';

export const fetchMetrics = async (): Promise<Metric[]> => {
  const response = await axios.get<Metric[]>(API_URL);
  return response.data;
};

export const addMetric = async (metric: Omit<Metric, 'timestamp'>): Promise<Metric> => {
  const response = await axios.post<Metric>(API_URL, metric);
  return response.data;
};
