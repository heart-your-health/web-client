export const TOGGLE_CARD_VIEW = 'TOGGLE_CARD_VIEW'
export function toggleCardView(cardId) {
  return {
    type: TOGGLE_CARD_VIEW,
    cardId
  }
}

export const INITIALIZE_CARD = 'INITIALIZE_CARD'
export function initializeCard(cardId) {
  return {
    type: INITIALIZE_CARD,
    cardId
  }
}