import { motion, AnimatePresence } from 'framer-motion';
import { Palette } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';

export default function ThemeSwitch() {
    const { currentTheme, switchTheme, availableThemes } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* Theme Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="theme-switch-button p-3 rounded-xl transition-all duration-300"
                aria-label="Switch Theme"
            >
                <Palette className="w-5 h-5" />
            </motion.button>

            {/* Theme Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-40"
                        />

                        {/* Dropdown Menu */}
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="theme-dropdown absolute right-0 mt-2 z-50 rounded-xl shadow-2xl overflow-hidden"
                        >
                            <div className="p-2 space-y-1">
                                {availableThemes.map((theme) => (
                                    <motion.button
                                        key={theme.id}
                                        whileHover={{ x: 4 }}
                                        onClick={() => {
                                            switchTheme(theme.id);
                                            setIsOpen(false);
                                        }}
                                        className={`theme-option w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${currentTheme === theme.id ? 'active' : ''
                                            }`}
                                    >
                                        <span className="text-2xl">{theme.icon}</span>
                                        <div className="text-left">
                                            <p className="font-semibold text-sm">{theme.name}</p>
                                            <p className="text-xs opacity-70">{theme.id}</p>
                                        </div>
                                        {currentTheme === theme.id && (
                                            <motion.div
                                                layoutId="active-theme"
                                                className="ml-auto w-2 h-2 rounded-full theme-indicator"
                                            />
                                        )}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
