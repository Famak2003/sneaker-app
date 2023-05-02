"use-strict"
const add = document.querySelector('.add')
const remove = document.querySelector('.minus')
const countEl = document.querySelector('h4')
const addToCart = document.querySelector('.addCart')
const cart = document.querySelector('cart')
const cartNum = document.querySelector('#cartId')

// BODY
const body = document.querySelector('body')


// Main - Picture Veiw
const main_image_view = document.querySelector('.main_image_view');
const mainImage = document.querySelector('.main-img');
const next = document.querySelector('.next');
const previous = document.querySelector('.previous');
const emi = document.querySelector(".emi");
const close_main_img = document.querySelector('.close_main_img');

// Thumbnail Action
// const thumbnail = document.querySelector('.thumbnail')

// thumbnail.addEventListener('click', function(e) {
//     let event = e.target.classList
//     num = event[0].charAt(event[0].length - 1);

// })


// --------- Body click
body.addEventListener('click', function(e) {
    let cartDecide = e.target.classList.contains('cartImg') ? false : true
    let avatarDecide = e.target.classList.contains('avatar_img') ? false : true
    if (cartDecide) {
        cartMenu.classList.add('cm')
    }
    if (avatarDecide) {
        avatarMenu.classList.add('am')
    }
})


// ------- Item increament function
let count = 0;
let cartId = 0
add.addEventListener('click', function() {
    count++
    countEl.textContent = count

})
remove.addEventListener('click', function() {
    if (count > 0) {
        count--
        countEl.textContent = count
    }

})
addToCart.addEventListener('click', function() {
    cartId += count
    cartNum.textContent = cartId
    count = 0
    countEl.textContent = 0
})


// ----------- Main - Picture Veiw

// To get image number from image source
function getImgId(e) {
    let path = e
    let len = path.split('-').length
    let firsHalf = e.split('-')[len - 1]

    return firsHalf.split('.')[0]

}
previous.addEventListener('click', function() {
    let num = Number(getImgId(emi.src))
    if (num === 1) {
        emi.src = `images/image-product-${4}.jpg`
    } else {
        num -= 1
        emi.src = `images/image-product-${num}.jpg`
    }
})
next.addEventListener('click', function() {
    let num = Number(getImgId(emi.src))
    if (num === 4) {
        emi.src = `../images/image-product-${1}.jpg`
    } else {
        num += 1
        emi.src = `../images/image-product-${num}.jpg`
    }
})
mainImage.addEventListener('click', function(e) {
    main_image_view.style.display = 'flex';
    let num = Number(getImgId(e.target.src))
    emi.src = `../images/image-product-${num}.jpg`
})
close_main_img.addEventListener('click', function() {
    main_image_view.style.display = 'none';
})