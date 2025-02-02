import React from 'react';
import logoSpotify from '../../assets/icons/logo-spotify.png';
import '../../styles/vars.css';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav className="sidebar__navigation">
                <div className="logo">
                    <a href="">
                        <img src={logoSpotify} alt="Logo do Spotify" />
                    </a>
                </div>
                <ul>
                    <li>
                        <a href="">
                            <span><i className="fa fa-home"></i></span>
                            <span className="text-menu-sidebar">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span><i className="fa fa-search"></i></span>
                            <span className="text-menu-sidebar">Search</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="library">
                <div className="library__content">
                    <button className="library__button">
                        <span className="fa fas fa-book"></span>
                        <span>Your Library</span>
                    </button>
                    <div className="tooltip"><span className="fa fa-plus"></span>
                        <span className="tooltip-text">Create your playlist</span>
                    </div>
                    
                </div>
                
                <section className="section-playlist">
                    <div className="section-playlist__content">
                        <span className="text title">Create your first playlist</span>
                        <span className="text subtitle">Easy Peasy, let me help you.</span>
                        <button className="section-playlist__button">
                            <span>Create playlist</span>
                        </button>
                    </div>
                </section>
                
                <div className="cookies">
                    <a href="">Cookies</a>
                </div>

                <div className="languages">
                    <button className="languages__button">
                        <span className="fa fa-globe"></span>
                        <span className="English">English</span>
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar;