import React from 'react';

// Mock data for dashboard (no backend connection)
const mockData = {
  totalRecords: 1247,
  newRecordsThisMonth: 83,
  activeUsers: 28,
  completedCases: 562,
  pendingCases: 685,
  recentActivity: [
    { id: 1, action: 'Record added', user: 'John Doe', timestamp: '2 hours ago' },
    { id: 2, action: 'Case resolved', user: 'Jane Smith', timestamp: '5 hours ago' },
    { id: 3, action: 'User registered', user: 'Robert Johnson', timestamp: '1 day ago' },
    { id: 4, action: 'Record updated', user: 'Emily Davis', timestamp: '2 days ago' },
  ],
  regionData: [
    { region: 'North', count: 342 },
    { region: 'South', count: 401 },
    { region: 'East', count: 275 },
    { region: 'West', count: 229 },
  ]
};

const Dashboard = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Dashboard Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '0.5rem' }}>Dashboard Overview</h2>
        <p style={{ color: '#9CA3AF' }}>Welcome to The Poverty Line Project dashboard</p>
      </div>
      
      {/* Stats Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        {/* Total Records Card */}
        <div style={{
          backgroundColor: '#1F2937',
          borderRadius: '8px',
          padding: '1.5rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          borderLeft: '4px solid #3B82F6'
        }}>
          <h3 style={{ color: '#9CA3AF', fontSize: '0.9rem', marginBottom: '0.5rem' }}>TOTAL RECORDS</h3>
          <p style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{mockData.totalRecords}</p>
          <p style={{ color: '#10B981', fontSize: '0.9rem' }}>↑ {mockData.newRecordsThisMonth} new this month</p>
        </div>
        
        {/* Active Users Card */}
        <div style={{
          backgroundColor: '#1F2937',
          borderRadius: '8px',
          padding: '1.5rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          borderLeft: '4px solid #8B5CF6'
        }}>
          <h3 style={{ color: '#9CA3AF', fontSize: '0.9rem', marginBottom: '0.5rem' }}>ACTIVE USERS</h3>
          <p style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{mockData.activeUsers}</p>
          <p style={{ color: '#9CA3AF', fontSize: '0.9rem' }}>Across all regions</p>
        </div>
        
        {/* Completed Cases Card */}
        <div style={{
          backgroundColor: '#1F2937',
          borderRadius: '8px',
          padding: '1.5rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          borderLeft: '4px solid #10B981'
        }}>
          <h3 style={{ color: '#9CA3AF', fontSize: '0.9rem', marginBottom: '0.5rem' }}>COMPLETED CASES</h3>
          <p style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{mockData.completedCases}</p>
          <p style={{ color: '#10B981', fontSize: '0.9rem' }}>45% completion rate</p>
        </div>
        
        {/* Pending Cases Card */}
        <div style={{
          backgroundColor: '#1F2937',
          borderRadius: '8px',
          padding: '1.5rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          borderLeft: '4px solid #F59E0B'
        }}>
          <h3 style={{ color: '#9CA3AF', fontSize: '0.9rem', marginBottom: '0.5rem' }}>PENDING CASES</h3>
          <p style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{mockData.pendingCases}</p>
          <p style={{ color: '#F59E0B', fontSize: '0.9rem' }}>Requires attention</p>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: '1fr 350px',
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        {/* Regional Distribution */}
        <div style={{
          backgroundColor: '#1F2937',
          borderRadius: '8px',
          padding: '1.5rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>Regional Distribution</h3>
          <div style={{ display: 'flex', height: '200px', alignItems: 'flex-end', justifyContent: 'space-around', padding: '0 1rem' }}>
            {mockData.regionData.map(region => (
              <div key={region.region} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '60px' }}>
                <div style={{ 
                  height: `${(region.count / Math.max(...mockData.regionData.map(r => r.count))) * 180}px`,
                  width: '40px',
                  backgroundColor: '#3B82F6',
                  borderRadius: '4px 4px 0 0',
                  marginBottom: '0.5rem'
                }}></div>
                <p style={{ color: '#9CA3AF', fontSize: '0.8rem', marginBottom: '0.25rem' }}>{region.region}</p>
                <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: 'bold' }}>{region.count}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Recent Activity */}
        <div style={{
          backgroundColor: '#1F2937',
          borderRadius: '8px',
          padding: '1.5rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>Recent Activity</h3>
          <div>
            {mockData.recentActivity.map(activity => (
              <div key={activity.id} style={{ 
                padding: '0.75rem 0',
                borderBottom: '1px solid #374151',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                  <p style={{ color: 'white', fontSize: '0.9rem' }}>{activity.action}</p>
                  <p style={{ color: '#9CA3AF', fontSize: '0.8rem' }}>{activity.timestamp}</p>
                </div>
                <p style={{ color: '#3B82F6', fontSize: '0.8rem' }}>{activity.user}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Quick Actions */}
      <div style={{
        backgroundColor: '#1F2937',
        borderRadius: '8px',
        padding: '1.5rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>Quick Actions</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button style={{
            backgroundColor: '#3B82F6',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '0.75rem 1.5rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>Add New Record</button>
          <button style={{
            backgroundColor: '#1F2937',
            color: 'white',
            border: '1px solid #3B82F6',
            borderRadius: '4px',
            padding: '0.75rem 1.5rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>Generate Report</button>
          <button style={{
            backgroundColor: '#1F2937',
            color: 'white',
            border: '1px solid #3B82F6',
            borderRadius: '4px',
            padding: '0.75rem 1.5rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>View All Users</button>
          <button style={{
            backgroundColor: '#1F2937',
            color: 'white',
            border: '1px solid #3B82F6',
            borderRadius: '4px',
            padding: '0.75rem 1.5rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>Export Data</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
