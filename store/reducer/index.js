import * as act from '../actions/index';

const initialState = {
    category: 'all',
};
export default (state = initialState, action) => {
    switch (action.type) {
      case act.handleCategory_ACTION:
        return {
          category: action.payload.category,
        };
      default:
        return state;
    }
};