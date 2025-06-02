"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Instagram, Linkedin, Twitter, Youtube, Facebook, Twitch, Github, Disc } from "lucide-react";
import { cn } from "@/lib/utils";

export function FeaturesBenefits() {
  return (
    <div className="min-h-screen w-full bg-black py-24 px-4 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Features & Benefits
          </h2>
        </motion.div>

        {/* First Row - Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Left Card - Social Media Icons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#0c0c0c] rounded-3xl border border-neutral-800 p-8 relative overflow-hidden h-[400px]"
          >
            {/* Text positioned at the top left, away from orbit lines */}
            <div className="absolute top-8 left-8 z-20 max-w-[220px]">
              <h3 className="text-3xl font-bold text-gray-300">Social Media <br /><span className="text-gray-500">Management</span></h3>
              <p className="mt-2 text-sm text-gray-500">
                Strategic content creation and engagement across all major platforms to build your brand presence.
              </p>
            </div>

            {/* Social Media Icons with orbit effect - centered in the card */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[280px] h-[280px]">
                {/* Orbit circles - enhanced visibility */}
                <div className="absolute inset-0 rounded-full border border-neutral-700 opacity-40"></div>
                <div className="absolute inset-[-30px] rounded-full border border-neutral-700 opacity-30"></div>
                <div className="absolute inset-[-60px] rounded-full border border-neutral-700 opacity-25"></div>
                
                {/* Center icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-16 h-16 bg-[#0e0e0e] rounded-xl flex items-center justify-center shadow-lg">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Orbiting icons with visible paths */}
                <motion.div 
                  className="absolute"
                  animate={{ 
                    rotateZ: [0, 360],
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="relative w-[280px] h-[280px]">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center shadow-lg">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
                          <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute"
                  animate={{ 
                    rotateZ: [0, -360],
                  }}
                  transition={{ 
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="relative w-[280px] h-[280px]">
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                      <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center shadow-lg">
                        <Facebook className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute"
                  animate={{ 
                    rotateZ: [0, 360],
                  }}
                  transition={{ 
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="relative w-[280px] h-[280px]">
                    <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center shadow-lg">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
                          <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute"
                  animate={{ 
                    rotateZ: [0, -360],
                  }}
                  transition={{ 
                    duration: 28,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="relative w-[280px] h-[280px]">
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center shadow-lg">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
                          <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Card - World Map */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#0c0c0c] rounded-3xl border border-neutral-800 p-8 relative overflow-hidden h-[400px]"
          >
            <div className="absolute inset-0 bg-[url('/world-map-dots.png')] bg-no-repeat bg-cover opacity-20"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-gray-300 mb-1">Available for</h3>
                <div className="text-5xl md:text-7xl font-bold text-gray-300">
                  every <span className="text-gray-500">brand</span>
                </div>
                <p className="mt-2 text-sm text-gray-500 max-w-md">
                  Tailored digital marketing strategies for businesses of all sizes, from startups to enterprise-level organizations.
                </p>
              </div>
              
              <div className="text-6xl md:text-8xl font-bold text-gray-300">
                150+ <span className="text-3xl md:text-5xl text-gray-500">Industries</span>
              </div>
            </div>
            
            {/* Animated dots */}
            <motion.div 
              className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-gray-300"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div 
              className="absolute top-1/3 left-1/3 w-2 h-2 rounded-full bg-gray-300"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />
            <motion.div 
              className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-gray-300"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>
        </div>
        
        {/* Second Row - Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* First Card - Platform Icons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#0c0c0c] rounded-3xl border border-neutral-800 p-8 relative overflow-hidden h-[250px]"
          >
            <div className="flex flex-wrap gap-4 mb-6">
              {[
                { name: 'Instagram', icon: <svg viewBox="0 0 24 24" className="w-5 h-5 text-white"><path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
                { name: 'X', icon: <svg viewBox="0 0 24 24" className="w-5 h-5 text-white"><path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                { name: 'Facebook', icon: <Facebook className="w-5 h-5 text-white" /> },
                { name: 'WhatsApp', icon: <svg viewBox="0 0 24 24" className="w-5 h-5 text-white"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
                { name: 'YouTube', icon: <Youtube className="w-5 h-5 text-white" /> }
              ].map((platform, i) => (
                <div key={i} className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center shadow-lg">
                  {platform.icon}
                </div>
              ))}
            </div>
            
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-2xl font-semibold text-gray-300">Client</h3>
              <h3 className="text-2xl font-semibold text-gray-500 mb-2">Acquisition</h3>
              <p className="text-sm text-gray-500">
                Data-driven strategies to attract high-quality leads and convert them into loyal customers for your business.
              </p>
            </div>
          </motion.div>
          
          {/* Second Card - User Count */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-[#0c0c0c] rounded-3xl border border-neutral-800 p-8 relative overflow-hidden h-[250px] flex flex-col justify-center"
          >
            <div className="text-6xl font-bold text-gray-300">
              5,000+
            </div>
            <div className="text-4xl font-bold text-gray-500 mb-4">
              Clients
            </div>
            
            {/* User profile images grid */}
            <div className="grid grid-cols-3 gap-2 mt-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full bg-neutral-800 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-neutral-700 to-neutral-800"></div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Third Card - Testimonial */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#0c0c0c] rounded-3xl border border-neutral-800 p-8 relative overflow-hidden h-[250px]"
          >
            <h3 className="text-2xl font-semibold text-gray-300">Success</h3>
            <h3 className="text-2xl font-semibold text-gray-500 mb-2">stories</h3>
            <p className="text-sm text-gray-500 mb-6">
              See how our digital marketing strategies have transformed businesses across diverse industries.
            </p>
            
            <div className="bg-neutral-900 rounded-xl p-4 border border-neutral-800">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-neutral-800 mr-3"></div>
                <div>
                  <p className="text-gray-300 text-sm font-semibold">Marketing Director</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                "Our <span className="text-green-400">conversion rate increased by 85%</span> within three months of implementing the new SEO and content strategy with <span className="text-cyan-400">Rikaz</span>"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 