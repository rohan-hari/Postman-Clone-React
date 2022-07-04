import React from "react";
import Tabs from './tab-components/index'

export default function WorkSpace() {
  return (
    <>
      <div className="h-[91vh] max-w-6xl mx-auto pt-10 border-x border-gray-300 bg-white">
      <div className="mx-auto w-11/12">
        <form>
          <select className="px-4 py-2 border rounded-md border-gray-300 hover:border-orange-500 focus:outline-none bg-gray-100">
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="PATCH">PATCH</option>
              <option value="DELETE">DELETE</option>
            </select>
            <input required
              className="ml-3 w-[79%] px-4 py-2 border rounded-md border-gray-300 hover:border-orange-500 focus:outline-orange-500"
              type="url" placeholder="Enter request URL"
            />
            <button type="submit" className="ml-3 px-6 py-2 rounded-md font-semibold text-white bg-orange-500 hover:bg-orange-600" >
              Send
            </button>
          <Tabs />
        </form>
        </div>
       </div>
    </>
  );
}

