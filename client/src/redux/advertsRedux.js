import shortid from 'shortid';
import { API_URL } from '../config';

export const fetchAllAdverts = async () => {
  try {
    const res = await fetch(`${API_URL}/ads`);
    const jsonData = await res.json();
    console.log('jsonData', jsonData);
  } catch (err) {
    console.log('error', err);
    return err;
  }
};

//selcters
export const getAllAdverts = ({ adverts }) => adverts;
export const getAdvertById = ({ adverts }, advertId) =>
  adverts.find((advert) => advert._id === advertId);

// actions
const createActionName = (actionName) => `app/adverts/${actionName}`;
const ADD_ADVERT = createActionName('ADD_ADVERT');

// action creators
export const addAdvert = (payload) => ({ type: ADD_ADVERT, payload });

const advertsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_ADVERT:
      return [statePart, { ...action.payload, _id: shortid() }];
    default:
      return statePart;
  }
};

export default advertsReducer;
