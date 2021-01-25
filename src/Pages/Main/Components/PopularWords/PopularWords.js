import React, { Component } from 'react';
import AllWords from './AllWords';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './PopularWords.scss';

export default class PopularWords extends Component {
  state = {
    boardActiveBtn: false,
    boardActivated: false
  };

  boardBtnHandler = () => {
    const {boardActiveBtn, boardActivated} = this.state;
    this.setState({
      boardActiveBtn: !boardActiveBtn,
      boardActivated: !boardActivated
    })
  };

  render() {
    const { boardActiveBtn, boardActivated } = this.state;
    const { popularList } = this.props;

    return (
      <div className="popularBar">
        <section className="popularWordsBar">
          <div className="iconText">
            <i className="fas fa-chart-line"/>
            <span>급상승</span>
          </div>
          <div className="popularSection">
            <Slider {...settings}>
              {popularList && popularList.map(popularWords => {
                return (
                  <div 
                  key={popularWords.id}
                  className="rankWithWord">
                    <span className="rank">
                      {popularWords.id}
                    </span>
                    <span className="word">
                      {popularWords.bookTitle}
                    </span>
                  </div>
                )
              })}
            </Slider>
          </div>
          <div className="showAllWordsBtnSection">
            <button
            className="boardActiveBtn"
            onClick={this.boardBtnHandler}>
              <span className=
              {boardActiveBtn ? 'upArrow' : 'downArrow'}>
                <i className="fas fa-chevron-down"/>
              </span>
            </button>
          </div>
        </section>
        <section className=
        {boardActivated ? 'showBoard' : 'hiddenBoard'}>
          <AllWords
          popularList={popularList}/>
        </section>
      </div>
    )
  }
}

const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true
  };