// Import Components
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong, setIsPlaying }) => {
  return (
    <div className="library-container">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => {
          return (
            <LibrarySong
              song={song}
              setCurrentSong={setCurrentSong}
              songs={songs}
              id={song.id}
              key={song.id}
              setIsPlaying={setIsPlaying}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Library;
