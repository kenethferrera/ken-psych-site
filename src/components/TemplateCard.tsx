import Image from 'next/image';
import { motion } from 'framer-motion';

interface TemplateCardProps {
  templateName: string;
  previewImage: string;
  downloadLink: string;
}

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};

export default function TemplateCard({ templateName, previewImage, downloadLink }: TemplateCardProps) {
  return (
    <motion.div
      className="bg-gray-900 rounded-lg overflow-hidden shadow-md flex flex-col items-center p-4"
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(57,255,20,0.15)' }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="w-full aspect-video relative mb-3">
        <Image
          src={previewImage}
          alt={templateName}
          fill
          className="object-cover rounded"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>
      <h4 className="text-lg font-bold text-offwhite mb-2 text-center truncate w-full">{templateName}</h4>
      <motion.a
        href={downloadLink}
        download
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, boxShadow: '0 0 16px #39ff14' }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        className="bg-neon-green text-black px-4 py-2 rounded font-bold w-full text-center hover:scale-105 transition"
      >
        Use Template
      </motion.a>
    </motion.div>
  );
} 