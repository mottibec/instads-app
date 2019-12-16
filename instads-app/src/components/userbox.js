import React from "react";

class UserBox extends React.Component {
    render() {
        const instagramUrl = `https://instagram.com/${this.props.instagram}`;
        const whatsappUrl = `https://wa.me/${this.props.whatsapp}`;
        const mailUrl = `mailto:${this.props.email}`;
        return (<div className="profile">
            <div className="profile__bg">
                <img src={this.props.topPost} alt="" className="profile__img" />
            </div>
            <div className="profile__content">
                <div className="profile__img">
                    <img src={this.props.avatar} alt="" />
                </div>
                <div className="profile__personal-info">
                    <h4 className="profile__name">{this.props.name}</h4>
                    <div className="profile__location">
                        <i className="fas fa-map-marker-alt"></i>
                        <p>{this.props.user}</p>
                    </div>
                </div>
                <div className="profile__contact">
                    <a href={instagramUrl} className="instagram">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href={whatsappUrl} className="whatsapp">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                    <a href={mailUrl} className="email">
                        <i className="far fa-envelope"></i>
                    </a>
                </div>
            </div >
            <div className="profile__stats">
                <div className="profile__followers">
                    <h4>{this.props.followersCount}</h4>
                    <p>Followers</p>
                </div>
                <div className="profile__real">
                    <h4>17%</h4>
                    <p>Real Users</p>
                </div>
                <div className="profile__price">
                    <h4>{this.props.priceForPost}$</h4>
                    <p>/Post</p>
                </div>
            </div>
        </div >)
    }
}

export default UserBox;