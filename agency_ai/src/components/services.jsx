import react from 'react';
import assets from '../assets/assets';
import Title from './Title';

const Services = () => {
    const servicesData = [
        {
            title: "Advertising",
            description:"We turn bold ideas into powerfull digital solutions that connect engage...",
            icon: assets.ads_icon
        },
        {
            title: "Content marketing",
            description :"We  help you execute your plan and deliver results .",
            icon: assets.assets.marketing_icon
        },

        {
            title: "Content writing",
            description :"We  help you execute your plan and deliver results .",
            icon: assets.assets.content_icon,
        },
        {
            title: "social media",
            description :"We  help you execute your plan and deliver results .",
            icon: assets.assets.social_icon,
        },

    ] 

    return(
        <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:theme-white'>
            <img src={assets.bgImage2} alt="" className="absolute  -top-110 -left-70 -z-1 dark:hidden"/>
            <Title title="How can we help? " desc="From strategy to executionwe craft digital solutions, that  move your businness forward"/>

        </div>


    ) 
}
export default Services;