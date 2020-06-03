const charactersList = character => ({
    "name": character.name,
    "image": character.image,
    "status": character.status,
    "species": character.species,
    "gender": character.gender,
    "location": character.location.name,
    "episode": character.episode[0].name,
})

export const rickMortyCharacteres = async (character = "rick") => {
    const query =`
        query {
            characters( filter: { name: "${character}" }) {
            results {
                name
                image
                status
                species
                gender
                location {
                name
                }
                episode {
                name
                }
            }
            }
        }
    `;

    const response = await fetch('https://rickandmortyapi.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({query})
    });

    const { data } = await response.json();
    return data.characters.results.map(charactersList);
}


export const getPokemons = async () => {
    let pokemons = []
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=964');
    const { results } = await response.json();

    await Promise.all(results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const result = await response.json();

        let tipo = []

        result.types.forEach(element => {
            tipo = [...tipo, element.type.name]
        });

        pokemons = [...pokemons, {
            name: pokemon.name,
            img: result.sprites.front_default,
            tipo
        }]
    }));
    
    return pokemons;
}