import Carousel from 'react-bootstrap/Carousel';
import "./Carousell.css"
function Carousell() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block ci w-100  "
          src="https://images.unsplash.com/photo-1549558549-415fe4c37b60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1119&q=80"

          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block ci w-100"
          src="https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block ci w-100"
          src="https://images.unsplash.com/photo-1466133633688-187f0b492390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
          alt="Second slide"
        />
       
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Carousell;