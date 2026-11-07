import Audience from "./components/features/Audience";
import CTABanner from "./components/features/CTABanner";
import Footer from "./components/features/Footer";
import Header from "./components/features/Header";
import Hero from "./components/features/Hero";
import Highlights from "./components/features/Highlights";
import Listing from "./components/features/Listing";
import Testimonials from "./components/features/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <Hero />
          <Audience />
          <Listing />
          <Highlights />
          <Testimonials />
          <CTABanner />
        </div>
      </main>
      <Footer />
    </>
  );
}
