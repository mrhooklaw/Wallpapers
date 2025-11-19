import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import ThemeSwitch from './ThemeSwitch';

export default function Layout({ children, wallpaperCount }) {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, type: 'spring' }}
                className="z-40 glass-effect backdrop-blur-safari border-b border-white/10"
            >
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <img
                                src="/Logo.png"
                                alt="Logo"
                                className="w-12 h-12 object-contain"
                            />
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold text-gradient">
                                    Wallpaper Gallery
                                </h1>
                                <p className="text-sm text-white/60 mt-0.5">
                                    {wallpaperCount} stunning wallpapers
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <ThemeSwitch />

                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 glass-effect rounded-xl hover:bg-white/10 transition-all duration-300 group"
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* Main Content */}
            <main className="flex-1">
                {children}
            </main>

            {/* Footer */}
            <footer className="glass-effect border-t border-white/10 mt-12">
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-white/60 text-sm">
                            All credits go to the owners of the images. This is just a collection.
                        </p>
                        <p className="text-white/40 text-sm">
                            Built with ❤️ using React & Vite
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
