"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";

// Icons
import locationIcon from "@/assets/icon/location_icon.svg";
import starIcon from "@/assets/icon/star-rating.svg";
import wifiIcon from "@/assets/icon/wifi.svg";
import waveIcon from "@/assets/icon/waves.svg";
import carIcon from "@/assets/icon/truck-01.svg";
import coffeeCup from "@/assets/icon/tabler_coffee.svg";

// Hotel data
const hotels = [
  {
    id: 1,
    name: "The Opulence Hotel",
    distance: "4.5 km",
    location: "Lagos, Ikeja",
    imagePath: "/assets/hotelImg/img1.svg",
    features: { wifi: true, parking: true, kitchen: true, pool: true },
    rating: 4.5,
  },
  {
    id: 2,
    name: "Oceanview Suites",
    distance: "3.8 km",
    location: "Accra, Ghana",
    imagePath: "/assets/hotelImg/img2.svg",
    features: { wifi: true, parking: true, kitchen: true, pool: true },
    rating: 4.3,
  },
  {
    id: 3,
    name: "Golden Palm Hotel",
    distance: "2.5 km",
    location: "Accra, Ghana",
    imagePath: "/assets/hotelImg/img3.svg",
    features: { wifi: true, parking: false, kitchen: true, pool: false },
    rating: 4.0,
  },
  {
    id: 4,
    name: "Beachfront Resort",
    distance: "5.1 km",
    location: "Accra, Ghana",
    imagePath: "/assets/hotelImg/img4.svg",
    features: { wifi: true, parking: false, kitchen: true, pool: false },
    rating: 3.9,
  },
  {
    id: 5,
    name: "Grand Tower",
    distance: "6.3 km",
    location: "Abuja, Nigeria",
    imagePath: "/assets/hotelImg/img1.svg",
    features: { wifi: true, parking: false, kitchen: true, pool: false },
    rating: 4.1,
  },
  {
    id: 6,
    name: "Harbor Inn",
    distance: "1.7 km",
    location: "Lagos, Nigeria",
    imagePath: "/assets/hotelImg/img2.svg",
    features: { wifi: true, parking: false, kitchen: true, pool: false },
    rating: 4.4,
  },
  {
    id: 7,
    name: "Skyline Lodge",
    distance: "2.1 km",
    location: "Kano, Nigeria",
    imagePath: "/assets/hotelImg/img3.svg",
    features: { wifi: true, parking: true, kitchen: false, pool: true },
    rating: 4.2,
  },
  {
    id: 8,
    name: "Palmview Resort",
    distance: "7.3 km",
    location: "Accra, Ghana",
    imagePath: "/assets/hotelImg/img4.svg",
    features: { wifi: false, parking: true, kitchen: true, pool: true },
    rating: 3.8,
  },
  {
    id: 9,
    name: "Cityscape Hotel",
    distance: "1.9 km",
    location: "Abuja, Nigeria",
    imagePath: "/assets/hotelImg/img1.svg",
    features: { wifi: true, parking: true, kitchen: true, pool: false },
    rating: 4.0,
  },
  {
    id: 10,
    name: "Oasis Suites",
    distance: "3.4 km",
    location: "Lagos, Nigeria",
    imagePath: "/assets/hotelImg/img2.svg",
    features: { wifi: true, parking: false, kitchen: false, pool: true },
    rating: 4.6,
  },
  {
    id: 11,
    name: "Blue Lagoon Hotel",
    distance: "5.6 km",
    location: "Cape Coast, Ghana",
    imagePath: "/assets/hotelImg/img3.svg",
    features: { wifi: true, parking: true, kitchen: true, pool: true },
    rating: 4.7,
  },
  {
    id: 12,
    name: "Sunset Paradise",
    distance: "8.0 km",
    location: "Enugu, Nigeria",
    imagePath: "/assets/hotelImg/img4.svg",
    features: { wifi: false, parking: false, kitchen: true, pool: true },
    rating: 3.5,
  },
];

interface HotelListProps {
  searchTerm: string;
  currentPage: number;
}

export default function HotelList({ searchTerm, currentPage }: HotelListProps) {
  const hotelsPerPage = 8;

  const filtered = useMemo(() => {
    return searchTerm
      ? hotels.filter((hotel) =>
          hotel.location.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : hotels;
  }, [searchTerm]);

  const paginatedHotels = useMemo(() => {
    const start = (currentPage - 1) * hotelsPerPage;
    return filtered.slice(start, start + hotelsPerPage);
  }, [filtered, currentPage]);

  return (
    <div className="px-[25.5px] md:px-[70px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[21px]">
        {paginatedHotels.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            No hotels found for &quot;{searchTerm}&quot;
          </p>
        ) : (
          paginatedHotels.map((hotel, index) => (
            <div
              key={hotel.id}
              className="pb-[5px] md:pb-12 fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link href="#">
                <div className="relative h-48 w-full overflow-hidden group rounded-xl">
                  <Image
                    src={hotel.imagePath}
                    alt={hotel.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110 rounded-xl"
                  />
                  <div className="absolute top-4 left-4 bg-white text-black font-geistBold text-xs px-3 py-1 rounded-full">
                    {hotel.distance} away
                  </div>
                </div>
              </Link>

              <div>
                <div className="flex items-center justify-between pt-3">
                  <h2 className="font-geistMedium text-base text-black">
                    {hotel.name}
                  </h2>
                  <p className="flex items-center gap-1 font-geistMedium text-base text-black">
                    <Image src={starIcon} alt="Star" width={16} height={16} />
                    {hotel.rating}
                  </p>
                </div>

                <p className="flex items-center gap-1 font-geistNormal text-sm py-1 text-gray-600">
                  <Image
                    src={locationIcon}
                    alt="Location"
                    width={14}
                    height={14}
                  />
                  {hotel.location}
                </p>

                <div className="flex gap-3 mt-2 text-gray-700 text-base">
                  {hotel.features.wifi && (
                    <Image src={wifiIcon} alt="Wi-Fi" width={20} height={20} />
                  )}
                  {hotel.features.pool && (
                    <Image src={waveIcon} alt="Pool" width={20} height={20} />
                  )}
                  {hotel.features.parking && (
                    <Image src={carIcon} alt="Parking" width={20} height={20} />
                  )}
                  {hotel.features.kitchen && (
                    <Image
                      src={coffeeCup}
                      alt="Kitchen"
                      width={20}
                      height={20}
                    />
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export const hotelData = hotels;
