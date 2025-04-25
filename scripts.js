// Change text content dynamically
document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('dynamicText').textContent = "The text has been changed!";
});

// Modify CSS styles via JavaScript
document.getElementById('changeColorButton').addEventListener('click', function() {
    document.getElementById('styledText').style.color = getRandomColor();
});

// Add or remove an element when a button is clicked
const elementContainer = document.getElementById('elementContainer');
let elementCount = 0;

document.getElementById('addElementButton').addEventListener('click', function() {
    elementCount++;
    const newElement = document.createElement('p');
    newElement.textContent = `New Element ${elementCount}`;
    elementContainer.appendChild(newElement);
});

document.getElementById('removeElementButton').addEventListener('click', function() {
    if (elementContainer.lastChild) {
        elementContainer.removeChild(elementContainer.lastChild);
        elementCount--;
    }
});

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
