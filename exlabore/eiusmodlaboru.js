document.getElementById('hideKalimba').addEventListener('click', toggleKalimba);

function toggleKalimba() {
    const kalimbaElement = document.getElementById('kalimba');
    if (kalimbaElement) {
        if (kalimbaElement.style.display === 'none') {
            kalimbaElement.style.display = 'block';
        } else {
            kalimbaElement.style.display = 'none';
        }
    } else {
        console.error('Element with ID "kalimba" not found.');
    }
}
