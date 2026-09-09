import React from 'react';
import assets from '../assets/assets';
import Title from './Title';
import ServiceCard from './ServiceCard';
import {easeOut, motion} from "motion/react"

const Services = () => {
  const servicesData = [
    {
      title: "Advertising",
      description: "We turn bold ideas into powerful digital solutions that connect and engage...",
      icon: assets.ads_icon,
    },
    {
      title: "Content Marketing",
      description: "We help you execute your plan and deliver results.",
      icon: assets.marketing_icon,
    },
    {
      title: "Content Writing",
      description: "We help you execute your plan and deliver results.",
      icon: assets.content_icon,
    },
    {
      title: "Social Media",
      description: "We help you execute your plan and deliver results.",
      icon: assets.social_icon,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.2 }
        }
      }}

      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-32 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-28 -left-20 -z-10 dark:hidden"
      />

      <Title
        title="How can we help?"
        desc="From strategy to execution we craft digital solutions that move your business forward"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
