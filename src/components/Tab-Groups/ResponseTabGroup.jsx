import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ThreeDots } from 'react-loader-spinner';
import JsonEditorPane from '../Panes/Json/JsonEditorPane';
import ResponseHeaderPane from '../Panes/ResponseHeader/ResponseHeaderPane';

export default function ResponseTabGroup({ doc, setDoc, response, loading }) {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Response Body</Tab>
          <Tab>Response Header</Tab>
        </TabList>
        <TabPanel>
          {loading ? (
            <ThreeDots visible={loading} />
          ) : (
            <JsonEditorPane
              paneValue={doc}
              setPaneValue={setDoc}
              isEditable={false}
            />
          )}
        </TabPanel>
        <TabPanel>
          <ResponseHeaderPane response={response} />
        </TabPanel>
      </Tabs>
    </>
  );
}
