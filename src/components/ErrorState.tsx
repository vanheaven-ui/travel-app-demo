export default function ErrorState({ error }: { error: string }) {
  return (
    <div className="flex justify-center items-center h-48">
      <p className="text-2xl text-red-500 font-semibold">Error: {error}</p>
    </div>
  );
}
