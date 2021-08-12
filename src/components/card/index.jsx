import React, { useState } from 'react';

const LongText = ({ content, limit }) => {
  const [showAll, setShowAll] = useState(false);

  const showMore = () => setShowAll(true);
  const showLess = () => setShowAll(false);

  if (content.length <= limit) {
    // there is nothing more to show
    return <div>{content}</div>;
  }
  if (showAll) {
    // We show the extended text and a link to reduce it
    return (
      <div>
        {content}
        <span onClick={showLess} className='text-gray ms-3' style={{ cursor: 'pointer' }}>
          Read less
        </span>
      </div>
    );
  }
  // In the final case, we show a text with ellipsis and a `Read more` button
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

const Card = ({ datas }) => {
  return (
    <>
      {datas &&
        datas.map((data, index) => (
          <div className='col-md-4 col-lg-3 mb-4' key={data.idCategory}>
            <div className='card m-3' style={{ boxShadow: '0 0 5px 0.5px rgb(0 0 0 / 50%)' }}>
              <img src={data.strCategoryThumb} className='card-img-top' alt={data.strCategory} />
              <div className='card-body'>
                <h5 className='card-title'>{data.strCategory}</h5>
                <LongText className='card-text' content={data.strCategoryDescription} limit={100} />
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Card;
