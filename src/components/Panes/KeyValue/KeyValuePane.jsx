import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import KeyValueEditor from './KeyValueEditor';

export default function KeyValuePane({ panelValue, setPanelValue }) {
  const onKeyPairAdd = () => {
    setPanelValue((panelValue) => [
      ...panelValue,
      {
        id: uuidv4(),
        keyItem: '',
        valueItem: '',
      },
    ]);
  };

  const onKeyPairRemove = (keyPair) => {
    let newKeyValues = [...panelValue];
    newKeyValues = newKeyValues.filter((x) => x.id !== keyPair.id);
    setPanelValue(newKeyValues);
  };

  const onKeyPairUpdate = (keyPair) => {
    const elementIndex = panelValue.findIndex(
      (element) => element.id === keyPair.id
    );
    let newKeyValues = [...panelValue];
    newKeyValues[elementIndex] = {
      ...newKeyValues[elementIndex],
      keyItem: keyPair.keyItem,
      valueItem: keyPair.valueItem,
    };
    setPanelValue(newKeyValues);
  };

  const renderedList = panelValue.map((keyPair) => {
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
      {renderedList}
      <button onClick={() => onKeyPairAdd()}>Add</button>
    </>
  );
}
