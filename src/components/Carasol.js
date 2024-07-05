import Carousel from 'react-bootstrap/Carousel';


function MyCarousel() {
    return (
        <Carousel id='hero'>
            <Carousel.Item>
                <div className="image-container">
                    <img
                        className="d-block w-100 custom-img"
                        style={{ height: "80vh", objectFit: "cover" }}
                        src={process.env.PUBLIC_URL + '/images/home.webp'}
                        alt="First slide"
                    />

                    {/* <Carousel.Caption className='captions'>
                        <h3>Your Trusted Hub for Home Services</h3>
                        <p>Find Reliable Home Services Near You</p>
                    </Carousel.Caption> */}
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <div className="image-container">
                    <img
                        className="d-block w-100 custom-img"
                        style={{ height: "80vh", objectFit: "cover" }}
                        src={process.env.PUBLIC_URL + '/images/per.jpg'}
                        alt="Second slide"
                    />
                    {/*                  
                    <Carousel.Caption className='captions'>
                        <h3>Expert Home Services, Just a Click Away</h3>
                        <p>Connecting You with Top-Rated Service Providers</p>
                    </Carousel.Caption> */}
                </div>
            </Carousel.Item>
            <Carousel.Item>
                < div className="image-container">
                    <img
                        className="d-block w-100 custom-img"
                        style={{ height: "80vh", objectFit: "cover" }}
                        src={process.env.PUBLIC_URL + '/images/cooks.webp'}
                        alt="Third slide"
                    />

                    {/* <Carousel.Caption className='captions'>
                        <h3>Your Partner in Home Care Solutions</h3>
                        <p>Simplify Home Management with Us</p>
                    </Carousel.Caption> */}

                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default MyCarousel;
