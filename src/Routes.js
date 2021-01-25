import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main'
import SignIn from './Pages/SignIn/SignIn'
import SignUp from './Pages/SignUp/SignUp'
import BookDetail from './Pages/BookDetail/BookDetail'
import BookSearch from './Pages/BookSearch/BookSearch'
import BookShelf from './Pages/BookShelf/BookShelf'

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/main' component={Main} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup/' component={SignUp} />
          <Route exact path="/bookdetail/:id" component={BookDetail} />
          <Route exact path='/booksearch' component={BookSearch} />
          <Route exact path='/bookshelf' component={BookShelf} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;