import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function NewCampaignCards() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.imgur.com/HiLYAhl.jpeg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default NewCampaignCards;