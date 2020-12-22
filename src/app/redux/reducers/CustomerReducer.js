import { GET_CUSTOMER_LIST } from '../actions/CustomerAction';

const initialState = {
    customerList: [],
};

const CustomerReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_CUSTOMER_LIST: {
            return {
                ...state,
                customerList: [...action.payload]
            };
        }
        default: {
            return {
                ...state
            };
        }
    }
}

export default CustomerReducer;