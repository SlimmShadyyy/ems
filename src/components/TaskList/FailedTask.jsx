import React from 'react'

const FailedTask = ({data}) => {
  return (
    
    <div className="flex-shrink-0 min-w-[300px] h-full p-5 bg-red-400 rounded-xl">
          <div className="flex justify-between items-center">
            <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
            <h4 className="text-sm">{data.date}</h4>
          </div>
          <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
          <p className="text-sm mt-2">
            {data.description}
          </p>
          <div className='mt-2'>
            <button className='bg-red-700 py-1 px-2 text-sm w-full'>Failed</button>
          </div>
        </div>
        
  )
}

export default FailedTask