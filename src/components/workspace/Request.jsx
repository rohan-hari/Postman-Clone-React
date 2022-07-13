import React from 'react';
import { useState } from 'react';
import ReqInputs from '../Inputs/ReqInputs';

export default function Request() {
  const [url, setUrl] = useState('');
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
