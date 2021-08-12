import React, { useState } from 'react';

const LongText = ({ content, limit }) => {
  const [showAll, setShowAll] = useState(false);

  const showMore = () => setShowAll(true);
  const showLess = () => setShowAll(false);

  if (content.length <= limit) {
    return <div>{content}</div>;
  }
  if (showAll) {
    return (
      <div>
        {content}
        <span onClick={showLess} className='text-gray ms-3' style={{ cursor: 'pointer' }}>
          Read less
        </span>
      </div>
    );
  }

  const toShow = content.substring(0, limit) + '...';
  return (
    <div>
      {toShow}
      <span onClick={showMore} className='text-gray ms-3' style={{ cursor: 'pointer' }}>
        Read more
      </span>
    </div>
  );
};

const CardSearch = ({ datas }) => {
  return (
    <>
      {datas &&
        datas.map((data, index) => (
          <div className='col-md-4 col-lg-3 mb-4' key={data.idMeal}>
            <div className='card m-3' style={{ boxShadow: '0 0 5px 0.5px rgb(0 0 0 / 50%)' }}>
              <img src={data.strMealThumb} className='card-img-top' alt={data.strCategory} />
              <div className='card-body'>
                <h5 className='card-title'>{data.strMeal}</h5>
                <LongText className='card-text' content={data.strInstructions} limit={100} />
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default CardSearch;
