import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteAPI, getDataAPI } from '../../../config/redux/action';
import CardPost from '../../card/cardPost';

class Recipe extends Component {
  componentDidMount() {
    const isLogin = JSON.parse(localStorage.getItem('isLogin'));
    if (isLogin) {
      const user = JSON.parse(localStorage.getItem('userLogin'));
      this.props.getPost(user.uid);
    }
  }

  handleDeleta = (post) => {
    const { deleteAPI } = this.props;
    const datasUser = JSON.parse(localStorage.getItem('userLogin'));

    const data = {
      uid: datasUser.uid,
      postId: post.id,
    };

    deleteAPI(data);
  };

  render() {
    const { posts } = this.props;
    const { handleDeleta } = this;
    const isLogin = JSON.parse(localStorage.getItem('isLogin'));

    if (isLogin) {
      return (
        <div className='container'>
          <h1 className='mb-3'>Recipe Request</h1>
          <CardPost posts={posts} handleDeleta={handleDeleta} />
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
  posts: state.posts,
});

const reduxDispatch = (dispatch) => ({
  getPost: (data) => dispatch(getDataAPI(data)),
  deleteAPI: (data) => dispatch(deleteAPI(data)),
});

export default connect(reduxState, reduxDispatch)(Recipe);
