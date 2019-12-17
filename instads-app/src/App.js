import React from 'react';
import logo from './logo.svg';
import './App.css';
import FeaturedUsers from "./components/featuredUsers";
import UserProfiles from "./components/userProfiles";
import Api from './api/api';
import NavCategories from './components/navCategories';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: null, error: null };
  }
  componentDidMount() {
    new Api().getUsers()
      .then(users => { this.setState({ users: users, error: null }); })
      .catch(error => { this.setState({ error: error }); });
  }
  render() {
    if (!this.state.users && !this.state.error) {
      return <p>Loading....</p>
    }
    if (this.state.error && !this.state.users) {
      return <p>${this.state.error.message}</p>
    }
    let users = this.state.users;
    return (
      <div className="container">
        <nav className="nav">
          <div className="nav__row">
            <div className="logo-box">
              <a className="logo" href="">INSTADS</a>
            </div>
            <div className="nav__list">
              <a href="">Contact</a>
              <a href="">Help</a>
              <button className="join trigger">Become an Influencer</button>
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
                        <input type="text" name="" id="" class="header__search" placeholder='Try "Photography"' />
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
    );
  }
}

export default App;
