import { API_URL } from './config/config';

// selectors
export const getAllAdverts = ({ adverts }) => adverts;

// actions
const createActionName = (actionName) => `app/status/${actionName}`;
// const UPDATE_STATUS = createActionName('UPDATE_STATUS');

// action creators
// const updateStatus = (payload) => ({ type: UPDATE_STATUS, payload });

const advertsReducer = (statePart = [], action) => {
  switch (action.type) {
  }
  return;
};

export default advertsReducer;
