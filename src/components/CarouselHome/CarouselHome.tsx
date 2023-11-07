import Carousel from 'react-bootstrap/Carousel';

const CarouselHome=()=>{
    return(
            <Carousel>
            <Carousel.Item>
                <img 
                    className='d-block w-100' 
                    style={{maxHeight:"500px", objectFit:'cover'}} 
                    src="src/assets/images/slide1.jpg" 
                    alt="First Slide" />
                <Carousel.Caption>
                <h3>First slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img 
                    className='d-block w-100' 
                    style={{maxHeight:"500px", objectFit:'cover'}} 
                    src="src/assets/images/slide2.jpg" 
                    alt="Second Slide" />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img 
                    className='d-block w-100' 
                    style={{maxHeight:"500px", objectFit:'cover'}} 
                    src="src/assets/images/slide3.jpg" 
                    alt="Third Slide" />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img 
                    className='d-block w-100' 
                    style={{maxHeight:"500px", objectFit:'cover'}} 
                    src="src/assets/images/slide4.jpg" 
                    alt="Fourth Slide" />
                <Carousel.Caption>
                <h3>Fourth slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
    )
}
export default CarouselHome