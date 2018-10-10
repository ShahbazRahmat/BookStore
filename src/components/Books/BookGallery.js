import React from 'react';
import BookInfo from './BookInfo';

const BookGallery = ({items, error}) =>
{
    debugger;
    if(!items.length > 0 && error === "")
    error = "some thing going wrong!";
    return(
        <div>
            { error && <h3>{error}</h3>}
            {
              items !== undefined &&  items.map((item, i)=>(
                    <BookInfo data={item} key={i} />
                ))
            }       
        </div>
    );
}

export default BookGallery;