import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import UrlEditor from '../RequestEditor/Url/UrlEditor';
import RequestTabGroup from '../Tab-Groups/RequestTabGroup';

const keyPairInitState = [
  {
    id: uuidv4(),
    keyItem: '',
    valueItem: '',
  },
];

export default function Request() {
  const [url, setUrl] = useState('https://sample.com');
  const [reqMethod, setReqMethod] = useState('GET');

  const [queryParams, setQueryParams] = useState(keyPairInitState);
  const [headers, setHeaders] = useState(keyPairInitState);
  const [body, setBody] = useState('{\n\t\n}');
  return (
    <>
      <UrlEditor
        url={url}
        setUrl={setUrl}
        reqMethod={reqMethod}
        setReqMethod={setReqMethod}
      />
      <RequestTabGroup
        queryParams={queryParams}
        setQueryParams={setQueryParams}
        headers={headers}
        setHeaders={setHeaders}
        body={body}
        setBody={setBody}
      />
    </>
  );
}
