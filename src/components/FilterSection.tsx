type FilterSectionProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedTags: string[];
  handleTagChange: (tag: string) => void;
  allTags: string[];
  compact?: boolean; // New optional prop for compact mode
};

export function FilterSection({
  searchTerm,
  setSearchTerm,
  selectedTags,
  handleTagChange,
  allTags,
  compact = false,
}: FilterSectionProps) {
  return (
    <section className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search destinations..."
        className={`w-full border rounded px-4 py-2 mb-4 transition-all duration-300 ${
          compact ? "text-sm py-1" : "text-base py-2"
        }`}
      />
      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => {
          const selected = selectedTags.includes(tag);
          return (
            <button
              key={tag}
              onClick={() => handleTagChange(tag)}
              className={`rounded-full font-semibold transition-colors duration-300
                ${
                  selected
                    ? "bg-indigo-600 text-white"
                    : "bg-indigo-100 text-indigo-800 hover:bg-indigo-200"
                }
                ${compact ? "text-xs px-2 py-1" : "text-sm px-3 py-1.5"}
              `}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </section>
  );
}
