import React from 'react';
import Header from './components/Header'; // Capital "H" to match your file name
import Footer from './components/Footer'; // insert the path here

function App() {
  return (
    <div className="App">
      <Header />
      {/* add Main here if needed */}

      <Footer />  {/*  adds your Footer to the page */}
    </div>
  );
}

export default App;
