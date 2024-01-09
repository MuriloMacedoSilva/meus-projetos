'use strict'

const slideWrapper = document.querySelector('[data-slide="wrapper"]')
const slideList = document.querySelector('[data-slide="list"]')
const navPreviousButton = document.querySelector('[data-slide="nav-previous-button"]')
const navNextButton = document.querySelector('[data-slide="nav-next-button"]')
const controlsWrapper = document.querySelector('[data-slide="controls-wrapper"]')
const slideItems = document.querySelectorAll('[data-slide="item"]')
const controlButtons = document.querySelectorAll('[data-slide="control-button"]')

function onMouseDown (event) {
    const slideItem = event.currentTarget
    slideItem.addEventListener('mousemove', onMouseMove)
    console.log('pixel do mousedown', event.clientX)
    console.log('apertei o botão do mouse')
}

function onMouseMove(event) {
    console.log('movimentando o botão do mouse')
    console.log('pixel do mousemove', event.clientX)
}

function onMouseUp(event) {
    const slideItem = event.currentTarget
    slideItem.removeEventListener('mousemove', onMouseMove)
    console.log('soltei o botão do mouse')
}

slideItems.forEach(function(slideItem, index) {
    slideItem.addEventListener('dragstart', function(event) {
        event.preventDefault()
    })
    slideItem.addEventListener('mousedown', onMouseDown)
    slideItem.addEventListener('mouseup', onMouseUp)

})