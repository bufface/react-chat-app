export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...action.user
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};

export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        action.user
      ];
    case 'UPDATE_USER':
      return state.map((user) => {
        if (user.uid === action.uid) {
          return {
            ...user,
            ...action.user
          }
        } else {
          return user;
        }
      });
    case 'SET_AS_ACTIVE':
      return state.map((user) => {
        if (user.uid === action.uid) {
          return {
            ...user,
            active: true
          }
        } else {
          delete user.chatActive;
          return user;
        }
      });
    case 'LOGOUT':
      return [];
    default:
      return state;
  }
};

export const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        ...action.message
      };
    case 'LOGOUT':
      return [];
    default:
      return state;
  }
};