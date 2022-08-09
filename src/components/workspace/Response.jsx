import React, { useState, useEffect } from 'react';
import ResponseTabGroup from '../Tab-Groups/ResponseTabGroup';

export default function Response({ response, loading }) {
  const [doc, setDoc] = useState('{}');

  return (
    <>
      <ResponseTabGroup doc={doc} />
    </>
  );
}
