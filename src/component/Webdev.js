import React from 'react';
import pdfFiles from '../data/pdfFiles';

const WebDevelopement = () => {
    return (
        <section className="py-5 position-relative ebook-section">
            <div className="container position-relative" id='#WEB'>
                <h1>Web Developement </h1>
                <hr className="mb-2 mx-auto w-25 border-success" />
                <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                    {pdfFiles
                        .filter((file) => file.type === "WEB")
                        .map((file) => (
                            <div className="col" key={file.id}>
                                <div
                                    className="card border border-success shadow-lg rounded-4 ebook-card text-success"
                                    data-idtype={file.type}
                                    style={{ height: "100%" }}
                                >
                                    <div className="card-body d-flex flex-column align-items-start p-4">
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                                            alt="PDF Icon"
                                            className="mb-3"
                                            style={{ width: "48px", height: "48px" }}
                                        />
                                        <h6
                                            className="fw-semibold text-success mb-2 text-wrap"
                                            style={{ wordBreak: "break-word" }}
                                        >
                                            {file.name}
                                        </h6>
                                        <a
                                            href={`https://drive.google.com/file/d/${file.id}/preview`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-sm btn-outline-primary mt-auto rounded-4"
                                        >
                                            View PDF
                                        </a>
                                    </div>
                                    <div className="card-footer bg-transparent border-0 px-4 pb-3">
                                        <span className="badge bg-success">Available</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

        </section>


    );
};


export default WebDevelopement;
