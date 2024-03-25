const subCards = document.querySelector('.sub-cards')
let SubList = [
    {
        link: "img/اساس النھ.jpeg",
        Subname1 : '',
        Subname2 :'Usool e Hadees'
    },
    {
        link: "img/اساس النھ.jpeg",
        Subname1 : '',
        Subname2 :'Usool e Hadees'
    },
    {
        link: "img/اساس النھ.jpeg",
        Subname1 : '',
        Subname2 :'Usool e Hadees'
    },
    {
        link: "img/اساس النھ.jpeg",
        Subname1 : '',
        Subname2 :'Usool e Hadees'
    },
    {
        link: "img/اساس النھ.jpeg",
        Subname1 : '',
        Subname2 :'Usool e Hadees'
    },
    {
        link: "img/اساس النھ.jpeg",
        Subname1 : '',
        Subname2 :'Usool e Hadees'
    },
    {
        link: "img/اساس النھ.jpeg",
        Subname1 : '',
        Subname2 :'Usool e Hadees'
    },
    {
        link: "img/اساس النھ.jpeg",
        Subname1 : '',
        Subname2 :'Usool e Hadees'
    },
    {
        link: "img/اساس النھ.jpeg",
        Subname1 : '',
        Subname2 :'Usool e Hadees'
    },
    {
        link: "img/اساس النھ.jpeg",
        Subname1 : '',
        Subname2 :'Usool e Hadees'
    }
]
SubList.forEach((sub) => {
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = ` <p> اصول حدیث</p>
    <p>${sub.Subname2}</p>`
    subCards.appendChild(div)
})