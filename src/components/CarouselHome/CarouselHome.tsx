import Carousel from 'react-bootstrap/Carousel';

const CarouselHome=()=>{
    return(
            <Carousel>
            <Carousel.Item>
                <img 
                    className='d-block w-100' 
                    style={{maxHeight:"500px", objectFit:'cover'}} 
                    src="https://okdiario.com/img/2017/06/19/maravillas-naturales-del-mundo-8.jpg" 
                    alt="First Slide" />
                <Carousel.Caption>
                <h3>First slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img 
                    className='d-block w-100' 
                    style={{maxHeight:"500px", objectFit:'cover'}} 
                    src="https://st1.uvnimg.com/c8/a4/79af1ab2405eae3bf2cd1fb85727/istock-930824730.jpg" 
                    alt="Second Slide" />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img 
                    className='d-block w-100' 
                    style={{maxHeight:"500px", objectFit:'cover'}} 
                    src="https://www.viajandoabrasil.com/wp-content/uploads/2020/12/foz-iguazu.jpg" 
                    alt="Third Slide" />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img 
                    className='d-block w-100' 
                    style={{maxHeight:"500px", objectFit:'cover'}} 
                    src="https://i.pinimg.com/originals/1e/59/38/1e59388bc320dc56e159d00e20743f00.jpg" 
                    alt="Fourth Slide" />
                <Carousel.Caption>
                <h3>Fourth slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
    )
}
export default CarouselHome