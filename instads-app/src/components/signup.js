import React from "react";
import Modal from 'react-modal';


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleInstagramChange = this.handleInstagramChange.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
    }
    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }
    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }
    handlePhoneChange(event) {
        this.setState({ phone: event.target.value });
    }
    handleInstagramChange(event) {
        this.setState({ instagram: event.target.value });
    }
    handleSignup(e, callback) {
        e.preventDefault();
        callback(this.state);
    }
    render() {
        let modalIsOpen = this.props.isOpen;
        return (
            <Modal
                onRequestClose={this.props.closeModal}
                isOpen={modalIsOpen}>
                <div className="modal-content">
                    <h1>Join INSTADS</h1>
                    <div className="modal-content__social">
                        <button className="facebook-signing-button">
                            <i className="fab fa-facebook-square"></i>
                            <p>
                                Continue with Facebook
            </p>
                        </button>
                        <button className="google-signing-button">
                            <i className="fab fa-google"></i>
                            <p>
                                Continue with Google
            </p>
                        </button>
                    </div>
                    <div className="divider">
                        <span>OR</span>
                    </div>
                    <form onSubmit={(e) => this.handleSignup(e, this.props.signup)} className="modal-content__form">
                        <input onChange={this.handleEmailChange}
                            type="text"
                            name=""
                            id=""
                            className="modal-content__email"
                            placeholder="Enter your email"
                            required
                        />
                        <input onChange={this.handleInstagramChange}
                            type="text"
                            name=""
                            id=""
                            className="modal-content__instagram"
                            placeholder="Link To Instagram"
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
                        <input onChange={this.handlePhoneChange}
                            type="text"
                            name=""
                            id=""
                            className="modal-content__email"
                            placeholder="Phone Number (Optional)"
                        />
                        <button>Continue</button>
                        <p>By joining I agree to receive emails from INSTADS.</p>
                    </form>
                    <div className="divider"></div>
                    <div className="modal-footer">
                        <p>Already a member?</p>
                        <a onClick={this.props.login} className="open-login">Sign In</a>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default Signup;