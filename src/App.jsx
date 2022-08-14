import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Request from './components/Workspace/Request/RequestPanel';
import Response from './components/Workspace/Response/ResponsePanel';

const App = () => {
  const [response, setResponse] = useState(null);

  return (
    <>
      <Navbar />
      <Request />
      <Response response={response} />
    </>
  );
};

export default App;
