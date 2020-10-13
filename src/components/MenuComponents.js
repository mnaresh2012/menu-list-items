import React from 'react';
import { Link } from 'react-router-dom';

const MenuComponent = () => {
    return (
        <div className="menu-container">
            <p style={{textAlign: "center"}}>
                <Link to="/">Starter</Link> | <Link to="/main">Main</Link> | <Link to="/dessert">Dessert</Link> | <Link to="/salad">Salad</Link>
            </p>
        </div>
    );
}
export default MenuComponent;