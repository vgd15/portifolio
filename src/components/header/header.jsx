import React, { useState } from "react";
import './header.css';
import { Link } from 'react-router-dom';
import sidebarMenu from '../../img/sidebarMenu.png';
import Closer from '../../img/Fechar.svg'

function Header(props) {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <header className="header-geral">
            <section className="wrapper-desktop d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row gap-3 justify-content-center align-items-center">
                    <h2 className="name"><i className="fa-solid fa-square"></i> <a href="/">{props.profileName}</a></h2>
                    <span>|</span>
                    <h3 className="profession">Desenvolvedora Front-End</h3>
                </div>
                <div className="links-button">
                    <ul className="d-flex justify-content-between align-items-center gap-3">
                        <li>
                            <Link to="/about">
                                <button> About me </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/curriculum">
                                <button> Curriculum </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects">
                                <button> Projects </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/courses">
                                <button> Courses </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                <button> Contact </button>
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </section>
            <section className={`wrapper-mobile ${isActive ? 'active' : ''}`}>
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <div className="nome d-flex flex-row gap-3 justify-content-space-between align-items-center">
                        <h2 className="name d-flex row flex-row"><a href="/"><i className="fa-solid fa-square"></i> {props.profileName}</a></h2>
                        <span>|</span>
                        <h3 className="profession">Desenvolvedora Front-End</h3>
                    </div>
                    <div className="d-flex flex-row gap-3 justify-content-start align-items-center">
                        <button onClick={handleClick} className="p-0"><img src={sidebarMenu} className="sidebar-mobile " alt="Menu mobile" /></button>
                    </div>
                </div>

                <div className="sidebar-menu">
                    <div class="close d-flex justify-content-start align-items-center">
                            <button onClick={handleClick} className="close-button">
                            <img src={Closer} alt="fechar sidebar"></img>
                            </button>
                    </div>
                    <ul className="d-flex justify-content-between align-items-center flex-column">
                        <li>
                            <Link to="/about">
                                <button onClick={handleClick}> About me </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/curriculum">
                                <button onClick={handleClick}> Curriculum </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects">
                                <button onClick={handleClick}> Projects </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/courses">
                                <button onClick={handleClick}> Courses </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="contact">
                                <button onClick={handleClick}> Contact </button>
                            </Link>
                        </li>
                        
                    </ul>
                </div>

            </section>
        </header>
    );
}

export default Header;
