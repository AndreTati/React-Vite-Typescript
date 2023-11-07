import Cards from "../Card/Card";

const AboutUs = ()=>{
    return (
        <>
        <div className="container mt-5 mb-5">
            <h2>About Us</h2>
            <p>We are a team of passionate individuals who love to create amazing things. Our mission is to provide high-quality services and products that exceed our customers' expectations.</p>
            <div className="row mt-2">
                <div className="col-md-4 col-12">
                    <Cards title="Card 1" image="src/assets/images/card 1.jpg"></Cards>
                </div>
                <div className="col-md-4 col-12">
                    <Cards title="Card 2" image="src/assets/images/card 2.jpg"></Cards>
                </div>
                <div className="col-md-4 col-12">
                    <Cards title="Card 3" image="src/assets/images/card 3.jpg"></Cards>
                </div>
            </div>
        </div>
        </>
    )
}
export default AboutUs;