
import { Link, Outlet } from "react-router-dom";

function LandingPage() {
    return (
        <main>
            <nav className="navbar navbar-expand-lg bg-success">
                <div className="container">
                    <span className="navbar-brand">
                        <i className="navbar-brand-icon bi-book bg-success"></i>
                        <span >ACT  LEARNING HUB</span>
                    </span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-lg-auto me-lg-4">

                            <li className="nav-item">
                                <Link className="nav-link click-scroll" to="web">WEB DEVELOPEMENT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link click-scroll" to="cprogramming">C PROGRAMMING</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link click-scroll" to="javaprogramming">JAVA PROGRAMMING</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link click-scroll" to="javascript">JAVASCRIPT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link click-scroll" to="linux">LINUX</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link click-scroll" to="docker">Docker</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link click-scroll" to="algorithms">Algorithms</Link>
                            </li>
                        </ul>



                    </div>
                </div>
            </nav>
            <main className="sectionpage">
                <div className="grid-lines "></div>
                <h2 className="text-center text-success fw-bold mb-4 display-6 mt-5">
                    📚 Explore Our Ebook Library
                </h2>
                <p className="text-center text-muted mb-3">
                    Curated for aspiring tech professionals and curious minds,
                    our collection of ebooks is designed to help you advance in computer science, programming, and modern digital technologies.
                </p>
                <hr className="mb-2 mx-auto w-25 border-success" />
                <Outlet />
            </main>
        </main>
    )
}

export default LandingPage;