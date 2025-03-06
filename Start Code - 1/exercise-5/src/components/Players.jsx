function Players( players ) {
    return (
      <li key={players.id} className="players-item">
        <button>
          <img src={players.image.src} alt={players.image.alt} />
          <h3>{players.name}</h3>
          <p>{players.position}</p>
          <p>{players.height}</p>
        </button>
      </li>
    );
  }
  export default Players;