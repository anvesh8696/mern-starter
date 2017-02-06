export const LOCATION_CHANGE = 'LOCATION_CHANGE'

const initialState = null

export default (state = initialState, action) => {
  return action.type == LOCATION_CHANGE
    ? action.payload
    : state
}
