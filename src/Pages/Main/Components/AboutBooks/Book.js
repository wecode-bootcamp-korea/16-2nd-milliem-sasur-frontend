import React, { Component } from 'react'
import './Book.scss'

export default class Book extends Component {

  render() {
    const {bookThumbImg, bookTitle, bookAuthor} = this.props;
    
      return (
        <div className="bookItem">
          <div className="bookImgData">
            <img
            className="thumbImg"
            alt={bookTitle} 
            src={bookThumbImg}
            />
          </div>
          <div className="bookMetaData">
            <div className="title">
            {bookTitle}
            </div>
            <div className="author">
            {bookAuthor}
            </div>
          </div>
        </div>
    )
  }
}
