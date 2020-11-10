import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import home from '@/store/Home'

const reducers = combineReducers({
  home,
})


export const store = compose(applyMiddleware())(createStore)(reducers)

