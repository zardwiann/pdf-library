import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Page1/css/navigationbar.css'
const NavigationvBar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const location = useLocation();


    useEffect(() => {
        setIsNavOpen(false);
    }, [location]);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const closeNav = () => {
        setIsNavOpen(false);
    };

    const handleLinkClick = () => {

        setIsNavOpen(false);
    };

    return (
        <main>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/" onClick={handleLinkClick}>
                        <i className="navbar-brand-icon bi-book me-2"></i>
                        <span> J E-Library &  Classes</span>
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleNav}
                        aria-controls="navbarNav"
                        aria-expanded={isNavOpen}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav ms-lg-auto">
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${location.pathname === '/home' ? 'active' : ''}`}
                                    to="/home"
                                    onClick={handleLinkClick}
                                    data-section="home"
                                >
                                    <i className="bi-house me-1"></i>Home
                                </Link>


                            </li>
                            {/* <li className="nav-item">
                                <Link
                                    className={`nav-link ${location.pathname === '/online' ? 'active' : ''}`}
                                    to="/online"
                                    onClick={handleLinkClick}
                                    data-section="online"
                                >    <i className="bi-collection me-1"></i>Online Class Schedule
                                </Link>
                            </li> */}
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${location.pathname === '/library' ? 'active' : ''}`}
                                    to="/library"
                                    onClick={handleLinkClick}
                                    data-section="library"
                                >
                                    <i className="bi-collection me-1"></i>Library
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                                    to="/about"
                                    onClick={handleLinkClick}
                                    data-section="about"
                                >
                                    <i className="bi-info-circle me-1"></i>About
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${location.pathname === '#categories' ? 'active' : ''}`}
                                    to="https://masterpiecesolutions.site/"
                                    onClick={handleLinkClick}
                                    data-section="category"
                                >
                                    @ MasterpieceSolutions
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </main>
    );
};

export default NavigationvBar;