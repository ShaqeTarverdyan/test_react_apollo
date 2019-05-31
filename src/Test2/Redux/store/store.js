// import reducer from '../Redusers/reducer';
import reducerA from '../Redusers/reducerA';
import reducerB from '../Redusers/reducerB';
import reducerMain from '../Redusers/reducerMain';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    rA:reducerA,
    rB:reducerB,
    rMain:reducerMain
})
const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;