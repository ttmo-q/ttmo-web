import { Action } from 'redux'
import { HOME_ACTIONS } from './action-types'

export interface HomeState {
  data: any
}

export type FetchDataAction = Action<HOME_ACTIONS.SET_DATA> & {}

export type HomeActions = FetchDataAction;
