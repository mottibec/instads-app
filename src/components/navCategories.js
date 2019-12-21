import React from "react";
import Category from "./category";

class NavCategories extends React.Component {
    render() {
        let categories = [
            "Sports",
            "Food",
            "TV & Movies",
            "Gaming",
            "Travel",
            "Fashion",
            "Music",
            "Dance",
            "Photography"
        ];
        return (
            <ul className="nav__filters">
                {categories.map(category => <Category categoryName={category} />)}
            </ul >
        );
    }
}
export default NavCategories;