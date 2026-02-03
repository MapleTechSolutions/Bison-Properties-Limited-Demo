import Hero from "@/components/Hero";
import PropertyListings from "@/components/PropertyListings";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import Communities from "@/components/Communities";
import CityFeatures from "@/components/CityFeatures";
import RealEstateStats from "@/components/RealEstateStats";
import DesignerInteriors from "@/components/DesignerInteriors";
import FloorplanGallery from "@/components/FloorplanGallery";

export default function Home() {
  return (
    <>
      <Hero />
      <PropertyListings />
      <LeadCaptureForm />
      <Communities />
      <CityFeatures />
      <RealEstateStats />
      <DesignerInteriors />
      <FloorplanGallery />
    </>
  );
}
