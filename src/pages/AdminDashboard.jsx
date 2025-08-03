import React, { useState } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className={`dashboard-container d-flex ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      {/* Sidebar */}
      <nav className="sidebar bg-primary text-white p-3">
        <h3 className="mb-4">Admin Panel</h3>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">Dashboard</a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">Users</a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">Reports</a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">Settings</a>
          </li>
          <li className="nav-item mt-auto">
            <button
              className="btn btn-light btn-sm w-100"
              onClick={toggleSidebar}
            >
              {sidebarCollapsed ? 'Expand' : 'Collapse'}
            </button>
          </li>
        </ul>
      </nav>

      {/* Main content */}
      <div className="main-content flex-grow-1 p-4">
        {/* Header */}
        <header className="d-flex justify-content-between align-items-center mb-4">
          <h2>Welcome, Admin</h2>
          <div className="profile d-flex align-items-center">
            <img
              src="https://i.pravatar.cc/40"
              alt="Admin"
              className="rounded-circle me-2"
            />
            <span>Admin User</span>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="row g-3">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Total Users</h5>
                <p className="card-text display-6">1,250</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Active Courses</h5>
                <p className="card-text display-6">45</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Pending Requests</h5>
                <p className="card-text display-6">12</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional content */}
        <section className="mt-5">
          <h4>Recent Activity</h4>
          <ul className="list-group">
            <li className="list-group-item">User John Doe signed up</li>
            <li className="list-group-item">Course "React Basics" updated</li>
            <li className="list-group-item">System maintenance scheduled</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
