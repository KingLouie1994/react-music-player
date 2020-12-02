// Import Components
import LibrarySong from "./LibrarySong";

const Library = ({ songs, currentSong }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => {
          return <LibrarySong song={song} />;
        })}
      </div>
    </div>
  );
};

export default Library;