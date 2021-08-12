import React, { useEffect, useState } from 'react';
import Card from '../../card';
import { CATEGORIES_MEALS } from '../../api';
import axios from 'axios';
import Search from '../../search';
import { connect } from 'react-redux';
import CardSearch from '../../card/cardSearch';

function Dashboard({ searchMeal }) {
  const [categoriesMeals, setCategoriesMeals] = useState('');

  const getCategoriesFood = () => {
    axios(CATEGORIES_MEALS)
      .then((res) => setCategoriesMeals(res.data.categories))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCategoriesFood();
  }, []);

  return (
    <div className='container'>
      <Search />
      <div className='row'>
        {searchMeal.length > 0 && <div>Search result</div>}
        {searchMeal && <CardSearch datas={searchMeal} />}
        {!searchMeal && <div>Recipe not found</div>}
      </div>
      <h1>Recommend Meals</h1>
      <div className='row'>
        <Card datas={categoriesMeals} />
      </div>
    </div>
  );
}

const reduxState = (state) => ({
  searchMeal: state.searchMeal,
});

export default connect(reduxState)(Dashboard);
