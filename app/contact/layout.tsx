import React from "react";
import { Footer } from "@/components/footer";
import { SiteNavbar } from "@/components/site-navbar";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteNavbar />
      {children}
      <Footer />
    </>
  );
} 