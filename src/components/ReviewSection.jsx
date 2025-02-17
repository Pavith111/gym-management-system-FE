import Image from "next/image";
import Link from "next/link";

const reviews = [
  {
    name: "Thisara",
    gym: "PowerZone Fitness, Kalutara",
    rating: 3,
    review:
      "PowerZone Fitness has top-notch equipment, a motivating atmosphere, and friendly staff—perfect for all fitness levels!",
    avatar: "/images/reviews/avatar1.jpg",
  },
  {
    name: "Parker",
    gym: "BlazeFit, Colombo 08",
    rating: 2,
    review:
      "BlazeFit’s HIIT sessions are intense and fun! The trainers motivate you, and the fast-paced workouts make fitness exciting.",
    avatar: "/images/reviews/avatar3.jpg",
  },
  {
    name: "Alex",
    gym: "Iron Haven, Kaduwela",
    rating: 4,
    review:
      "Iron Haven is the ultimate gym for serious lifters—heavy-duty equipment, a strong community, and a no-nonsense vibe!",
    avatar: "/images/reviews/avatar2.jpg",
  },
];

const TrialPassReviews = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black py-10 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-8">
        {/* Left Section - Trial Pass */}
        <div>
          <h3 className="text-xl font-bold text-center lg:text-left mb-4">
            TRY KYRO FITNESS AND GET UP TO 1 MONTH OF PREMIUM ACCESS ON US
          </h3>
          <Link href="/trial-pass">
            <div className="flex items-center py-10">
              <div className="bg-gradient-to-r from-yellow-600 to-yellow-200 text-black rounded-xl p-6 flex items-center w-96 shadow-lg">
                {/* Left Section */}
                <div className="w-1/2 text-center">
                  <h2 className="text-lg font-bold">3 Day Trail</h2>
                  <h3 className="text-lg font-bold">Pass</h3>
                </div>

                {/* Divider */}
                <div className="w-[2px] h-16 bg-black"></div>

                {/* Right Section */}
                <div className="w-1/2 text-center font-bold text-lg tracking-wide">
                  <p>SHAPE</p>
                  <p>YOUR</p>
                  <p>BODY</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Middle Divider */}
        <div className="hidden lg:block w-[4px] bg-gray-500 h-96 mr-10"></div>

        {/* Right Section - Reviews */}
        <div className="w-full lg:w-2/3">
          <div className="space-y-4">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex items-center bg-gradient-to-r from-gray-100 to-gray-300 text-black p-4 rounded-md shadow-md"
              >
                <Image
                  src={review.avatar}
                  width={64}
                  height={64}
                  alt={review.name}
                  className="rounded-full mr-4"
                />
                <div className="flex-1">
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-gray-700 text-sm">{review.gym}</p>
                  <p className="mt-3 text-gray-900 text-sm">{review.review}</p>
                </div>
                {/* Like & Dislike Buttons */}
                <div className="flex space-x-2">
                  <button className="bg-gray-700 text-white px-3 py-2 rounded-md">
                    👍
                  </button>
                  <button className="bg-gray-700 text-white px-3 py-2 rounded-md">
                    👎
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Review Button */}
          <div className="text-center mt-6">
            <button className="bg-gradient-to-r from-gray-200 to-gray-400 text-black px-6 py-2 rounded-full text-lg shadow-md hover:shadow-lg">
              + Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrialPassReviews;
