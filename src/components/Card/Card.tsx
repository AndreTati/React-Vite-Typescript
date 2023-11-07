
import Card from 'react-bootstrap/Card';

type CardsProps={
    title:string;
    image:string;
};
const Cards = ({title, image}:CardsProps)=>{
    return (
        <Card style={{ width: '25rem', height: '25rem' }}>
            <Card.Img variant="top" style={{height: '15rem'}} src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default Cards;