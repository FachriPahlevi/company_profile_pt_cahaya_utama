import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from 'react-countup';

const CapabilitiesItem = ({ end, title, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center p-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isInView ? 1 : 0, 
        scale: isInView ? 1 : 0.8 
      }}
      transition={{ 
        duration: 0.6, 
        delay: delay,
        type: "spring",
        stiffness: 120,
        damping: 10
      }}
    >
      <motion.span
        className="text-4xl sm:text-5xl md:text-6xl font-bold block text-yellow-400"
        initial={{ opacity: 0, y: 30 }}
        animate={{ 
          opacity: isInView ? 1 : 0, 
          y: isInView ? 0 : 30,
          transition: { 
            duration: 0.8, 
            type: "spring",
            stiffness: 100,
            damping: 8
          } 
        }}
      >
        {isInView && (
          <CountUp 
            start={0} 
            end={end} 
            duration={2.5} 
            separator="." 
            enableScrollSpy={true}
            scrollSpyOnce={true}
          />
        )}
      </motion.span>
      
      <p className="mt-2 font-medium text-sm sm:text-base text-white">
        {title}
      </p>
    </motion.div>
  );
};

const Capabilities = () => {
  return (
    <section className="bg-[#27506e] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 lg:mb-0 text-center lg:text-left col-span-1">
            Kapabilitas
            <br className="hidden lg:block" />
            Perusahaan
          </h2>
          
          <div className="col-span-1 lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <CapabilitiesItem 
                end={10} 
                title="Representatif Kantor & Cabang" 
                delay={0.1} 
              />
              
              <CapabilitiesItem 
                end={134} 
                title="Manajemen Profesional" 
                delay={0.2} 
              />
              
              <CapabilitiesItem 
                end={116} 
                title="Klien Perusahaan di Tanah Air" 
                delay={0.3} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;