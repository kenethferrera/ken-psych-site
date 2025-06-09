"use client";
// ... existing code ...
export default function TemplatesPage() {
  return (
    <main className="min-h-screen bg-black text-offwhite p-4">
      <h1 className="text-3xl font-bold mb-4">Templates Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* TemplateCard placeholder */}
        <div className="bg-gray-900 rounded-lg p-4 flex flex-col items-center">
          <div className="w-full h-32 bg-gray-800 rounded mb-2">Preview</div>
          <div className="flex gap-2">
            <button className="bg-neon-green text-black px-3 py-1 rounded">Edit</button>
            <button className="bg-violet-700 text-offwhite px-3 py-1 rounded">Download</button>
          </div>
        </div>
      </div>
    </main>
  );
} 