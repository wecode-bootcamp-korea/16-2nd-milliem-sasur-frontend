import React, { Component } from 'react';
import './CategoriesBar.scss';

export default class CategoriesBar extends Component {
  state = {
    categoryTitle: [],
  };


  componentDidMount() {
    fetch('/data/bookCategory.json')
    .then(res => res.json())
    .then(res => {
      this.setState({
        categoryTitle: res.bookCategory
      });
    })
  }

  render() {
    const { categoryTitle } = this.state;
    const { categoryClick, selectedId } = this.props;
    return (
      <nav className="categoriesBar">
        <div className="categoriesTitle">
          {categoryTitle.map(category => {
            return (
              <button 
              key={category.id}
              className="bookCateBtn" 
              onClick={() => 
              categoryClick(category.id)}>
                <span className={selectedId === category.id ? 
                  'btnClicked' : 'btnNonClicked'}>
                {category.categoryTitle}
                </span>
              </button>
            )
          })}
        </div>
      </nav>
    )
  }
}