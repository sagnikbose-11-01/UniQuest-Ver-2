import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./Analytics.css";

function Analytics() {
  const appGrowthData = [
    { name: "0", applications: 45, accepted: 28, rejected: 5 },
    { name: "1", applications: 52, accepted: 30, rejected: 6 },
    { name: "2", applications: 49, accepted: 29, rejected: 5 },
    { name: "3", applications: 61, accepted: 39, rejected: 7 },
    { name: "4", applications: 55, accepted: 35, rejected: 6 },
    { name: "5", applications: 70, accepted: 42, rejected: 7 },
  ];

  const revenueData = [
    { name: "0", actual: 45000, target: 50000 },
    { name: "1", actual: 55000, target: 52000 },
    { name: "2", actual: 53000, target: 53000 },
    { name: "3", actual: 64000, target: 55000 },
    { name: "4", actual: 60000, target: 54000 },
    { name: "5", actual: 70000, target: 55000 },
  ];

  const programData = [
    { name: "Computer Science", value: 145 },
    { name: "Engineering", value: 98 },
    { name: "Business", value: 87 },
    { name: "Medicine", value: 56 },
    { name: "Arts", value: 34 },
  ];

  const COLORS = ["#00E5FF", "#3B82F6", "#10B981", "#F59E0B", "#8B5CF6"];

  const regionData = [
    { region: "Asia", percent: 38, count: 124 },
    { region: "Europe", percent: 27, count: 89 },
    { region: "Americas", percent: 20, count: 67 },
    { region: "Africa", percent: 10, count: 34 },
    { region: "Oceania", percent: 4, count: 14 },
  ];

  const topPrograms = [
    { rank: 1, name: "Computer Science", apps: 145, percent: "34.5%" },
    { rank: 2, name: "Engineering", apps: 98, percent: "23.3%" },
    { rank: 3, name: "Business", apps: 87, percent: "20.7%" },
    { rank: 4, name: "Medicine", apps: 56, percent: "13.3%" },
    { rank: 5, name: "Arts", apps: 34, percent: "8.1%" },
  ];

  return (
    <div className="analytics-page">
      <header className="analytics-header">
        <h1>Analytics & Reports</h1>
        <p>Comprehensive analytics and insights for your admissions</p>
      </header>

      <div className="analytics-grid">
        {/* Applications Growth */}
        <div className="chart-card span-2">
          <h3>Applications Growth</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={appGrowthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f2a48" />
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="applications"
                stroke="#00E5FF"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="accepted"
                stroke="#10B981"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="rejected"
                stroke="#EF4444"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue Trends */}
        <div className="chart-card">
          <h3>Revenue Trends</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f2a48" />
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Legend />
              <Bar dataKey="actual" fill="#00E5FF" name="Actual Revenue" />
              <Bar dataKey="target" fill="#9CA3AF" name="Target Revenue" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Applications by Program */}
        <div className="chart-card">
          <h3>Applications by Program</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={programData}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                label
              >
                {programData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Applications by Region */}
        <div className="chart-card">
          <h3>Applications by Region</h3>
          {regionData.map((region, index) => (
            <div key={index} className="region-row">
              <div className="region-top">
                <span>{region.region}</span>
                <span>{region.count}</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${region.percent}%` }}
                ></div>
              </div>
              <p>{region.percent}% of total</p>
            </div>
          ))}
        </div>

        {/* Top Programs */}
        <div className="chart-card">
          <h3>Top Programs</h3>
          {topPrograms.map((p) => (
            <div className="program-row" key={p.rank}>
              <div className="rank">{p.rank}</div>
              <div className="program-info">
                <h4>{p.name}</h4>
                <p>{p.apps} applications</p>
              </div>
              <span className={`percent rank-${p.rank}`}>{p.percent}</span>
            </div>
          ))}
        </div>

        {/* Metrics Row */}
        <div className="metric-card">
          <h4>Average Application Time</h4>
          <h2>14 days</h2>
          <p>From submission to review</p>
        </div>
        <div className="metric-card">
          <h4>Conversion Rate</h4>
          <h2>62%</h2>
          <p>Application to acceptance</p>
        </div>
        <div className="metric-card">
          <h4>Avg. Application Score</h4>
          <h2>8.2/10</h2>
          <p>Quality of applicants</p>
        </div>
        <div className="metric-card">
          <h4>Revenue per Application</h4>
          <h2>$86.74</h2>
          <p>Average revenue metric</p>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
