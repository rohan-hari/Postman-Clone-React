import React from 'react';

const requestMethods = [
  { key: 'get', value: 'GET' },
  { key: 'post', value: 'POST' },
  { key: 'put', value: 'PUT' },
  { key: 'patch', value: 'PATCH' },
  { key: 'delete', value: 'DELETE' },
];

export default function ReqInputs({
  url,
  setUrl,
  reqMethod,
  setReqMethod,
  sendRequest,
}) {
  return (
    <>
      <form>
        <select
          value={reqMethod}
          onChange={(e) => setReqMethod(e.target.value)}
        >
          {requestMethods.map((option) => (
            <option key={option.key} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
        <input value={url} onChange={(e) => setUrl(e.target.value)} />
        <button type='button' onClick={(e) => sendRequest(e)}>
          Send
        </button>
      </form>
    </>
  );
}
