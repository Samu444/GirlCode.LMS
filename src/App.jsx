// src/App.jsx
import AuthChecker from './components/AuthChecker';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              
              {/* Protected Routes */}
              <Route path="/learner-dashboard" element={
                <AuthChecker requiredRoles={['learner', 'admin']}>
                  <LearnerDashboard />
                </AuthChecker>
              } />
              
              <Route path="/admin" element={
                <AuthChecker requiredRoles={['admin']}>
                  <AdminDashboard />
                </AuthChecker>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}