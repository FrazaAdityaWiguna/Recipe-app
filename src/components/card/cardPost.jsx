import React from 'react';

function CardPost({ posts, handleDeleta }) {
  return (
    <>
      {posts
        ? posts.map((post) => (
            <div className='card mb-4' style={{ boxShadow: '0 0 5px 0.5px rgb(0 0 0 / 50%)' }} key={post.id}>
              <div className='card-header'>{post.data.date}</div>
              <div className='card-body'>
                <blockquote className='blockquote mb-0'>
                  <p>{post.data.recipe}</p>
                  <footer className='blockquote-footer'>
                    by <cite title='Source Title'>{post.data.name}</cite>
                  </footer>
                </blockquote>
                <button type='button' className='btn btn-danger mt-3' onClick={() => handleDeleta(post)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        : null}
    </>
  );
}

export default CardPost;
