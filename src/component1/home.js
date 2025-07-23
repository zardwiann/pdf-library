
import img1 from '../THUMBNAIL/images1.png'
import img2 from '../THUMBNAIL/image2.png'
import img3 from '../THUMBNAIL/image3.png'
import img4 from '../THUMBNAIL/image4.png'
import image7 from '../THUMBNAIL/img7.png'

import '../component1/home.css'
import '../component1/categories.css'

function HOME() {
    return (
        <div>
            <section className="py-5 container mt-5"id='home'>
                <div className="row align-items-center rounded-5 bordercol" style={{ background: '#bafce0ff' }}>
                    <div className="col-md-6 text-center mb-4 mb-md-0 animate-slide-left ">
                        <img src={img1} className="img-fluid rounded-5" alt="Ebook Library" />
                    </div>
                    <div className="col-md-6 text-center  animate-slide-right">
                        <h2 className="text-success fw-bold mb-4 display-4 typewriter" style={{ fontFamily: 'Georgia, serif' }}>
                            Explore Our Ebook
                        </h2>
                        <p className="text-success fs-5" style={{ fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            Dive into a handpicked collection of free ebooks covering programming, web development,
                            networking, and other tech topics.
                            <br /><br />
                            Whether you're a student, a professional, or just curious, our library is designed to support
                            your learning at every stage. Download and read at your own pace — anytime, anywhere.
                        </p>
                        <div className='mb-2'>
                            <button className='btn btn-success btn-lg me-2 buttonbooks'>Browse Libray </button>
                            <button className='btn btn-success btn-lg buttonbooks'> Start Reading </button>
                        </div>

                    </div>
                </div>
                <div className="row align-items-center   rounded-5 bg-white mt-5 mb-3 slide-box hidden">
                    <div className="col-md-6 text-center mb-4 mb-md-0 bounce-zoom-box rounded-5 ">
                        <p className="text-white rounded-5 bg-success fw-light mt-3 p-2  fs-5 " style={{ fontFamily: 'Georgia, serif' }}>
                            All eBooks are easy to download and completely free no registration required. Start exploring and enjoy reading at your own pace!
                        </p>
                        <img src={img4} className="img-fluid rounded-5 animate-fade-slide-up  " alt="Ebook Library" />

                    </div>
                    <div className="col-md-6 text-center">
                        <img src={image7} className="img-fluid rounded-5 animate-fade-slide-up zoom-image" alt="Ebook Library" />
                    </div>

                    <div>
                    </div>
                </div>
                <div className="row align-items-center rounded-5 mt-5 categoriescol slide-box hidden "id="category"style={{ background: '#bafce0ff' }}>
                    <h2 className="text-success bg-white fw-bold  display-4 p-2" style={{ fontFamily: 'Georgia, serif' }}>
                        Categories
                    </h2>

                    <div className="row row-cols-1 row-cols-md-3 g-3 mb-3">
                        <div className="col zoom-box">
                            <div className="card h-100 shadow-sm border-0 rounded-4 card-half-bg">
                                <div className="card-body text-center position-relative" style={{ zIndex: 1 }}>
                                    <h5 className="card-title text-success fw-semibold">Education</h5>
                                    <p className="card-text">Learn about teaching methods, study techniques, academic subjects, and lifelong learning.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col  zoom-box">
                            <div className="card h-100 shadow-sm border-0 rounded-4 card-half-bg">
                                <div className="card-body text-center position-relative" style={{ zIndex: 1 }}>
                                    <h5 className="card-title text-success fw-semibold">Technology</h5>
                                    <p className="card-text">Explore topics like programming, gadgets, AI, cybersecurity, and digital innovation.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col  zoom-box">
                            <div className="card h-100 shadow-sm border-0 rounded-4 card-half-bg">
                                <div className="card-body text-center position-relative" style={{ zIndex: 1 }}>
                                    <h5 className="card-title text-success fw-semibold">Health & Wellness</h5>
                                    <p className="card-text">Read about fitness, nutrition, mental health, mindfulness, and overall well-being.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col  zoom-box">
                            <div className="card h-100 shadow-sm border-0 rounded-4 card-half-bg">
                                <div className="card-body text-center position-relative" style={{ zIndex: 1 }}>
                                    <h5 className="card-title text-success fw-semibold">Fiction & Literature</h5>
                                    <p className="card-text">Enjoy classic and contemporary stories, novels, poetry, and creative writing.</p>
                                </div>
                            </div>
                        </div>
                       <div className="col  zoom-box">
                            <div className="card h-100 shadow-sm border-0 rounded-4 card-half-bg">
                                <div className="card-body text-center position-relative" style={{ zIndex: 1 }}>
                                    <h5 className="card-title text-success fw-semibold">Self-Help & Personal Growth</h5>
                                    <p className="card-text">Improve mindset, productivity, confidence, and emotional intelligence.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col  zoom-box">
                            <div className="card h-100 shadow-sm border-0 rounded-4 card-half-bg">
                                <div className="card-body text-center position-relative" style={{ zIndex: 1 }}>
                                    <h5 className="card-title text-success fw-semibold">Business & Finance</h5>
                                    <p className="card-text">Learn about entrepreneurship, investing, marketing, and financial literacy.</p>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                </div>


            </section>
        </div>




    )
}

export default HOME;