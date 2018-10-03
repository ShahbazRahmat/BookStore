import React from 'react';
import BookInfo from './BookInfo';

const BookGallery = ({items, error}) =>
{
    return(
        <div>
            { error && <h3>{error}</h3>}
            {
              items !== undefined &&  items.map((item, i)=>(
                    <BookInfo data={item} index={i} />
                ))
            }       
        </div>
    );
}

export default BookGallery;