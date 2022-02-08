export const ADD_STOCK = 'airQuality/stocks/addStock';

const initialState = [];

export const createAction = (actionType, payload) => ({
  type: actionType,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STOCK:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
