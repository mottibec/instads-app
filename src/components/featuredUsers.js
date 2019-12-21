import React from "react";
import UserBox from "./userbox";

class FeaturedUsers extends React.Component {
    render() {
        return (
            <div className="featured__container">
                {this.props.users.map(user => <UserBox user={user} />)}
            </div>
        );
    }
}

export default FeaturedUsers;