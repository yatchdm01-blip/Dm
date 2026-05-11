import React from 'react';
import IndexHero from '@/src/components/home/HeroBanner';
import BenefitsStrip from '@/src/components/home/BenefitsStrip';
import CustomBuildBanner from '@/src/components/home/CustomBuildBanner';
import FeaturedProducts from '@/src/components/home/FeaturedProducts';
import BrandSlider from '@/src/components/home/BrandSlider';
import InfoGrid from '@/src/components/home/InfoGrid';
import WhatsAppButton from '@/src/components/WhatsAppButton';
import NewArrivals from '@/src/components/home/NewArrivals';
import ArticlesPreview from '@/src/components/home/ArticlesPreview';
import NewsletterSection from '@/src/components/NewsletterForm';

export default function Index() {
  return (
    <>
      <IndexHero />
      <BenefitsStrip />
      <FeaturedProducts />
      <CustomBuildBanner />
      <InfoGrid />
      <BrandSlider />
      <NewArrivals />
      <ArticlesPreview />
      <NewsletterSection />
      <WhatsAppButton />
    </>
  );
}
