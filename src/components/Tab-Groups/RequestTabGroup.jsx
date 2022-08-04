import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import './tabGroups.css'

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
    <Tabs forceRenderTabPanel>
      <TabList>
        {requestTabs.map((tab) => (
          <Tab key={tab.slug}>{tab.title}</Tab>
        ))}
      </TabList>
  
        {requestTabs.map((tab) => (
          <TabPanel  key={tab.slug}>
            <tab.panel
              panelValue={tab.panelValue}
              setPanelValue={tab.setPanelValue}
            />
          </TabPanel>
        ))}

    </Tabs>
  );
}
