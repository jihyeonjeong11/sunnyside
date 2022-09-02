import React from "react";

import {
  NextImg,
  Flex,
  Container,
  Relative,
  AbsoluteDiv,
  TextCard,
} from "../styles/layout";
import { CardTitleText, CardContentText } from "../styles/custom";

const TextCardComp: React.FC<{ order: number }> = ({
  order = 1,
}): React.ReactElement => {
  const title = order < 2 ? "Graphic Design" : "Photography";
  const paragraph =
    order < 2
      ? "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
      : "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.";
  return (
    <AbsoluteDiv top="61%" lgtop="60%" height="auto">
      <TextCard padding="3rem">
        <CardTitleText
          fontsize="2.5rem"
          smfontsize="3rem"
          margin="0px"
          letterspacing="0"
          color="rgb(50,85,75)"
          smmargin="2rem"
        >
          {title}
        </CardTitleText>
        <CardContentText
          textalign="center"
          fontsize="1.6rem"
          smfontsize="1.5rem"
          color="rgb(50,85,75)"
          fontweight="700"
        >
          {paragraph}
        </CardContentText>
      </TextCard>
    </AbsoluteDiv>
  );
};

const Col: React.FC<{ image: string; order: number }> = ({
  image,
  order,
}): React.ReactElement => {
  return (
    <Relative style={{ flexBasis: "50%" }}>
      <NextImg
        display="block"
        lgdisplay="none"
        src={`/images/mobile/${image}`}
        width={600}
        height={1000}
        imgwidth={"100%"}
        imgheight={"auto"}
        style={{ zIndex: 5 }}
      />
      <NextImg
        display="none"
        lgdisplay="block"
        src={`/images/desktop/${image}`}
        width={600}
        height={1000}
        imgwidth={"100%"}
        imgheight={"auto"}
        style={{ zIndex: 5 }}
      />
      <Container flexBasis="50%">
        <Flex justify="center" align="center" height="100%" width="100%">
          <TextCardComp order={order} />
        </Flex>
      </Container>
    </Relative>
  );
};

const Photographys: React.FC = ({}): React.ReactElement => {
  return (
    <section>
      <Container>
        <Flex lgdirection="row">
          <Col image="image-graphic-design.jpg" order={1} />
          <Col image="image-photography.jpg" order={2} />
        </Flex>
      </Container>
    </section>
  );
};

export default Photographys;
