import {
  SET_API_KEY,
} from './DashboardActions'

const AppState = {
  apiKey :  null
}

export default function _app(state = AppState, action) {
  switch (action.type) {
  case SET_API_KEY:
    return { ...state,
      apiKey: action.apiKey }

  default:
    return state
  }
}
