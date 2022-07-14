import React, { useState } from 'react';

import RequestEditor from '../Input/RequestEditor/RequestEditor';
import RequestTabGroup from '../Tab-Groups/RequestTabGroup';

export default function Request() {
  const [url, setUrl] = useState('https://sample.com');
  const [reqMethod, setReqMethod] = useState('GET');

  return (
    <>
      <RequestEditor
        url={url}
        setUrl={setUrl}
        reqMethod={reqMethod}
        setReqMethod={setReqMethod}
      />
      <RequestTabGroup />
    </>
  );
}
