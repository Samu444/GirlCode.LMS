import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

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
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 bg-white shadow-lg">
          {/* Sidebar Header */}
          <div className="flex items-center justify-center h-16 px-4 border-b">
            <div className="flex items-center">
              <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10C20 4.477 15.523 0 10 0zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm.5-13v5.5H15a.5.5 0 010 1h-5a.5.5 0 01-.5-.5v-6a.5.5 0 011 0z"/>
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-800">GirlCode</span>
            </div>
          </div>

          {/* Sidebar Navigation */}
          <div className="flex flex-col flex-grow pt-5 overflow-y-auto">
            <div className="flex flex-col flex-grow px-4 mt-5">
              {/* Main Navigation */}
              <div className="mb-4">
                <div className="px-2 py-1 text-xs font-semibold text-gray-400 uppercase">Main</div>
                <nav className="flex-1 space-y-1">
                  <a href="#" className="nav-item active flex items-center px-4 py-3 text-sm font-medium text-gray-700 rounded-md group">
                    <svg className="w-5 h-5 mr-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>
                    Dashboard
                  </a>
                  <a href="#" className="nav-item flex items-center px-4 py-3 text-sm font-medium text-gray-700 rounded-md group">
                    <svg className="w-5 h-5 mr-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                    </svg>
                    My Courses
                  </a>
                  <a href="#" className="nav-item flex items-center px-4 py-3 text-sm font-medium text-gray-700 rounded-md group">
                    <svg className="w-5 h-5 mr-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                    </svg>
                    Community
                  </a>
                </nav>
              </div>

              {/* Account Navigation */}
              <div className="mb-4">
                <div className="px-2 py-1 text-xs font-semibold text-gray-400 uppercase">Account</div>
                <nav className="flex-1 space-y-1">
                  <a href="#" className="nav-item flex items-center px-4 py-3 text-sm font-medium text-gray-700 rounded-md group">
                    <svg className="w-5 h-5 mr-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
                    </svg>
                    Settings
                  </a>
                  <button 
                    onClick={handleLogout}
                    className="w-full nav-item flex items-center px-4 py-3 text-sm font-medium text-gray-700 rounded-md group"
                  >
                    <svg className="w-5 h-5 mr-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path>
                    </svg>
                    Logout
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        {/* Top Navigation */}
        <div className="relative z-10 flex flex-shrink-0 h-16 bg-white shadow">
          <div className="flex justify-between flex-1 px-4">
            <div className="flex flex-1">
              {/* Search bar */}
              <div className="relative w-full max-w-sm text-gray-400 focus-within:text-gray-600">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input 
                  className="block w-full h-full py-2 pl-10 pr-3 text-gray-900 placeholder-gray-500 bg-gray-100 border border-transparent rounded-md focus:outline-none focus:bg-white focus:border-purple-300 sm:text-sm" 
                  placeholder="Search courses, topics..." 
                  type="search"
                />
              </div>
            </div>

            {/* User Profile */}
            <div className="flex items-center ml-4 md:ml-6">
              <div className="relative ml-3">
                <div>
                  <button className="flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-100">
                      <span className="text-sm font-medium leading-none text-purple-700">
                        {userData?.name?.charAt(0) || currentUser?.email?.charAt(0).toUpperCase()}
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                Welcome back, {userData?.name || currentUser?.email}!
              </h1>
              <p className="mt-1 text-sm text-gray-500">Continue your learning journey in tech</p>
            </div>

            {/* Rest of your dashboard content remains the same */}
            {/* ... */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default LearnerDashboard;