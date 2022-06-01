const gridContainer = document.querySelector('.gridContainer');

const gridSizeSlider = document.getElementById('gridsizeslider');
const gridSizeValue = document.getElementById('gridvalue');

// Default grid size
createBoxes(10);
gridSizeValue.innerHTML = gridSizeSlider.value;

function createBoxes(numBox) {
    for (let i = 0; i < numBox; i++) {
      const row = gridContainer.appendChild(document.createElement('div'));
      for (let j = 0; j < numBox; j++) {
        const square = document.createElement('div');
        square.className = 'box';
        row.appendChild(square);
      }
    }
  }

// Update gridsize when slider value is changed
gridSizeSlider.addEventListener('input', function() {
    gridContainer.innerHTML = '';
    gridSizeValue.innerHTML = this.value;
    createBoxes(this.value);
});