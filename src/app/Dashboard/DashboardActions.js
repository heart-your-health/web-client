export const SET_API_KEY = 'SET_API_KEY'
export function setApiKey(apiKey) {
  return {
    type: SET_API_KEY,
    apiKey
  }
}
