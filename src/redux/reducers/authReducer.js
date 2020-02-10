const initState = {
    authError : null,
    loading: false,
};

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'SIGNOUT_SUCCESS':
            return state;
        default:
            return state;
    }
}

export default authReducer;