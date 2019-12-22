import React from "react";
import { faInstagram, faWhatsapp, } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class UserBox extends React.Component {
    render() {
        const instagramUrl = `https://instagram.com/${this.props.user.instagram}`;
        const whatsappUrl = `https://wa.me/${this.props.user.whatsapp}`;
        const mailUrl = `mailto:${this.props.user.email}`;
        return (
            <div className="profile">
                <div className="profile__bg">
                    <img src={this.props.user.topPost} className="profile__img" />
                </div>
                <div className="profile__content">
                    <div className="profile__img">
                        <img src={this.props.user.avatar} />
                    </div>
                    <div className="profile__personal-info">
                        <h4 className="profile__name">{this.props.user.name}</h4>
                        <div className="profile__location">
                            <i className="fas fa-map-marker-alt"></i>
                            <p>{this.props.user.location}</p>
                        </div>
                    </div>
                    <div className="profile__contact">
                        <a href={instagramUrl} className="instagram">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href={whatsappUrl} className="whatsapp">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                        <a href={mailUrl} className="email">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </div>
                </div >
                <div className="profile__stats">
                    <div className="profile__followers">
                        <h4>{this.props.user.followersCount}</h4>
                        <p>Followers</p>
                    </div>
                    <div className="profile__real">
                        <h4>{this.props.user.activeFollowers}%</h4>
                        <p>Active Users</p>
                    </div>
                    <div className="profile__price">
                        <h4>{this.props.user.priceForPost}$</h4>
                        <p>/Post</p>
                    </div>
                </div>
            </div >
        );
    }
}

export default UserBox;