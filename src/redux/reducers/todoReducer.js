const initialState ={
    items: ['one', 'two', 'three'],
    loading: false
}

function todoReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                items: state.items.concat(action.payload)
            }
        case 'REMOVE_TODO':
        return {
            ...state,
                items: state.items.filter(item => item !== action.payload)
            }
        case 'LOADING':
            return {
                ...state,
                loading: action.payload
           }
        default:
            return state;
    }
}

export default todoReducer;