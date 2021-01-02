import React from "react";
import "./homepage.style.scss";

const Item = ({ title, imageUrl }) => {
    const mainStyle = { backgroundImage: `url(${imageUrl})` };
    return (
        <div className="item">
            <div className="item-bg" style={mainStyle} />
            <div className="content">
                <h1>{title}</h1>
                <span>SHOP NOW</span>
            </div>
        </div>
    );
};

export default Item;