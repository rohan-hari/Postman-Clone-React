import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import KeyValueEditor from './KeyValueEditor';

export default function KeyValuePane({ paneValue, setPaneValue }) {
  const onKeyPairAdd = () => {
    setPaneValue((paneValue) => [
      ...paneValue,
      {
        id: uuidv4(),
        keyItem: '',
        valueItem: '',
      },
    ]);
  };

  const onKeyPairRemove = (keyPair) => {
    let newKeyValues = [...paneValue];
    newKeyValues = newKeyValues.filter((x) => x.id !== keyPair.id);
    setPaneValue(newKeyValues);
  };

  const onKeyPairUpdate = (keyPair) => {
    const elementIndex = paneValue.findIndex(
      (element) => element.id === keyPair.id
    );
    let newKeyValues = [...paneValue];
    newKeyValues[elementIndex] = {
      ...newKeyValues[elementIndex],
      keyItem: keyPair.keyItem,
      valueItem: keyPair.valueItem,
    };
    setPaneValue(newKeyValues);
  };

  const renderedList = paneValue.map((keyPair) => {
    return (
      <KeyValueEditor
        key={keyPair.id}
        keyPair={keyPair}
        setKeyPair={(keyPairValue) => onKeyPairUpdate(keyPairValue)}
        onKeyPairRemove={() => onKeyPairRemove(keyPair)}
      />
    );
  });

  return (
    <>
    <div className=''>
      {renderedList}
      <button 
        className="px-6 py-1 rounded-md text-orange-600 border border-orange-400 hover:bg-orange-100"
        onClick={() => onKeyPairAdd()}>Add</button>
        </div>
    </>
  );
}
