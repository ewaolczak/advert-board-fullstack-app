import shortid from 'shortid';
import { API_URL } from '../config';

//selectors
export const getAllAdverts = ({ adverts }) => adverts;
export const getAdvertById = ({ adverts }, advertId) =>
  adverts.find((advert) => advert._id === advertId);

// actions
const reducerName = 'adverts';
const createActionName = (actionName) => `app/${reducerName}/${actionName}`;
const UPDATE_ADVERT = createActionName('UPDATE_ADVERT');
const ADD_ADVERT = createActionName('ADD_ADVERT');

// action creators
export const updateAdverts = (payload) => ({ type: UPDATE_ADVERT, payload });
export const addAdvert = (payload) => ({ type: ADD_ADVERT, payload });

export const fetchAllAdverts = () => {
  return (dispatch) => {
    fetch(`${API_URL}/api/ads`)
      .then((res) => res.json())
      .then((adverts) => dispatch(updateAdverts(adverts)));
  };
};

const advertsReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_ADVERT:
      return [{...action.payload}];
    case ADD_ADVERT:
      return [statePart, { ...action.payload, _id: shortid() }];
    default:
      return statePart;
  }
};

export default advertsReducer;
