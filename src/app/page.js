import AboutUs from "@/components/AbousUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import GymScroll from "@/components/GymScroller";
import Reviews from "@/components/ReviewSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <Hero />
      <GymScroll />
      <section id="reviews">
        <Reviews />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <Footer />
    </div>
  );
}
