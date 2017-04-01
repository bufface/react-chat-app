import firebase, { firebaseRef, githubProvider} from 'app/firebase/';

// Login
export const login = (user) => {
  return {
    type: 'LOGIN',
    user: {
      uid: user.uid,
      name: user.displayName || user.email,
      avatar: user.photoURL || false,
      status: 'online'
    }
  }
};

export const startLogin = () => {
  return (dispatch, getState) => {
    firebase.auth().signInWithPopup(githubProvider)
      .then((result) => {
        console.log('Auth worked!');
      }, (error) => {
        console.log('Unable to auth');
      });
  };
};

// Logout
export const logout = () => {
  return {
    type: 'LOGOUT'
  }
};

export const startLogout = () => {
  return (dispatch, getState) => {
    dispatch(startSetUserOffline());
    return firebase.auth().signOut()
      .then(() => {
        console.log('Logged out!');
      });
  };
};

// Users
export const startAddUsers = () => {
  return (dispatch, getState) => {
    const user = getState().auth;
    firebaseRef.child(`users/${user.uid}`).set(user);
  };
};

export const addUser = (user) => {
  return {
    type: 'ADD_USER',
    user
  }
};

export const updateUser = (uid, user) => {
  return {
    type: 'UPDATE_USER',
    uid,
    user
  }
};

export const startSetUserOffline = () => {
  return (dispatch, getState) => {
    const user = getState().auth;
    firebaseRef.child(`users/${user.uid}`).update({status: 'offline'});
  }
};

// Chat
export const setUserAsActive = (contactId, authId) => {
  return {
    type: 'SET_AS_ACTIVE',
    contactId,
    authId
  }
};

export const startAddMessage = (message, roomKey) => {
  return (dispatch, getState) => {

    let roomsRef = firebaseRef.child(`rooms/${roomKey}`).push(message);
    return roomsRef.then(() => {
      dispatch(addMessage(message));
    });
  };
};

export const addMessage = (message) => {
  return {
    type: 'ADD_MESSAGE',
    message
  }
};