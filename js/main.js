let elList = document.querySelector(".list");
let elText = document.querySelector(".headerText");
let coun = 0;

function pokemonGo(__pokemons) {
    for (let i = 0; i < pokemons.length; i++) {
        let newLi = document.createElement('li');
        let newImg = document.createElement("img");
        let newHr = document.createElement('hr');
        let newHeading = document.createElement('h3');
        let newButton = document.createElement('button')
        let newLike = document.createElement('img')
        let newText = document.createElement('p');
        let newStrong0 = document.createElement('strong')
        let newStrong1 = document.createElement('strong')
        
        newLi.setAttribute('class', 'item');
        newImg.setAttribute('class', 'image');
        newImg.setAttribute('src', __pokemons[i].img);
        newImg.setAttribute('alt','PokemonImage');
        newImg.setAttribute("width",'157');
        newImg.setAttribute('height', '157');
        newHr.setAttribute('class', 'line')
        newHr.setAttribute('width', '305');
        newHr.setAttribute('height', '3');
        newHeading.setAttribute('class', 'heading');
        newButton.setAttribute("data-uuid", 'close');
        newButton.setAttribute('class', 'button');
        // newButton.setAttribute('class', 'like__img');
        newButton.setAttribute('type','button');
        newLike.setAttribute('class' , 'img');
        newLike.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlgiSXzA216_jd6SJdBlOmTDo8PRLZw97KbA&usqp=CAU');
        newLike.setAttribute('alt', 'pokemonimg');
        newLike.setAttribute('width', '40');
        newLike.setAttribute('height', '40');
        newText.setAttribute('class', 'text');
        newStrong0.setAttribute('class', 'strong__0');
        newStrong1.setAttribute('class', 'strong__1');
        
        
        newHeading.textContent = __pokemons[i].name;
        newText.textContent = __pokemons[i].type;
        newStrong0.textContent = __pokemons[i].height;
        newStrong1.textContent = __pokemons[i].weight;

        newLi.appendChild(newImg);
        newLi.appendChild(newHr);
        newLi.appendChild(newHeading);
        newLi.appendChild(newText);
        newLi.appendChild(newStrong1);
        newLi.appendChild(newStrong0);
        newLi.appendChild(newButton);
        newButton.append(newLike)
        elList.appendChild(newLi)
    }
}

pokemonGo(pokemons)

let elButton = document.querySelectorAll(".button");

setInterval(function add(){
    elText.textContent = coun
},10)

for (let jk = 0; jk < elButton.length; jk++) {
    elButton[jk].addEventListener('click', function(evt) {
        if (evt.target.dataset.uuid == 'close'){
            coun += 1 
            evt.target.dataset.uuid = 'open'
        }else if (evt.target.dataset.uuid = 'open') {
            coun -= 0
            evt.target.dataset.uuid = 'close'
        }
    })
}