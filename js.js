// let box = document.querySelector('.popup')

// let showpopup = ()=>{
//     box.classList.toggle('active')
// }
let box = document.querySelector('.burger__box')
let ul = document.querySelector(' .header__nav ul')
let btn = document.querySelector(' .header__nav button')

let left = ()=>{
    box.classList.toggle('active')
    ul.classList.toggle('active')
    btn.classList.toggle('active')
}