import React, {Component} from 'react';
import { withRouter} from 'react-router-dom';

class BookInfo extends Component{
    render()
    {
        const { id } = this.props.data;
        const {title, imageLinks , infoLink, authors, description, publishedDate, publisher} = this.props.data.volumeInfo;
           return (
               <div className="row books-detail">
                <div className="col-sm-2">
                    <img src ={ imageLinks !== undefined? imageLinks.thumbnail : ''} alt = "book image" className = "bookImage"/>
                </div>
                    <div className="col-sm-10">
                           <div className="col-md-12"><h4 className="pull-left">Title: {title} </h4><span className="pull-right auther">Author: {authors !== undefined && authors[0]}</span></div>
                           <div className="col-md-12"><span>publisher: {publisher !== undefined && publisher},</span><span>  Published Date: {publishedDate !== undefined && publishedDate}</span></div>
                           <h5>{description !== undefined && description}</h5>
                           <div><a href ={infoLink} target = "_blank" className="btn btn-primary" role="button">For more detail</a>
                           <a className="btn btn-primary" role="button" onClick={ () => this.props.history.push(`/SearchBookStores/${id}`)}>Find book</a></div>
                    </div>
                </div>)
       }
    }


export default withRouter(BookInfo);