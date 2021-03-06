// Import Components
import LibrarySong from "./LibrarySong";

const Library = ({
  audioRef,
  isPlaying,
  libraryStatus,
  setCurrentSong,
  setSongs,
  songs,
}) => {
  return (
    <div
      className={`library-container ${libraryStatus ? "active-library" : ""} `}
    >
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => {
          return (
            <LibrarySong
              audioRef={audioRef}
              id={song.id}
              isPlaying={isPlaying}
              key={song.id}
              setCurrentSong={setCurrentSong}
              song={song}
              songs={songs}
              setSongs={setSongs}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Library;
