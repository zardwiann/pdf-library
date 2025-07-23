import { Link } from "react-router-dom";
import '../component1/navbar.css'
export default function Navbar() {
    return (
        <main>
            <nav className="navbar navbar-expand-lg  border border-success fixed-top bg-white">
                <div className="container">
                    <span className="navbar-brand">
                        <i className="navbar-brand-icon bi-book text-success me-1 fw-bold"></i>
                        <span className="text-success fw-bold ">JENTRA LEARNING HUB</span>
                    </span>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-lg-auto me-lg-4">
                            <li className="nav-item">
                                <a className="nav-link click-scroll text-success fw-bold" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link click-scroll  text-success fw-bold" to="library">Library</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link click-scroll  text-success fw-bold" href="#category">Categories</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link click-scroll  text-success fw-bold" to="javascript">About </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link click-scroll  text-success fw-bold" to="javascript">Contact </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link click-scroll  text-success fw-bold" to="javascript">FAQ  </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </main>
    )
}