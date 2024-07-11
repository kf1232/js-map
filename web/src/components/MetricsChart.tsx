import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Metric } from '../types/Metric';

interface MetricsChartProps {
  metrics: Metric[];
}

const MetricsChart: React.FC<MetricsChartProps> = ({ metrics }) => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    d3.select(chartRef.current).selectAll("*").remove();

    const svg = d3.select(chartRef.current)
      .append("svg")
      .attr("width", 800)
      .attr("height", 400);

    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = +svg.attr("width") - margin.left - margin.right;
    const height = +svg.attr("height") - margin.top - margin.bottom;

    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3.scaleTime()
      .rangeRound([0, width]);

    const y = d3.scaleLinear()
      .rangeRound([height, 0]);

    const line = d3.line<Metric>()
      .x(d => x(new Date(d.timestamp)))
      .y(d => y(d.value));

    x.domain(d3.extent(metrics, d => new Date(d.timestamp)) as [Date, Date]);
    y.domain(d3.extent(metrics, d => d.value) as [number, number]);

    g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));

    g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y))
      .append("text")
      .attr("fill", "#000")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Value");

    g.append("path")
      .datum(metrics)
      .attr("class", "line")
      .attr("d", line);
  }, [metrics]);

  return <div id="metrics-chart" ref={chartRef}></div>;
};

export default MetricsChart;
