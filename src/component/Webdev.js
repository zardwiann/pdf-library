
import pdfFiles from '../data/pdfFiles';
import './style.css';
const WebDevelopement = () => {
    return (
        <section className="py-5 position-relative ebook-section">
            <div className="container position-relative shadow-lg rounded-4 p-2" id='#WEB' >
                <h1 className='mb-4 '>Web Developement </h1>
                <hr className='text-success'></hr>
                <div className="row g-3 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6">
                    {pdfFiles
                        .filter((file) => file.type === "WEB")
                        .map((file) => (
                            <div className="col" key={file.id}>
                                <div className="card h-100 border border-success shadow-sm  rounded-3 cardbooks">
                                    <img
                                        src={file.image}
                                        className="card-img-top  rounded-3"

                                        style={{ height: '180px', objectFit: 'cover' }}
                                    />
                                    <div className="card-body px-2 py-2">

                                        <div className="mb-1 text-warning" style={{ fontSize: "0.8rem" }}>
                                            ★★★★☆
                                        </div>
                                        <h6 className="card-title text-truncate fw-semibold mb-1" title={file.name} style={{ fontSize: "0.85rem" }}>
                                            {file.name}
                                        </h6>
                                    </div>
                                    <div className="card-footer bg-transparent border-0 text-center py-2">
                                        <a
                                            href={`https://drive.google.com/file/d/${file.id}/preview`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-sm btn btn-success w-100 rounded-pill"
                                            style={{ fontSize: "0.75rem" }}
                                        >
                                            View PDF
                                        </a>
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
