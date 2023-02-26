

/**
 * Esta función me permite tomar una carta
 * @param {Array<tring>} deck es una arreglo de string
 * @returns {String} retorna una carta del Deck
 */


export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}