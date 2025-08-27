import React from 'react'
import { getData } from '@/functions/FatchFunction'
import Image from 'next/image'
import Link from 'next/link'

const SuggestForYou = async ({lengthAmount}) => {
  const data = await getData('product')
  const all = lengthAmount === 0 ? data?.length : lengthAmount
  const suggest = data?.slice(0, all)
  return (
    <div className='my-5 dark:bg-[#192c3f] bg-[#ececec] '>
      <h1 className='text-2xl capitalize -py-2'>suggest for you</h1>
      <div className='bg-white dark:bg-[#162636] w-full py-5 my-2'>
        {/* detais */}
        <div className='flex flex-wrap justify-around items-center gap-2'>
          {
            suggest?.map((item, index)=>(
              <Link href={item._id} key={index}>
                <div className='w-[300px] md:w-[180px] flex flex-col items-start my-2 hover:shadow-md hover:shadow-slate-200 p-2 transition-all duration-200'>
                <Image  loading="eager"  width={100} height={100} src={item.img} className='w-[300px] md:w-[180px] aspect-square object-cover' alt="" />
                <p className='text-lg capitalize'>{item.name}</p>
                <p className='text-md text-slate-500 line-clamp-2'>{item.description}</p>
                <div>
                  <div className='line-through'>৳{item.options[0].half}</div>
                  <div>৳{item.options[0].half-30}</div>
                </div>
              </div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SuggestForYou
