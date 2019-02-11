'use strict';

const canvas = document.querySelector('#neige'); // Selectionne le canvas
const ctx = canvas.getContext('2d'); // Choppe la position du curseur au click

const getCoordinatesInCanvas = (canvasEl, event) => {
  const rect = canvasEl.getBoundingClientRect(); // récupérer la taille de <canvas> et sa position relative par rapport à la zone d'affichage
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  console.log(`x: ${x}, y: ${y}`);
}
canvas.addEventListener('click', (event) => {
  getCoordinatesInCanvas(canvas, event);
})

ctx.strokeStyle = 'white';
ctx.fillStyle = 'white';

// HEAD
ctx.beginPath();
ctx.arc(200, 180, 60, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// BODY
ctx.beginPath();
ctx.arc(200, 360, 120, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// HAT
ctx.strokeStyle = 'black';
ctx.fillStyle = 'black';
ctx.fillRect(126, 131, 145, 30);
ctx.fillRect(155, 52, 90, 100);

// EYES
ctx.beginPath();
ctx.arc(176, 176, 5, 0, 2 * Math.PI); // LEFT
ctx.stroke();                         ////////
ctx.fill();                           ////////

ctx.beginPath();
ctx.arc(216, 176, 5, 0, 2 * Math.PI); // RIGHT
ctx.stroke();                         ////////
ctx.fill();                           ////////

// ARMS
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(130, 309); // LEFT ARM
ctx.lineTo(41, 225); ////////////
ctx.stroke();

ctx.beginPath();
ctx.moveTo(266, 309); // RIGHT ARM
ctx.lineTo(359, 225); ////////////
ctx.stroke();

// NOSE
ctx.strokeStyle = 'orange';
ctx.fillStyle = 'orange';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(198, 188); 
ctx.lineTo(125, 207); 
ctx.lineTo(197,214);
ctx.stroke();
ctx.quadraticCurveTo(207,200,198,188);
ctx.stroke();
ctx.fill();

// SCARF
ctx.strokeStyle = 'purple';
ctx.fillStyle = 'purple';
ctx.fillRect(172,234,80,30);
ctx.fillRect(227,264,25,100);


const can = document.querySelector('#yoda');
const ctxx = can.getContext('2d'); // Choppe la position du curseur au click

const getCoordinatesInCanvass = (canvasEl, event) => {
  const rect = canvasEl.getBoundingClientRect(); // récupérer la taille de <canvas> et sa position relative par rapport à la zone d'affichage
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  console.log(`x: ${x}, y: ${y}`);
}
can.addEventListener('click', (event) => {
  getCoordinatesInCanvass(can, event);
})

ctxx.strokeStyle = 'olive';
ctxx.fillStyle = 'olive';
ctxx.beginPath();
ctxx.arc(193, 230, 120, 0, 2 * Math.PI);
ctxx.stroke();
ctxx.fill();

ctxx.strokeStyle = 'green';
ctxx.fillStyle = 'green';
ctxx.beginPath();
ctxx.moveTo(100, 300); 
ctxx.lineTo(300, 178); 
ctxx.stroke();

