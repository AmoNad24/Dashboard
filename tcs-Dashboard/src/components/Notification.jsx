function Notification({ message, type }) {
  return (
    <div className="content-section" id="notifications-content" style={{ display: 'none' }}>
  <h2>Notifications</h2>
  <p>Stay informed with system alerts, incident reports, audit events, and system-wide announcements.</p>

  <div className="cards" style={{ marginBottom: '30px' }}>
    <div className="card"><h3>Total Alerts</h3><p>320</p><small>Across all systems</small></div>
    <div className="card"><h3>Active Incidents</h3><p>7</p><small>Under investigation</small></div>
    <div className="card"><h3>Audit Events</h3><p>1,120</p><small>Last 7 days</small></div>
    <div className="card"><h3>Broadcasts</h3><p>24</p><small>Posted this month</small></div>
  </div>

  <div className="sections">
    <div className="panel">
      <h4>Alert Distribution</h4>
      <canvas id="alertDistributionChart" height="200"></canvas>
    </div>
    <div className="panel">
      <h4>Recent Broadcasts</h4>
      <ul>
        <li><strong>April 9:</strong> Patch rollout for east region at 2:00 AM</li>
        <li><strong>April 7:</strong> High CPU usage alert rule updated</li>
        <li><strong>April 5:</strong> New audit retention policy applied</li>
        <li><strong>April 3:</strong> Certificate renewal scheduled</li>
      </ul>
    </div>
  </div>

  <div className="sections">
    <div className="panel" style={{ flex: '1 1 100%' }}>
      <h4>Incident Timeline</h4>
      <table className="bordered-table" style={{ width: '100%' }}>
        <thead>
          <tr><th>Time</th><th>Severity</th><th>Description</th><th>Status</th></tr>
        </thead>
        <tbody>
          <tr><td>2025-04-09 08:45</td><td style={{ color: '#ef4444' }}>Critical</td><td>App outage in US-East</td><td style={{ color: '#f59e0b' }}>Investigating</td></tr>
          <tr><td>2025-04-08 14:30</td><td style={{ color: '#facc15' }}>Warning</td><td>High memory usage in node group-2</td><td style={{ color: '#16c784' }}>Resolved</td></tr>
          <tr><td>2025-04-07 10:10</td><td style={{ color: '#facc15' }}>Warning</td><td>Unusual login activity detected</td><td style={{ color: '#f59e0b' }}>Investigating</td></tr>
          <tr><td>2025-04-06 09:15</td><td style={{ color: '#16c784' }}>Info</td><td>Backup completed successfully</td><td style={{ color: '#16c784' }}>Resolved</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
  );
}

export default Notification;