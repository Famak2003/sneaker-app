// Avatar Dropdown
const avatarImg = document.querySelector('.avatar_img')
const avatarMenu = document.querySelector('.avatar_menu')

// Account page
const myAccount = document.querySelector('.myAccount')
const accountPage = document.querySelector('.account-page')
const accountCloseButton = document.querySelector('.accountPage-close-button')

// Menu
const menu = document.querySelector('.menu')
const links = document.querySelector('.links')
const menuClose = document.querySelector('.menuClose')

// Cart Dropdown
const cartImg = document.querySelector('.cartImg')
const cartMenu = document.querySelector('.cartMenu')


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
    accountPage.style.transform = 'translateX(-150%)'
    accountPage.style.opacity = '.2'
})