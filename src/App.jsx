import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import ProductGallery from "./components/ProductGallery";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import bgImage from "./assets/logos/logo.png"; // change to your background image

export default function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <div
        className="relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark Overlay for readability */}
        <div className="bg-white/90 backdrop-blur-sm">
         <AboutSection />
        <ProductGallery />
         
        </div>
      </div>
      <WhyChooseUs />
      <Footer />
    </>
  );
}