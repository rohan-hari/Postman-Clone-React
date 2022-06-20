import React from 'react'
import { Tab } from '@headlessui/react'

import QueryParamsTab from './QueryParamsTab'
import HeadersTab from './HeadersTab'
import JsonTab from './JsonTab'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function index() {
  let tabs = ['Query Params', 'Headers', 'JSON']

  return (
    <Tab.Group defaultIndex={0}>
      <Tab.List className="flex mt-8">
          {tabs.map(( tab, index ) => (
              <Tab key={index} 
                  className={({ selected}) => classNames(`py-2 px-4 border focus:outline-none`, 
                  selected ? 'text-orange-600 bg-white' : 'text-gray-800 bg-gray-100 hover:bg-gray-50 ' 
                    )} >
                  {tab}
              </Tab>
            ))}
      </Tab.List>
    <Tab.Panels className="pt-4 pb-2 px-4 rounded-b-lg rounded-tr-lg border">
        <QueryParamsTab />
        <HeadersTab />
        <JsonTab />
    </Tab.Panels>
    </Tab.Group>
  )
}
