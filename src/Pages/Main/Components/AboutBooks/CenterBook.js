import React, { Component } from 'react'
import './CenterBook.scss'

export default class CenterBook extends Component {

  render() {
    const {bookThumbImg, bookTitle, bookAuthor} = this.props;
    
      return (
        <div className="centerBookItem">
          <div className="centerBookImgData">
            <img
            className="centerThumbImg"
            alt="Book Cover Tumbnail" 
            src={bookThumbImg}
            />
          </div>
          <div className="centerBookMetaData">
            <span className="centerBookTitle">
            {bookTitle}
            </span>
            <span className="centerBookAuthor">
            {bookAuthor}
            </span>
          </div>
        </div>
    )
  }
}
