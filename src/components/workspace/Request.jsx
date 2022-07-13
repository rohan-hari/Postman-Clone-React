import React from 'react';
import { useState } from 'react';
import ReqInputs from '../Input/RequestEditor/RequestEditor';

export default function Request() {
  const [url, setUrl] = useState('https://sample.com');
  const [reqMethod, setReqMethod] = useState('GET');

  return (
    <>
      <ReqInputs
        url={url}
        setUrl={setUrl}
        reqMethod={reqMethod}
        setReqMethod={setReqMethod}
      />
    </>
  );
}
