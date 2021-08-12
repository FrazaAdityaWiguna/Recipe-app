import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const NavItems = ({ handleLogout }) => {
  const isLogin = JSON.parse(localStorage.getItem('isLogin'));

  if (isLogin) {
    return (
      <>
        <Link className='nav-link active' to='/'>
          Home
        </Link>
        <Link className='nav-link active' to='/create'>
          create
        </Link>
        <Link className='nav-link active' to='/request'>
          Recipe Req
        </Link>
        <Link className='nav-link active' to='/' onClick={handleLogout}>
          Log Out
        </Link>
      </>
    );
  }
  return (
    <>
      <Link className='nav-link active' to='/'>
        Home
      </Link>
      <Link className='nav-link active' to='/signin'>
        Sign in
      </Link>
      <Link className='nav-link active' to='/signup'>
        Sign Up
      </Link>
    </>
  );
};

const reduxState = (state) => ({
  // isLogin: state.isLogin,
  user: state.user,
});

export default connect(reduxState)(NavItems);
