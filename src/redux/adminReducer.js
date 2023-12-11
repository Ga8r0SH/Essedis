const SET_ADMIN = 'SET_ADMIN';
const UPDATE_LOG_OUT_STATE = 'UPDATE_LOG_OUT_STATE';
const SET_ADMIN_LIST = 'SET_ADMIN_LIST';

let initialState = {
    isAdmin: false,
    isLogOut: true,
    adminList: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ADMIN:
            return {
                ...state,
                isAdmin: action.value
            }

        case UPDATE_LOG_OUT_STATE:
            return {
                ...state,
                isLogOut: action.value
            }

        case SET_ADMIN_LIST:
            return {
                ...state,
                adminList: action.list
            }

        default:
            return state;
    }
}

export const setAdminAC = value => ({type: SET_ADMIN, value});
export const updateLogOutStateAC = value => ({type: UPDATE_LOG_OUT_STATE, value});
export const setAdminListAC = list => ({type: SET_ADMIN_LIST, list});

export default adminReducer;