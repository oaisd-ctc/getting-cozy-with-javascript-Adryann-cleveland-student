const colorSelect = document.getElementById('colorSelect');
const textContent = document.getElementById('container');

colorSelect.addEventListener('change', function() {
    // Clear previous classes
    textContent.classList.remove('blue', 'red', 'green');

    // Apply new class based on selection
    const selectedColor = colorSelect.value;
    if (selectedColor === 'blue') {
        textContent.classList.add('blue');
    } else if (selectedColor === 'red') {
        textContent.classList.add('red');
    } else if (selectedColor === 'green') {
        textContent.classList.add('green');
    }
});