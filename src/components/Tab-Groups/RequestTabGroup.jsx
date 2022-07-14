import React from 'react';
import { Tab } from '@headlessui/react';

import KeyValuePane from '../Input/KeyValue/KeyValuePane';

export default function RequestTabGroup({
  queryParams,
  setQueryParams,
  headers,
  setHeaders,
}) {
  const requestTabs = [
    {
      slug: 'query-params',
      title: 'Query Params',
      pane: KeyValuePane,
      state: queryParams,
      setState: setQueryParams,
    },
    {
      slug: 'headers',
      title: 'Headers',
      pane: KeyValuePane,
      state: headers,
      setState: setHeaders,
    },
  ];

  return (
    <Tab.Group>
      <Tab.List>
        {requestTabs.map((tab) => (
          <Tab key={tab.slug}>{tab.title}</Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {requestTabs.map((tab) => (
          <Tab.Panel key={tab.slug}>
            <tab.pane />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
