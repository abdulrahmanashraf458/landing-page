"use client";

import React, { useEffect, useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import { Cover } from "@/components/ui/cover";
import { SparklesCore } from "@/components/ui/sparkles";
import { motion, AnimatePresence } from "motion/react";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

export default function SpotlightPreview() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 2;
  
  // Navigation items
  const navItems = [
    {
      name: "PRODUCTS",
      link: "#products",
    },
    {
      name: "STORE",
      link: "#store",
    },
    {
      name: "CONTACT",
      link: "#contact",
    },
  ];
  
  // Background particles
  const backgroundParticles = useMemo(() => {
    return (
      <SparklesCore
        id="background-sparkles-fixed"
        key="background-particles"
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={60}
        className="w-full h-full"
        particleColor="#FFFFFF"
        speed={0.5}
      />
    );
  }, []);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="relative flex flex-col h-screen w-full overflow-hidden bg-black antialiased">
      {/* Fixed Sparkles Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-30">
        {backgroundParticles}
      </div>
      
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none opacity-10 z-0",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />

      {/* Navigation */}
      <Navbar className="bg-transparent z-50 max-w-7xl mx-auto">
        {/* Desktop Navigation */}
        <NavBody className="!backdrop-blur-xl !bg-black/30 border-b border-white/10 rounded-none">
          <NavbarLogo />
          <NavItems items={navItems} className="!text-white font-light tracking-wider" />
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav className="!backdrop-blur-xl !bg-black/30 border-b border-white/10">
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="!backdrop-blur-xl !bg-black/70 border-t border-white/10"
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-white tracking-wider py-3 border-b border-white/10 w-full"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Page indicator dots */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={`page-dot-${i}`}
            onClick={() => setCurrentPage(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentPage === i ? "bg-white" : "bg-white/30"
            }`}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>

      {/* Content container with AnimatePresence for transitions */}
      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          {currentPage === 0 && (
            <motion.div
              key="page-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col"
            >
              {/* Main content */}
              <div className="flex-1 flex flex-col items-center justify-center relative">
                {/* Central spotlight effect */}
                <Spotlight
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[2]"
                  fill="white"
                />
                
                {/* Main logo and text */}
                <div className="relative z-10 flex flex-col items-center justify-center gap-8">
                  <div className="text-[120px] font-bold tracking-wider opacity-20 text-white">
                    R I K A Z
                  </div>
                  <h1 className="text-4xl font-light tracking-[10px] text-white">
                    R I K A Z
                  </h1>
                  <p className="text-sm text-gray-400 tracking-wider">
                    elevate your digital presence
                  </p>
                </div>
              </div>

              {/* Bottom features section */}
              <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pb-16 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Feature 1 */}
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-white">01.</span>
                    <h3 className="text-sm uppercase tracking-wider text-white">Social Media</h3>
                  </div>
                  <p className="text-xs text-gray-400 mb-2">Strategic content creation and community management</p>
                  <p className="text-xs text-gray-500">Boost engagement and brand loyalty</p>
                </div>
                
                {/* Feature 2 */}
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-white">02.</span>
                    <h3 className="text-sm uppercase tracking-wider text-white">SEO & Analytics</h3>
                  </div>
                  <p className="text-xs text-gray-400 mb-2">Data-driven optimization for maximum visibility</p>
                  <p className="text-xs text-gray-500">Increase organic traffic and conversions</p>
                </div>
                
                {/* Feature 3 */}
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-white">03.</span>
                    <h3 className="text-sm uppercase tracking-wider text-white">Paid Campaigns</h3>
                  </div>
                  <p className="text-xs text-gray-400 mb-2">Targeted advertising across multiple platforms</p>
                  <p className="text-xs text-gray-500">Maximize ROI with precision targeting</p>
                </div>
              </div>
            </motion.div>
          )}

          {currentPage === 1 && (
            <motion.div
              key="page-1"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col"
            >
              {/* About page content */}
              <div className="flex-1 flex flex-col relative">
                {/* Large background text */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full text-[#171717] text-[15vw] font-bold leading-none z-0 pointer-events-none opacity-30">
                  About
                </div>
                
                {/* Spotlight effect for this page */}
                <Spotlight
                  className="absolute top-1/3 right-1/4 scale-[1.5]"
                  fill="white"
                />
                
                {/* Main content */}
                <div className="relative z-10 flex flex-col h-full justify-center px-8 md:px-16 max-w-4xl mx-auto">
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
                    About RIKAZ
                  </h1>
                  
                  <div className="text-gray-400 space-y-6 text-lg">
                    <p>
                      We are a digital marketing agency specializing in creating impactful online experiences that drive results. Our team combines creativity with data-driven strategies to elevate your brand's digital presence.
                    </p>
                    <p>
                      Founded with a passion for innovation, we work with businesses of all sizes to achieve their marketing goals through tailored solutions that stand out in today's competitive landscape.
                    </p>
                  </div>
                  
                  {/* Stats section */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    <div className="flex flex-col">
                      <span className="text-4xl font-bold text-white">5+</span>
                      <span className="text-gray-400">Years Experience</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-4xl font-bold text-white">100+</span>
                      <span className="text-gray-400">Projects Completed</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-4xl font-bold text-white">50+</span>
                      <span className="text-gray-400">Happy Clients</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation arrows - always visible */}
      <div className="absolute w-full flex justify-between px-8 top-1/2 -translate-y-1/2 z-30">
        <button 
          onClick={prevPage}
          className="text-white/50 hover:text-white transition-colors text-xl"
          aria-label="Previous page"
        >
          ←
        </button>
        <button 
          onClick={nextPage}
          className="text-white/50 hover:text-white transition-colors text-xl"
          aria-label="Next page"
        >
          →
        </button>
      </div>
    </div>
  );
} 