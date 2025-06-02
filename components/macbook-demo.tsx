"use client";

import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import { SparklesCore } from "@/components/ui/sparkles";
import { motion } from "motion/react";

export default function MacbookDemo() {
  // Premium dashboard content with black and gray theme
  const DashboardContent = () => (
    <div className="flex flex-col w-full h-full bg-gradient-to-b from-black to-gray-900 overflow-hidden relative">
      {/* Subtle sparkles background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-20">
        <SparklesCore
          id="macbook-sparkles"
          background="transparent"
          minSize={0.2}
          maxSize={0.6}
          particleDensity={30}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={0.2}
        />
      </div>
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      {/* Header */}
      <div className="w-full p-4 border-b border-gray-800 backdrop-blur-sm bg-black/40 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center border border-gray-700">
            <span className="text-white font-bold">R</span>
          </div>
          <span className="text-white font-medium">RIKAZ Dashboard</span>
        </div>
        <div className="flex gap-4">
          {["Analytics", "Campaigns", "Content", "Settings"].map((item, i) => (
            <span key={i} className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">
              {item}
            </span>
          ))}
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex flex-1 p-6 gap-6 z-10">
        {/* Left sidebar */}
        <div className="w-64 flex flex-col gap-4">
          <div className="p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 h-40">
            <h3 className="text-white text-sm font-medium mb-2">Performance</h3>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-xs">Engagement</span>
                <div className="w-24 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-gray-500 to-white w-3/4 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-xs">Conversion</span>
                <div className="w-24 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-gray-500 to-white w-1/2 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-xs">Retention</span>
                <div className="w-24 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-gray-500 to-white w-5/6 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 flex-1">
            <h3 className="text-white text-sm font-medium mb-3">Quick Actions</h3>
            {["Create Campaign", "Schedule Post", "Analytics Report", "Team Meeting"].map((action, i) => (
              <div key={i} className="flex items-center gap-2 py-2 border-b border-gray-800 last:border-0 cursor-pointer hover:bg-white/5 px-2 rounded-md transition-colors">
                <div className="w-6 h-6 rounded-md bg-gray-800 flex items-center justify-center">
                  <span className="text-white text-xs">{i + 1}</span>
                </div>
                <span className="text-gray-300 text-sm">{action}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Main dashboard area */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Total Reach", value: "124.5K", change: "+12.4%" },
              { label: "Engagement Rate", value: "8.7%", change: "+3.2%" },
              { label: "Conversions", value: "2,851", change: "+8.7%" }
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10">
                <span className="text-gray-400 text-xs">{stat.label}</span>
                <div className="flex items-end gap-2 mt-1">
                  <span className="text-white text-2xl font-medium">{stat.value}</span>
                  <span className="text-gray-300 text-xs pb-1">{stat.change}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Chart area */}
          <div className="flex-1 p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-white font-medium">Campaign Performance</h3>
              <div className="flex gap-3">
                {["Day", "Week", "Month", "Year"].map((period, i) => (
                  <span key={i} className={`text-xs ${i === 2 ? 'text-white bg-white/10 px-2 py-1 rounded-md' : 'text-gray-400'}`}>
                    {period}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Simplified chart visualization */}
            <div className="h-48 flex items-end gap-2 px-4">
              {[35, 45, 30, 60, 75, 65, 80, 70, 85, 90, 75, 95].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div 
                    className="w-full bg-gradient-to-t from-gray-700 to-white/30 rounded-sm"
                    style={{ height: `${height}%` }}
                  ></div>
                  <span className="text-gray-500 text-[10px]">{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Recent activities */}
          <div className="p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 h-32">
            <h3 className="text-white text-sm font-medium mb-3">Recent Activities</h3>
            <div className="space-y-2">
              {[
                "New campaign 'Winter Collection' created",
                "Instagram post scheduled for tomorrow at 9:00 AM",
                "Team meeting at 2:00 PM to discuss Q4 strategy"
              ].map((activity, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-300 text-xs">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  return (
    <div className="bg-black pt-64 md:pt-80">
      <MacbookScroll
        title={
          <div className="relative perspective-[1000px] transform-gpu">
            {/* Shadow/reflection for 3D effect */}
            <motion.div 
              className="absolute left-0 right-0 mx-auto opacity-20 blur-sm -bottom-8 scale-y-50 scale-x-90"
              animate={{ 
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-500">RIKAZ Premium</div>
                <div className="text-xl md:text-2xl font-light text-gray-500">Marketing Dashboard</div>
              </div>
            </motion.div>
            
            {/* Main 3D text with animation */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                rotateX: [2, -2, 2],
              }}
              transition={{
                opacity: { duration: 0.5 },
                rotateX: {
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
              className="text-center transform-gpu"
            >
              <div className="text-3xl md:text-4xl font-bold tracking-tight mb-1 text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-500 [text-shadow:0_4px_8px_rgba(0,0,0,0.3),0_2px_3px_rgba(255,255,255,0.1)]">
                RIKAZ Premium
              </div>
              <div className="text-xl md:text-2xl font-light tracking-wider text-gray-400 [text-shadow:0_2px_4px_rgba(0,0,0,0.2)]">
                Marketing Dashboard
              </div>
            </motion.div>
          </div>
        }
        showGradient
      >
        <DashboardContent />
      </MacbookScroll>
    </div>
  );
} 