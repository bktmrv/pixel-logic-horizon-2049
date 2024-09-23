'use client'

import { useState } from 'react'
import { JSONViewer } from './components/JSONViewer'
import sampleData from './sample-data'
import { IconListDetails, IconX } from '@tabler/icons-react'

export default function Home() {
  const [jsonString, setJsonString] = useState(sampleData[0])
  const [copiedValue, setCopiedValue] = useState('')

  return (
    <main className="h-lvh bg-[#F9FAFA]">
      <div className="px-8 h-full flex items-center justify-between">
        <div className="w-1/2 h-4/5 flex gap-4">
          <textarea
            className="w-full h-full resize-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2 shadow-floating"
            value={jsonString}
            onChange={(e) => setJsonString(e.target.value)}
          />
          <div className="flex flex-col gap-4 relative">
            {sampleData.map((json, i) => (
              <button
                type="button"
                className="button w-20"
                onClick={() => setJsonString(sampleData[i])}
                key={sampleData[i]}
              >
                Sample {i + 1}
              </button>
            ))}

            <div className="absolute top-1/4">
              <h1 className="w-36">Copied value:</h1>
              <span className="text-bold text-blue-600">{copiedValue}</span>
            </div>
          </div>
        </div>

        <div className="w-[350px] h-[95%] flex flex-col gap-3 bg-white rounded-lg shadow-floating">
          <div className="flex items-center justify-between p-4 border-b border-b-[#ECEDED]">
            <div className="flex items-center gap-2">
              <span className="bg-[#ECEDED] rounded p-1">
                <IconListDetails size={16} />
              </span>
              <span>Cell details</span>
            </div>
            <IconX size={16} />
          </div>
          <div className="h-[90%] px-2">
            <JSONViewer data={jsonString} onValueCopy={setCopiedValue} />
          </div>
        </div>
      </div>
    </main>
  )
}
