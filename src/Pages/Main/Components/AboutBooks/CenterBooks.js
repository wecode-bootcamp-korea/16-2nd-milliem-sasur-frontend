import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CenterBook from './CenterBook';
import './CenterBooks.scss';

export default class CenterBooks extends Component {
  render() {
    const {sliderList} = this.props;

    return (
      <section className="centerBooksList">
          <Slider {...settings}>
            {sliderList && sliderList.map(book => {
              return (
                <CenterBook
                key={book.id}
                bookThumbImg={book.bookCoverImg}
                bookTitle={book.bookTitle}
                bookAuthor={book.bookAuthor} />
              )
            })}
          </Slider>
      </section>
    )
  }
}

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  autoplay: true,
  centerPadding: "120px",
  slidesToShow: 5,
  speed: 300
};