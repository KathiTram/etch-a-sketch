const gridContainer = document.querySelector('.gridContainer');

const gridSizeSlider = document.getElementById('gridsizeslider');
const gridSizeValue = document.getElementById('gridvalue');

const colorPicker = document.getElementById('colorpicker');


const clearButton = document.querySelector('.clearbutton');
const resetbutton = document.querySelector('.resetbutton');

// Default grid size
createBoxes(10);

// Grid size value text above slider
gridSizeValue.innerHTML = gridSizeSlider.value;

// Default hover color
colorChosen = 'black';

function createBoxes(numBox) {
    for (let i = 0; i < numBox; i++) {
      const row = gridContainer.appendChild(document.createElement('div'));
      for (let j = 0; j < numBox; j++) {
        const square = document.createElement('div');
        square.className = 'box';
        row.appendChild(square);
      }
    }

    document.querySelectorAll('.box').forEach(box => {
        box.addEventListener('mouseover', function() {
            box.style.backgroundColor = colorChosen;
        })
    });
  }

// Update gridsize when slider value is changed
gridSizeSlider.addEventListener('input', function() {
    gridContainer.innerHTML = '';
    gridSizeValue.innerHTML = this.value;
    createBoxes(this.value);
});


colorPicker.addEventListener('input', function () {
    colorChosen = this.value;
});

clearButton.addEventListener('click', function() {
    gridContainer.querySelectorAll('.box').forEach(box => {
        box.style.backgroundColor = '#ffffff';
    });
});

resetbutton.addEventListener('click', function() {
    window.location.reload();
})
