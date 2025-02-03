/**
 * Esta funcion me permite asignarle un valor a un string carta
 * @param {String} carta un string
 * @returns {Number} retorna un numero valor de carta
 */

export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1)
    return isNaN(valor) ? (valor === 'A' ? 11 : 10) : valor * 1
}
