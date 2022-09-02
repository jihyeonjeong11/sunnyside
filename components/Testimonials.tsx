import React from "react";

import { NextImg, Flex, Container } from "../styles/layout";
import { CardTitleText, CardContentText } from "../styles/custom";

const ClientCard = ({
  image,
  text,
  name,
  position,
}: {
  image: string;
  text: string;
  name: string;
  position: string;
}) => {
  return (
    <Flex
      gap="1.5rem"
      lggap="3rem"
      style={{ flexGrow: 1 }}
      padding="5rem 0 0 0"
    >
      <Container>
        <NextImg
          src={image}
          alt="..."
          borderradius="50%"
          width={100}
          height={100}
          imgwidth="150"
          imgheight="auto"
        />
      </Container>
      <CardContentText
        lgfontsize="1.2rem"
        padding="3rem 0"
        color="rgb(113, 115, 130)"
        textalign="center"
        fontweight="700"
        lineheight="1.5"
      >
        {text}
      </CardContentText>
      <Flex gap=".5rem">
        {" "}
        <CardTitleText
          textalign="center"
          fontsize="1.1rem"
          fontweight="800"
          letterspacing="0"
        >
          {name}
        </CardTitleText>
        <CardContentText
          textalign="center"
          fontsize="0.9rem"
          color="rgb(92,90,107)"
        >
          {position}
        </CardContentText>
      </Flex>
    </Flex>
  );
};
const Testimonials: React.FC = ({}): React.ReactElement => {
  return (
    <section>
      <Container padding="4rem 1.5rem">
        <CardTitleText
          fontsize="1.0rem"
          fontweight="800"
          color="rgb(168,171,174)"
        >
          CLIENT TESTIMONIALS
        </CardTitleText>

        <Flex gap="3rem" lgdirection="row">
          <ClientCard
            image={"/images/image-emily.jpg"}
            text={
              "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
            }
            name={"Emily R."}
            position={"Marketing Director"}
          />

          <ClientCard
            image={"/images/image-thomas.jpg"}
            text={
              "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
            }
            name={"Thomas S."}
            position={"Marketing Director"}
          />

          <ClientCard
            image={"/images/image-jennie.jpg"}
            text={
              "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
            }
            name={"Jennie F."}
            position={"Business Owner"}
          />
        </Flex>
      </Container>
    </section>
  );
};

export default Testimonials;
