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
    <Tabs forceRenderTabPanel selectedTabClassName="border-b-2 text-orange-600">
      <TabList className="flex mt-5 border border-gray-300 rounded-t-lg">
        {requestTabs.map((tab) => (
          <Tab className="mr-3 py-2 px-4 border-orange-400 focus:outline-none 
                          hover:text-orange-500 cursor-pointer" 
              key={tab.slug}>
                {tab.title}
                </Tab>
        ))}
      </TabList>

      {requestTabs.map((tab) => (
        <TabPanel className="react-tabs__tab-panel px-4 py-4 rounded-b-lg border border-t-0 border-gray-300" key={tab.slug}>
          <tab.panel
            paneValue={tab.paneValue}
            setPaneValue={tab.setPaneValue}
          />
        </TabPanel>
      ))}
    </Tabs>
  );
}
