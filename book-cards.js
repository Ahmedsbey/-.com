let books_card = document.querySelector('.books-card')
let booksList = [
    {
        link: "img/اساس النھ.jpeg"
    },
    {
        link: "img/اساس النھ.jpeg"
    },
    {
        link: "img/اساس النھ.jpeg"
    },
    {
        link: "img/اساس النھ.jpeg"
    },
    {
        link: "img/اساس النھ.jpeg"
    },
    {
        link: "img/اساس النھ.jpeg"
    },
        {
            link: "img/اساس النھ.jpeg"
        },
        {
            link: "img/اساس النھ.jpeg"
        },
        {
            link: "img/اساس النھ.jpeg"
        },
        {    link: "img/اساس الصرف.jpeg"
    },
    {
            link: "img/اساس النھ.jpeg"
        }
   
]

booksList.forEach((books)=>{
const div = document.createElement('div')
div.classList.add('books')
div.innerHTML = 
`<div class="img-con">  <img src="${books.link}" alt="">
</div>
<div class="detail-con">   <h4 class="BName">Nisab-us-Sarf</h4>
  <p class="subName">Sub : <span>Usool e Hadees</span></p>
  <p class="authorN">Auth : <span>Madinat-ul-Ilmiya</span></p>
  <button>Download</button>`
books_card.appendChild(div)
})