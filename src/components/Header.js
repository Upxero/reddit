import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header({ children }) {
    return (
        <header className="outer-container">
            <div className="inner-container">
                <nav>
                    <ul>
                        <li><NavLink to="/">Hottest posts</NavLink></li>
                        <li><a href="https://www.reddit.com/">Reddit</a></li>
                        <li><NavLink to="/subreddit/memes">Memes</NavLink></li>
                    </ul>
                </nav>
                <div className="header-content">
                    {children}
                </div>
            </div>
        </header>
    );
}

export default Header;