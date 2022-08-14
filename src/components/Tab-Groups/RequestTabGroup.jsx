import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import './Tab-Groups.css';

import KeyValuePane from '../Panes/KeyValue/KeyValuePane';
import JsonEditorPane from '../Panes/Json/JsonEditorPane';

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
      panel: KeyValuePane,
      paneValue: queryParams,
      setPaneValue: setQueryParams,
    },
    {
      slug: 'headers',
      title: 'Headers',
      panel: KeyValuePane,
      paneValue: headers,
      setPaneValue: setHeaders,
    },
    {
      slug: 'body',
      title: 'Body',
      panel: JsonEditorPane,
      paneValue: body,
      setPaneValue: setBody,
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
        <TabPanel key={tab.slug}>
          <tab.panel
            paneValue={tab.paneValue}
            setPaneValue={tab.setPaneValue}
          />
        </TabPanel>
      ))}
    </Tabs>
  );
}
