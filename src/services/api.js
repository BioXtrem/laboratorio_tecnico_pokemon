const charactersList = character => ({
    "name": character.name,
    "image": character.image,
    "status": character.status,
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
    console.log(data.characters.results.map(charactersList));
}