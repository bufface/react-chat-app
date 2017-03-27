export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...action.user
      }
    case 'LOGOUT':
      return {}
    default:
      return state;
  }
};

export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USERS':
      return [
        ...state,
        action.users
      ];
    case 'LOGOUT':
      return [];
    default:
      return state;
  }
};