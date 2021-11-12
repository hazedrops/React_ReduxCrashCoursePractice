import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

// createStore(recuders, default state)
export const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk)
)

