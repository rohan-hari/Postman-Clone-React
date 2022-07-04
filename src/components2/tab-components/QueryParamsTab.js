import React, { useState } from 'react'
import { Tab } from '@headlessui/react'

export default function QueryParamsTab() {

  const [queryParamsValues, setQueryParamsValues] = useState([{ key: "", value : ""}])

  let handleChange = (i, e) => {
    let newQueryParamsValues = [...queryParamsValues];
    newQueryParamsValues[i][e.target.name] = e.target.value;
    setQueryParamsValues(newQueryParamsValues);
  }
    
  let addQueryParamsField = () => {
      setQueryParamsValues([...queryParamsValues, { key: "", value: "" }])
  }

  let removeQueryParamsField = (i) => {
    if(queryParamsValues.length > 1 ){
      let newQueryParamsValues = [...queryParamsValues];
      newQueryParamsValues.splice(i, 1);
      setQueryParamsValues(newQueryParamsValues)
    }
    else {
        let resetQueryParamsValues = [...queryParamsValues];
        resetQueryParamsValues[0] = {key:"", value:""};
        setQueryParamsValues(resetQueryParamsValues)
     }
  }

  return (
    <Tab.Panel>
        {queryParamsValues.map((element, index) => (
            <div className="mt-3" key={index}>
              <input className="px-4 py-2 w-[44%] border rounded-md border-gray-300 hover:border-orange-500 focus:outline-orange-500"
                     type="text" placeholder="Key" name="key" value={element.key || ""} onChange={e => handleChange(index, e)} />
              <input className="ml-3 px-4 py-2 w-[44%] border rounded-md border-gray-300 hover:border-orange-500 focus:outline-orange-500"
                     type="text" placeholder="Value" name="value" value={element.value || ""} onChange={e => handleChange(index, e)} />
            
               <button type="button"  className="ml-4 px-4 py-1 rounded-md text-red-500 bg-red-50 border border-red-100 hover:bg-red-100"
                onClick={() => removeQueryParamsField(index)}>Remove</button>
              </div>
          ))}
              <button className="mt-6 mb-2 px-6 py-1.5 rounded-md text-gray-700 border border-orange-200 bg-orange-100 hover:bg-orange-200" 
                      type="button" onClick={addQueryParamsField}>Add</button>
      </Tab.Panel>
  )
}
