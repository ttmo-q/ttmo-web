import { Dispatch } from 'redux'
import { HOME_ACTIONS } from './action-types'
import { FetchDataAction } from './types'

export const fetchData = (data: any) => (dispatch: Dispatch<FetchDataAction>) => {
    dispatch({type: HOME_ACTIONS.SET_DATA, data})
}
