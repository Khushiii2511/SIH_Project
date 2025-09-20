// src/components/VirtualGarden.jsx
import React from 'react';
import './VirtualGarden.css';
import seedImage from '../../assets/seed.png';
import sproutImage from '../../assets/sprout.png';
import plantImage from '../../assets/plant.png';

const VirtualGarden = ({ plotsData }) => { // Accept plotsData as a prop
  const renderPlot = (plot) => {
    // ... (existing logic)
  };

  return (
    <div className="virtual-garden-container">
      {/* ... (existing JSX) */}
      <div className="garden-grid">
        {plotsData.length > 0 ? (
          plotsData.map(renderPlot)
        ) : (
          <p>Your garden is empty! Start learning to grow your first crop.</p>
        )}
      </div>
    </div>
  );
};

export default VirtualGarden;