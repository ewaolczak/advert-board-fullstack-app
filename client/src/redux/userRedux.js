// selectors
export const getUserById = ({ userId }) => userId;

// actions
const reducerName = 'user';
const createActionName = (actionName) => `app/${reducerName}/${actionName}`;
const UPDATE_USER = createActionName('UPDATE_USER');

// action creators
export const updateUser = (payload) => ({ type: UPDATE_USER, payload });

const userReducer = (statePart = null, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return action.payload;
    default:
      return statePart;
  }
};

export default userReducer;
