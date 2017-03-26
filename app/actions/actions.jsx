import firebase, { githubProvider} from 'app/firebase/';

export const login = (uid) => {
  return {
    type: 'LOGIN',
    uid
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

export const logout = () => {
  return {
    type: 'LOGOUT'
  };
};

export const startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut()
    .then(() => {
      console.log('Logged out!');
    });
  };
};