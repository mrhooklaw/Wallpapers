import { motion } from 'framer-motion';
import { Download, Eye } from 'lucide-react';
import { useState } from 'react';

export default function ImageCard({ image, onClick, index }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleDownload = (e) => {
        e.stopPropagation();
        const link = document.createElement('a');
        link.href = image.path;
        link.download = image.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="image-card group"
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Loading Skeleton */}
            {!isLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 animate-pulse rounded-xl" />
            )}

            {/* Image */}
            <img
                src={image.path}
                alt={image.name}
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
                className={`w-full h-auto object-cover transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'
                    } ${isHovered ? 'scale-110' : 'scale-100'}`}
            />

            {/* Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 rounded-xl"
            >
                {/* Image Name */}
                <p className="text-white font-medium text-sm mb-3 truncate drop-shadow-lg">
                    {image.name}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-2">
                    <button
                        onClick={onClick}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg hover:bg-white/30 transition-all duration-300 group/btn"
                    >
                        <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        <span className="text-sm font-medium">View</span>
                    </button>

                    <button
                        onClick={handleDownload}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-600/80 backdrop-blur-md rounded-lg hover:bg-primary-600 transition-all duration-300 group/btn"
                    >
                        <Download className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                        <span className="text-sm font-medium">Download</span>
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
}
