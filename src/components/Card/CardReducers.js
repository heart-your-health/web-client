import {
  TOGGLE_CARD_VIEW,
  INITIALIZE_CARD,
} from './CardActions'

const CardState = {
  isFlipped :  false,
  cardId: null
}

export default function card(state = [], action) {
  let newState

  switch (action.type) {

  case INITIALIZE_CARD:
    newState = [ ...state  ]
    newState.push({ ...CardState, 
      cardId: action.cardId
    })
    return newState

  case TOGGLE_CARD_VIEW:
    newState = state.map(card=>{
      if ( action.cardId === card.cardId ){
        return {
          ...card,
          isFlipped: !card.isFlipped
        }
      }
      return card
    })
    return newState

  default:
    return state
  }
}
