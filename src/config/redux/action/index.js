import firebase, { database } from '../../firebase';

export const registerUserAPI = (dataUser) => (dispatch) => {
  dispatch({ type: 'CHANGE_ISLOADING', value: true });
  const { email, password } = dataUser;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch({ type: 'CHANGE_ISLOADING', value: false });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      alert(errorMessage);
      dispatch({ type: 'CHANGE_ISLOADING', value: false });
    });
};

export const loginUser = (dataUser) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: 'CHANGE_ISLOADING', value: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(dataUser.email, dataUser.password)
      .then((user) => {
        const dataUser = {
          email: user.user.email,
          uid: user.user.uid,
          refreshToken: user.user.refreshToken,
        };
        dispatch({ type: 'CHANGE_ISLOADING', value: false });
        dispatch({ type: 'CHANGE_ISLOGIN', value: true });
        dispatch({ type: 'CHANGE_USER', value: dataUser });
        resolve(dataUser);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        alert(errorMessage);
        dispatch({ type: 'CHANGE_ISLOADING', value: false });
        dispatch({ type: 'CHANGE_ISLOGIN', value: false });
        reject(false);
      });
  });
};

export const handleLogout = () => (dispatch) => {
  console.log('handleLogout');
  firebase.auth().signOut();
  dispatch({ type: 'CHANGE_ISLOGIN', value: false });
  localStorage.setItem('isLogin', false);
  const dataUser = {
    email: '',
    uid: '',
    refreshToken: '',
  };
  localStorage.setItem('userLogin', dataUser);
  dispatch({ type: 'CHANGE_USER', value: dataUser });
};

export const addPostAPI = (data) => (dispatch) => {
  database.ref(`posts/${data.userId}`).push({
    name: data.name,
    recipe: data.recipe,
    date: data.date,
  });
};

export const getDataAPI = (uid) => (dispatch) => {
  const urlPosts = firebase.database().ref('posts/' + uid);
  urlPosts.on('value', (snapshot) => {
    const data = [];
    if (snapshot.val()) {
      Object.keys(snapshot.val()).map((key) =>
        data.push({
          id: key,
          data: snapshot.val()[key],
        })
      );
    }
    dispatch({ type: 'SET_POSTS', value: data });
  });
};

export const deleteAPI = (data) => (dispatch) => {
  database.ref(`posts/${data.uid}/${data.postId}`).remove();
};

export const getDataSearchMeal = (data) => (dispatch) => {
  dispatch({ type: 'SET_DATA_SEARCH_MEAL', value: data });
};
