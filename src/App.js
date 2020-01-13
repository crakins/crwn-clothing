import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.components'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';
import SignInAndRegisterPage from './pages/sign-in-and-register/sign-in-and-register.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
        <div>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path='/sign-in' component={SignInAndRegisterPage} />
          </Switch>
        </div>
    );
  }
}

export default App;
