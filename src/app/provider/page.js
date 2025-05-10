// pages/profile/[id].js
"use client";
import React from "react";
import SocialMediaSidebar from "@/components/common/SocialMediaSidebar";
import NavbarLayout from "@/components/common/NavbarLayout";
import FreelanceProfileLeftLayout from "@/components/layout/FreelanceProfileLeftLayout";
import FreelanceProfileRightLayout from "@/components/layout/FreelanceProfileRightLayout";
import FooterLayout from "@/components/common/FooterLayout";

export default function ProfilePage() {

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <NavbarLayout />

      {/* Add padding to account for fixed header */}
      <div className="">
        <main className="max-w-6xl mx-auto px-4 py-8">
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Side - Profile Image & Actions */}
            <FreelanceProfileLeftLayout />

            {/* Right Side - Profile Information */}
            <FreelanceProfileRightLayout />
          </div>
        </main>
      </div>

      {/* Footer */}
      <FooterLayout />

      {/* Social Media Sidebar */}
      <SocialMediaSidebar />
    </div>
  );
}
