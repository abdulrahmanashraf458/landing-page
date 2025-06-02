"use client";

import React, { useMemo, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Check, Twitter, Linkedin, Github } from "lucide-react";
import Image from "next/image";
import { SparklesCore } from "@/components/ui/sparkles";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState<string>("");
  const [showInquiryDropdown, setShowInquiryDropdown] = useState(false);
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [formHover, setFormHover] = useState(false);

  // Background particles
  const backgroundParticles = useMemo(() => {
    return (
      <SparklesCore
        id="contact-page-sparkles"
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

  const inquiryTypes = [
    "Social Media Strategy",
    "Content Marketing",
    "SEO Services",
    "PPC Campaign",
    "Email Marketing",
    "Brand Development",
    "Web Analytics",
    "Conversion Optimization",
    "Marketing Automation",
    "Influencer Marketing",
    "Other"
  ];

  const roles = [
    "Marketing Manager",
    "Business Owner",
    "CMO",
    "Digital Strategist",
    "Brand Manager",
    "E-commerce Manager",
    "Social Media Manager",
    "Content Creator",
    "SEO Specialist",
    "Other"
  ];

  return (
    <main className="bg-black min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Space background with sparkles */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-40">
        {backgroundParticles}
      </div>
      
      {/* Background gradient nebulas - using only gray tones */}
      <div className="absolute top-[20%] right-[20%] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-gray-900/30 to-gray-800/20 blur-[120px] opacity-30" />
      <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-gray-900/20 to-gray-800/10 blur-[100px] opacity-20" />
      
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      {/* Spotlight effect */}
      <Spotlight
        className="absolute top-1/4 left-1/3 scale-[1.5] opacity-40"
        fill="white"
      />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row gap-8 lg:gap-16">
        {/* Left side content */}
        <div className="md:w-5/12 mb-8 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link href="/" className="flex items-center gap-4 mb-6 group">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10 flex items-center justify-center">
                <motion.span 
                  className="text-2xl font-bold text-white"
                  whileHover={{ scale: 1.1 }}
                >
                  R
                </motion.span>
              </div>
              <span className="text-white text-2xl font-bold group-hover:text-gray-300 transition-all duration-300">Rikaz</span>
            </Link>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Ready to Transform <span className="text-gray-400">Your Brand?</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 text-lg mb-8 backdrop-blur-sm bg-black/10 rounded-xl p-6 border border-white/5"
          >
            Get in touch with our team and let's create something amazing together. Whether you're looking to improve your social media presence, 
            boost your SEO rankings, or develop a comprehensive digital marketing strategy, we're all ears!
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-white text-black font-medium shadow-lg flex items-center justify-center gap-2"
            >
              Schedule a Call
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/10"
            >
              View Portfolio
            </motion.button>
          </motion.div>
          
          <div className="border-b border-white/10 my-10"></div>
          
          <div className="flex items-center gap-6 mb-6">
            {[Twitter, Linkedin, Github].map((Icon, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link 
                  href="#" 
                  target="_blank" 
                  className="w-10 h-10 rounded-full backdrop-blur-sm bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-400"
          >
            <p className="mb-6">
              Our team of marketing experts is ready to turn your ideas into reality.
              Fill out the form, and we'll get back to you faster than you can say conversion rate optimization.
            </p>
            
            <div className="flex items-center gap-2 text-white mb-6">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <Check className="w-4 h-4" />
              </div>
              <span>All services are available online</span>
            </div>
            
            <p className="text-sm">
              You may also find answers to your questions in our <Link href="#" className="text-gray-300 hover:underline">FAQs</Link>.
            </p>
          </motion.div>
        </div>
        
        {/* Right side form */}
        <div className="md:w-7/12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            onMouseEnter={() => setFormHover(true)}
            onMouseLeave={() => setFormHover(false)}
            style={{
              boxShadow: formHover ? '0 0 30px rgba(255,255,255,0.1)' : '0 0 30px rgba(255,255,255,0.05)',
              transition: 'box-shadow 0.3s ease'
            }}
          >
            <h2 className="text-2xl font-semibold text-white mb-6">How can we reach you?</h2>
            <p className="text-gray-400 mb-8">Please provide your contact information.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">First name</label>
                  <input
                    type="text"
                    className="w-full bg-black/30 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-gray-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Last name</label>
                  <input
                    type="text"
                    className="w-full bg-black/30 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-gray-500 transition-colors"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-black/30 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-gray-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Phone number</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full bg-black/30 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-gray-500 transition-colors"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Company website</label>
                  <input
                    type="url"
                    placeholder="example.com"
                    className="w-full bg-black/30 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-gray-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Role</label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setShowRoleDropdown(!showRoleDropdown)}
                      className="w-full bg-black/30 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 text-left text-gray-300 focus:outline-none focus:border-gray-500 transition-colors flex items-center justify-between"
                    >
                      <span>{selectedRole || "Your Role"}</span>
                      <svg className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${showRoleDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {showRoleDropdown && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-10 w-full mt-1 bg-black/60 backdrop-blur-xl border border-white/10 rounded-lg shadow-lg max-h-60 overflow-auto"
                      >
                        {roles.map((role, index) => (
                          <button
                            key={index}
                            type="button"
                            className="w-full px-4 py-2 text-left text-gray-300 hover:bg-white/10 transition-colors"
                            onClick={() => {
                              setSelectedRole(role);
                              setShowRoleDropdown(false);
                            }}
                          >
                            {role}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-2">Inquiry Type</label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowInquiryDropdown(!showInquiryDropdown)}
                    className="w-full bg-black/30 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 text-left text-gray-300 focus:outline-none focus:border-gray-500 transition-colors flex items-center justify-between"
                  >
                    <span>{inquiryType || "Select Inquiry Type"}</span>
                    <svg className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${showInquiryDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {showInquiryDropdown && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-10 w-full mt-1 bg-black/60 backdrop-blur-xl border border-white/10 rounded-lg shadow-lg max-h-60 overflow-auto"
                    >
                      {inquiryTypes.map((type, index) => (
                        <button
                          key={index}
                          type="button"
                          className="w-full px-4 py-2 text-left text-gray-300 hover:bg-white/10 transition-colors"
                          onClick={() => {
                            setInquiryType(type);
                            setShowInquiryDropdown(false);
                          }}
                        >
                          {type}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Anything else? <span className="text-gray-500">Optional</span>
                </label>
                <textarea
                  placeholder="Tell us more about your project, needs, and timeline"
                  rows={4}
                  className="w-full bg-black/30 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-gray-500 transition-colors resize-none"
                ></textarea>
              </div>
              
              <div className="flex items-start">
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      id="newsletter"
                      className="w-4 h-4 accent-gray-600 bg-black/30 border border-white/10 rounded focus:ring-gray-500"
                    />
                  </div>
                  <label htmlFor="newsletter" className="ml-3 text-sm text-gray-400">
                    Get emails from Rikaz about product updates, industry news, and events. If you change your mind, you can unsubscribe at any time.
                  </label>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4">
                <Link 
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back
                </Link>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-white text-black font-medium py-3 px-8 rounded-full flex items-center justify-center space-x-2 hover:bg-gray-200 transition-all shadow-lg"
                >
                  <span>Submit</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
              
              <p className="text-xs text-gray-500 mt-4">
                Rikaz will handle your data pursuant to its <Link href="#" className="text-gray-300 hover:underline">Privacy Policy</Link>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 