import React from 'react';
import MetricsChart from './components/MetricsChart';
import MetricsTable from './components/MetricsTable';
import useMetrics from './hooks/useMetrics';

const App: React.FC = () => {
  const { metrics, handleAddMetric, handleClearMetrics } = useMetrics();

  return (
    <div>
      <h1>Manufacturing Analytics Platform</h1>
      <MetricsChart metrics={metrics} />
      <MetricsTable metrics={metrics} onAddMetric={handleAddMetric} onClearMetrics={handleClearMetrics} />
    </div>
  );
};

export default App;
