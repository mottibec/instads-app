import React from "react";
import Modal from 'react-modal';

class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
        this.onPriceChange = this.onPriceChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }
    onEmailChange(e) {
        this.setState({ email: e.target.value });
    }
    onPasswordChange(e) {
        this.setState({ password: e.target.value });
    }
    onPhoneChange(e) {
        this.setState({ phone: e.target.value });
    }
    onPriceChange(e) {
        this.setState({ priceForPost: e.target.value });
    }
    onSave(cb) {
        cb(this.state);
    }
    render() {
        const user = this.props.user;
        if (!user) {
            return null;
        }
        return (
            <Modal
                onRequestClose={this.props.closeModal}
                isOpen={this.props.isOpen}>
                <div className="modal-content">
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                    <p>{user.instagram}</p>
                    <div className="modal-content__form">
                        <input type="text" name="email" id="email" onChange={this.onEmailChange} className="modal-content__email" placeholder="Change your Email" required="true" />
                        <input type="password" name="password" id="password" onChange={this.onPasswordChange} className="password" placeholder="Change your Password" required="true" />
                        <input type="text" name="phone" id="phone" onChange={this.onPhoneChange} className="modal-content__email" placeholder="Change your Phone Number" />
                        <input type="text" name="priceForPost" id="priceForPost" onChange={this.onPriceChange} className="modal-content__email" placeholder="Change your price for post" />
                        <button onClick={() => this.onSave(this.props.onSave)}>Save</button>
                    </div>
                </div>
            </Modal>
        );
    }
}
export default UserDetails;