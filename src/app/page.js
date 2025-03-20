import Banner from "@/Components/Banners/Banner";
import BottomBanner from "@/Components/Banners/BottomBanner";
import TransformingBusiness from "@/Components/HomePage/BusinessSection";
import EngagementSection from "@/Components/HomePage/EngagementSection";
import OurServices from "@/Components/HomePage/OurServices";
import Testimonials from "@/Components/HomePage/Testomonial";
import TrustedPartners from "@/Components/HomePage/TrustedPartners";
import LayoutWrapper from "@/Components/Layout/LayoutWrapper";
import MainSlider from "@/Components/Sliders/MainsSider";
import TechSolutionSlider from "@/Components/Sliders/TechSolutionSlider";

export default function Home() {
  return (
    <LayoutWrapper>
      <MainSlider />

      <div
        className="relative bg-cover bg-center bg-no-repeat overflow-hidden h-46"
        style={{ backgroundImage: "url('/background/effects/lines.png')" }}
      >
        {/* our services ellipse effect */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="absolute top-52 -left-1">
          <img
            src="/background/effects/box.png"
            alt="Box"
            className="w-auto h-28"
          />
        </div>

        <div className="relative z-10">
          <TrustedPartners />
          <div className="absolute top-0 -right-80 object-cover w-auto h-full ">
            <img
              src="/background/effects/ellipse.png"
              alt="Bottom Left Ellipse"
              className="w-auto h-full object-cover"
            />
          </div>

          <div className="absolute bottom-70 -left-1/2 w-auto h-full">
            <img
              src="/background/effects/ellipse.png"
              alt="Bottom Left Ellipse"
              className="w-auto h-full object-cover"
            />
          </div>

          <OurServices />
        </div>
        <EngagementSection />
      </div>
    
     
     
      <div
        className="relative bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/background/homepage/stars.png')" }}
      >
        <div className="absolute bottom-60 -left-40 w-auto h-auto">
          <img
            src="/background/effects/ellipse.png"
            alt="Bottom Left Ellipse"
            className="w-96 h-auto object-cover"
          />
        </div>
        <div className="absolute bottom-60 -right-40 w-auto h-auto">
          <img
            src="/background/effects/ellipse.png"
            alt="Bottom Left Ellipse"
            className="w-96 h-auto object-cover"
          />
        </div>
        <div className="absolute bottom-20 -right-1 w-auto h-auto">
          <img
            src="/background/right-box.png"
            alt="Bottom Left Ellipse"
            className="w-12 h-auto object-cover"
          />
        </div>
        <TransformingBusiness />

        <TechSolutionSlider />
        <Banner />
      </div>

      <Testimonials />
      <BottomBanner />
    </LayoutWrapper>
  );
}
