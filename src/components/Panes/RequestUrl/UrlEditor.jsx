import React from 'react';

const requestMethods = [
  {
    slug: 'get',
    method: 'GET',
  },
  {
    slug: 'post',
    method: 'POST',
  },
  {
    slug: 'put',
    method: 'PUT',
  },
  {
    slug: 'patch',
    method: 'PATCH',
  },
  {
    slug: 'delete',
    method: 'DELETE',
  },
];

export default function UrlEditor({
  url,
  setUrl,
  reqMethod,
  setReqMethod,
  onInputSend,
}) {
  return (
    <>
      <form>
        <select
          value={reqMethod}
          onChange={(e) => setReqMethod(e.target.value)}
        >
          {requestMethods.map((option) => (
            <option key={option.slug} value={option.method}>
              {option.method}
            </option>
          ))}
        </select>
        <input value={url} onChange={(e) => setUrl(e.target.value)} />
        <button type='button' onClick={(e) => onInputSend(e)}>
          Send
        </button>
      </form>
    </>
  );
}
