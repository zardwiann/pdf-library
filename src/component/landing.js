
import { Link, Outlet } from "react-router-dom";
 
function LandingPage() {
    return (
        <main>
            <nav className="navbar navbar-expand-lg shadow-lg fixed-top bg-white">
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
                                <Link className="nav-link click-scroll text-success fw-bold" to="/">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link click-scroll text-success fw-bold" to="web">WEB DEVELOPMENT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link click-scroll  text-success fw-bold" to="cprogramming">C</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link click-scroll  text-success fw-bold" to="javaprogramming">JAVA</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link click-scroll  text-success fw-bold" to="javascript">JAVASCRIPT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link click-scroll  text-success fw-bold" to="linux">LINUX</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link click-scroll  text-success fw-bold" to="docker">Docker</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link click-scroll  text-success fw-bold" to="algorithms">Algorithms</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link click-scroll  text-success fw-bold" to="arduino">Arduino</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link click-scroll  text-success fw-bold" to="laravel">Laravel</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link click-scroll  text-success fw-bold" to="go">Go</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main className="sectionpage py-5 ">
              
                <Outlet />
            </main>
        </main>
    )
}

export default LandingPage;