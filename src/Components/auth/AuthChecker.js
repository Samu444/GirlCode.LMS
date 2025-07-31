// src/components/AuthChecker.js
import { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

const AuthChecker = ({ children, requiredRoles = [] }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        navigate('/login');
        return;
      }

      // If no specific roles required, just verify authentication
      if (requiredRoles.length === 0) {
        setIsAuthorized(true);
        setLoading(false);
        return;
      }

      // Check user role if required
      try {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        const userRole = userDoc.data()?.role;
        
        if (requiredRoles.includes(userRole)) {
          setIsAuthorized(true);
        } else {
          navigate('/unauthorized');
        }
      } catch (error) {
        console.error("Error checking user role:", error);
        navigate('/error');
      } finally {
        setLoading(false);
      }
    });

    return unsubscribe;
  }, [navigate, requiredRoles]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return isAuthorized ? children : null;
};

export default AuthChecker;