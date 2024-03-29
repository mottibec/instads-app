import React from "react";
import UserBox from "./userbox";

class UserProfiles extends React.Component {
    render() {
        return (
            <div className="profiles__list">
                {this.props.users.map(user => <UserBox user={user} />)}
            </div>
        );
    }
}
export default UserProfiles;