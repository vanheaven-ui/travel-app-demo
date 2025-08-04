export default function LoadingState({
  message = "Loading...",
}: {
  message?: string;
}) {
  return (
    <div className="flex justify-center items-center h-48">
      <p className="text-2xl text-gray-500 font-semibold">{message}</p>
    </div>
  );
}
