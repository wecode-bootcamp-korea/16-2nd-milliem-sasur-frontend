import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Book from './Book';
import './Sub2CateBooks.scss';

export default class Sub2CateBooks extends Component {
  render() {
    const { subTwo } = this.props;

    return (
      <section className="books">
        <h1 className="categoryName">
          가장 평가가 좋은 책
        </h1>
          <ul className="bookItemList">
            <Slider {...settings}>
              { subTwo && subTwo.map(sub2book => {
                return (
                  <Book
                  key={sub2book.id}
                  bookThumbImg={sub2book.bookCoverImg}
                  bookTitle={sub2book.bookTitle}
                  bookAuthor={sub2book.bookAuthor} />
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