"use client";

export default function WatchPage() {
  return (
    <main className="min-h-screen bg-black text-offwhite p-4">
      <h1 className="text-3xl font-bold mb-4">Watch Shorts</h1>
      <div className="mb-4 flex gap-2">
        {/* Filter buttons placeholder */}
        <button className="bg-violet-700 text-offwhite px-3 py-1 rounded">All</button>
        <button className="bg-violet-700 text-offwhite px-3 py-1 rounded">Cringe Memory</button>
        <button className="bg-violet-700 text-offwhite px-3 py-1 rounded">Overthinking</button>
        <button className="bg-violet-700 text-offwhite px-3 py-1 rounded">Manipulation Hacks</button>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {/* ShortsCard placeholder */}
        <div className="bg-gray-900 rounded-lg h-40 flex items-center justify-center">Short 1</div>
        <div className="bg-gray-900 rounded-lg h-40 flex items-center justify-center">Short 2</div>
        <div className="bg-gray-900 rounded-lg h-40 flex items-center justify-center">Short 3</div>
      </div>
    </main>
  );
} 