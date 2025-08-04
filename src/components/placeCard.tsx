"use client";

import { useState } from "react";
import Image from "next/image";
import { Place } from "@/types";
import Link from "next/link";

export default function PlaceCard({ place }: { place: Place }) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      href={`/places/${place.id}`}
      className="block bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl flex flex-col h-full"
    >
      <div className="relative w-full aspect-[4/3] bg-gray-200">
        {!imageError ? (
          <Image
            src={place.image_url}
            alt={`Image of ${place.name}`}
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            className="object-cover transition-transform duration-300 hover:scale-110"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-center text-gray-500 p-4">
            Image not available
          </div>
        )}
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h2 className="text-2xl font-bold text-gray-800 line-clamp-1">
          {place.name}
        </h2>
        <p className="text-gray-600 mt-2 line-clamp-1">{place.location}</p>
        <p className="text-3xl font-extrabold text-indigo-600 mt-auto pt-4">
          ${place.price}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {place.tags.map((tag) => (
            <span
              key={tag}
              className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
