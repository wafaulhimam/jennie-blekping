const redux = require('redux');

// Buat initialState-nya terlebih dahulu, supaya state pada root reducer tidak me-return undefined
const initialState = {
    nilai: 25,
    umur: 50,
};

// action types
const TAMBAH_UMUR = 'TAMBAH_UMUR';
const TAMBAH_NILAI = 'TAMBAH_NILAI';

// reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === TAMBAH_UMUR) {
        return {
            ...state,
            umur: state.umur + 60,
        }
    } else if (action.type === TAMBAH_NILAI) {
        return {
            ...state,
            nilai: state.nilai + action.payload + action.data,
        }
    }
    return state;

    // switch(action.type) {
    //     case TAMBAH_UMUR:
    //         return {
    //             ...state,
    //             umur: state.umur + 60,
    //         }
    //     case TAMBAH_NILAI:
    //         return {
    //             ...state,
    //             nilai: state.nilai + action.payload + action.data,
    //         }
    //     default:
    //         return state;
    // }
};

// store
const store = redux.createStore(rootReducer);

// actions
store.dispatch({ type: TAMBAH_UMUR });
store.dispatch({ type: TAMBAH_NILAI, payload: 75, data: 100 });
console.log('get state =>', store.getState());