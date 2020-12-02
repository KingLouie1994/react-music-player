// Importing Components
import Player from "./components/Player";
import Song from "./components/Song";

// Import Styles
import "./styles/app.scss";

// Import Data
import data from "./data";

function App() {
  return (
    <div>
      <Song />
      <Player />
    </div>
  );
}

export default App;
