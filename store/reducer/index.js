import * as act from '../actions/index';

const initialState = {
    category: 'all',
    listOrder: [],
};
export default (state = initialState, action) => {
    switch (action.type) {
      case act.handleCategory_ACTION:
        return {
          ...state,
          category: action.payload.category,
        };
      case act.handleAddOrder_ACTION:
        return {
          ...state,
          listOrder: [...state.listOrder,action.payload.listOrder]
        };
      default:
        return state;
    }
};