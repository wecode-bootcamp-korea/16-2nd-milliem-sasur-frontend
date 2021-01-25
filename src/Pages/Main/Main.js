import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import CategoriesBar from './Components/CategoriesBar/CategoriesBar'
import CenterBooks from './Components/AboutBooks/CenterBooks'
import PopularWords from './Components/PopularWords/PopularWords'
import FavoriteBooks from './Components/AboutBooks/FavoriteBooks'
import SubCateBooks from './Components/AboutBooks/SubCateBooks'
import Sub2CateBooks from './Components/AboutBooks/Sub2CateBooks'
import Footer from '../../Components/Footer/Footer'
import {BOOK_LIST} from '../../config'
import './Main.scss'

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      bookDataList: [],
      activatedBtn: false,
      selectedId: 1
    };
  }

  componentDidMount() {
    fetch(`${BOOK_LIST}${this.state.selectedId}`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        bookDataList: res.bookData
      });
    })
  }

  categoryClick = (id) => {
    fetch(`${BOOK_LIST}${id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          bookDataList: res.bookData,
          selectedId: id
        });
  })}

  render() {
    const { bookDataList, selectedId, activatedBtn } = this.state;
    
    return (
      <>
        <Navbar/>
        <main className="main">
          <div className="categoryBar">
            <CategoriesBar
            categoryClick={this.categoryClick}
            selectedId={selectedId}
            activatedBtn={activatedBtn}/>
          </div>
          <div className="mainSlide">
            <CenterBooks 
            sliderList={bookDataList.slider}
            />            
          </div>
          <div className="papularWord">
            <PopularWords
            popularList={bookDataList.recent_books}/>
          </div>
          <div className="contentSection">
            <div>
              <FavoriteBooks
              favorite={bookDataList.favorite_books}/>
            </div>
            <div>
              <SubCateBooks
              subOne={bookDataList.subcategory_list1}/>
            </div>
            <div>
              <Sub2CateBooks
              subTwo={bookDataList.subcategory_list2}/>
            </div>
          </div>
        </main>
          <Footer
          className="footerSection"/>
      </>
    )
  }
}
