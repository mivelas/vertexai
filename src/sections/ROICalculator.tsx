import React, { useState, useMemo } from 'react';
import { Calculator, TrendingUp, DollarSign, Clock } from 'lucide-react';
import './ROICalculator.css';

const ROICalculator: React.FC = () => {
  const [teamSize, setTeamSize] = useState<number>(10);
  const [avgSalary, setAvgSalary] = useState<number>(80000);
  const [manualTaskTime, setManualTaskTime] = useState<number>(30);
  const [aiEfficiency, setAiEfficiency] = useState<number>(40);

  const results = useMemo(() => {
    const totalManualCost = teamSize * avgSalary * (manualTaskTime / 100);
    const annualSavings = totalManualCost * (aiEfficiency / 100);
    const monthlySavings = annualSavings / 12;
    const efficiencyBoost = (manualTaskTime * (aiEfficiency / 100)).toFixed(1);

    return {
      totalManualCost,
      annualSavings,
      monthlySavings,
      efficiencyBoost
    };
  }, [teamSize, avgSalary, manualTaskTime, aiEfficiency]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <section className="roi-calculator section-padding" id="roi-calculator">
      <div className="container">
        <div className="section-header">
          <div className="header-icon">
            <Calculator size={40} className="accent-cyan" />
          </div>
          <h2 className="section-title">
            Calculate Your <span className="gradient-text">AI Advantage</span>
          </h2>
          <p className="section-subtitle">
            Estimate the potential ROI of implementing Nexalist AI strategies within your organization.
          </p>
        </div>

        <div className="roi-grid">
          <div className="roi-inputs glass-card">
            <h3 className="card-title">Business Parameters</h3>
            
            <div className="input-group">
              <label htmlFor="teamSize">Team Size: {teamSize}</label>
              <input 
                type="range" 
                id="teamSize" 
                min="1" 
                max="500" 
                step="1" 
                value={teamSize} 
                onChange={(e) => setTeamSize(Number(e.target.value))}
              />
            </div>

            <div className="input-group">
              <label htmlFor="avgSalary">Avg. Annual Salary: {formatCurrency(avgSalary)}</label>
              <input 
                type="range" 
                id="avgSalary" 
                min="30000" 
                max="250000" 
                step="5000" 
                value={avgSalary} 
                onChange={(e) => setAvgSalary(Number(e.target.value))}
              />
            </div>

            <div className="input-group">
              <label htmlFor="manualTaskTime">Manual Tasks (% of work): {manualTaskTime}%</label>
              <input 
                type="range" 
                id="manualTaskTime" 
                min="5" 
                max="100" 
                step="5" 
                value={manualTaskTime} 
                onChange={(e) => setManualTaskTime(Number(e.target.value))}
              />
            </div>

            <div className="input-group">
              <label htmlFor="aiEfficiency">Estimated AI Efficiency Gain: {aiEfficiency}%</label>
              <input 
                type="range" 
                id="aiEfficiency" 
                min="10" 
                max="90" 
                step="5" 
                value={aiEfficiency} 
                onChange={(e) => setAiEfficiency(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="roi-results">
            <div className="result-card glass-card savings">
              <div className="result-icon">
                <TrendingUp size={32} />
              </div>
              <div className="result-info">
                <h4>Potential Annual Savings</h4>
                <div className="result-value">{formatCurrency(results.annualSavings)}</div>
                <p>Reduced overhead through intelligent automation.</p>
              </div>
            </div>

            <div className="result-card-group">
              <div className="result-card glass-card secondary">
                <div className="result-icon">
                  <DollarSign size={24} />
                </div>
                <div className="result-info">
                  <h4>Monthly Impact</h4>
                  <div className="result-value small">{formatCurrency(results.monthlySavings)}</div>
                </div>
              </div>

              <div className="result-card glass-card secondary">
                <div className="result-icon">
                  <Clock size={24} />
                </div>
                <div className="result-info">
                  <h4>Efficiency Boost</h4>
                  <div className="result-value small">+{results.efficiencyBoost}%</div>
                </div>
              </div>
            </div>

            <div className="roi-cta">
              <p>These figures are estimates based on average industry data. Let's find your exact potential.</p>
              <a href="#contact" className="btn btn-primary">Book a Detailed Analysis</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
