document.addEventListener('DOMContentLoaded', () => {
  const carta = document.getElementById('carta');
  const btnVirar = document.getElementById('btnVirar');
  const btnDesvirar = document.getElementById('btnDesvirar');

  btnVirar.addEventListener('click', () => {
    carta.classList.remove('animar-desvirar');
    carta.classList.add('animar-virar');
  });

  btnDesvirar.addEventListener('click', () => {
    carta.classList.remove('animar-virar');
    carta.classList.add('animar-desvirar');
  });
});