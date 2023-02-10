const btn = document.querySelector('.fa-bars')
const closer = document.querySelector('.btn')
const body = document.querySelector('html')
const body2 = document.querySelector('body')
const img = document.querySelector('.img-nav')
const img1 = document.querySelector('.img-navs')
const mobile = document.querySelector('.mobile-nav')

img.addEventListener('click', (e)=>{
    e.preventDefault()
    body.classList += (' black')
    body2.classList += (' black')
    img.classList.add('none')
    img1.classList.remove('none')
})
img1.onclick = function(e){
    img1.classList.add('none')
    body.classList.remove('black')
    body2.classList.remove('black')
    img.classList.remove('none')
    e.preventDefault()
}
btn.onclick = function(e){
    mobile.classList.remove('none')
    e.preventDefault()
}

closer.onclick = function(e){
    mobile.classList.add('none')
    e.preventDefault()
}



