import Cards from "../Card/Card";

const AboutUs = ()=>{
    return (
        <>
        <div className="container mt-5 mb-5">
            <h2>About Us</h2>
            <p>We are a team of passionate individuals who love to create amazing things. Our mission is to provide high-quality services and products that exceed our customers' expectations.</p>
            <div className="row mt-2">
                <div className="col-md-4 col-12">
                    <Cards title="Card 1" image="https://i.pinimg.com/564x/d9/4f/79/d94f79d53e79b686b325ca6d437ca6aa.jpg"></Cards>
                </div>
                <div className="col-md-4 col-12">
                    <Cards title="Card 2" image="https://i.pinimg.com/564x/3a/68/c7/3a68c708ab0660e7b3d8a5b92874bf63.jpg"></Cards>
                </div>
                <div className="col-md-4 col-12">
                    <Cards title="Card 3" image="https://i.pinimg.com/564x/2d/da/48/2dda48be0dbd2cb168e95974a0d70e7e.jpg"></Cards>
                </div>
            </div>
        </div>
        </>
    )
}
export default AboutUs;