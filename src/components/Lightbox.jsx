import { motion } from 'framer-motion';
import { Download, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';

export default function Lightbox({ image, onClose, onNext, onPrev, hasNext, hasPrev }) {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight' && hasNext) onNext();
            if (e.key === 'ArrowLeft' && hasPrev) onPrev();
        };

        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [onClose, onNext, onPrev, hasNext, hasPrev]);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = import.meta.env.BASE_URL + image.path.substring(1);
        link.download = image.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={onClose}
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 z-50 p-3 glass-effect-strong rounded-full hover:bg-white/20 transition-all duration-300 group"
                aria-label="Close"
            >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Download Button */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    handleDownload();
                }}
                className="absolute top-4 right-20 z-50 p-3 glass-effect-strong rounded-full hover:bg-white/20 transition-all duration-300 group"
                aria-label="Download"
            >
                <Download className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
            </button>

            {/* Previous Button */}
            {hasPrev && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onPrev();
                    }}
                    className="absolute left-4 z-50 p-3 glass-effect-strong rounded-full hover:bg-white/20 transition-all duration-300 group"
                    aria-label="Previous"
                >
                    <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
                </button>
            )}

            {/* Next Button */}
            {hasNext && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onNext();
                    }}
                    className="absolute right-4 z-50 p-3 glass-effect-strong rounded-full hover:bg-white/20 transition-all duration-300 group"
                    aria-label="Next"
                >
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
            )}

            {/* Image */}
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="relative mx-4"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={import.meta.env.BASE_URL + image.path.substring(1)}
                    alt={image.name}
                    className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                />

                {/* Image Info - Below the image */}
                <div className="mt-3 p-3 glass-effect-strong rounded-lg">
                    <p className="text-white font-medium truncate text-center">{image.name}</p>
                </div>
            </motion.div>
        </motion.div>
    );
}
