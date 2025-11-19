import Masonry from 'react-masonry-css';
import ImageCard from './ImageCard';
import { motion } from 'framer-motion';

const breakpointColumns = {
    default: 4,
    1536: 4,
    1280: 3,
    1024: 3,
    768: 2,
    640: 1,
};

export default function Gallery({ images, onImageClick }) {
    return (
        <div className="w-full px-4 md:px-8 lg:px-12 py-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Masonry
                    breakpointCols={breakpointColumns}
                    className="flex -ml-6 w-auto"
                    columnClassName="pl-6 bg-clip-padding"
                >
                    {images.map((image, index) => (
                        <div key={image.name} className="mb-6">
                            <ImageCard
                                image={image}
                                onClick={() => onImageClick(index)}
                                index={index}
                            />
                        </div>
                    ))}
                </Masonry>
            </motion.div>

            {images.length === 0 && (
                <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
                    <p className="text-2xl text-white/60 font-medium">No wallpapers found</p>
                    <p className="text-white/40 mt-2">Add some images to get started</p>
                </div>
            )}
        </div>
    );
}
