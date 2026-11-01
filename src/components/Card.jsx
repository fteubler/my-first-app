const Card = ({ pokemon, isFavorite, onToggleFavorite }) => {

  const typeColor = {
    Grass: '#78C850',
    Fire: '#F08030',
    Water: '#6890F0',
    Electric: '#F8D030',
    Psychic: '#F85888',
    Normal: '#A8A878',
    Ghost: '#705898',
    Dragon: '#7038F8',
    Fighting: '#C03028',
    Rock: '#B8A038',
  };
   
  // add underline color based on type
  const underlineColor = typeColor[pokemon.type];

  return (
    <div className="card">
      <div style={{ backgroundColor: underlineColor, height: '0.2em', marginBottom: '1px' }} />
      <h2>{pokemon.name}</h2>
      <button
          className={`fav-btn ${isFavorite ? "fav-btn--on" : ""}`}
          onClick={() => onToggleFavorite(pokemon.id)}
          aria-pressed={isFavorite}
          aria-label={
            isFavorite
              ? `Remove ${pokemon.name} from favorites`
              : `Add ${pokemon.name} to favorites`
          }
        >
        {isFavorite ? "♥" : "♡"}
      </button>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
      <div className="pokemon-properties pokemon-properties--values-end">
        <span><b>Type</b></span>   <span style={{color:underlineColor}}><b>{pokemon.type}</b></span>
        <span><b>Attack</b></span> <span>{pokemon.attack}</span>
        <span><b>HP</b></span>     <span>{pokemon.hp}</span>
      </div>
    </div>
    
  )
}

export default Card;