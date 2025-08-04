"use client";
// This custom hook encapsulates the data fetching and filtering logic for the travel app.
import { useState, useEffect, useMemo } from "react";
import { Place } from "../types";

export function useTravelData() {
  // State for the raw list of places
  const [places, setPlaces] = useState<Place[]>([]);
  // State for search term and selected tags
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  // State for loading and error handling
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Effect to fetch data from the API when the component mounts
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await fetch("/api/places");
        if (!response.ok) {
          throw new Error("Failed to fetch places");
        }
        const data = await response.json();
        setPlaces(data);
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchPlaces();
  }, []);

  // Memoized list of all unique tags available in the data
  const allTags = useMemo(() => {
    return Array.from(new Set(places.flatMap((p) => p.tags)));
  }, [places]);

  // Memoized list of places filtered by search term and selected tags
  const filteredPlaces = useMemo(() => {
    return places.filter((place) => {
      // Check if the place's name or location includes the search term (case-insensitive)
      const matchesSearch =
        place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        place.location.toLowerCase().includes(searchTerm.toLowerCase());

      // Check if the place has at least one of the selected tags, or if no tags are selected
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => place.tags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [places, searchTerm, selectedTags]);

  // Handler function for updating selected tags
  const handleTagChange = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  return {
    isLoading,
    error,
    searchTerm,
    selectedTags,
    filteredPlaces,
    allTags,
    setSearchTerm,
    handleTagChange,
  };
}
