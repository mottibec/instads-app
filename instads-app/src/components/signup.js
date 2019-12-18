import React from "react";
import Modal from 'react-modal';


class Signup extends React.Component {
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
                    <form action="" className="modal-content__form">
                        <input
                            type="text"
                            name=""
                            id=""
                            className="modal-content__email"
                            placeholder="Enter your email"
                            required
                        />
                        <input
                            type="text"
                            name=""
                            id=""
                            className="modal-content__instagram"
                            placeholder="Link To Instagram"
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
                        <input
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