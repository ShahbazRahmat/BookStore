import React from 'react';

const BookInfo = ({data, index}) =>
{
    const {title, imageLinks , infoLink, authors, description, publishedDate, publisher} = data.volumeInfo;
    debugger;
    return (<div className="row">
                <div className="col-sm-2">
                    <img src ={ imageLinks !== undefined? imageLinks.thumbnail : ''} alt = "book image" className = "bookImage"/>
                </div>
                <div className="col-sm-10">
                    <div><h4 className="pull-left">Title: {title} </h4><span className="pull-right">Author: {authors !== undefined && authors[0]}</span></div>
                    <hr />
                    <div><span>publisher: {publisher !== undefined && publisher},</span><span>  Published Date: {publishedDate !== undefined && publishedDate}</span></div>
                    <h5>{description !== undefined && description}</h5>
                    <p><a href ={infoLink} target = "_blank" className="btn btn-primary" role="button">For more detail</a>
                    <a href ={home/data.id} target = "_blank" className="btn btn-primary" role="button">Find book</a></p>
                </div>
            </div>)
}

export default BookInfo;