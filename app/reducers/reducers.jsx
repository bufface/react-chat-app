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
        if (user.uid === action.contactId) {
          const roomKey = (action.contactId > action.authId) ? `${action.authId}${action.contactId}` : `${action.contactId}${action.authId}`;
          return {
            ...user,
            active: true,
            roomKey
          }
        } else {
          delete user.active;
          delete user.roomKey;
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
    case 'ADD_MESSAGES':
      return [
        ...state,
        ...action.messages
      ];
    case 'ADD_MESSAGE':
      return [
        ...state,
        action.message
      ];
    case 'LOGOUT':
      return [];
    default:
      return state;
  }
};