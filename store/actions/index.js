// import axios from 'axios';
// import * as Env from '../../../env';
// import jwt_decode from 'jwt-decode';


export const handleCategory_ACTION = `handleCategory_ACTION`;
export const handleCategory = (select) => {
  return {
    type: handleCategory_ACTION,
    payload: {
      category: select,
    },
  };
};