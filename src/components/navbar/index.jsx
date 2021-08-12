import React from 'react';
import { Link } from 'react-router-dom';
import NavItems from './NavItems';
import { connect } from 'react-redux';
import { handleLogout } from '../../config/redux/action';

function Navbar({ handleLogout }) {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary mb-5'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          Recipe App
        </Link>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav ms-auto'>
            <NavItems handleLogout={handleLogout} />
          </div>
        </div>
      </div>
    </nav>
  );
}

const reduxDispatch = (dispatch) => ({
  handleLogout: () => dispatch(handleLogout()),
});

export default connect(null, reduxDispatch)(Navbar);
