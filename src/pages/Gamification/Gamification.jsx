import React, { useState, useEffect } from 'react';
import VirtualGarden from '../VirtualiGarden/VirtualGarden';
import axios from 'axios';
import './Gamification.css';

const Gamification = () => {
  const [gardenData, setGardenData] = useState([]);
  const userId = '68ce992248e08a9f553f9878'; // Replace this with the actual user ID you created

  useEffect(() => {
    // Only attempt to fetch data if the user ID has been replaced from the placeholder
    if (userId !== '68ce992248e08a9f553f9878') {
      const fetchGardenData = async () => {
        try {
          // CORRECTED: The API URL now matches the backend route
          const res = await axios.get(`http://localhost:5000/api/users/${userId}/progress`);
          setGardenData(res.data.virtualGarden);
        } catch (err) {
          console.error('Error fetching garden data:', err);
        }
      };

      fetchGardenData();
    }
  }, [userId]); // Add userId to the dependency array to trigger fetch when it changes

  return (
    <div className="gamification-page">
      <h1>Gamification & Progress Tracking</h1>
      {/* Conditionally render based on whether data has been fetched */}
      {gardenData.length > 0 ? (
        <VirtualGarden plotsData={gardenData} />
      ) : (
        <p className="loading-message">Loading garden data...</p>
      )}
    </div>
  );
};

export default Gamification;
