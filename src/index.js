
console.log(data);
console.log(data[0])
//Root Elements
const pokemonUL = document.querySelector(".cards")
//You can start simple and just render a single 
//pokemon card from the first element

function renderCard() {
    pokemonUL.innerHTML = ''

      for (let index = 0; index < data.length; index++) {

        //Create elements
        const pokemon = data[index];
        const pokemonLi = document.createElement('li')
        const title = document.createElement('h2')
        const image = document.createElement('img')
        const pokemonText = document.createElement('ul')
        
        //Attributes
        pokemonLi.setAttribute('class', 'card')
        title.setAttribute('class','card--title')
        image.setAttribute('class', 'card--img')
        image.setAttribute('width', 256)
        image.setAttribute('src', pokemon.sprites.other["official-artwork"].front_default)
        pokemonText.setAttribute('class', 'card--text')


        title.innerText = pokemon.name

        for (let i = 0; i < pokemon.stats.length; i++) {
            const statLi = document.createElement('li')
            
            let string = ''

            string += pokemon.stats[i].stat.name.toUpperCase()

            string += ': '

            string += pokemon.stats[i].base_stat

            statLi.innerText = string
            pokemonText.appendChild(statLi)
        }
        
        pokemonLi.appendChild(title)
        pokemonLi.appendChild(image)
        pokemonLi.appendChild(pokemonText)
        pokemonLi.appendChild(gameAppearance(index))

        pokemonUL.appendChild(pokemonLi)
     }
}

function gameAppearance(index) {
    const pokemon = data[index]

    let string = 'version: '
    const statLi = document.createElement('li')
    for (let i = 0; i < pokemon.game_indices.length; i++) {
        
        

        string += pokemon.game_indices[i].version.name

        string += ', '

        statLi.innerText = string
    }
    return statLi
}

function main() {
    renderCard()
}
main()
console.log(data[0]);
