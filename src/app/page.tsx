import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import AboutPreview from "@/components/AboutPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsPreview from "@/components/TestimonialsPreview";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <WhyChooseUs />
      <TestimonialsPreview />
      <CTASection />
    </>
  );
}
