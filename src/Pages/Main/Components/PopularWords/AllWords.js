import React, { Component } from 'react'
import './AllWords.scss';

export default class AllWords extends Component {
  render() {
    const {popularList} = this.props;

    return (
      <section className="allWordsBoard">
        <div className="allWordsContent">
          {popularList && popularList.map(popularWords => {
            return (
            <div 
            key={popularWords.id}
            className="wordList">
              <p className="listRank">
                {popularWords.id}
              </p>
              <div className="listData">
                <p className="listTitle">
                  {popularWords.bookTitle}
                </p>
                <p className="listAuthor">
                  {popularWords.bookAuthor}
                </p>
              </div>
            </div>
            )
          })}
        </div>
      </section>
    )
  }
}
