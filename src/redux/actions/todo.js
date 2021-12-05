export function addTodo(name) {
    return {
        type: 'ADD_TODO',
        payload: name
    }
}

export function removeTodo(name) {
    return {
        type: 'REMOVE_TODO',
        payload: name
    }
}

export function setLoading(value) {
    return {
        type: 'LOADING',
        payload: value
    }
}

export function asyncAddTodo(name) {
    return function(dispatch) {
        dispatch(setLoading(true));

        setTimeout(() => {
            dispatch(addTodo(name));
            dispatch(setLoading(false));
        }, 1000);
    }
}
