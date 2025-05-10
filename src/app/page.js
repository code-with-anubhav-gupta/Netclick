"use client";
import NavbarLayout from "@/components/common/NavbarLayout";
import FooterLayout from "@/components/common/FooterLayout";
import HeroLayout from "@/components/layout/HeroLayout";
import FeaturedLayout from "@/components/layout/FeaturedLayout";
import ClientTestimonialsLayout from "@/components/layout/ClientTestimonialsLayout";
import CTABannerLayout from "@/components/layout/CTABannerLayout";
import TopProvidersLayout from "@/components/layout/TopProvidersLayout";
import HowItWorksLayout from "@/components/layout/HowItWorksLayout";

export default function Home() {

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation Bar */}
      <NavbarLayout />

      {/* Hero Section */}
      <HeroLayout />

      {/* Featured Categories */}
      <FeaturedLayout />

      {/* How It Works */}
      <HowItWorksLayout />

      {/* Client Testimonials */}
      <ClientTestimonialsLayout />

      {/* CTA Banner */}
      <CTABannerLayout />

      {/* Top Providers */}
      <TopProvidersLayout />

      {/* Footer */}
      <FooterLayout />
    </div>
  );
}
