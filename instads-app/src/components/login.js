import React from "react";
import Modal from 'react-modal';


class Login extends React.Component {
    render() {
        let modalIsOpen = this.props.isOpen;
        return (
            <Modal
                onRequestClose={this.props.closeModal}
                isOpen={modalIsOpen}>
                <div className="modal-content">
                    <h1>Login</h1>
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
                    <form action="" class="modal-content__form">
                        <input
                            type="text"
                            name=""
                            id=""
                            className="modal-content__email"
                            placeholder="Enter your email"
                            required
                        />
                        <input
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

export default Login;