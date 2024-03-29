import React from 'react';
import { faSearch, faVolleyballBall, faUtensils, faTv, faGamepad, faRoute, faTshirt, faHeadphones, faMusic, faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from './logo.svg';
import bg from "./bg.svg";
import './App.css';
import FeaturedUsers from "./components/featuredUsers";
import UserProfiles from "./components/userProfiles";
import Api from './api/api';
import NavCategories from './components/navCategories';
import Signin from './components/signin';
import Signup from './components/signup';
import CompleteSignup from "./components/completeSignup";
import UserDetails from "./components/userDetails";

class App extends React.Component {
  _api
  constructor(props) {
    super(props)
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
    this.openSignupModal = this.openSignupModal.bind(this);
    this.closeAuthModals = this.closeAuthModals.bind(this);
    this.login = this.login.bind(this);
    this.facebookLogin = this.facebookLogin.bind(this);
    this.signup = this.signup.bind(this);
    this.loadUsers = this.loadUsers.bind(this);
    this.openUserModal = this.openUserModal.bind(this);
    this.closeUserModal = this.closeUserModal.bind(this);
    this.filterByCategory = this.filterByCategory.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.completeSocailSignup = this.completeSocailSignup.bind(this);
  }
  loadUsers() {
    this._api.getUsers()
      .then(users => { this.setState({ users: users, error: null }); })
      .catch(error => { this.setState({ error: error }); });
  }
  componentDidMount() {
    this.loadUsers();
  }
  handleFilterChange(event) {
    this.setState({ filter: event.target.value })
  }
  openUserModal() {
    this.setState({ isUserModalOpen: true })
  }
  closeUserModal() {
    this.setState({ isUserModalOpen: false });
  }
  openLoginModal() {
    this.setState({ isLoginModalOpen: true, isSignupModalOpen: false })
  }
  openSignupModal() {
    this.setState({ isSignupModalOpen: true, isLoginModalOpen: false })
  }
  closeAuthModals() {
    this.setState({ isLoginModalOpen: false, isSignupModalOpen: false, isCompleteSignupModalOpen: false })
  }
  onAuth() {
    this.closeAuthModals();
    this.loadUsers();
    this.setUserDeatils();
  }
  updateUser(u) {
    this._api.updateUser(u)
      .then(() => this.closeUserModal());
  }
  setUserDeatils() {
    this._api.getUserDetails()
      .then(user => this.setState({ user: user }));
  }
  login(authData) {
    this._api.login(authData)
      .then(() => this.onAuth());
  }
  facebookLogin(authData) {
    this._api.facebookLogin(authData)
      .then(dada => {
        if (!dada.isProfileComplete) {
          this.setState({ isSignupModalOpen: false, isCompleteSignupModalOpen: true });
        }
        else {
          this.onAuth()
        }
      });
  }
  signup(signupData) {
    this._api.signup(signupData)
      .then(() => this.onAuth());
  }
  completeSocailSignup(signupData) {
    this._api.completeSocailSignup(signupData)
      .then(() => this.onAuth());
  }
  filterByCategory(category) {
    this.setState({ filter: category });
  }
  render() {
    if (!this.state.users && !this.state.error) {
      return <p>Loading....</p>
    }
    if (this.state.error && !this.state.users) {
      return <p>${this.state.error.message}</p>
    }
    let users = this.state.users
    if (this.state.filter) {
      users = users.filter(user => user.categories.includes(this.state.filter));
    }
    let featuredUsers = users.slice(0, 4);
    var isSignedIn = false;
    var button;

    if (this.state.user) {
      button = <a onClick={this.openUserModal}>{this.state.user.name}</a>;
      isSignedIn = true;
    } else {
      button = (<a onClick={this.openLoginModal}>Sign in</a>);
    }
    return (
      <body>
        <div className='container'>
          <nav className='nav'>
            <div className='nav__row'>
              <div className='logo-box'>
                <a className='logo' href=''>
                  INSTADS
                </a>
              </div>
              <div className="nav__list">
                <a href="">Contact</a>
                <a href="">Help</a>
                {button}
                {isSignedIn ? null : <button onClick={this.openSignupModal} className="join trigger">Become an Influencer</button>}
              </div>
            </div>
            <NavCategories />
          </nav>
          <header className='header'>
            <div className='header__wrapper'>
              <div className='header__content'>
                <h1 className='header__title'>
                  Find The Perfect Influencer <br />
                  For Your Business
                </h1>
                <label className='header__search-box'>
                  <FontAwesomeIcon icon={faSearch} />
                  <input type='text'
                    onChange={this.handleFilterChange}
                    className='header__search'
                    placeholder='Try "Photography"' />
                </label>
                <button onClick={this.openSignupModal}
                  className='join trigger responsive-signup'>
                  Become an Influencer
              </button>
              </div>
              <div className='header__bg'>
                <img src={bg} alt='background' />
              </div>

            </div>
          </header>
          <main className='main'>
            <section className='featured'>
              <h3>Featured</h3>
              <FeaturedUsers users={featuredUsers} />
            </section>
            <section className='categories'>
              <h3>Categories</h3>
              <div className="categories__container">
                <a onClick={() => this.filterByCategory("Sports")} className="category">
                  <FontAwesomeIcon icon={faVolleyballBall} />
                  <p className="category__text">Sports</p>
                </a>
                <a onClick={() => this.filterByCategory("Food")} className="category">
                  <FontAwesomeIcon icon={faUtensils} />
                  <p className="category__text">Food</p>
                </a>
                <a onClick={() => this.filterByCategory("TV & Movies")} className="category">
                  <FontAwesomeIcon icon={faTv} />
                  <p className="category__text">TV & Movies</p>
                </a>
                <a onClick={() => this.filterByCategory("Gaming")} className="category">
                  <FontAwesomeIcon icon={faGamepad} />
                  <p className="category__text">Gaming</p>
                </a>
                <a onClick={() => this.filterByCategory("Travel")} className="category">
                  <FontAwesomeIcon icon={faRoute} />
                  <p className="category__text">Travel</p>
                </a>
                <a onClick={() => this.filterByCategory("Fashion")} className="category">
                  <FontAwesomeIcon icon={faTshirt} />
                  <p className="category__text">Fashion</p>
                </a>
                <a onClick={() => this.filterByCategory("Music")} className="category">
                  <FontAwesomeIcon icon={faHeadphones} />
                  <p className="category__text">Music</p>
                </a>
                <a onClick={() => this.filterByCategory("Dance")} className="category">
                  <FontAwesomeIcon icon={faMusic} />
                  <p className="category__text">Dance</p>
                </a>
                <a onClick={() => this.filterByCategory("Photography")} className="category">
                  <FontAwesomeIcon icon={faCamera} />
                  <p className="category__text">Photography</p>
                </a>
              </div>
            </section>
            <section className='profiles'>
              <p className='profiles__sub-title'>All Profiles</p>
              <h2>Find Your Next Influencer</h2>
              <UserProfiles users={users} />
            </section>
          </main>
          <footer class='footer'>
            <div class='logo'>INSTADS</div>
            <ul class='footer__nav'>
              <li>
                <a href='#'>About us</a>
              </li>
              <li>
                <a href='#'>Download apps</a>
              </li>
              <li>
                <a href='#' onClick={this.openSignupModal}>Become a Influencer</a>
              </li>
              <li>
                <a href='#'>Careers</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
            </ul>
            <p class='footer__copyright'>
              &copy; by INSTADS. All rights reserved.
            </p>
          </footer>
        </div>
        <Signin
          isOpen={this.state.isLoginModalOpen}
          closeModal={this.closeAuthModals}
          signup={this.openSignupModal}
          login={this.login}
          facebookLogin={this.facebookLogin} />
        <Signup
          isOpen={this.state.isSignupModalOpen}
          closeModal={this.closeAuthModals}
          login={this.openLoginModal}
          signup={this.signup}
          facebookLogin={this.facebookLogin} />
        <CompleteSignup
          isOpen={this.state.isCompleteSignupModalOpen}
          completeSignup={this.completeSocailSignup} />
        <UserDetails
          closeModal={this.closeUserModal}
          onSave={this.updateUser}
          isOpen={this.state.isUserModalOpen}
          user={this.state.user} />
      </body>
    )
  }
}

export default App
