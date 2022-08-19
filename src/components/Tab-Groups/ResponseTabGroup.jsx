import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ThreeDots } from 'react-loader-spinner';

import JsonEditorPane from '../Panes/Json/JsonEditorPane';
import ResponseHeaderPane from '../Panes/ResponseHeader/ResponseHeaderPane';

export default function ResponseTabGroup({ doc, setDoc, response, loading }) {
  const responseTabs = [
    {
      slug:'response-body',
      title:'Response Body'
    },
    {
      slug: 'response-header',
      title: 'Response Header'
    }
  ]
  return (
    <>
      <Tabs forceRenderTabPanel selectedTabClassName="border-b-2 text-orange-600">
        <TabList className="flex mt-5 border border-gray-300 rounded-t-lg">
          {responseTabs.map((tab) => (
            <Tab 
              className="mr-3 py-2 px-4 border-orange-400 focus:outline-none hover:text-orange-500 cursor-pointer" 
              key={tab.slug}>
                {tab.title}
            </Tab>
          ))}
        </TabList>
       
        <div className="px-4 py-4 rounded-b-lg border border-t-0 border-gray-300">
        {loading ? ( 
        <ThreeDots 
          height="30"
          width="30"
          color="gray"
          visible={true} 
        />
          ) : ( <>
        <TabPanel>
          <JsonEditorPane
              paneValue={doc}
              setPaneValue={setDoc}
              isEditable={false}
            />
        </TabPanel>
        <TabPanel >
          <ResponseHeaderPane response={response} />
        </TabPanel>
        </> )}
        </div>
      </Tabs>
    </>
  );
}
