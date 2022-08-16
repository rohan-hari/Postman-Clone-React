const convertKeyValueToObject = (keyPairs) => {
  return [...keyPairs].reduce((data, pair) => {
    const key = pair.keyItem;
    const value = pair.valueItem;

    if (key === '') return data;
    return {
      ...data,
      [key]: value,
    };
  }, {});
};

export { convertKeyValueToObject };
