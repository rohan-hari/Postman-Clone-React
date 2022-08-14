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
      panelValue: queryParams,
      setPanelValue: setQueryParams,
    },
    {
      slug: 'headers',
      title: 'Headers',
      panel: KeyValuePane,
      panelValue: headers,
      setPanelValue: setHeaders,
    },
    {
      slug: 'body',
      title: 'Body',
      panel: JsonEditorPane,
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
        <TabPanel key={tab.slug}>
          <tab.panel
            panelValue={tab.panelValue}
            setPanelValue={tab.setPanelValue}
          />
        </TabPanel>
      ))}
    </Tabs>
  );
}
