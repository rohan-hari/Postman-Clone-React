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
  const renderedHeaders = responseHeaders.map(({ key, value }) => {
    return (
      <tr key={key}>
        <td>{key}</td>
        <td>{value}</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Key</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>{renderedHeaders}</tbody>
    </table>
  );
}
