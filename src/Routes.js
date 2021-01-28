import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MillemMain from './Pages/Landing/MillemMain';
import Main from './Pages/Main/Main';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import PhoneAuth from './Pages/SignUp/components/PhoneAuth';
import Register from './Pages/SignUp/components/Register';
import BookDetail from './Pages/BookDetail/BookDetail';
import BookSearch from './Pages/Search/Search';
import SearchResult from './Pages/Search/SearchResult';
import BookShelf from './Pages/BookShelf/BookShelf';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={MillemMain} />
          <Route exact path='/main' component={Main} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/phone-auth' component={PhoneAuth} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/bookdetail/:id' component={BookDetail} />
          <Route exact path='/search' component={BookSearch} />
          <Route exact path='/search_result' component={SearchResult} />
          <Route exact path='/bookshelf' component={BookShelf} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
