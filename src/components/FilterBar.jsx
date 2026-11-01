const FilterBar = ({
  types,
  activeType,
  onSelectType,
  showFavoritesOnly,
  onToggleFavoritesOnly,
  favoriteCount,
}) => {
  return (
    <div className="filter-bar">
      {types.map((type) => (
        <button
          key={type}
          className={`filter-btn ${activeType === type ? "filter-btn--active" : ""}`}
          onClick={() => onSelectType(type)}
          aria-pressed={activeType === type}
        >
          {type}
        </button>
      ))}

      <button
        className={`filter-btn filter-btn--fav ${showFavoritesOnly ? "filter-btn--active" : ""}`}
        onClick={onToggleFavoritesOnly}
        aria-pressed={showFavoritesOnly}
      >
        ♥ Favorites ({favoriteCount})
      </button>
    </div>
  );
}

export default FilterBar;