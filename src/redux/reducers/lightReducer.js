const initial = {
    color: true
}

function lightReducer(state = initial, action) {
    switch(action.type) {
        case 'CHANGE_LIGHT':
            return {
                color: true
            }
        case 'CHANGE_DARK':
            return {
                color: false
            }
        default:
            return state;
    }
}

export default lightReducer;