import shortid from 'shortid';
import { API_URL } from '../config';

//selcters
export const getAllAdverts = ({ adverts }) => adverts;
export const getAdvertById = ({ adverts }, advertId) =>
  adverts.find((advert) => advert._id === advertId);

// actions
const createActionName = (actionName) => `app/adverts/${actionName}`;
const UPDATE_ADVERT = createActionName('UPDATE_ADVERT');
const ADD_ADVERT = createActionName('ADD_ADVERT');

// action creators
export const updateAdvert = (payload) => ({ type: UPDATE_ADVERT, payload });
export const addAdvert = (payload) => ({ type: ADD_ADVERT, payload });

export const fetchAllAdverts = async (adverts) => {
  try {
    const res = await fetch(`${API_URL}/ads`);
    const jsonData = await res.json();
    console.log('jsonData', jsonData);
    // return (dispatch) => dispatch(updateAdvert(adverts));
  } catch (err) {
    console.log('error', err);
    return err;
  }
};

const advertsReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_ADVERT:
      return [...action.payload];
    case ADD_ADVERT:
      return [statePart, { ...action.payload, _id: shortid() }];
    default:
      return statePart;
  }
};

export default advertsReducer;
