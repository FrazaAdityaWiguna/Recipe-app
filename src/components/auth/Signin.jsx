import React, { useEffect, useState } from 'react';
import Form from './Form';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../config/redux/action';

function Signin({ isLogin, isLoading, loginUsers }) {
  const [userLogin, setUserLogin] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  const clearInputs = () => {
    setUserLogin({
      email: '',
      password: '',
    });
  };

  const handleChange = (e) => {
    setUserLogin({
      ...userLogin,
      [e.id]: e.value,
    });
  };

  const handleSubmit = async (e) => {
    const { email, password } = userLogin;

    e.preventDefault();
    const response = await loginUsers({ email, password }).catch((err) => err);
    if (response) {
      localStorage.setItem('userLogin', JSON.stringify(response));
      clearInputs();
      history.push('/create');
    }
  };

  useEffect(() => {
    localStorage.setItem('isLogin', isLogin);
    console.log(isLogin);
  }, [isLogin]);

  return (
    <div className='container'>
      <h1>Signin</h1>
      <Form
        handleChange={(e) => {
          handleChange(e);
        }}
        handleSubmit={handleSubmit}
        title='SignIn'
        loading={isLoading}
        user={userLogin}
      />
    </div>
  );
}

const reduxState = (state) => ({
  isLoading: state.isLoading,
  isLogin: state.isLogin,
});

const reduxDispatch = (dispatch) => ({
  loginUsers: (data) => dispatch(loginUser(data)),
});

export default connect(reduxState, reduxDispatch)(Signin);
