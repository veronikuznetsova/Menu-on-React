import { usersList } from "../../components/Content/components/Users";

const initialState ={
    items: usersList
}

function userReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_USER':
            return {
                items: state.items.concat(action.payload)
            }
        case 'REMOVE_USER':
        return {
                items: state.items.filter(item => item !== action.payload)
            }
        default:
            return state;
    }
}

export default userReducer;