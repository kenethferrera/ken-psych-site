import Image from 'next/image';

export default function Avatar() {
  return (
    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-lg flex items-center justify-center bg-gray-900">
      <Image
        src="/avatar.png"
        alt="MindCode Avatar"
        width={128}
        height={128}
        className="object-cover w-full h-full"
        priority
      />
    </div>
  );
} 