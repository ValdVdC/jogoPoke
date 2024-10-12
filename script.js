let img = document.getElementById('foto')
let nome = document.getElementById('nome')
let buscar = document.getElementById('buscar')
let pokemon = document.getElementById('pokemon')
let random
let tentativas = document.getElementById('tentativas')
let chances 
let reiniciar = document.getElementById('reiniciar')
let aBusca = document.getElementById('aBusca')

let carregar=()=>{
    random = parseInt((Math.random()*150)+1);
    img.style.filter='brightness(0)'
    chances = 3
    tentativas.innerHTML = ('tentativas: '+chances)
  fetch ('https://pokeapi.co/api/v2/pokemon/'+random).then(response=>{
     return response.json()
   }).then(data=>{
    console.log(data)
    img.style.display='block';
    img.src = data.sprites.other['official-artwork'].
    front_default;  
    }).catch(error=>{
        console.log(error)
    })            
    reiniciar.style.display='none'
    aBusca.style.display='block'
}
buscar.addEventListener('click',()=>{
    fetch('https://pokeapi.co/api/v2/pokemon/'+random).then(response=>{
        return response.json()
    })
    .then(data=>{
        if(pokemon.value==data.name){
            img.style.filter='brightness(1)';
            tentativas.innerHTML=('Parabéns você acertou')
            reiniciar.style.display='block'
            aBusca.style.display='none'

        }else{
            chances= chances-1
            tentativas.innerHTML = ('tentativas: '+chances)
            if(chances==0){
                img.style.filter='brightness(1)';

                tentativas.innerHTML=('Que pena, o pokemon era: '
                     +data.name)
                     reiniciar.style.display='block'
                     aBusca.style.display='none'
            }
        }
        pokemon.value = ('')
        console.log()
        console.log(data.name)
        console.log(pokemon.value)
    })
    .catch(error=>{
        console.log(error)
    })
})
