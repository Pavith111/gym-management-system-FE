import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="mx-auto py-12 px-6 md:px-8 lg:px-12 bg-white">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-6 text-center md:text-left text-black">About Us</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Welcome to KYRO, Sri Lanka's first personalized gym selection platform! Our mission is to help you find the perfect gym that matches your fitness goals, location, and lifestyle. We believe that choosing a gym should be easy, transparent, and stress-free, so we built this platform to connect fitness enthusiasts with the best gyms across the country.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-black">Why Choose Us?</h3>
          <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6">
            <li>Personalized Recommendations - Find a gym that fits your needs with advanced filters.</li>
            <li>Verified Gyms - We partner with trusted gyms to ensure quality and transparency.</li>
            <li>Trial Passes & Discounts - Try before you commit with exclusive offers.</li>
          </ul>
        </div>

        <div className="hidden md:block">
          <Image src="/about-us.png" alt="About Us" width={800} height={500} className="rounded-lg object-cover" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;