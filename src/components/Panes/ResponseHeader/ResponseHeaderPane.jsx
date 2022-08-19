import React from 'react';

export default function ResponseHeaderPane({ response }) {
  const responseHeaders = [];

  if (!(response == null)) {
    if ('headers' in response) {
      Object.entries(response.headers).forEach(([key, value]) => {
        responseHeaders.push({
          key: key,
          value: value,
        });
      });
    }
  }
  const renderedHeaders = responseHeaders.map(({ key, value, index }) => {
    return (
      <tr key={index}>
        <td className='pb-1'>{key}</td>
        <td>{value}</td>
      </tr>
    );
  });
  return (
    <table className='text-left'>
      <thead>
        <tr >
          <th className='w-36 pb-1.5'>Key</th>
          <th className='w-60'>Value</th>
        </tr>
      </thead>
      <tbody>{renderedHeaders}</tbody>
    </table>
  );
}
