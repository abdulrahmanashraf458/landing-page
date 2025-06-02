"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Instagram, Linkedin, Twitter, Youtube, Facebook, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { SparklesCore } from "@/components/ui/sparkles";

export function Footer() {
  const [emailFocus, setEmailFocus] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <footer className="w-full bg-black py-24 px-4 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      {/* Space background with subtle sparkles */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-20">
        <SparklesCore
          id="footer-sparkles"
          background="transparent"
          minSize={0.2}
          maxSize={0.8}
          particleDensity={40}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={0.3}
        />
      </div>
      
      {/* Gray gradient orbs */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-gray-900/30 to-gray-800/20 blur-[120px] opacity-30"></div>
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-gray-900/20 to-gray-800/10 blur-[100px] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16 border-b border-white/10 pb-16"
        >
          {/* Brand Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10 flex items-center justify-center">
                <motion.span 
                  className="text-2xl font-bold text-white"
                  whileHover={{ scale: 1.1 }}
                >
                  R
                </motion.span>
              </div>
              <span className="text-white text-2xl font-bold">Rikaz</span>
            </div>
            <p className="text-gray-300 mb-8 max-w-md text-base backdrop-blur-sm bg-black/10 rounded-xl p-4 border border-white/5">
              Transform your digital presence with our strategic marketing solutions designed to elevate your brand and drive measurable results.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <Instagram className="w-5 h-5" />, href: "#" },
                { icon: <Twitter className="w-5 h-5" />, href: "#" },
                { icon: <Facebook className="w-5 h-5" />, href: "#" },
                { icon: <Youtube className="w-5 h-5" />, href: "#" },
                { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                { icon: <Github className="w-5 h-5" />, href: "#" },
              ].map((social, i) => (
                <motion.a 
                  key={i} 
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-10 h-10 backdrop-blur-sm bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {["Overview", "Capabilities", "Partners", "Gallery", "Pricing"].map((item, i) => (
                <motion.li 
                  key={i}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1">
                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-6 text-lg">Services</h3>
            <ul className="space-y-3">
              {[
                "Social Media Management", 
                "Content Creation", 
                "SEO Optimization", 
                "Email Marketing",
                "PPC Campaigns"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a href="#" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1">
                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-6 text-lg">Newsletter</h3>
            <p className="text-gray-400 mb-6">Subscribe to receive the latest updates and offers.</p>
            <div className="flex relative overflow-hidden rounded-lg">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                className="w-full bg-black/30 backdrop-blur-md border border-white/10 rounded-l-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-white/30 transition-colors"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black rounded-r-lg px-4 flex items-center justify-center hover:bg-gray-200 transition-all font-medium"
                style={{
                  boxShadow: emailFocus ? '0 0 15px rgba(255,255,255,0.2)' : 'none',
                  transition: 'box-shadow 0.3s ease'
                }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Bottom row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-full px-6 py-2">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Rikaz. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-8 mt-6 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Contact Us"].map((item, i) => (
              <motion.a 
                key={i}
                whileHover={{ y: -2 }}
                href="#" 
                className="text-gray-400 hover:text-white text-sm relative group"
              >
                {item}
                <motion.div 
                  className="absolute -bottom-1 left-0 right-0 h-[1px] bg-white/50 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 