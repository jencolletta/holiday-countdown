import React from 'react';

const List = ({ allHolidays }) => {
  return (
    <>
      {allHolidays.map((holidays) => {
        const { id, name, days, image } = holidays;
        return (
          <article key={id} className='holidays'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{days} Days Until</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
