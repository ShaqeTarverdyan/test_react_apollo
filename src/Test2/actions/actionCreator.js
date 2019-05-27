const addUserAction = (dispatch) => {
    dispatch(addUserActionBefore());
    
}

const addUserActionBefore = () => {
    return {type: 'ADD_USER_BEFORE'};
}