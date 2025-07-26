import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SignUp = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow flex items-center justify-center bg-purple-50 py-12">
        <form className="bg-white shadow-md rounded-lg p-8 w-full max-w-md space-y-6">
          <h2 className="text-2xl font-bold text-center text-purple-700">Create an Account</h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default SignUp;
