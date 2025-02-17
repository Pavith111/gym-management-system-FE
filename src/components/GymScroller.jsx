"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

const gyms = [
  {
    id: 1,
    username: "cross-fit",
    name: "CrossFit Ceylon",
    location: "Colombo 2",
    price: "LKR 17,000/month",
    features: ["Advanced Equipments", "Personal Trainers", "Strength Training"],
    image: "/images/gym/gym1.jpg",
  },
  {
    id: 2,
    username: "fitness-club",
    name: "Fitness Hub",
    location: "Colombo 5",
    price: "LKR 15,500/month",
    features: ["Cardio Machines", "Group Classes", "Strength Training"],
    image: "/images/gym/gym2.jpg",
  },
  {
    id: 3,
    username: "pro-gym",
    name: "Pro Gym",
    location: "Colombo 3",
    price: "LKR 18,000/month",
    features: ["Weight Lifting", "HIIT Sessions", "Certified Trainers"],
    image: "/images/gym/gym3.jpg",
  },
  {
    id: 4,
    username: "elite-fitness",
    name: "Elite Fitness",
    location: "Colombo 7",
    price: "LKR 19,500/month",
    features: ["Swimming Pool", "Personal Coaching", "Yoga Classes"],
    image: "/images/gym/gym4.jpg",
  },
];

export default function GymScroller() {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-black text-3xl font-bold mb-6">
          Find Your Perfect Gym
        </h2>

        <Carousel className="w-full max-w-3xl mx-auto">
          <CarouselContent>
            {gyms.map((gym) => (
              <CarouselItem key={gym.id}>
                <div className="p-4">
                  <Link href={`/gym/${gym.username}`}>
                    <Card className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
                      <CardContent className="relative h-full p-0">
                        <Image
                          src={gym.image}
                          alt={gym.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-4 text-white">
                          <h3 className="text-xl font-bold">{gym.name}</h3>
                          <p className="text-sm">{gym.location}</p>
                          <p className="text-sm">{gym.price}</p>
                          <p className="text-xs">{gym.features.join(" • ")}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="carousel" />
          <CarouselNext variant="carousel" />
        </Carousel>

        {/* View All Gyms Button */}
        <div className="mt-6">
          <button className="bg-black text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-red-500 transition">
            View All Gyms
          </button>
        </div>
      </div>
    </div>
  );
}
