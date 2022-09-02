import React from 'react';
import {
  NextImg,
  Flex,
  Container,

  Background,
} from "../styles/layout";


import Link from 'next/link';

const Footer = ({  }) => {
  return (
    <footer>
      <Background background="rgb(161, 222, 208)">
        <Container padding="3rem 0">
          <NextImg
            margin="0 auto"
            src="/images/logo.svg"
            width={50}
            height={70}
            imgwidth="11rem"
            imgheight="auto"
          />
          <Container width="100%" maxwidth="18rem" padding="3rem 0 0 0">
            <Flex direction="row" width="100%" justify="space-between">
              <Link href="/">About</Link>
              <Link href="/">Services</Link>
              <Link href="/">Projects</Link>
            </Flex>
          </Container>
          <Container width="100%" maxwidth="13rem" padding="3rem 0 0 0">
            <Flex direction="row" width="100%" justify="space-between">
              <NextImg
                margin="0 auto"
                src="/images/icon-facebook.svg"
                width={10}
                height={10}
                imgwidth="1.3rem"
                imgheight="auto"
              />
              <NextImg
                margin="0 auto"
                src="/images/icon-instagram.svg"
                width={10}
                height={10}
                imgwidth="1.3rem"
                imgheight="auto"
              />
              <NextImg
                margin="0 auto"
                src="/images/icon-twitter.svg"
                width={10}
                height={10}
                imgwidth="1.3rem"
                imgheight="auto"
              />
              <NextImg
                margin="0 auto"
                src="/images/icon-pinterest.svg"
                width={10}
                height={10}
                imgwidth="1.3rem"
                imgheight="auto"
              />
            </Flex>
          </Container>
          
        </Container>
      </Background>
    </footer>
  );
};

export default Footer;
