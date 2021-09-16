import axios from "axios";
import action_Types from  '../constants/actionTypes';

const getCountries = (name) => async (dispatch) => {
    
    await axios
        .get('https://restcountries.eu/rest/v2/region/' + name )
        .then((res) => {
            console.log("success", res);
            // dispatch(SET_DROPDOWN_VALUES(res.data));
            dispatch(getData(res.data));
        })
        .catch(() => {
            // dispatch(SET_DROPDOWN_VALUES_ERROR(error));
            dispatch(getError());
            console.log("error");
        });
}

// const SET_DROPDOWN_VALUES = (result) => {
    const getData = (result) => {
    return {
        type: action_Types.SET_DROPDOWN_VALUES,
        payload: result,
    };
};

// const SET_DROPDOWN_VALUES_ERROR = (error) => {
    const getError = () => {
    return {
        type: action_Types.SET_DROPDOWN_VALUES_ERROR,
        payload: "error",
    };
};

export default getCountries;