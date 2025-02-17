
import Footer from "@/components/Footer";
import GymList from "@/components/GymList";
import NavBar from "@/components/NavBar";
import RegisterGym from "@/components/RegisterGym";
import GymListHero from "@/components/GymListHero";


export default function GymListing() {
  return (
    <div>
      <NavBar />
      <GymListHero />
      <GymList />
        <RegisterGym />
      <Footer />
    </div>
  );
}