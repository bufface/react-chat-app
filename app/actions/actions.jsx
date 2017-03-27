import firebase, { firebaseRef, githubProvider} from 'app/firebase/';

// Login
export const login = (user) => {
  return {
    type: 'LOGIN',
    user: {
      uid: user.uid,
      name: user.displayName || user.email,
      avatar: user.photoURL || false,
      status: 'active'
    }
  };
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
  };
};

export const startLogout = () => {
  return (dispatch, getState) => {
    const user = getState().auth;
    firebaseRef.child(`users/${user.uid}`).update({status: 'disconected'});
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
    dispatch(addUsers(user));
  }
};

export const addUsers = (users) => {
  return {
    type: 'ADD_USERS',
    users
  }
};