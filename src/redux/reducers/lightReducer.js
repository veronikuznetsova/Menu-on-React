const initial = {
    light: 'light'
}

function lightReducer(state = initial, action) {
    switch(action.type) {
        case 'CHANGE_LIGHT':
            return {
                light: document.body.classList.toggle('dark')
            }
        default:
            return state;
    }
}

export default lightReducer;