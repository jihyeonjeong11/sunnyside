import { Container } from "styles/layout";
import ReverseColumns from "components/TwoCols";
import Photographys from "components/Photographys";
import Testimonials from "components/Testimonials";
import FourCols from "components/FourCols";
import Footer from "components/Footer";
import Header from "components/Header";

const Index = () => {
  return (
    <main>
         <Container as="main">
          <Header />
          <ReverseColumns
            reverse={true}
            image={"/images/mobile/image-transform.jpg"}
            lgImage={"/images/desktop/image-transform.jpg"}

          />
          <ReverseColumns
            reverse={false}
            image={"/images/desktop/image-stand-out.jpg"}
            lgImage={"/images/mobile/image-stand-out.jpg"}
          />
          <Photographys
          />
          <Testimonials />
          <FourCols /> 
           <Footer />
        </Container>
    </main>
  );
};

export default Index;
