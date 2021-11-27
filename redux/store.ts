import { createStore, applyMiddleware } from 'redux';  
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
const middleware = [thunk];
import rootReducer from './reducers/index';  
  
const store =  createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>