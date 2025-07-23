
import img1 from '../THUMBNAIL/images1.png'
import '../component1/home.css'
import Categories from './categories';
function HOME() {
    return (
        <section className="py-5 container   mt-5">
            <div className="row align-items-center">
                <div className="col-md-6 text-center mb-4 mb-md-0">
                    <img src={img1} className="img-fluid rounded-5" alt="Ebook Library" />
                </div>
                <div className="col-md-6 text-center">
                    <h2 className="text-success fw-bold mb-4 display-4" style={{ fontFamily: 'Georgia, serif' }}>
                        Explore Our Ebook Library
                    </h2>
                    <p className="text-muted fs-5" style={{ fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                        Dive into a handpicked collection of free ebooks covering programming, web development,
                        networking, and other tech topics.
                        <br /><br />
                        Whether you're a student, a professional, or just curious, our library is designed to support
                        your learning at every stage. Download and read at your own pace — anytime, anywhere.
                    </p>
                    <div className=''>
                        <button className='btn btn-outline-success btn-lg me-2 buttonbooks'>Browse Libray </button>
                        <button className='btn btn-outline-success btn-lg buttonbooks'> Start Reading </button>
                    </div>
                    <hr className="border-success" />
                </div>
            </div>
            <div className="">
                <Categories />
            </div>
        </section>



    )
}

export default HOME;