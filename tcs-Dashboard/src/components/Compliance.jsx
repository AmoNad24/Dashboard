function Compliance() {
  return (
  

<div className="content-section" id="compliance-center-content" style={{ display: 'none' }}>
  <div className="cards" style={{ marginBottom: '30px' }}>
    <div className="card">
      <h3>Intrusion Sets</h3>
      <p>1.02K</p>
      <span style={{ color: '#16c784' }}>↑ 2</span> <small>(24 hours)</small>
      <i className="fas fa-gem" style={{ float: 'right', fontSize: '20px', color: '#3b82f6' }}></i>
    </div>
    <div className="card">
      <h3>Malware</h3>
      <p>4.31K</p>
      <span style={{ color: '#16c784' }}>↑ 4</span> <small>(24 hours)</small>
      <i className="fas fa-biohazard" style={{ float: 'right', fontSize: '20px', color: '#3b82f6' }}></i>
    </div>
    <div className="card">
      <h3>Reports</h3>
      <p>11.45K</p>
      <span style={{ color: '#16c784' }}>↑ 7</span> <small>(24 hours)</small>
      <i className="fas fa-file-alt" style={{ float: 'right', fontSize: '20px', color: '#3b82f6' }}></i>
    </div>
    <div className="card">
      <h3>Indicators</h3>
      <p>1.1M</p>
      <span style={{ color: '#16c784' }}>↑ 2621</span> <small>(24 hours)</small>
      <i className="fas fa-search" style={{ float: 'right', fontSize: '20px', color: '#3b82f6' }}></i>
    </div>
  </div>

  <div className="sections" style={{ flexWrap: 'wrap' }}>
    <div className="panel">
      <h4>Most Active Threats (Last 3 Months)</h4>
      <canvas id="activeThreatsChart" height="250"></canvas>
    </div>
    <div className="panel">
      <h4>Most Targeted Victims (Last 3 Months)</h4>
      <canvas id="targetedVictimsChart" height="250"></canvas>
    </div>
  </div>

  <div className="sections" style={{ flexWrap: 'wrap' }}>
    <div className="panel">
      <h4>Most Active Malware (Last 3 Months)</h4>
      <canvas id="activeMalwareChart" height="250"></canvas>
    </div>
    <div className="panel">
      <h4>Most Active Vulnerabilities (Last 3 Months)</h4>
      <canvas id="activeVulnerabilitiesChart" height="250"></canvas>
    </div>
    <div className="panel">
      <h4>Targeted Countries (Last 3 Months)</h4>
      <img src="./images/map.png" alt="Bar chart" height="150" style={{ width: '100%', borderRadius: '10px' }} />
    </div>
  </div>

  <div className="sections" style={{ flexWrap: 'wrap' }}>
    <div className="panel">
      <h4>Latest Trends</h4>
      <canvas id="latestReportsChart" height="250"></canvas>
    </div>
    <div className="panel">
      <h4>Most Active Labels (Last 3 Months)</h4>
      <canvas id="activeLabelsChart" height="250"></canvas>
    </div>
  </div>
</div>

  );
}

export default Compliance;