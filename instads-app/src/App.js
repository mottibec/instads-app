import React from 'react';
import logo from './logo.svg';
import './App.css';
import FeaturedUsers from "./components/featuredUsers";
import UserProfiles from "./components/userProfiles";
import Api from './api/api';
import NavCategories from './components/navCategories';
import Login from './components/login';
import Signup from './components/signup';

class App extends React.Component {
  _api;
  constructor(props) {
    super(props);
    this.state = {
      filter: null,
      users: null,
      error: null,
      isLoginModalOpen: false,
      isSignupModalOpen: false
    };
    this._api = new Api();
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.openLoginModal = this.openLoginModal.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.openSignupModal = this.openSignupModal.bind(this);
    this.closeSignupModal = this.closeSignupModal.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }
  componentDidMount() {
    this._api.getUsers()
      .then(users => { this.setState({ users: users, error: null }); })
      .catch(error => { this.setState({ error: error }); });
  }
  handleFilterChange(event) {
    this.setState({ filter: event.target.value });
  }
  openLoginModal() {
    this.setState({ isLoginModalOpen: true, isSignupModalOpen: false });
  }
  closeLoginModal() {
    this.setState({ isLoginModalOpen: false });
  }
  openSignupModal() {
    this.setState({ isSignupModalOpen: true, isLoginModalOpen: false });
  }
  closeSignupModal() {
    this.setState({ isSignupModalOpen: false });
  }
  login(authData) {
    this._api.login(authData);
    this.closeLoginModal();
  }
  signup(signupData) {
    this._api.signup(signupData);
    this.closeSignupModal();
  }
  render() {
    if (!this.state.users && !this.state.error) {
      return <p>Loading....</p>
    }
    if (this.state.error && !this.state.users) {
      return <p>${this.state.error.message}</p>
    }
    let users = this.state.users;
    if (this.state.filter) {
      users = users.filter(user => user.name.includes(this.state.filter));
    }
    return (
      <body>
        <div className="container">
          <nav className="nav">
            <div className="nav__row">
              <div className="logo-box">
                <a className="logo" href="">INSTADS</a>
              </div>
              <div className="nav__list">
                <a href="">Contact</a>
                <a href="">Help</a>
                <button onClick={this.openLoginModal} className="join trigger">Become an Influencer</button>
              </div>
            </div>
            <NavCategories />
          </nav>
          <header className="header">
            <div className="header__wrapper">
              <div className="header__content">
                <h1 className="header__title">
                  Find The Perfect Influencer <br />For Your Business
                    </h1>
                <label className="header__search-box">
                  <i className="fas fa-search"></i>
                  <input type="text" name="" id="" onChange={this.handleFilterChange} className="header__search" placeholder='Try "Photography"' />
                </label>
              </div>
              <div className="header__bg">
                <img src="./img/bg.svg" alt="background" />
              </div>
            </div>
          </header>
          <main className="main">
            <section className="featured">
              <h3>Featured</h3>
              <FeaturedUsers users={users} />
            </section>
            <section className="categories">
              <h3>Categories</h3>
              <div className="categories__container">
                <a href="" className="category">
                  <i className="fas fa-volleyball-ball"></i>
                  <p className="category__text">Sports</p>
                </a>
                <a href="" className="category">
                  <i className="fas fa-utensils"></i>
                  <p className="category__text">Food</p>
                </a>
                <a href="" className="category">
                  <i className="fas fa-tv"></i>
                  <p className="category__text">TV & Movies</p>
                </a>
                <a href="" className="category">
                  <i className="fas fa-gamepad"></i>
                  <p className="category__text">Gaming</p>
                </a>
                <a href="" className="category">
                  <i className="fas fa-route"></i>
                  <p className="category__text">Travel</p>
                </a>
                <a href="" className="category">
                  <i className="fas fa-tshirt"></i>
                  <p className="category__text">Fashion</p>
                </a>
                <a href="" className="category">
                  <i className="fas fa-headphones"></i>
                  <p className="category__text">Music</p>
                </a>
                <a href="" className="category">
                  <i className="fas fa-music"></i>
                  <p className="category__text">Dance</p>
                </a>
                <a href="" className="category">
                  <i className="fas fa-camera"></i>
                  <p className="category__text">Photography</p>
                </a>
              </div>
            </section>
            <section className="profiles">
              <p className="profiles__sub-title">All Profiles</p>
              <h2>Find Your Next Influencer</h2>
              <UserProfiles users={users} />
            </section>
          </main>
        </div>
        <Login isOpen={this.state.isLoginModalOpen}
          closeModal={this.closeLoginModal}
          signup={this.openSignupModal}
          login={this.login} />
        <Signup isOpen={this.state.isSignupModalOpen}
          closeModal={this.closeSignupModal}
          login={this.openLoginModal}
          signup={this.signup} />
      </body>
    );
  }
}

export default App;
