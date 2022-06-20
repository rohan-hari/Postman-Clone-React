import React, { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs() {

  let tabs = ['Query Params', 'Headers', 'JSON']

  const [ queryParamsValues, setQueryParamsValues ] = useState([{ key:"", value: "" }])
  const [ headerValues, setHeaderValues]  = useState([{ key:"", value: "" }])

  let handleChange = (i, e) => {
    let newQueryParamsValues = [...queryParamsValues];
    newQueryParamsValues[i][e.target.name] = e.target.value;
    setQueryParamsValues(newQueryParamsValues);
    console.log(newQueryParamsValues)
  }

  let addFormFields = () => {
    setQueryParamsValues([...queryParamsValues, {key:"", value: "" }])
    console.log(queryParamsValues)
  }
  let addFormFields2 = () => {
    setHeaderValues([...headerValues, { key:"", value: "" }])
  }

let removeFormFields = (i) => {
    let newQueryParamsValues = [...queryParamsValues];
    let indecx = i
    newQueryParamsValues.splice(indecx,1)
    
    setQueryParamsValues(newQueryParamsValues)
}
let removeFormFields2 = (i) => {
  let newHeaderValues = [...headerValues];
  newHeaderValues.splice(i, 1);
  setHeaderValues(newHeaderValues)
}

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
        <Tab.Panel>
        {queryParamsValues.map((element, index) => (
            <div key={index} className="mt-3">
              <input className="px-4 py-2 w-[44%] border rounded-md border-gray-300 hover:border-orange-500 focus:outline-orange-500"
                type="name" placeholder="Key" value={element.name || ""} onChange={e => handleChange(index, e)} /> 
              <input className="ml-3 px-4 py-2 w-[44%] border rounded-md border-gray-300 hover:border-orange-500 focus:outline-orange-500"
              type="name" placeholder="Value"  value={element.value || ""} onChange={e => handleChange(index, e)}/>
              {
                index ? 
                <button type="button"  className="ml-4 px-4 py-1 rounded-md text-red-500 bg-red-50 border border-red-100 hover:bg-red-100"
                onClick={() => removeFormFields(index)}>Remove</button> 
                : null
              }
            </div>
          ))}
           <button type="button" className="mt-6 mb-2 px-6 py-1.5 rounded-md text-gray-700 border border-orange-200 bg-orange-100" 
                   onClick={() => addFormFields()}>
             Add
            </button>         
        </Tab.Panel>
        <Tab.Panel> 
          {headerValues.map((element, index) => (
            <div key={index} className="mt-3">
              <input className="px-4 py-2 w-[44%] border rounded-md border-gray-300 hover:border-orange-500 focus:outline-orange-500"
                type="name" placeholder="Key"
                 /> 
              <input className="ml-3 px-4 py-2 w-[44%] border rounded-md border-gray-300 hover:border-orange-500 focus:outline-orange-500"
              type="name" placeholder="Value"/>
              {
                index ? 
                <button type="button"  className="ml-4 px-4 py-1 rounded-md text-red-500 bg-red-50 border border-red-100 hover:bg-red-100"
                onClick={() => removeFormFields2(index)}>Remove</button> 
                : null
              }
            </div>
          ))}
           <button type="button" className="mt-6 mb-2 px-6 py-1.5 rounded-md text-gray-700 border border-orange-200 bg-orange-100" 
                   onClick={() => addFormFields2()}>
             Add
            </button> 
            </Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}
