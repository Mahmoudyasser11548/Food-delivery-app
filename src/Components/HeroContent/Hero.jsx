import { Container } from "reactstrap";
import './Hero.css'
const Hero = (props) => {
  return (  
    <section className="Hero-content">
      <Container>
        <h2 className="Hero-title text-light">{props.title}</h2>
      </Container>
    </section>
  );
}

export default Hero;