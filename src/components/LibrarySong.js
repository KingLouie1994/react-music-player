// Import functions
import { playAudio } from "../util";

const LibrarySong = ({
  audioRef,
  id,
  isPlaying,
  setCurrentSong,
  setIsPlaying,
  song,
  songs,
  setSongs,
}) => {
  // Event Handlers
  const songSelectHandler = () => {
    setCurrentSong(song);
    // Add Active State
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    // Check if the song is playing
    playAudio(isPlaying, audioRef);
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
