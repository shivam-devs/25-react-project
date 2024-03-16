import React from 'react'
import Folder from './Folder'
import { structure } from './structure'
const VsCode = () => {
  return (
    <div
      id="vscode"
      className={`w-[60vw] h-auto min-h-[40vh]  flex flex-col gap-4 p-3 bg-gray-900`}
    >
      <div className="font-bold text-xl w-full flex justify-center">Vs Code</div>
      <div className='text-white h-auto bg-black w-[20%] border-r'><Folder data={structure} /></div>
    </div>
  )
}

export default VsCode