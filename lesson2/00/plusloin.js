'use strict';
const mbody = document.querySelector('body');
const main = document.createElement('main');
main.innerHTML = '<h1>Main title</h1>';
main.innerHTML += '<p>Here goes the <strong>description</strong></p>';
main.innerHTML += '<img src="http://lorempixel.com/400/200/" alt="My image" width="30%">';
mbody.appendChild(main);
const div = document.createElement('div');
div.classList.add('cookies');
div.style.backgroundColor = '#fdfdfd';
div.style.borderRadius = '4px';
div.innerHTML = '<p>Hello, this site uses cookies! <span class="cookie-icon" data-custom-id="35"></span></p>';
mbody.appendChild(div);
const footer = document.createElement('footer');
footer.innerHTML = '<ul class="links"><li>Link 1</li><li>Link 2</li><li>Link 3</li><li>Link 4</li><li>Link 5</li><li>Link 6</li><li>Link 7</li><li>Link 8</li><li>Link 9</li><li>Link 10</li><li>Link 11</li><li>Link 12</li><li>Link 13</li></ul>';
mbody.appendChild(footer);
