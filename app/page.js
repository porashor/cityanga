import React from 'react'
import BannerSlider from '@/components/BannerSlider'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SuggestForYou from '@/components/SuggestForYou';
import AllCategories from '@/components/AllCategories';

const page = () => {

  return (
    <div className='dark:bg-[#152433] dark:text-white py-3 bg-[#f5f5f5]'>
      <div className='my-3 dark:bg-[#192c3f] bg-[#ececec] shadow-sm w-[90%] md:w-[80%] mx-auto'>
        <BannerSlider/>
        <SuggestForYou lengthAmount={6} name={"Suggest For You"}/>
        <AllCategories/>
        <SuggestForYou lengthAmount={0} name={"All products"}/>
      </div>
    </div>
  )
}

export default page
