import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import KeyValueEditor from './KeyValueEditor';

export default function KeyValuePane({ panelValue, setPanelValue }) {
  const renderedList = panelValue.map((value) => {
    return <KeyValueEditor />;
  });
  return <>{renderedList}</>;
}
