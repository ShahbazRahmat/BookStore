import React, {Component} from 'react';

class BookInfo extends Component{



    render()
    {
       const {title, imageLinks , infoLink, authors, description, publishedDate, publisher} = this.props.data.volumeInfo;
           return (<div className="row books-detail">
                       <div className="col-sm-2">
                           <img src ={ imageLinks !== undefined? imageLinks.thumbnail : ''} alt = "book image" className = "bookImage"/>
                       </div>
                       <div className="col-sm-10">
                           <div className="col-md-12"><h4 className="pull-left">Title: {title} </h4><span className="pull-right auther">Author: {authors !== undefined && authors[0]}</span></div>
                          
                           <div className="col-md-12"><span>publisher: {publisher !== undefined && publisher},</span><span>  Published Date: {publishedDate !== undefined && publishedDate}</span></div>
                           <h5>{description !== undefined && description}</h5>
                           <p><a href ={infoLink} target = "_blank" className="btn btn-primary" role="button">For more detail</a>
                           <a href ={this.props.data.id} target = "_blank" className="btn btn-primary" role="button">Find book</a></p>
                       </div>
                   </div>)
       }
    }


export default BookInfo;