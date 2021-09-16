import action_Types from '../constants/actionTypes';
const INITIAL_STATE = {
  result: [],
  // error : false
}
const countryRegionReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case action_Types.SET_DROPDOWN_VALUES:
      return {
        ...state,
        result: payload,
      };
    case action_Types.SET_DROPDOWN_VALUES_ERROR:
      return {
        ...state,
       error : {result: false}
       
      };
    default:
      return state;
  }
};

export default countryRegionReducer;