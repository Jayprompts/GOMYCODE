// Wait for the DOM content to be loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select the color-box and change-color-btn elements using document.getElementById()
  const colorBox = document.getElementById('color-box');
  const changeColorBtn = document.getElementById('change-color-btn');
  const colorCodeSpan = document.getElementById('color-code');

  /**
   * Generates a random hexadecimal color code.
   * Example output: "#3F82E5"
   * @returns {string} Hex color string
   */
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Add event listener to the change-color-btn element
  changeColorBtn.addEventListener('click', () => {
    // Generate a random color
    const newColor = getRandomColor();

    // Change the background color of the color-box
    colorBox.style.backgroundColor = newColor;

    // Update the color code label inside the box
    if (colorCodeSpan) {
      colorCodeSpan.textContent = newColor;
    }
  });
});
