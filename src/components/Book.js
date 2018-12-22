import React from 'react';

// Default properties for Book
const Book = ({title = 'No Title Provided', author = 'No Author', pages = 'Undefined', freeBookmark= 'yes'}) => {
  return(
    <div>
      <h2> {title}</h2>
      <code> by: {author} </code>
      <br />
      <code> pages: {pages}</code>
      <p>Free Bookmark Today : {freeBookmark ? 'yes': 'no'}</p>
    </div>
  )
}

export default Book;