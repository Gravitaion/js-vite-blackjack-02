
/**
 * Esta función regresa una carta apartir del deck
 * @param {Array<String>} deck Arreglo de cartas existentes en el deck
 * @returns {string} retorna una carta del deck
 */
export const pedirCarta = ( deck ) => {

    if(!deck || deck.length === 0) 
        throw new Error('No hay cartas en el deck');

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}