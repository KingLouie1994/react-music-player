// Imports from React
import { useState } from "react";

// Import Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";

// Import Styles
import "./styles/app.scss";

// Import Data
import data from "./data";

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <Song
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs} currentSong={currentSong} />
    </div>
  );
}

export default App;
