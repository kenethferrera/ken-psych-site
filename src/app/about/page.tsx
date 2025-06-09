"use client";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-offwhite p-4">
      <h1 className="text-3xl font-bold mb-4">About Miyu</h1>
      <div className="mb-6">Fun timeline of how Miyu got started (placeholder)</div>
      <div className="flex gap-4 mb-6">
        {/* Avatar variants placeholder */}
        <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center">Ana 😊</div>
        <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center">Ana 😱</div>
        <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center">Ana 🤔</div>
      </div>
      <div className="italic">This site is powered by curiosity & overthinking</div>
    </main>
  );
} 