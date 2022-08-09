import React, { useEffect, useState } from 'react';

export default function KeyValueEditor({
  keyPair,
  setKeyPair,
  onKeyPairRemove,
}) {
  const [keyValue, setKeyValue] = useState(keyPair);
  const [debouncedKeyValue, setDebouncedKeyValue] = useState(keyValue);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedKeyValue(keyValue);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [keyValue]);

  useEffect(() => {
    setKeyPair(debouncedKeyValue);
  }, [debouncedKeyValue]);

  const handleOnChange = (e) => {
    setKeyValue((prevState) => ({
      ...prevState,
      id: keyValue.id,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <input
        placeholder='Key'
        name='keyItem'
        onChange={(e) => handleOnChange(e)}
      />
      <input
        placeholder='Value'
        name='valueItem'
        onChange={(e) => handleOnChange(e)}
      />
      <button onClick={() => onKeyPairRemove(keyPair)}>Remove</button>
    </>
  );
}
