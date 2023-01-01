import Carousel from 'react-bootstrap/Carousel';
import "./Carousell.css"
function Carousell() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block ci w-100 "
          src="https://media.istockphoto.com/id/1368262606/photo/tall-powerful-cross-ocean-wave-breaking-during-a-dark-stormy-evening.jpg?b=1&s=170667a&w=0&k=20&c=jJPEMU8rTpHmVzQ41yijTHuokjfWObZrp-Noe8n7F5s="

          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block ci w-100"
          src="https://media.istockphoto.com/id/1368262606/photo/tall-powerful-cross-ocean-wave-breaking-during-a-dark-stormy-evening.jpg?b=1&s=170667a&w=0&k=20&c=jJPEMU8rTpHmVzQ41yijTHuokjfWObZrp-Noe8n7F5s="
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block ci w-100"
          src="https://media.istockphoto.com/id/1383796215/photo/silhouette-of-man-holding-binoculars-on-mountain-peak-against-bright-sunlight-sky-background.jpg?b=1&s=170667a&w=0&k=20&c=k9GxkAG2AvIySSEcXvqWwvNW79eYRlKE84EsvvdbxO0="
          alt="Second slide"
        />
       
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Carousell;