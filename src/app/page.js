"use client";
// import CTABanner from "@/components/layout/CTABanner";
// import TopProviders from "@/components/layout/TopProviders";
import { useEffect, useState } from "react";
import NavbarLayout from "@/components/common/NavbarLayout";
import FooterLayout from "@/components/common/FooterLayout";
import HeroLayout from "@/components/layout/HeroLayout";
import FeaturedLayout from "@/components/layout/FeaturedLayout";
// import HowItWorksLayout from "@/components/layout/HowItWorksLayout";
import ClientTestimonialsLayout from "@/components/layout/ClientTestimonialsLayout";
import CTABannerLayout from "@/components/layout/CTABannerLayout";
import TopProvidersLayout from "@/components/layout/TopProvidersLayout";
import HowItWorks from "@/components/layout/HowItWorks";
import HowItWorksLayout from "@/components/layout/HowItWorksLayout";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a 2-second loading time
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation Bar */}
      <NavbarLayout loading={loading} />

      {/* Hero Section */}
      <HeroLayout loading={loading} />

      {/* Featured Categories */}
      <FeaturedLayout loading={loading} />

      {/* How It Works */}
      {/* <HowItWorksLayout loading={loading} /> */}
      <HowItWorksLayout loading={loading} />

      {/* Client Testimonials */}
      <ClientTestimonialsLayout loading={loading} />

      {/* CTA Banner */}
      <CTABannerLayout loading={loading} />

      {/* Top Providers */}
      <TopProvidersLayout loading={loading} />
      {/* Footer */}
      <FooterLayout loading={loading} />
    </div>
  );
}
