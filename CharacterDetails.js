import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CharacterDetails() {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    async function fetchCharacter() {
      try {
        const response = await axios.get('https://swapi.dev/api/people/1/');
        setCharacter(response.data);
      } catch (error) {
        console.error('Error fetching character:', error);
      }
    }

    fetchCharacter();
  }, []);

  return (
    <div>
      <h1>Character Details</h1>
      {character && (
        <div>
          <h2>{character.name}</h2>
          <p>Height: {character.height}</p>
          <p>Mass: {character.mass}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
}

export default CharacterDetails;
