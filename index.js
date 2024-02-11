// Write your code here!

document.querySelector('main#main').remove();


let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = "Dainis is the champion";

// Append the newHeader to the body or another suitable element
document.body.appendChild(newHeader);

