import React from "react";

class Category extends React.Component {
    render() {
        return (
            <li className="nav__filter">
                <a href="" className="nav__filter-link">{this.props.categoryName}</a>
            </li>);
    }
}

export default Category;