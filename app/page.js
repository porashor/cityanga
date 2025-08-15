import React from 'react'
import BannerSlider from '@/components/BannerSlider'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const page = () => {

  return (
    <div className='dark:bg-[#152433] dark:text-white py-3'>
      <div className='my-3 dark:bg-[#192c3f] bg-[#ececec] shadow-sm w-[80%] mx-auto'>
        <BannerSlider/>
      </div>
    </div>
  )
}

export default page
