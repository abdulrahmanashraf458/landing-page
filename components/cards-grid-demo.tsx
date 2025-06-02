"use client";

import { BarChart2, FileText, Globe, Mail, MessageSquare } from "lucide-react";
import React, { useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function CardsGridDemo() {
  return (
    <div className="min-h-screen w-full bg-black py-16 px-4 flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto">
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<MessageSquare className="h-4 w-4 text-neutral-400" />}
            title="Social Media Marketing"
            description="Elevate your brand presence across all platforms with our strategic social media campaigns."
            glowColors="dd7bbb,d79f1e,5a922c"
          />

          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Globe className="h-4 w-4 text-neutral-400" />}
            title="SEO Optimization"
            description="Boost your website ranking and drive organic traffic with our expert SEO strategies."
            glowColors="4c7894,dd7bbb,5a922c"
          />

          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<FileText className="h-4 w-4 text-neutral-400" />}
            title="Content Marketing"
            description="Engage your audience with compelling content that converts visitors into loyal customers."
            glowColors="5a922c,d79f1e,dd7bbb"
          />

          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<Mail className="h-4 w-4 text-neutral-400" />}
            title="Email Marketing Campaigns"
            description="Nurture leads and increase conversions with personalized email marketing strategies."
            glowColors="dd7bbb,4c7894,d79f1e"
          />

          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<BarChart2 className="h-4 w-4 text-neutral-400" />}
            title="Analytics & Performance"
            description="Data-driven insights to measure, optimize and scale your digital marketing efforts."
            glowColors="d79f1e,5a922c,4c7894"
          />
        </ul>
      </div>
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  glowColors: string;
}

const GridItem = ({ area, icon, title, description, glowColors }: GridItemProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);
  
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  }, []);
  
  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;
    
    element.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  // Parse the glow colors
  const colors = glowColors.split(',');
  const primaryColor = colors[0] || 'dd7bbb';
  const secondaryColor = colors[1] || 'd79f1e';
  const tertiaryColor = colors[2] || '5a922c';

  const gradientStyle = {
    '--primary-glow': `#${primaryColor}`,
    '--secondary-glow': `#${secondaryColor}`,
    '--tertiary-glow': `#${tertiaryColor}`
  } as React.CSSProperties;

  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div 
        ref={cardRef}
        className="relative h-full rounded-2xl border border-neutral-800 p-2 md:rounded-3xl md:p-3 bg-black group/card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={gradientStyle}
      >
        {/* Animated glow effect */}
        <div className={cn(
          "absolute inset-0 opacity-0 rounded-2xl md:rounded-3xl transition-opacity duration-500",
          "group-hover/card:opacity-100 bg-black",
          "before:absolute before:inset-[-1px] before:rounded-[inherit] before:p-[1px]",
          "before:bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),var(--primary-glow)_10%,transparent_40%),radial-gradient(circle_at_40%_40%,var(--secondary-glow)_5%,transparent_30%),radial-gradient(circle_at_60%_60%,var(--tertiary-glow)_10%,transparent_40%)]",
          "before:content-[''] before:opacity-0 before:transition-opacity before:duration-500 group-hover/card:before:opacity-100",
          isHovered ? "before:animate-glow" : ""
        )}></div>
        
        <div className="relative z-10 flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 bg-[#111] shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-neutral-700 p-2">
              {icon}
            </div>
            <div className="space-y-2">
              <h3 className="pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-white md:text-2xl/[1.875rem]">
                {title}
              </h3>
              <p className="font-sans text-sm/[1.125rem] text-neutral-400 md:text-base/[1.375rem]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}; 