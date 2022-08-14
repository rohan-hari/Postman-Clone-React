import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Request from './components/Workspace/Request/RequestPanel';
import Response from './components/Workspace/Response/ResponsePanel';

const App = () => {
  return (
    <>
      <Navbar />
      <Request />
      <Response />
    </>
  );
};

export default App;
