
import { useState } from 'react';
import pdfFiles from '../data/pdfFiles';
import '../Page2/css/technology.css'

import ParticlesComponent from '../particles';


export default function Technology() {
    const [filteredBooks, setFilteredBooks] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedType, setSelectedType] = useState("");
    return (

        <section className="py-3 py-md-5 position-relative ebook-section ">

            <div className="container-fluid px-3 px-md-5 py-4 py-md-5 position-relative shadow-lg rounded-4 mt-3 mt-md-5 card border-0" id="WEB">
                <h1 className='mb-2 mt-3 mt-md-5 text-center text-md-start'>Technology</h1>
                <hr className='text-success'></hr>
                <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-sm-start">
                    <button className="btn btn-primary search-btn text-white" onClick={() => setSelectedType("IS")}>
                        Information Management 1
                    </button>
                    <button className="btn btn-primary search-btn text-white" onClick={() => setSelectedType("WEB")}>
                        Web Development
                    </button>
                    <button className="btn btn-primary search-btn text-white" onClick={() => setSelectedType("JAVASCRIPT")}>
                        JAVASCRIPT
                    </button>
                    <button className="btn btn-primary search-btn text-white" onClick={() => setSelectedType("GO")}>
                        GO
                    </button>
                    <button className="btn btn-primary search-btn text-white" onClick={() => setSelectedType("JAVA")}>
                        JAVA
                    </button>
                    <button className="btn btn-primary search-btn text-white" onClick={() => setSelectedType("DOCKER")}>
                        DOCKER
                    </button>
                    <button className="btn btn-primary search-btn text-white" onClick={() => setSelectedType("ARDUINO")}>
                        ARDUINO
                    </button>
                    <button className="btn btn-primary search-btn text-white" onClick={() => setSelectedType("C PROGRAMMING")}>
                        C PROGRAMMING
                    </button>
                    <button className="btn btn-primary search-btn text-white" onClick={() => setSelectedType("LARAVEL")}>
                        LARAVEL
                    </button>
                    <button className="btn btn-primary search-btn text-white" onClick={() => setSelectedType("ALGORITHM")}>
                        ALGORITHM
                    </button>
                    <button className="btn btn-primary search-btn text-white" onClick={() => setSelectedType("VERSION CONTROL")}>
                        VERSION CONTROL
                    </button>
                    <button className="btn btn-primary search-btn text-white" onClick={() => setSelectedType("LINUX")}>
                        LINUX
                    </button>
                </div>
                <div className="search-bar mt-4">
                    <div className="input-group mx-auto" style={{ maxWidth: '500px' }}>
                        <input
                            type="text"
                            className="form-control search-input"
                            placeholder="Search categories or books..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="btn search-btn" type="button">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>

                <div className="row g-2 g-md-3 p-2 p-md-5 justify-content-center justify-content-md-start">
                    {pdfFiles
                        .filter((file) => {
                            const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase());
                            const matchesType = selectedType === "" || file.type === selectedType;
                            return matchesSearch && matchesType;
                        })
                        .map((file) => (
                            <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={file.id}>
                                <div className="card h-100 border border-success shadow-sm rounded-3 cardbooks">
                                    <img
                                        src={file.image}
                                        className="card-img-top rounded-top-3"
                                        style={{
                                            height: '120px',
                                            objectFit: 'cover'
                                        }}
                                        alt={file.name}
                                    />
                                    <div className="card-body px-2 py-2 d-flex flex-column">
                                        <div className="mb-1 text-warning" style={{ fontSize: '0.7rem' }}>
                                            ★★★★☆
                                        </div>
                                        <h6
                                            className="card-title fw-semibold mb-2 flex-grow-1"
                                            title={file.name}
                                            style={{
                                                fontSize: '0.75rem',
                                                lineHeight: '1.2',
                                                display: '-webkit-box',
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden'
                                            }}
                                        >
                                            {file.name}
                                        </h6>
                                    </div>
                                    <div className="card-footer bg-transparent border-0 text-center py-2 mt-auto">
                                        <a
                                            href={`https://drive.google.com/file/d/${file.id}/preview`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-sm btn-success w-100 rounded-pill"
                                            style={{ fontSize: '0.7rem' }}
                                        >
                                            View PDF
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>


            </div>
        </section>
    )
}