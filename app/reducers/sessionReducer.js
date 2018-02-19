export default function sessionReducer(state={}, action){
    switch(action.type){
        case 'SET_SESSION_NAME':
            var newState = Object.assign({}, state);
            newState.sessionName = action.sessionName;        
            return (newState);
        break;
        case 'DELETE_SESSION_NAME':
            var newState = Object.assign({}, state);
            newState.sessionName = "";        
            return (newState);
        break;
        default: return state;
    }
    return;
}