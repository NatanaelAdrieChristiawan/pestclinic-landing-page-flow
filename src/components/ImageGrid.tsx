import { motion } from 'framer-motion';
import { useState } from 'react';

interface ImageGridProps {
  title: string;
  images: string[];
}

const ImageGrid = ({ title, images }: ImageGridProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <img
              src={image}
              alt={`${title} ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImage(image)}
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-[90vh] object-contain"
          />
          <button
            className="absolute top-4 right-4 text-white text-xl"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default ImageGrid;