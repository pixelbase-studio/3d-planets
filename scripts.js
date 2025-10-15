const viewer = document.querySelector('model-viewer');
const loader = document.querySelector('.loading-gif');
viewer.addEventListener('load', () => {
loader.style.display = 'none';
});
