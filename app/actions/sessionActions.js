export function setSessionName(sessionName){
    return {type: 'SET_SESSION_NAME', sessionName}
}

export function deleteSessionName(sessionName){
    return {type: 'DELETE_SESSION_NAME', sessionName}
}