import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Book from './Book';
import './SubCateBooks.scss';

export default class SubCateBooks extends Component {
  render() {
    const { subOne } = this.props;

    return (
      <section className="books">
        <h1 className="categoryName">
          최신 업데이트
        </h1>
          <ul className="bookItemList">
            <Slider {...settings}>
              { subOne && subOne.map(subBook => {
                return (
                  <Book
                  key={subBook.id}
                  bookThumbImg={subBook.bookCoverImg}
                  bookTitle={subBook.bookTitle}
                  bookAuthor={subBook.bookAuthor} />
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