import Image from 'next/image';

import { Container,Row,Col,Stack,Button,Card,CardText } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
      <h1 style={{ fontSize: "24px", color: "red" }}>Home Movie List</h1>
      <h2 style={{ fontSize: "28px", color: "yellow" }}>Aisyah Nur Hasunah</h2>
      <h3 style={{ fontSize: "16px", color: "green" }}>kelas pemrograman web 2023-2024</h3>

      <Stack direction="horizontal" gap={2}>
  <Button as="a" variant="primary">
    Rating
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button>
</Stack>
<Card className= 'bg-transparent text-white text-center movieImage'>
    <Image src= "https://upload.wikimedia.org/wikipedia/id/d/d2/Hangout-film.jpg" 
    alt="Card image" height="300" width ="480"></Image>
    
    {/* <img className= "card-img-top"
    src= "https://upload.wikimedia.org/wikipedia/id/d/d2/Hangout-film.jpg"  
    alt="Card image cap"></img> */}

    {/* <img className= "card-img-top"
    src= "https://i0.wp.com/stories.briefer.id/wp-content/uploads/2024/02/agak-laen.jpg?w=720&ssl=1"  
    alt="Card image cap"></img> */}
    
    <div className= 'bg-dark p-2 m-1'>
    <CardText>Hangout</CardText>
    <CardText>Bagus 3.8/4.0</CardText>
    <CardText>Film By Raditya Dika</CardText>
    <CardText>Rilis Tahun 2016</CardText>
    </div>
    </Card>

    </div>
  );
} 
