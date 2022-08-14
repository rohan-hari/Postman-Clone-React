import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import JsonEditorPane from '../Panes/Json/JsonEditorPane';
import ResponseHeaderPane from '../Panes/ResponseHeader/ResponseHeaderPane';

export default function ResponseTabGroup({ doc, setDoc }) {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Response Body</Tab>
          <Tab>Response Header</Tab>
        </TabList>
      </Tabs>
    </>
  );
}
