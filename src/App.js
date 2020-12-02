// Imports from React
import { useState, useRef } from "react";

// Import Components
import Nav from "./components/Nav";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";

// Import Styles
import "./styles/app.scss";

// Import Data
import data from "./data";

function App() {
  // State
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [libraryStatus, setLibraryStatus] = useState(false);

  // References
  const audioRef = useRef(null);

  // Event Handlers
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const animation = (current / duration) * 100;
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
      animationPercentage: animation,
    });
  };

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Player
        audioRef={audioRef}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setSongs={setSongs}
        songEndHandler={songEndHandler}
        timeUpdateHandler={timeUpdateHandler}
      />
      <Library
        audioRef={audioRef}
        isPlaying={isPlaying}
        libraryStatus={libraryStatus}
        setCurrentSong={setCurrentSong}
        songs={songs}
        setSongs={setSongs}
      />
    </div>
  );
}

export default App;
