import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const themes = {
    cyberpunk: {
        id: 'cyberpunk',
        name: 'Cyberpunk Neon',
        icon: '🌃',
        colors: {
            primary: '#00f0ff',
            secondary: '#ff00ff',
            accent: '#ff0080',
            background: '#0a0a0f',
            surface: '#1a1a2e',
            text: '#ffffff',
            textMuted: '#a0a0ff',
        },
        fonts: {
            heading: "'Orbitron', sans-serif",
            body: "'Rajdhani', sans-serif",
        },
    },
    zen: {
        id: 'zen',
        name: 'Minimalist Zen',
        icon: '🎋',
        colors: {
            primary: '#7c9885',
            secondary: '#e8dcc4',
            accent: '#a8b5a0',
            background: '#fafaf8',
            surface: '#ffffff',
            text: '#2d2d2d',
            textMuted: '#6b6b6b',
        },
        fonts: {
            heading: "'Playfair Display', serif",
            body: "'Inter', sans-serif",
        },
    },
    arcade: {
        id: 'arcade',
        name: 'Retro Arcade',
        icon: '🕹️',
        colors: {
            primary: '#ff6b35',
            secondary: '#f7931e',
            accent: '#00d9ff',
            background: '#1a1a2e',
            surface: '#16213e',
            text: '#ffffff',
            textMuted: '#ffd700',
        },
        fonts: {
            heading: "'Press Start 2P', cursive",
            body: "'VT323', monospace",
        },
    },
};

export function ThemeProvider({ children }) {
    const [currentTheme, setCurrentTheme] = useState(() => {
        // Load theme from localStorage or default to cyberpunk
        const saved = localStorage.getItem('wallpaper-theme');
        return saved && themes[saved] ? saved : 'cyberpunk';
    });

    useEffect(() => {
        // Save theme to localStorage
        localStorage.setItem('wallpaper-theme', currentTheme);

        // Apply theme class to document
        document.documentElement.className = `theme-${currentTheme}`;
    }, [currentTheme]);

    const switchTheme = (themeId) => {
        if (themes[themeId]) {
            setCurrentTheme(themeId);
        }
    };

    const value = {
        currentTheme,
        theme: themes[currentTheme],
        switchTheme,
        availableThemes: Object.values(themes),
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}
