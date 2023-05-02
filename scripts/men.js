"use-strict"

const menBackground = document.querySelector('.men-body')
const shoeName = document.querySelector('.shoe-name')
const shoeWriteup = document.querySelector('.shoe-writeup')
const writeUps = [
    ['NIKE Breathable 360', 'Engineered for the comfort and Fashion suitable for any condition anywhere, the Breathable Nike 360 shoe delivers an exccelent combination of comform, impact cushioning and garanteed luxry.'],
    ['NIKE AirForce 1', 'Engineered for the strongest Fashion on the street, the AirForce 1 Fahion Sheo delivers a powerful combination of support, impact cushioning and garanteed head turns.'],
    ['NIKE AirForce 2', 'Engineered for the strongest Fashion on the street, the AirForce 1 Fahion Sheo delivers a powerful combination of support, impact cushioning and garanteed head turns.'],
    ['NIKE AirForce 3', 'Engineered for the strongest Fashion on the street, the AirForce 1 Fahion Sheo delivers a powerful combination of support, impact cushioning and garanteed head turns.'],
    ['NIKE AirForce 4', 'Engineered for the strongest Fashion on the street, the AirForce 1 Fahion Sheo delivers a powerful combination of support, impact cushioning and garanteed head turns.'],
    ['NIKE AirForce 5', 'Engineered for the strongest Fashion on the street, the AirForce 1 Fahion Sheo delivers a powerful combination of support, impact cushioning and garanteed head turns.'],
    ['NIKE AirForce 6', 'Engineered for the strongest Fashion on the street, the AirForce 1 Fahion Sheo delivers a powerful combination of support, impact cushioning and garanteed head turns.'],
    ['NIKE AirForce 7', 'Engineered for the strongest Fashion on the street, the AirForce 1 Fahion Sheo delivers a powerful combination of support, impact cushioning and garanteed head turns.'],
    ['NIKE AirForce 8', 'Engineered for the strongest Fashion on the street, the AirForce 1 Fahion Sheo delivers a powerful combination of support, impact cushioning and garanteed head turns.'],
    ['NIKE AirForce 9', 'Engineered for the strongest Fashion on the street, the AirForce 1 Fahion Sheo delivers a powerful combination of support, impact cushioning and garanteed head turns.'],
    ['NIKE AirForce 10', 'Engineered for the strongest Fashion on the street, the AirForce 1 Fahion Sheo delivers a powerful combination of support, impact cushioning and garanteed head turns.'],
    ['NIKE AirForce 11', 'Engineered for the strongest Fashion on the street, the AirForce 1 Fahion Sheo delivers a powerful combination of support, impact cushioning and garanteed head turns.'],
    ['NIKE AirForce 12', 'Engineered for the strongest Fashion on the street, the AirForce 1 Fahion Sheo delivers a powerful combination of support, impact cushioning and garanteed head turns.'],
    ['NIKE AirForce 13', 'Engineered for the strongest Fashion on the street, the AirForce 1 Fahion Sheo delivers a powerful combination of support, impact cushioning and garanteed head turns.'],
    ['NIKE AirForce 14', 'Engineered for the strongest Fashion on the street, the AirForce 1 Fahion Sheo delivers a powerful combination of support, impact cushioning and garanteed head turns.'],
    ['NIKE AirForce 15', 'Engineered for the strongest Fashion on the street, the AirForce 1 Fahion Sheo delivers a powerful combination of support, impact cushioning and garanteed head turns.'],
    ['NIKE AirForce 16', 'Engineered for the strongest Fashion on the street, the AirForce 1 Fahion Sheo delivers a powerful combination of support, impact cushioning and garanteed head turns.'],
    ['NIKE AirForce 17', 'Engineered for the strongest Fashion on the street, the AirForce 1 Fahion Sheo delivers a powerful combination of support, impact cushioning and garanteed head turns.'],
    ['NIKE AirForce 18', 'Engineered for the strongest Fashion on the street, the AirForce 1 Fahion Sheo delivers a powerful combination of support, impact cushioning and garanteed head turns.'],
    ['NIKE AirForce 19', 'Engineered for the strongest Fashion on the street, the AirForce 1 Fahion Sheo delivers a powerful combination of support, impact cushioning and garanteed head turns.'],
    ['NIKE AirForce 20', 'Engineered for the strongest Fashion on the street, the AirForce 1 Fahion Sheo delivers a powerful combination of support, impact cushioning and garanteed head turns.'],
    ['NIKE AirForce 21', 'Engineered for the strongest Fashion on the street, the AirForce 1 Fahion Sheo delivers a powerful combination of support, impact cushioning and garanteed head turns.'],
    ['NIKE AirForce 22', 'Engineered for the strongest Fashion on the street, the AirForce 1 Fahion Sheo delivers a powerful combination of support, impact cushioning and garanteed head turns.'],
    ['NIKE AirForce 23', 'Engineered for the strongest Fashion on the street, the AirForce 1 Fahion Sheo delivers a powerful combination of support, impact cushioning and garanteed head turns.'],
    ['NIKE AirForce 24', 'Engineered for the strongest Fashion on the street, the AirForce 1 Fahion Sheo delivers a powerful combination of support, impact cushioning and garanteed head turns.'],
    ['NIKE AirForce 25', 'Engineered for the strongest Fashion on the street, the AirForce 1 Fahion Sheo delivers a powerful combination of support, impact cushioning and garanteed head turns.'],

]
const shoeColors = [
    'color1',
    'color2',
    'color3'
]

let count = 0
const timer = setInterval(function() {
    count = count === 26 ? 0 : count
    menBackground.style.backgroundImage = `url(../images/men_back_${count}.jpg)`
    menBackground.style.mixBlendMode = `color-burn`
    shoeName.innerHTML = `${writeUps[count][0]}`
    shoeWriteup.innerHTML = `${writeUps[count][1]}`
    count += 1

}, 5000)