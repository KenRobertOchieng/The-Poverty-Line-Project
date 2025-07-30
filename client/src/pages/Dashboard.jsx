// src/pages/Dashboard.jsx
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchRecords } from '../features/records/recordSlice'
import { fetchUsers } from '../features/users/userListingSlice'

export default function Dashboard() {
  const dispatch = useDispatch()
  const { records, status: recStatus } = useSelector(state => state.records)
  const { users, loading: usrLoading } = useSelector(state => state.userListing)

  useEffect(() => {
    if (recStatus === 'idle') {
      dispatch(fetchRecords())
    }
    if (!usrLoading && users.length === 0) {
      dispatch(fetchUsers())
    }
  }, [dispatch, recStatus, usrLoading, users.length])

  // show loading until records are loaded and users fetched
  if (recStatus !== 'succeeded' || usrLoading) {
    return <p className="text-white p-4">Loading dashboard…</p>
  }

  // compute stats
  const now = new Date()
  const totalRecords = records.length
  const newRecordsThisMonth = records.filter(r => {
    const d = new Date(r.timestamp)
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
  }).length
  const activeUsers = users.length
  const completedCases = records.filter(r => r.poverty_classification === 'above-line').length
  const pendingCases = totalRecords - completedCases

  const recentActivity = records
    .slice()
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    .slice(0, 4)
    .map(r => ({
      id: r.id,
      action: r.poverty_classification === 'above-line' ? 'Record cleared' : 'Record added',
      user: users.find(u => u.id === r.user_id)?.username || 'Unknown',
      timestamp: new Date(r.timestamp).toLocaleString()
    }))

  const regionData = Object.entries(
    records.reduce((acc, r) => {
      acc[r.region] = (acc[r.region] || 0) + 1
      return acc
    }, {})
  ).map(([region, count]) => ({ region, count }))

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Stats Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}
      >
        <StatCard
          title="TOTAL RECORDS"
          value={totalRecords}
          note={`↑ ${newRecordsThisMonth} new this month`}
          leftBorder="#3B82F6"
        />
        <StatCard
          title="ACTIVE USERS"
          value={activeUsers}
          note="Across all regions"
          leftBorder="#8B5CF6"
        />
        <StatCard
          title="COMPLETED CASES"
          value={completedCases}
          note={`${((completedCases / totalRecords) * 100).toFixed(0)}% completion`}
          leftBorder="#10B981"
        />
        <StatCard
          title="PENDING CASES"
          value={pendingCases}
          note="Requires attention"
          leftBorder="#F59E0B"
        />
      </div>

      {/* Main Content */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '1.5rem', marginBottom: '2rem' }}>
        <BarChart data={regionData} />
        <ActivityList items={recentActivity} />
      </div>

      <QuickActions />
    </div>
  )
}

function StatCard({ title, value, note, leftBorder }) {
  return (
    <div
      style={{
        backgroundColor: '#1F2937',
        borderRadius: '8px',
        padding: '1.5rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        borderLeft: `4px solid ${leftBorder}`
      }}
    >
      <h3 style={{ color: '#9CA3AF', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{value}</p>
      <p style={{ color: leftBorder, fontSize: '0.9rem' }}>{note}</p>
    </div>
  )
}

function BarChart({ data }) {
  const max = Math.max(...data.map(d => d.count), 1)
  return (
    <div
      style={{
        backgroundColor: '#1F2937',
        borderRadius: '8px',
        padding: '1.5rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}
    >
      <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>Regional Distribution</h3>
      <div style={{ display: 'flex', height: '200px', alignItems: 'flex-end', justifyContent: 'space-around' }}>
        {data.map(({ region, count }) => (
          <div key={region} style={{ textAlign: 'center' }}>
            <div
              style={{
                height: `${(count / max) * 180}px`,
                width: '40px',
                backgroundColor: '#3B82F6',
                borderRadius: '4px 4px 0 0',
                marginBottom: '0.5rem'
              }}
            />
            <p style={{ color: '#9CA3AF', fontSize: '0.8rem', marginBottom: '0.25rem' }}>{region}</p>
            <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: 'bold' }}>{count}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ActivityList({ items }) {
  return (
    <div
      style={{
        backgroundColor: '#1F2937',
        borderRadius: '8px',
        padding: '1.5rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}
    >
      <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>Recent Activity</h3>
      {items.map(({ id, action, user, timestamp }) => (
        <div key={id} style={{ padding: '0.75rem 0', borderBottom: '1px solid #374151' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
            <p style={{ color: 'white', fontSize: '0.9rem' }}>{action}</p>
            <p style={{ color: '#9CA3AF', fontSize: '0.8rem' }}>{timestamp}</p>
          </div>
          <p style={{ color: '#3B82F6', fontSize: '0.8rem' }}>{user}</p>
        </div>
      ))}
    </div>
  )
}

function QuickActions() {
  return (
    <div
      style={{
        // backgroundColor: '#1F2937',
        // borderRadius: '8px',
        // padding: '1.5rem',
        // boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}
    >
      {/* <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>Quick Actions</h3> */}
      {/* <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}> */}
        {/* <button style={actionBtnStyle}>Add New Record</button>
        <button style={actionBtnStyle}>Generate Report</button>
        <button style={actionBtnStyle}>View All Users</button>
        <button style={actionBtnStyle}>Export Data</button> */}
      {/* </div> */}
    </div>
  )
}

const actionBtnStyle = {
  backgroundColor: '#3B82F6',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  padding: '0.75rem 1.5rem',
  fontWeight: 'bold',
  cursor: 'pointer'
}
