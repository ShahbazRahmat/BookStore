import React from 'react';


const SearchBooks = ({SearchBooks}) =>
(
    <div className="row">
        <form className="formGroup form-inline col-sm-offset-2 col-sm-8 " onSubmit={SearchBooks}>
            <input className="form-control" type='text' name='book' placeholder='Enter book name here...' />
            <button className="btn btn-info">Search</button>
        </form>
    </div>
);

export default SearchBooks;