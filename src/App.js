import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await Axios.get(
        "https://www.breakingbadapi.com/api/characters"
      );
      console.log(response.data);
      setCharacters(response.data);
    };
    fetchCharacters();
  }, []);

  return (
    <div className="App">
      <h1>Breaking Bad Characters</h1>
      {characters.map((eachCharacter) => {
        return (
          <ul>
            <img src={eachCharacter.img} style={{ height: "30vh" }} />
            <li>{eachCharacter.name}</li>
            <li>{eachCharacter.nickname}</li>
            <li>{eachCharacter.occupation}</li>
            <li>{eachCharacter.portrayed}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
