
const redux = require('redux');

const initialState = {
    cakes : 100,
    sweets : 200
}

const reducer = (state = initialState,action)=>{

    switch(action.type){
        case 'ORDERED_CAKES':
            return{
                ...state,
                cakes : state.cakes - action.qty
            }
            case 'ORDERED_SWEETS':
                return{
                    ...state,
                    sweets : state.sweets - action.qty
                }
                default :
                return state
    }
}

const store = redux.createStore(reducer);

console.log("intial State =>",store.getState());

store.dispatch({type : 'ORDERED_CAKES' , qty :2});
store.dispatch({type : 'ORDERED_SWEETS' , qty :10});

console.log("Updated State =>",store.getState());

