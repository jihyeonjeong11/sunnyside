import React from 'react';

import {
  NextImg,
  Flex,
  Container,
  Relative,
  TextCard,
} from "../styles/layout";
import {
  CardTitleText,
  CardContentText
} from "../styles/custom";


const TextCardComp = ({type}: {type: boolean}) => {
  const title = type ? "Transfrom your brands" : "Stand out to the right audience"
  const paragraph = type ? 
    "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
    :
    "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
  return (
    <TextCard padding="3rem">
      <CardTitleText margin="0px">{title}</CardTitleText>
      <CardContentText fontsize="1.5rem" color="hsl(213, 9%, 39%)" padding="1rem 1rem" textalign="left" fontweight="700">
        {paragraph}
      </CardContentText>
      <p style={{ marginTop: 30 }}>LEARN MORE</p>
    </TextCard>
  );
};

const ReverseColumns = ({ reverse, image, lgImage }: {reverse: boolean, image: string, lgImage: string}) => {
  return (
    <section>
      <Container>
        <Flex direction="column" lgdirection={reverse ? "row-reverse" : "row"}>
          <Relative style={{ flexBasis: "50%" }}>
            <NextImg
              display="block"
              lgdisplay="none"
              src={image}
              width={750}
              height={624}
              layout="fill"
              imgwidth={"100%"}
            />
            <NextImg
              display="none"
              lgdisplay="block"
              layout="fill"
              src={lgImage}
              width={720}
              height={600}
              imgwidth={"100%"}
            />
          </Relative>
          <Container flexBasis="50%">
            <Flex justify="center" align="center" height="100%" width="100%">
              <TextCardComp type={reverse} />
            </Flex>
          </Container>
        </Flex>
      </Container>
    </section>
  );
};

export default ReverseColumns;
