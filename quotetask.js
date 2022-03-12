let text = document.querySelector('.quote');
let author = document.querySelector('author');
let btnNext = document.querySelector('boxt');

let getQuote  = async () => {
const res = await fetch("https://bodybuilding-quotes1.p.rapidapi.com/author-quotes?author=Arnold", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "bodybuilding-quotes1.p.rapidapi.com",
            "x-rapidapi-key": "598d415832msh20154f2334d1861p139cb9jsn2944ebb6a01d"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });

 let quotes = await res.json();
 let num = Math.floor(Math.random() *quotes.length);
 let item = quotes[num];
 let quote = item.text;
 let aName = item.author;
 text.innerHTML = quote;
 author.innerText = aName; 

}

btnNext.addEventListener('click', getQuote);
