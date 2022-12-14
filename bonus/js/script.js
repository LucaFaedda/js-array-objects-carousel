

function nextImage()
{
    //Vado a cambiare nome alla variabile in modo tale da poi poter togliere la classe active e aggiungerla all'altra

   if(itemActive < items.length - 1){
    items[itemActive].classList.remove('active')
    circles[itemActive].classList.remove('active')

    itemActive++;

    items[itemActive].classList.add('active')
    circles[itemActive].classList.add('active')
   }
   else{
    items[itemActive].classList.remove('active')
    circles[itemActive].classList.remove('active')

    itemActive = 0

    items[itemActive].classList.add('active')
    circles[itemActive].classList.add('active')
   }

}

function prevImage()
{
    if(itemActive > 0){
    items[itemActive].classList.remove('active')
    circles[itemActive].classList.remove('active')

    itemActive--;

    items[itemActive].classList.add('active')
    circles[itemActive].classList.add('active')

    }
    else{
    items[itemActive].classList.remove('active')
    circles[itemActive].classList.remove('active')

    itemActive = items.length - 1;

    items[itemActive].classList.add('active')
    circles[itemActive].classList.add('active')
    }
}

// creato array di oggetti 

const videogiochi = [
    {
        img: "01.webp",
        titolo: "Spiderman: Miles Morales",
        descrizione: "Il supereroe più amato di New York torna in una nuova veste"
    },
    {
        img: "02.webp",
        titolo: "Ratchet & Clank: Rift Apart",
        descrizione: "L'ultima avvincente avventura di Ratchet e Clank, questa volta saranno affiancati da dei nuovi alleati"
    },
    {
        img: "03.webp",
        titolo: "Fortnite",
        descrizione: "Beh, non c'è nemmeno bisogno di descrivere questo enorme gioco che ha portato al successo CiccioGamer"
    },
    {
        img: "04.webp",
        titolo: "Stray",
        descrizione: "Vesti i panni di un simpatico gattino in un mondo post-apocalittico"
    },
    {
        img: "05.webp",
        titolo: "Marvel Avenger",
        descrizione: "Tornano i vendicatori più forti del pianeta, una nuova minaccia imcombe"
    }
]

// mi definisco una costante vuota che poi vado a riempire nel forEach

let itemContain = ""

// creo una variabile che collego al DOM 


videogiochi.forEach(videogiochi => {
    itemContain += `<div class="item">
    <img src="./img/${videogiochi.img}" alt="image">
    <div class="descrizione">
    <h3> ${videogiochi.titolo}</h3>
    <p>${videogiochi.descrizione}</p>
    </div>
    </div>`
    
});

const immaginiCarosello = document.querySelector('.img-carosello')
immaginiCarosello.innerHTML += itemContain

//  creo una variabile che vada a collegarsi alla classe item da poter usare in JS

const items = document.getElementsByClassName('item')
const circles = document.getElementsByClassName('circle');

// mi faccio una variabile active pari a 0 che poi aumenterà di valore mano a mano che cambia soggetto

let itemActive = 0

// alla variabile itemActive collegata ad items aggiungo la classe active

items[itemActive].classList.add('active')
circles[itemActive].classList.add('active');

const next = document.querySelector('.next')
const prev = document.querySelector('.prev')

next.addEventListener('click', nextImage)
prev.addEventListener('click', prevImage)
