'use strict'

const prod_img = document.querySelector('.left-upper')

const thumbnail_1 = document.querySelector('.prod-1')
const thumbnail_2 = document.querySelector('.prod-2')
const thumbnail_3 = document.querySelector('.prod-3')
const thumbnail_4 = document.querySelector('.prod-4')

thumbnail_1.addEventListener('click', ()=>{
    prod_img.style.backgroundImage = "url('./images/image-product-1.jpg')"
})

thumbnail_2.addEventListener('click', ()=>{
    prod_img.style.backgroundImage = "url('./images/image-product-2.jpg')"
})

thumbnail_3.addEventListener('click', ()=>{
    prod_img.style.backgroundImage = "url('./images/image-product-3.jpg')"
})
thumbnail_3.addEventListener('click', ()=>{
    prod_img.style.backgroundImage = "url('./images/image-product-4.jpg')"
})



