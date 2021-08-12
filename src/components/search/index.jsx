import axios from 'axios';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getDataSearchMeal } from '../../config/redux/action';
import { SEARCH_MEAL } from '../api';

function Search({ getSearchMeal }) {
  const [searchMeals, setSearchMeals] = useState({
    search: null,
  });

  const handleChange = (e) => {
    setSearchMeals({
      ...searchMeals,
      [e.target.id]: e.target.value,
    });
  };

  const getData = (data) => {
    const { search } = data;
    axios.get(`${SEARCH_MEAL}${search}`).then((res) => getSearchMeal(res.data.meals));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchMeals.search !== '') {
      getData(searchMeals);
    } else {
      alert('Not Found');
    }
  };

  return (
    <div>
      <form className='d-flex mx-auto mb-3' style={{ width: '500px' }} onSubmit={(e) => handleSubmit(e)}>
        <input className='form-control me-2' type='search' placeholder='Search Recipe' id='search' onChange={(e) => handleChange(e)} />
        <button className='btn btn-outline-success' type='submit'>
          Search
        </button>
      </form>
    </div>
  );
}

const reduxDispatch = (dispatch) => ({
  getSearchMeal: (data) => dispatch(getDataSearchMeal(data)),
});

export default connect(null, reduxDispatch)(Search);
