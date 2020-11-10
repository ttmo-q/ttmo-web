import { HomeActions, HomeState } from './types'
import { HOME_ACTIONS } from './action-types'

export const initialState: HomeState = {
  data: null,
}

export default function HomeReducer(state = initialState, action: HomeActions): HomeState {
  switch (action.type) {
    case HOME_ACTIONS.SET_DATA:
      return {
        ...state,
      }
    default:
      return state
  }
}
