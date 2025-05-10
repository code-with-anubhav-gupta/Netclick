"use client";
import React from "react";
import SocialMediaSidebar from "@/components/common/SocialMediaSidebar";
import NavbarLayout from "@/components/common/NavbarLayout";
import FooterLayout from "@/components/common/FooterLayout";
import ServiceProviderLeftLayout from "@/components/features/ServiceProviderLeftLayout";
import ServiceProviderRightLayout from "@/components/features/ServiceProviderRightLayout";

const page = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavbarLayout />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <ServiceProviderLeftLayout/>
          <ServiceProviderRightLayout />
        </div>
      </main>
      {/* Footer */}
      <FooterLayout/>
      {/* Social Media Sidebar */}
      <SocialMediaSidebar />
    </div>
  );
};

export default page;
