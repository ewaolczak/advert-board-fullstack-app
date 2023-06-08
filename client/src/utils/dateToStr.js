// import React from 'react'

const dateToStr = (publishedDate) => {
  const options = {year: "numeric", month: "numeric", day: "numeric"}

  return publishedDate.toLocaleDateString("en-GB", options);
};

export default dateToStr;
