"use-strict"
const add = document.querySelector('.add')
const remove = document.querySelector('.minus')
const countEl = document.querySelector('h4')
const addToCart = document.querySelector('.addCart')
const cart = document.querySelector('cart')
const cartNum = document.querySelector('#cartId')

// Menu
const menu = document.querySelector('.menu')
const links = document.querySelector('.links')
const menuClose = document.querySelector('.menuClose')

// Cart Dropdown
const cartImg = document.querySelector('.cartImg')
const cartMenu = document.querySelector('.cartMenu')

// BODY
const body = document.querySelector('body')

// Avatar Dropdown
const avatarImg = document.querySelector('.avatar_img')
const avatarMenu = document.querySelector('.avatar_menu')

// Account page
const myAccount = document.querySelector('.myAccount')
const accountPage = document.querySelector('.account-page')
const accountCloseButton = document.querySelector('.accountPage-close-button')

// Main - Picture Veiw
const mainImage = document.querySelector('.main-img')
const next = document.querySelector('.next')
const previous = document.querySelector('.previous')
const emi = document.querySelector(".emi")


// ------ MENU
menu.addEventListener('click', function() {
    links.style.transform = 'translateX(0)'
})
menuClose.addEventListener('click', function() {
    links.style.transform = 'translateX(-100%)'
})



// ------ Cart dropdown
cartMenu.classList.add('cm')
cartImg.addEventListener('click', function() {
    cartMenu.classList.toggle('cm')
})


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
    // const check = e.target.classList[0]
    // const states = {
    //     cartImg: ['cartMenu', 'cm'],
    //     avatar_img: ['avatarMenu', 'am']
    // }
    // let decide;
    // if (Object.keys(states).includes(check)) {
    //     decide = false
    //     let display = states[check]
    //     console.log(display)
    // } else {
    //     decide = true
    // }
    // console.log(display)
    // if (decide) {
    //     // display[0].classList.add(`${display[1]}`)
    //     console.log(display)
    // }
    // console.log(e.target.classList[0]);
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

// -------- Avatar Dropdown
avatarMenu.classList.add('am')
avatarImg.addEventListener('click', function() {
    avatarMenu.classList.toggle('am')
})

// --------- MY ACCOUNT PAGE
myAccount.addEventListener('click', function() {
    accountPage.style.transform = 'translateX(0)'
    accountPage.style.opacity = '1'
})
accountCloseButton.addEventListener('click', function() {
    accountPage.style.transform = 'translateX(-130%)'
    accountPage.style.opacity = '.2'
})

// ----------- Main - Picture Veiw
// mainImage.addEventListener('click', function() {
//     mainImage.style.postion
// })

// To get image number from image source
function getImgId() {
    let path = emi.src
    let len = path.split('-').length
    let firsHalf = emi.src.split('-')[len - 1]

    return firsHalf.split('.')[0]

}
previous.addEventListener('click', function() {
    // console.log(emi.src);
    let num = Number(getImgId())
    if (num === 1) {
        emi.src = `images/image-product-${4}.jpg`
    } else {
        num -= 1
        emi.src = `images/image-product-${num}.jpg`
    }
})
next.addEventListener('click', function() {
    // console.log(emi.src);
    let num = Number(getImgId())
    if (num === 4) {
        emi.src = `images/image-product-${1}.jpg`
    } else {
        num += 1
        emi.src = `images/image-product-${num}.jpg`
    }
})