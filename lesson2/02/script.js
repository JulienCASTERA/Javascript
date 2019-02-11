'use strict';

document.querySelector('input').addEventListener('click', function(e) {
  console.log('Clicked !');
  console.log(e);
  //switch(this.style.backgroundColor) {
  //  case 'grey':
  //    this.style.backgroundColor = 'green';
  //    break;
  //  case 'green':
  //    this.style.backgroundColor = 'grey';
  //    break;
  //}
  this.classList.toggle('green');
});

document.querySelector('input').addEventListener('dblclick', () => {
  console.log('Double clicked !');
});

['mouseenter', 'mouseleave'].forEach(evt => document.querySelector('div').addEventListener(evt, function() {
  this.classList.toggle('red');
}));

document.querySelectorAll('input')[1].addEventListener('mousedown', function() {
  this.className = 'purple';
});

document.querySelectorAll('input')[1].addEventListener('mouseup', function() {
  this.className = 'red';
});

let countclicks = 0;

document.querySelectorAll('input')[2].addEventListener('click', function() {
  ++countclicks;
  if(countclicks == 3) {this.removeEventListener('click');}
});

for(var i = 0; i < 20; i++) {
  document.querySelector('body').innerHTML += '<input type="button" class="buttonlist" value="' + i + '" />';
  document.querySelectorAll('.buttonlist')[i].addEventListener('click', function() {
    console.log('Button number ' + i + ' has been clicked !');
  });
}

for(var i = 0; i < 20; i++) {
  document.querySelectorAll('.buttonlist')[i].addEventListener('click', function() {
    console.log('Button number ' + i + ' has been clicked !');
  });
}
