import { useMemo, useState } from 'react';
import './style.css';
import './01_RLP.css';

/*import * as d3 from "d3";*/

import pokemons from "./data";
import Card from "./components/Card";
import FilterBar from './components/FilterBar';
import Toolbar from './components/Toolbar';
/*import Sidebar from "./components/Sidebar";*/

function App() {
  const [activeType, setActiveType] = useState("All");
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [search, setSearch] = useState("");

  // 2. derived data — computed from pokemons, not stored as state
  const types = useMemo(
    () => ["All", ...new Set(pokemons.map((p) => p.type))],
    []
  );

  // 3. state updater: never mutate the array, always return a new one
  function toggleFavorite(id) {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  }

  // 4. the visible list is derived from state, so it can never drift out of sync
  /*const visiblePokemons = useMemo(() => {
    return pokemons.filter((p) => {
      const matchesType = activeType === "All" || p.type === activeType;
      const matchesFav = !showFavoritesOnly || favoriteIds.includes(p.id);
      return matchesType && matchesFav;
    });
  }, [activeType, showFavoritesOnly, favoriteIds]);*/

  // Filtern – abgeleitet aus State + Daten
  const visiblePokemons = useMemo(() => {
    const query = search.trim().toLowerCase();

    return pokemons.filter((p) => {
      const matchesType = activeType === "All" || p.type === activeType;
      const matchesFav = !showFavoritesOnly || favoriteIds.includes(p.id);
      const matchesSearch = p.name.toLowerCase().includes(query);
      return matchesType && matchesFav && matchesSearch;
    });
  }, [activeType, showFavoritesOnly, favoriteIds, search]);

  return (
    <div className="app">
      
      <h1 className="title"> Pokemon Cards</h1>

      <Toolbar
        search={search}
        onSearchChange={setSearch}
      />

      <FilterBar
        types={types}
        activeType={activeType}
        onSelectType={setActiveType}
        showFavoritesOnly={showFavoritesOnly}
        onToggleFavoritesOnly={() => setShowFavoritesOnly((v) => !v)}
        favoriteCount={favoriteIds.length}
      />

      <p className="result-count">
        {visiblePokemons.length} von {pokemons.length} Pokémon
      </p>

      <div className="card-container">
        {visiblePokemons.map((pokemon) => (
          <Card
            key={pokemon.id}
            pokemon={pokemon}
            isFavorite={favoriteIds.includes(pokemon.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
      {visiblePokemons.length === 0 && (
        <p className="empty">Kein Pokémon passt zu diesem Filter.</p>
      )}
    </div>
  )

}

export default App
