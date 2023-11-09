import {movies} from "./Data/movieDummy";
import MovieContainer from "./Component/MovieContainer";

function App() {

  const films = movies.results;

  return (
      <div className="App">
        {}
        <div className="app_container">
          {films.map((film) => {

            const { id } = film;
            return <MovieContainer key={id} film={film} />;
          })}
        </div>
      </div>
  );
}

export default App;
