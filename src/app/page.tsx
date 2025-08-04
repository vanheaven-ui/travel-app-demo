"use client";
import { useState, useMemo, useEffect } from "react";
import { useTravelData } from "../hooks/useTravelData";
import { FilterSection } from "@/components/FilterSection";
import PlaceCard from "@/components/placeCard";
import LoadingState from "@/components/LoadingState";
import ErrorState from "@/components/ErrorState";
import PaginationControls from "@/components/PaginationControls";
import { Place } from "@/types";

export default function HomePage() {
  const {
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
    selectedTags,
    handleTagChange,
    filteredPlaces,
    allTags,
  } = useTravelData();

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterSticky, setIsFilterSticky] = useState(false);

  const totalPages = Math.ceil(filteredPlaces.length / itemsPerPage);

  const paginatedPlaces: Place[] = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredPlaces.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredPlaces, currentPage, itemsPerPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedTags]);

  // Effect to handle scroll and set the sticky state for filters
  useEffect(() => {
    const onScroll = () => {
      // Assuming a header height of around 150px. Adjust this value as needed.
      setIsFilterSticky(window.scrollY > 150);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans antialiased">
      {/* Non-sticky header */}
      <header className="text-center bg-indigo-900 p-6 rounded-b-lg shadow-lg text-white">
        <h1 className="text-5xl font-extrabold text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-pink-500 to-yellow-500">
            Travel Destinations
          </span>
        </h1>
        <p className="mt-3 text-lg text-indigo-200">
          Find your next adventure with our curated selection.
        </p>
      </header>

      {/* Sticky filter section with conditional padding and styling */}
      <div
        className={`bg-gray-50 z-40 transition-all duration-300 ${
          isFilterSticky ? "sticky top-0 shadow-md py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-8">
          {!isLoading && !error && (
            <FilterSection
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedTags={selectedTags}
              handleTagChange={handleTagChange}
              allTags={allTags}
              compact={isFilterSticky}
            />
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-8 pt-6">
        {isLoading && <LoadingState message="Loading destinations..." />}
        {error && <ErrorState error={error} />}

        {!isLoading && !error && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {paginatedPlaces.length > 0 ? (
                paginatedPlaces.map((place) => (
                  <PlaceCard key={place.id} place={place} />
                ))
              ) : (
                <div className="col-span-full flex justify-center items-center py-20">
                  <p className="text-2xl text-gray-500 font-semibold">
                    No destinations match your search.
                  </p>
                </div>
              )}
            </div>
            {totalPages > 1 && (
              <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
