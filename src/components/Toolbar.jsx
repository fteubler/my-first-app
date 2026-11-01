function Toolbar({ search, onSearchChange}) {
  return (
    <div className="toolbar">
      <input
        type="search"
        className="toolbar__search"
        placeholder="Search by name…"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        aria-label="Search Pokémon by name"
      />

    </div>
  );
}

export default Toolbar;