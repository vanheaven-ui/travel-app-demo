import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Place } from "../../../types";

type Props = {
  params: { id: string };
};

export async function generateStaticParams() {
  const response = await fetch("http://localhost:3000/api/places");

  if (!response.ok) return [];

  const places: Place[] = await response.json();

  return places.map((place) => ({
    params: { id: place.id.toString() },
  }));
}

export default async function PlaceDetailPage({ params }: Props) {
  const response = await fetch("http://localhost:3000/api/places");
  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }

  const allPlaces: Place[] = await response.json();
  const place = allPlaces.find((p) => p.id === Number(params.id));

  if (!place) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans antialiased p-4 sm:p-8">
      <div className="container mx-auto">
        <Link
          href="/"
          className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors mb-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Back to Destinations
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden md:flex">
          <div className="md:w-1/2 relative w-full h-96 md:h-auto bg-gray-200">
            <Image
              src={place.image_url}
              alt={place.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
              {place.name}
            </h1>
            <p className="text-lg text-gray-600 mb-4">{place.location}</p>
            <p className="text-4xl font-extrabold text-indigo-600 mb-6">
              ${place.price}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {place.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {place.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-indigo-100 text-indigo-800 text-sm font-semibold px-4 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
