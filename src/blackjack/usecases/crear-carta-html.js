/**
 * Funcion para crear una imagen de carta html
 * @param {String} carta 
 * @returns {HTMLImageElement} retorna un imagen
 */

export const crearCartaHTML = (carta) => {
  if (!carta) throw new Error('La carta es un argumento obligatorio')

  const imgCarta = document.createElement('img')
  imgCarta.src = `assets/cartas/${carta}.png`
  imgCarta.classList.add('carta')
  return imgCarta;
};


