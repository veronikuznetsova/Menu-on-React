const initial = {
    count: 0
}

function countReducer(state = initial, action) {
    switch(action.type) {
        case 'ADD_COUNT':
            return {
                count: state.count + 1
            }
        case 'REMOVE_COUNT':
        return {
                count: state.count - 1
            }
        default:
            return state;
    }
}

export default countReducer;