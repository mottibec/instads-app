import React from "react";
import Modal from 'react-modal';
import FacebookLogin from "react-facebook-login";


class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }
    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }
    handleLogin(e, callback) {
        e.preventDefault();
        callback(this.state);
    }
    handleGoogleLogin(e, callback) {
        console.log(e);
        if (callback) {
            callback(e);
        }
    }
    handleFacebookLogin(e, callback) {
        console.log(e);
        if (callback) {
            callback(e);
        }
    }
    render() {
        return (
            <Modal
                onRequestClose={this.props.closeModal}
                isOpen={this.props.isOpen}>
                <div className="modal-content">
                    <h1>Login</h1>
                    <div className="modal-content__social">
                        <FacebookLogin className="facebook-signing-button"
                            appId="992652077772172"
                            fields="name,email,gender"
                            callback={(auth) => this.handleFacebookLogin(auth, this.props.facebookLogin)} />
                    </div>
                    <div className="divider">
                        <span>OR</span>
                    </div>
                    <form onSubmit={(e) => this.handleLogin(e, this.props.login)} className="modal-content__form">
                        <input onChange={this.handleEmailChange}
                            type="text"
                            name=""
                            id=""
                            className="modal-content__email"
                            placeholder="Enter your email"
                            required
                        />
                        <input onChange={this.handlePasswordChange}
                            type="password"
                            name=""
                            id=""
                            className="password"
                            placeholder="Password"
                            required
                        />
                        <button>Continue</button>
                    </form>
                    <div className="divider"></div>
                    <div className="modal-footer">
                        <p>Not a member?</p>
                        <a onClick={this.props.signup} className="open-signup">Sign Up</a>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default Signin;