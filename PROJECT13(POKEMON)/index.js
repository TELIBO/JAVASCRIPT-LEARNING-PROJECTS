function searchPokemon() {
    const pokemonNameOrId = document.getElementById('pokemon-input').value.toLowerCase().trim();
    if (pokemonNameOrId === '') {
        alert('Please enter a Pokémon name or ID.');
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon not found!');
            }
            return response.json();
        })
        .then(data => {
            displayPokemon(data);
        })
        .catch(error => {
            alert(error.message);
        });
}

function displayPokemon(pokemon) {
    const pokemonDetails = document.getElementById('pokemon-details');
    pokemonDetails.innerHTML = `
        <div>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
        </div>
        <div>
            <h2>${pokemon.name}</h2>
            <p>Height: ${pokemon.height / 10} m</p>
            <p>Weight: ${pokemon.weight / 10} kg</p>
            <p>Abilities: ${pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
        </div>
    `;
}
