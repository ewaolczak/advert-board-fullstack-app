// import React from 'react'

const dateToStr = (date) => {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };

  return date.toLocaleDateString('en-GB', options);
};

export default dateToStr;
