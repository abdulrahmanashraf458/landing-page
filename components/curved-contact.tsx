"use client";

import React, { useMemo, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { SparklesCore } from "@/components/ui/sparkles";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";

export function CurvedContact() {
  const [buttonHover, setButtonHover] = useState(false);

  // Background particles
  const backgroundParticles = useMemo(() => {
    return (
      <SparklesCore
        id="contact-sparkles"
        key="contact-particles"
        background="transparent"
        minSize={0.2}
        maxSize={1.2}
        particleDensity={70}
        className="w-full h-full"
        particleColor="#FFFFFF"
        speed={0.4}
      />
    );
  }, []);

  return (
    <section className="relative w-full bg-black pt-0 pb-24 overflow-hidden -mt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      {/* Space background with sparkles */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-40">
        {backgroundParticles}
      </div>
      
      {/* Gray gradient effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-gray-900/30 to-gray-800/20 blur-[120px] opacity-30"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-gray-900/20 to-gray-800/10 blur-[100px] opacity-20"></div>
      
      {/* Spotlight effect */}
      <Spotlight
        className="absolute top-1/4 left-1/3 scale-[1.5] opacity-40"
        fill="white"
      />
      
      {/* Curved shape at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-black">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 w-full">
          <path 
            fill="#000000" 
            fillOpacity="1" 
            d="M0,192L80,181.3C160,171,320,149,480,165.3C640,181,800,235,960,245.3C1120,256,1280,224,1360,208L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 md:p-12 relative overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.05)]"
        >
          {/* Inner sparkles background */}
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-30">
            <SparklesCore
              id="inner-contact-sparkles"
              background="transparent"
              minSize={0.2}
              maxSize={0.8}
              particleDensity={40}
              className="w-full h-full"
              particleColor="#FFFFFF"
              speed={0.3}
            />
          </div>
          
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-gray-700/10 to-gray-900/10 rounded-full blur-2xl"></div>
          
          <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-between relative z-10">
            {/* Logo and Heading */}
            <div className="md:w-3/5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center mb-8"
              >
                <div className="relative w-16 h-16 rounded-xl overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10 flex items-center justify-center">
                  <motion.span 
                    className="text-3xl font-bold text-white"
                    whileHover={{ scale: 1.1 }}
                  >
                    R
                  </motion.span>
                </div>
                <span className="text-white text-3xl font-bold ml-4">Rikaz</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-bold text-white mb-6"
              >
                Ready to Transform <br/> 
                <span className="text-gray-400">Your Brand?</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-300 mb-8 text-xl backdrop-blur-sm bg-black/10 rounded-xl p-6 border border-white/5"
              >
                Get in touch with our team and let's create something amazing together. Whether you're looking to improve your social media presence, 
                boost your SEO rankings, or develop a comprehensive digital marketing strategy, we're all ears!
              </motion.p>
            </div>
            
            {/* Contact Button */}
            <div className="md:w-2/5 w-full flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="w-full flex flex-col gap-4 items-center"
              >
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-2xl w-full mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <span className="text-white">info@rikaz.com</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <span className="text-white">+1 (555) 123-4567</span>
                  </div>
                </div>
                
                <Link href="/contact" className="w-full">
                  <motion.button
                    onMouseEnter={() => setButtonHover(true)}
                    onMouseLeave={() => setButtonHover(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-white text-black font-medium py-5 px-10 rounded-xl flex items-center justify-center text-xl hover:bg-gray-200 transition-all shadow-lg"
                    style={{
                      boxShadow: buttonHover ? '0 0 20px rgba(255,255,255,0.2)' : '0 0 10px rgba(255,255,255,0.1)',
                      transition: 'box-shadow 0.3s ease'
                    }}
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 