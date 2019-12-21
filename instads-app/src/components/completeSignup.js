import React from "react";
import Modal from 'react-modal';

class CompleteSignup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleInstagramChange = this.handleInstagramChange.bind(this);
    }
    handlePhoneChange(event) {
        this.setState({ phone: event.target.value });
    }
    handleInstagramChange(event) {
        this.setState({ instagram: event.target.value });
    }
    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}>
                <div className="modal-content">
                    <h1>Complete Signup</h1>
                    <div className="modal-content__form">
                        <input onChange={this.handleInstagramChange}
                            type="text"
                            name=""
                            id=""
                            className="modal-content__instagram"
                            placeholder="Link To Instagram"
                            required
                        />
                        <input onChange={this.handlePhoneChange}
                            type="text"
                            name=""
                            id=""
                            className="modal-content__email"
                            placeholder="Phone Number (Optional)"
                        />
                        <button onClick={() => this.props.completeSignup(this.state)}>Continue</button>
                        <p>By joining I agree to receive emails from INSTADS.</p>
                    </div>
                </div>
            </Modal>
        );
    }
}
export default CompleteSignup;