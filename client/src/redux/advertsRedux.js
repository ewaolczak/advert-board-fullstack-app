import shortid from 'shortid';

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
