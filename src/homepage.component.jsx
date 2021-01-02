import React from "react";
import "./homepage.style.scss";

function HomePage() {
    return (
        <div className="homepage-container">
            <div className="menu-items">
                <div className="item">
                    <div className="content">
                        <h1>HATS</h1>
                        <span>SHOP NOW</span>
                    </div>
                </div>
                <div className="item">
                    <div className="content">
                        <h1>JACKETS</h1>
                        <span>SHOP NOW</span>
                    </div>
                </div>
                <div className="item">
                    <div className="content">
                        <h1>SNEAKERS</h1>
                        <span>SHOP NOW</span>
                    </div>
                </div>
                <div className="item">
                    <div className="content">
                        <h1>WOMENS</h1>
                        <span>SHOP NOW</span>
                    </div>
                </div>
                <div className="item">
                    <div className="content">
                        <h1>MENS</h1>
                        <span>SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;