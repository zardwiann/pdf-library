
import pdficon1 from '../THUMBNAIL/T1.gif'
import pdficon2 from '../THUMBNAIL/T2.gif'
import pdficon3 from '../THUMBNAIL/T3.gif'
import pdficon4 from '../THUMBNAIL/T4.gif'
import pdficon5 from '../THUMBNAIL/T5.gif'
import pdficon6 from '../THUMBNAIL/T6.gif'
import pdficon7 from '../THUMBNAIL/T7.gif'
import pdficon8 from '../THUMBNAIL/T8.gif'
import pdficon9 from '../THUMBNAIL/T9.gif'
import '../component1/categories.css'
export default function Categories() {
    return (
        <section className="py-5 position-relative ebook-section rounded-5" style={{
            background: 'linear-gradient(145deg, #f4f8f6ff, #f3f5f4ff)',
            boxShadow: '9px 9px 9px #198754, -10px -10px 20px #198754',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(5px)'
        }}>
            <h1 className="text-success text-decoration-underline fw-light mb-4 display-6 p-4" style={{ fontFamily: 'Georgia, serif' }}>
                Recommended Downloadable Free Books
            </h1>

            <div className="container position-relative rounded-4 p-2" id='#WEB' >
                <div className="row g-3 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6">
                    <div className="col animate-slide-left" style={{ animationDelay: '0.2s' }}>
                        <div className="card h-100 border-0   rounded-2  ">
                            <img
                                src={pdficon1}
                                className="card-img-top rounded-3 "
                                style={{ height: '100%', objectFit: 'cover' }}
                            />

                            <div className="card-footer bg-transparent border-0 text-center"></div>
                        </div>
                    </div>
                    <div className="col animate-slide-left" style={{ animationDelay: '0.2s' }}>
                        <div className="card h-100 border-0   rounded-2  ">
                            <img
                                src={pdficon2}
                                className="card-img-top rounded-3"
                                style={{ height: '100%', objectFit: 'cover' }}
                            />
                            <div className="card-body px-2 py-2"></div>
                            <div className="card-footer bg-transparent border-0 text-center py-2"></div>
                        </div>
                    </div>
                    <div className="col animate-slide-left" style={{ animationDelay: '0.2s' }}>
                        <div className="card h-100 border-0   rounded-2  ">
                            <img
                                src={pdficon3}
                                className="card-img-top rounded-3"
                                style={{ height: '100%', objectFit: 'cover' }}
                            />
                            <div className="card-body px-2 py-2"></div>
                            <div className="card-footer bg-transparent border-0 text-center py-2"></div>
                        </div>
                    </div>
                    <div className="col animate-slide-left" style={{ animationDelay: '0.2s' }}>
                        <div className="card h-100 border-0   rounded-2  ">
                            <img
                                src={pdficon3}
                                className="card-img-top rounded-3"
                                style={{ height: '100%', objectFit: 'cover' }}
                            />
                            <div className="card-body px-2 py-2"></div>
                            <div className="card-footer bg-transparent border-0 text-center py-2"></div>
                        </div>
                    </div>
                    <div className="col animate-slide-left" style={{ animationDelay: '0.2s' }}>
                        <div className="card h-100 border-0   rounded-2  ">
                            <img
                                src={pdficon4}
                                className="card-img-top rounded-3"
                                style={{ height: '100%', objectFit: 'cover' }}
                            />
                            <div className="card-body px-2 py-2"></div>
                            <div className="card-footer bg-transparent border-0 text-center py-2"></div>
                        </div>
                    </div>
                    <div className="col animate-slide-left" style={{ animationDelay: '0.2s' }}>
                        <div className="card h-100 border-0  rounded-2  ">
                            <img
                                src={pdficon6}
                                className="card-img-top rounded-3"
                                style={{ height: '100%', objectFit: 'cover' }}
                            />
                            <div className="card-body px-2 py-2"></div>
                            <div className="card-footer bg-transparent border-0 text-center py-2"></div>
                        </div>
                    </div>


                </div>

            </div>
        </section>

    )
}