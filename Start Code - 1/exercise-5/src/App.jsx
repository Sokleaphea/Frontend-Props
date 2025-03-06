import Players from "./components/Players.jsx";
import { AVAILABLE_CARD } from "./data.js";

function App() {
  return (
    <>
      <header>
        <h1>Shohoku High</h1>
        <p>Our Valuable Players?</p>
      </header>
      <main>
        <div className="players-category">
          <ul className="players">
            {/* For each place from AVAILABLE_PLACES, create a Place component */}
            {AVAILABLE_CARD.map((players) => (
              <Players key={players.id} {...players}/>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;

