import React from 'react'
import { getData } from '@/functions/FatchFunction'
import Image from 'next/image';



const AllCategories = async () => {
  const data = await getData('category')
  return (
    <div className='my-5 dark:bg-[#192c3f] bg-[#ececec] '>
      <h1 className='text-2xl capitalize -py-2'>All Categories For You</h1>
      <div className='bg-white dark:bg-[#162636] w-full py-5 my-2'>
        {/* detais */}
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 justify-around items-center my-3'>
          {
            data?.map((item, index)=>(
              <div key={index} className='w-[100%] aspect-square min-h-[150px] flex flex-col items-center justify-center hover:border hover:shadow-slate-600 transition-all duration-200'>
                <Image src={item.img} width={100}
  height={100} className='w-[80%] aspect-square object-cover' alt="" />
                <p className='text-lg capitalize'>{item.name}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default AllCategories
