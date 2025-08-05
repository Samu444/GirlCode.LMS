import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import './LearnerDashboard.css';

const LearnerDashboard = () => {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      if (currentUser) {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
        setLoading(false);
      }
    };

    fetchUserData();
  }, [currentUser]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">GirlCode LMS</div>

        <nav>
          <a href="#" className="nav-item active">
            {/* Dashboard Icon */}
            <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            Dashboard
          </a>
          <a href="#" className="nav-item">
            {/* Courses Icon */}
            <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
            </svg>
            My Courses
          </a>
          <a href="#" className="nav-item">
            {/* Community Icon */}
            <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
            </svg>
            Community
          </a>
          <a href="#" className="nav-item">
            {/* Settings Icon */}
            <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
            </svg>
            Settings
          </a>
        </nav>

        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>Welcome back, {userData?.name || currentUser?.email}!</h1>
        <p>Continue your learning journey in tech</p>

        {/* Courses Section */}
        <section className="section-box">
          <h2>Your Courses</h2>
          <div className="course-list">
            <div className="course-card">
              <h4>Introduction to JavaScript</h4>
              <p>Learn the basics of JavaScript, the programming language of the web.</p>
            </div>
            <div className="course-card">
              <h4>React for Beginners</h4>
              <p>Build dynamic user interfaces with React.js and modern JavaScript.</p>
            </div>
            <div className="course-card">
              <h4>Backend Fundamentals</h4>
              <p>Understand backend development with Node.js and Express.</p>
            </div>
          </div>
        </section>

        {/* Upcoming Tasks Section */}
        <section className="section-box">
          <h2>Upcoming Tasks</h2>
          <ul className="task-list">
            <li>Complete JavaScript Quiz - Due August 10</li>
            <li>Submit React Project - Due August 15</li>
            <li>Attend Backend Workshop - August 20</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default LearnerDashboard;
