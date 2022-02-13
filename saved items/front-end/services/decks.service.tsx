import { fetchWrapper } from "front-end";
import { Deck, DeckId, Signal } from "lib/global/types";

/**
 * Removes the `cards` property from the deck so it is not accidentally saved with the deck.
 *
 * This function is NOT exported because it is not needed outside of this file.
 *
 * @param deck
 *  the deck instance
 * @returns {*}
 *  a copy of the deck instance with the `cards` property removed.
 */
 function stripCards(deck: Deck) {
    const { cards, ...deckWithoutCards } = deck;
    return deckWithoutCards;
  }


async function listDecks(signal: any) {
    const url = `${API_BASE_URL}/decks?_embed=cards`;
    return await fetchWrapper.get(url, signal);
  }
  
  /**
   * Saves deck to the database (public/data/db.json).
   * There is no validation done on the deck object, any object will be saved.
   * @param deck
   *  the deck to save, which must not have an `id` property
   * @param signal
   *  optional AbortController.signal
   * @returns {Promise<deck>}
   *  a promise that resolves the saved deck, which will now have an `id` property.
   */


async function createDeck(deck: Deck, signal: Signal) {
    const url = `${API_BASE_URL}/decks`;
    const body = JSON.stringify(stripCards(deck))
    return await fetchWrapper.post(url, body, signal);
  }
  
  /**
   * Retrieves the deck with the specified `deckId`
   * @param deckId
   *  the `id` property matching the desired deck.
   * @param signal
   *  optional AbortController.signal
   * @returns {Promise<any>}
   *  a promise that resolves to the saved deck.
   */
async function readDeck(deckId: DeckId, signal: Signal) {
    const url = `${API_BASE_URL}/decks/${deckId}?_embed=cards`;
    return await fetchWrapper.get(url, signal);
  }
  
  /**
   * Updates an existing deck
   * @param updatedDeck
   *  the deck to save, which must have an `id` property.
   * @param signal
   *  optional AbortController.signal
   * @returns {Promise<Error|*>}
   *  a promise that resolves to the updated deck.
   */
async function updateDeck(updatedDeck : Deck, signal: Signal) {
    const url = `${API_BASE_URL}/decks/${updatedDeck.id}?_embed=cards`;
    const body = JSON.stringify(stripCards(updatedDeck));
    return await fetchWrapper.put(url, body, signal);
  }
  
  /**
   * Deletes the deck with the specified `deckId`.
   * @param deckId
   *  the id of the deck to delete
   * @param signal
   *  optional AbortController.signal
   * @returns {Promise<Error|*>}
   *  a promise that resolves to an empty object.
   */
async function deleteDeck(deckId: DeckId, signal: Signal) {
    const url = `${API_BASE_URL}/decks/${deckId}`;
    // const options = { method: "DELETE", signal };
    return await fetchWrapper.delete(url);
  }


export const deckServices = {
    listDecks,
    createDeck,
    readDeck,
    updateDeck,
    deleteDeck
}