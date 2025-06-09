import Image from 'next/image';
import { motion } from 'framer-motion';

interface ShortsCardProps {
  title: string;
  thumbnailUrl: string;
  description: string;
  videoUrl: string;
}

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};

export default function ShortsCard({ title, thumbnailUrl, description, videoUrl }: ShortsCardProps) {
  function getYouTubeEmbedUrl(url: string): string | null {
    const shortsMatch = url.match(/youtube\.com\/shorts\/([\w-]+)/);
    const watchMatch = url.match(/youtube\.com\/watch\?v=([\w-]+)/);
    if (shortsMatch) {
      return `https://www.youtube.com/embed/${shortsMatch[1]}`;
    }
    if (watchMatch) {
      return `https://www.youtube.com/embed/${watchMatch[1]}`;
    }
    return null;
  }
  const embedUrl = getYouTubeEmbedUrl(videoUrl);
  return (
    <motion.div
      className="cursor-pointer bg-gray-900 rounded-lg overflow-hidden shadow-md group"
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(57,255,20,0.15)' }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      onClick={() => !embedUrl && window.open(videoUrl, '_blank')}
    >
      <div className="relative w-full aspect-video overflow-hidden">
        {embedUrl ? (
          <iframe
            width="100%"
            height="100%"
            src={embedUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg"
            style={{ background: '#000' }}
          />
        ) : (
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 group-hover:shadow-lg transition-transform duration-200"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        )}
      </div>
      <div className="p-3">
        <h3 className="text-lg font-bold text-offwhite truncate mb-1">{title}</h3>
        <p className="text-sm text-gray-300 line-clamp-2">{description}</p>
      </div>
    </motion.div>
  );
} 