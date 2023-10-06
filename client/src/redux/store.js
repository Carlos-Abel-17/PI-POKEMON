import { createStore , applyMiddleware,compose } from 'redux';
import rootreducer from './reducer'
import  thunkMiddleware from 'redux-thunk'

 

const composeEnhancer= window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_|| compose;
// esto  sirve  para usar para confugar  la configulariocon de devtols 

const store = createStore (
    rootreducer , 
   composeEnhancer(applyMiddleware(thunkMiddleware))

)


export default store