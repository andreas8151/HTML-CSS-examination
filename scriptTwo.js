const buttonSeven = document.querySelector('.btn-7');
const textInfoSeven = document.querySelector('.text-info-7');

buttonSeven.addEventListener('click', () => {
    if (window.getComputedStyle(textInfoSeven).display === 'none') {
        textInfoSeven.style.display = 'block';
        buttonSeven.innerHTML = 'Dölj';
    } else {
        textInfoSeven.style.display = 'none';
        buttonSeven.innerHTML = 'Info';
    }
});