import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Book from './Book';
import './FavoriteBooks.scss';

export default class FavoriteBooks extends Component {
  render() {
    const { favorite } = this.props;

    return (
      <section className="books">
        <h1 className="categoryName">
          가장 많이 읽힌 책
        </h1>
          <ul className="bookItemList">
            <Slider {...settings}>
              { favorite && favorite.map(book => {
                return (
                  <Book
                  key={book.id}
                  bookThumbImg={book.bookCoverImg}
                  bookTitle={book.bookTitle}
                  bookAuthor={book.bookAuthor} />
                )
              })}
            </Slider>
          </ul>
      </section>
    )
  }
}

const settings = {
  className: "center",
  infinite: true,
  autoplay: true,
  centerPadding: "60px",
  slidesToShow: 5,
  swipeToSlide: true,
  afterChange: function(index) {
    console.log(
      `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    );
  }
};