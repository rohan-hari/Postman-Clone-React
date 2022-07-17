import React from 'react';
import { Tab } from '@headlessui/react';

import KeyValuePanel from '../RequestEditor/KeyValue/KeyValuePanel';
import JsonEditorPanel from '../RequestEditor/JsonEditor/JsonEditorPanel';

export default function RequestTabGroup({
  queryParams,
  setQueryParams,
  headers,
  setHeaders,
  body,
  setBody,
}) {
  const requestTabs = [
    {
      slug: 'query-params',
      title: 'Query Params',
      pane: KeyValuePanel,
      state: queryParams,
      setState: setQueryParams,
    },
    {
      slug: 'headers',
      title: 'Headers',
      pane: KeyValuePanel,
      state: headers,
      setState: setHeaders,
    },
    {
      slug: 'body',
      title: 'Body',
      pane: JsonEditorPanel,
      state: body,
      setState: setBody,
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
            <tab.pane state={tab.state} setState={tab.setState} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
