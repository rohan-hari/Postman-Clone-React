import React, { useState } from 'react';

import UrlEditor from '../RequestEditor/UrlEditor/UrlEditor';
import RequestTabGroup from '../Tab-Groups/RequestTabGroup';

export default function Request() {
  const [url, setUrl] = useState('https://sample.com');
  const [reqMethod, setReqMethod] = useState('GET');

  const [queryParams, setQueryParams] = useState();
  const [headers, setHeaders] = useState();
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
