import React, { useState } from 'react';
import { Metric } from '../types/Metric';

interface MetricsTableProps {
  metrics: Metric[];
  onAddMetric: (metric: { name: string; value: number }) => void;
  onClearMetrics: () => void;
}

const MetricsTable: React.FC<MetricsTableProps> = ({ metrics, onAddMetric, onClearMetrics }) => {
  const [name, setName] = useState('');
  const [value, setValue] = useState(0);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddMetric({ name, value });
    setName('');
    setValue(0);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Metric Name"
          required
        />
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          placeholder="Metric Value"
          required
        />
        <button type="submit">Add Metric</button>
        <button type="button" onClick={onClearMetrics}>Clear Report</button>
      </form>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {metrics.map((metric, index) => (
              <tr key={index}>
                <td>{metric.name}</td>
                <td>{metric.value}</td>
                <td>{metric.timestamp.replace("T", " ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default MetricsTable;
