import React from 'react';
import { Tab } from '@headlessui/react';

import KeyValuePanel from '../RequestEditor/KeyValue/KeyValuePanel';
import JsonEditorPanel from '../RequestEditor/Json/JsonEditorPanel';

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
      panel: KeyValuePanel,
      panelValue: queryParams,
      setPanelValue: setQueryParams,
    },
    {
      slug: 'headers',
      title: 'Headers',
      panel: KeyValuePanel,
      panelValue: headers,
      setPanelValue: setHeaders,
    },
    {
      slug: 'body',
      title: 'Body',
      panel: JsonEditorPanel,
      panelValue: body,
      setPanelValue: setBody,
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
            <tab.panel
              panelValue={tab.panelValue}
              setPanelValue={tab.setPanelValue}
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
