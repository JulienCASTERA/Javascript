'use strict';

const dropZone = document.querySelector('#js-drop-to')
const draggable = document.querySelector('#js-draggable')

draggable.addEventListener('dragstart',event => {
    event.dataTransfer.setData('text',event.target.id)
})

dropZone.addEventListener('dragover',event => {
    event.preventDefault();
})

dropZone.addEventListener('drop',event => {
    event.preventDefault()
    const data = event.dataTransfer.getData('text')
    const el = document.getElementById(data)
    dropZone.appendChild(el)
})