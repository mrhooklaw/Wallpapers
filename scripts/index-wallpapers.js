import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WALLPAPERS_DIR = path.join(__dirname, '../Wallpapers');
const PUBLIC_DIR = path.join(__dirname, '../public');
const PUBLIC_WALLPAPERS_DIR = path.join(PUBLIC_DIR, 'wallpapers');
const OUTPUT_FILE = path.join(__dirname, '../src/wallpapers.json');

// Supported image extensions
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

async function indexWallpapers() {
    console.log('🖼️  Indexing wallpapers...');

    // Create public/wallpapers directory if it doesn't exist
    if (!fs.existsSync(PUBLIC_DIR)) {
        fs.mkdirSync(PUBLIC_DIR, { recursive: true });
    }
    if (!fs.existsSync(PUBLIC_WALLPAPERS_DIR)) {
        fs.mkdirSync(PUBLIC_WALLPAPERS_DIR, { recursive: true });
    }

    // Read all files from Wallpapers directory
    const files = fs.readdirSync(WALLPAPERS_DIR);

    const wallpapers = [];

    for (const file of files) {
        const ext = path.extname(file).toLowerCase();

        // Check if it's an image file
        if (IMAGE_EXTENSIONS.includes(ext)) {
            const sourcePath = path.join(WALLPAPERS_DIR, file);
            const destPath = path.join(PUBLIC_WALLPAPERS_DIR, file);

            // Copy file to public/wallpapers
            fs.copyFileSync(sourcePath, destPath);

            // Get file stats
            const stats = fs.statSync(sourcePath);

            wallpapers.push({
                name: file,
                path: `/wallpapers/${file}`,
                size: stats.size,
            });

            console.log(`  ✓ ${file}`);
        }
    }

    // Sort by name
    wallpapers.sort((a, b) => a.name.localeCompare(b.name));

    // Write to JSON file
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(wallpapers, null, 2));

    console.log(`\n✅ Indexed ${wallpapers.length} wallpapers`);
    console.log(`📁 Output: ${OUTPUT_FILE}`);
}

indexWallpapers().catch(console.error);
