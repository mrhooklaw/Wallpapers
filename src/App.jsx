import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import Gallery from './components/Gallery';
import Lightbox from './components/Lightbox';
import wallpapersData from './wallpapers.json';

function App() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleClose = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = () => {
    if (selectedImageIndex < wallpapersData.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  return (
    <ThemeProvider>
      <Layout wallpaperCount={wallpapersData.length}>
        <Gallery images={wallpapersData} onImageClick={handleImageClick} />

        <AnimatePresence>
          {selectedImageIndex !== null && (
            <Lightbox
              image={wallpapersData[selectedImageIndex]}
              onClose={handleClose}
              onNext={handleNext}
              onPrev={handlePrev}
              hasNext={selectedImageIndex < wallpapersData.length - 1}
              hasPrev={selectedImageIndex > 0}
            />
          )}
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
