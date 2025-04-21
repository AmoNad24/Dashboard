function Cost()
{

    return(

<div className="content-section" id="cost-management-content" style={{ display: 'none' }}>
  <h2>Cost Management</h2>
  <p>Monitor cloud spend, optimize resource allocation, and track budgeting goals across departments.</p>

  <div className="cards" style={{ marginBottom: '30px' }}>
    <div className="card"><h3>Total Spend</h3><p>$128,400</p><small>Month-to-date</small></div>
    <div className="card"><h3>Forecasted Spend</h3><p>$142,000</p><small>For April 2025</small></div>
    <div className="card"><h3>Budget Utilization</h3><p>86%</p><small>Monthly Budget: $165,000</small></div>
  </div>

  <div className="sections">
    <div className="panel">
      <h4>Region-wise Cost Split</h4>
      <canvas id="regionCostChart" height="250"></canvas>
    </div>
    <div className="panel">
      <h4>Resource-type Cost Split</h4>
      <canvas id="resourceCostChart" height="250"></canvas>
    </div>
  </div>

  <div className="sections">
    <div className="panel" style={{ flex: '1 1 100%' }}>
      <h4>Pricing Details</h4>
      <table className="bordered-table" style={{ width: '100%' }}>
        <thead>
          <tr><th>Service</th><th>Unit Price</th><th>Usage</th><th>Total</th></tr>
        </thead>
        <tbody>
          <tr><td>Compute (VM)</td><td>$0.12/hr</td><td>25,000 hrs</td><td>$3,000</td></tr>
          <tr><td>Storage (Block)</td><td>$0.10/GB</td><td>5,000 GB</td><td>$500</td></tr>
          <tr><td>Object Storage</td><td>$0.023/GB</td><td>12,000 GB</td><td>$276</td></tr>
          <tr><td>Data Transfer</td><td>$0.09/GB</td><td>8,000 GB</td><td>$720</td></tr>
          <tr><td>Database Services</td><td>$0.25/hr</td><td>3,000 hrs</td><td>$750</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
    )
}

export default Cost;