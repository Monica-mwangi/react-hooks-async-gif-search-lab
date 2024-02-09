import React, { useState, useEffect } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';


const GifListContainer = () => {
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=SCOLXgEgLOQjlswUu2I1jZq2SiV9jcmu");
        const data = await response.json();
        const gifs = data.data.slice(0, 3); // Take only the first 3 GIFs
        setGifs(gifs);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <GifSearch onSearch={handleSearch} />
      <GifList gifs={gifs} />
    </div>
  );
};

export default GifListContainer;