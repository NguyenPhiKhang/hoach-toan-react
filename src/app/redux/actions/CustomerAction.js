import axios from "axios";

export const GET_CUSTOMER_LIST = "GET_CUSTOMER_LIST";

export const getCustomerList = () => {
    axios.get("/api/customer/get-list").then(res=>{
        dispatch({
            type: GET_CUSTOMER_LIST,
            payload: res.data
        })
    })
}