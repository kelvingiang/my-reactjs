import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


// THEM CAC COMPONENTS CUA MINH

import Main from '../content/main';


function App() {
  return (
    <Router>
      <div className='container-fluid'>
        <div className='col-lg-12'><Main /></div>
      </div>
    </Router>
  );
}

export default App;
