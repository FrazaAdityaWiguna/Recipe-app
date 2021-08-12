import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPostAPI } from '../../../config/redux/action';

class Create extends Component {
  state = {
    name: '',
    recipe: '',
    date: '',
  };

  user = JSON.parse(localStorage.getItem('isLogin'));

  clearInputs = () => {
    this.setState({
      name: '',
      recipe: '',
      date: '',
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handlePost = (e) => {
    e.preventDefault();

    const { name, recipe } = this.state;
    const { addPost } = this.props;
    const userData = JSON.parse(localStorage.getItem('userLogin'));

    const data = {
      name: name,
      recipe: recipe,
      date: new Date().toLocaleString('en-US'),
      userId: userData.uid,
    };

    addPost(data);
    this.clearInputs();
    this.props.history.push('/request');
  };

  render() {
    const { name, recipe } = this.state;
    if (this.user) {
      return (
        <div className='container'>
          <form onSubmit={this.handlePost}>
            <div className='mb-3'>
              <label htmlFor='user' className='form-label'>
                Your Name
              </label>
              <input type='text' className='form-control' id='name' placeholder='John Doe' onChange={this.handleChange} value={name} required />
            </div>
            <div className='mb-3'>
              <label htmlFor='recipe' className='form-label'>
                Recipe Request
              </label>
              <input type='text' className='form-control' id='recipe' onChange={this.handleChange} value={recipe} required />
            </div>
            <button type='submit' className='btn btn-primary'>
              Add
            </button>
          </form>
        </div>
      );
    }
    return (
      <div className='container'>
        <h1>Please login first...</h1>;
      </div>
    );
  }
}

const reduxState = (state) => ({
  user: state.user,
});

const reduxDispatch = (dispatch) => ({
  addPost: (data) => dispatch(addPostAPI(data)),
});

export default connect(reduxState, reduxDispatch)(Create);
