import { SET_ACTIVE_NAV } from './actions';

const initialState = {
    activeNav: '#home',
};

const navReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_NAV:
            return { ...state, activeNav: action.payload };
        default:
            return state;
    }
};

export default navReducer;
