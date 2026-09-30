import ReviewsSection from "@/components/review/ReviewsSection";
import HeroSection from "../components/hero/hero-section";
import Header from "../components/layout/header";
import RateCardSection from "@/components/RateCardSection";
import AboutSec from "@/components/about/AboutSec";
import WelcomeSection from "@/components/welcomeSection";
import WellnessBanner from "@/components/WellnessBanner";




export default function Home() {
  return (
    <main className="min-h-screen bg-spa-cream">
      <Header />
      <HeroSection />
      <WelcomeSection/>
      {/* <FeaturedServices /> */}
      <AboutSec/>
      <WellnessBanner/>
      {/* <MassageTypes /> */}
      {/* <GiftCardBalanceForm/> */}
      {/* <WellnessJourney />
      <SpaExperience />
      <FacialBenefits /> */}
      {/* <StoreProducts />
      <SpaGallery />
      <WellnessNatural />
      <PamperingExperiences />
      <ContactCTA/> */}
      <RateCardSection/>
      <ReviewsSection/>
      {/* <WelcomeSection /> */}
      {/* <Testimonials/> */}
    </main>
  )
}
