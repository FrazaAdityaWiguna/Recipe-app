import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { registerUserAPI } from '../../config/redux/action';
import Form from './Form';

function SignUp({ isLoading, registerUserAPI }) {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  const clearInputs = () => {
    console.log('clearInputs');
    setUser({
      email: '',
      password: '',
    });
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.id]: e.value,
    });
  };

  const handleSubmit = (e) => {
    const { email, password } = user;

    e.preventDefault();
    registerUserAPI({ email, password });
    clearInputs();
    history.push('/');
  };

  return (
    <div className='container'>
      <h1>SignUp</h1>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} title='SignUp' loading={isLoading} user={user} />
    </div>
  );
}

const reduxState = (state) => ({
  isLoading: state.isLoading,
});

const reduxDispatch = (dispatch) => ({
  registerUserAPI: (dataUser) => dispatch(registerUserAPI(dataUser)),
});

export default connect(reduxState, reduxDispatch)(SignUp);
