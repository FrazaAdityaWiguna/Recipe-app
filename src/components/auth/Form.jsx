import React from 'react';

const Form = ({ handleChange, handleSubmit, loading, title, user }) => {
  const handleButton = () => {
    if (loading) {
      return (
        <button type='submit' className='btn btn-secondary disable' disabled>
          Loading...
        </button>
      );
    }
    return (
      <button type='submit' className='btn btn-primary'>
        {title}
      </button>
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email address
          </label>
          <input type='email' value={user.email} className='form-control' id='email' onChange={(e) => handleChange(e.target)} required />
          <div id='emailHelp' className='form-text'>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input type='password' value={user.password} className='form-control' id='password' onChange={(e) => handleChange(e.target)} required />
        </div>
        {handleButton()}
      </form>
    </div>
  );
};

export default Form;
