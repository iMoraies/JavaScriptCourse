var p1 = document.getElementsByTagName('p')[1]

/*

Existem todos esses getElements:
getElementById()
getElementsByClassName()
getElementsByTagName()
getElementsByName()
e o querySelector() e o querySelectorAll()
*/


var d = document.getElementById('msg')
d.style.background = 'green'
d.innerHTML = "You reading this"


var d = document.getElementsByClassName('msg')[0]
d.innerText = "Hi there!"


d = document.querySelector('.msg')
d.style.color = 'blue'

/* # é para id
   . é para class
*/