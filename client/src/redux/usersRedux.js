// selectors
export const getUser = ({ user }) => user;
export const activeUser = (state) => state.user;

// actions
const reducerName = 'users';
const createActionName = (actionName) => `app/${reducerName}/${actionName}`;
const LOG_IN = createActionName('LOG_IN');
const LOG_OUT = createActionName('LOG_OUT');

// action creators
export const logIn = (payload) => ({ type: LOG_IN, payload });
export const logOut = () => ({ type: LOG_OUT });

const usersReducer = (statePart = null, action) => {
  switch (action.type) {
    case LOG_IN:
      return action.payload;
    case LOG_OUT:
      return null;
    default:
      return statePart;
  }
};

export default usersReducer;
