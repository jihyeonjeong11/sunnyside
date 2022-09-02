import React from "react";
import Link from "next/link";
import { useState } from "react";
import useModal from "../hooks/useModal";
import {
  NextImg,
  Flex,
  Container,
  Relative,
  AbsoluteDiv,
  HeaderMenus,
  Nav,
} from "../styles/layout";
import { ContactBtn, MobileButton, CreativeText } from "../styles/custom";

const AbsoluteContent: React.FC<{open: boolean, toggle: ()=>void}> = ({open, toggle}): React.ReactElement => {
  return (
    <AbsoluteDiv top="0">
      <Container height="100%">
        <Container padding="0 1.5rem">
          <Flex
            direction="row"
            height="6rem"
            justify="space-between"
            align="center"
          >
            <NextImg
              display="block"
              src="/images/logo.svg"
              alt="..."
              imgwidth="180"
              imgheight="35"
              width={180}
              height={35}
            />

            <Nav>
              <Flex
                direction="row"
                justify="space-between"
                align="center"
                gap="3rem"
              >
                <HeaderMenus open={open} gap="3rem">
                  <li>
                    <Link href="/">About</Link>
                  </li>
                  <li>
                    <Link href="/">Services</Link>
                  </li>
                  <li>
                    <Link href="/">Projects</Link>
                  </li>
                  <li>
                    <Link href="/">
                      <ContactBtn>CONTACTS</ContactBtn>
                    </Link>
                  </li>
                </HeaderMenus>
              </Flex>
              <MobileButton onClick={toggle}>
                <NextImg
                  src="/images/icon-hamburger.svg"
                  imgwidth="27"
                  imgheight="18"
                  width={27}
                  height={18}
                />
              </MobileButton>
            </Nav>
          </Flex>
        </Container>
        <Flex height="calc(100% - 9rem)" justify="center">
          <Container padding="1em 0px 5rem 0px;" style={{ flexGrow: 1 }}>
            <Flex
              height="100%"
              direction="column"
              align="center"
              gap="1.5rem"
              textalign="center"
            >
              <CreativeText letterspacing="0.6rem">
                WE ARE CREATIVES
              </CreativeText>
              <NextImg
                src="/images/icon-arrow-down.svg"
                imgwidth="30"
                width={30}
                height={100}
              />
            </Flex>
          </Container>
        </Flex>
      </Container>
    </AbsoluteDiv>
  );
};

const Header: React.FC = (): React.ReactElement => {
  const [open, toggle] = useModal(false);

  return (
    <header>
      <Relative>
        <NextImg
          display="block"
          lgdisplay="none"
          src="/images/mobile/image-header.jpg"
          alt="..."
          imgwidth="100%"
          imgheight="auto"
          width={500}
          height={900}
          priority
        />
        <NextImg
          display="none"
          lgdisplay="block"
          src="/images/desktop/image-header.jpg"
          alt="..."
          imgwidth="100%"
          imgheight="auto"
          width={1440}
          height={800}
          priority
        />
        <AbsoluteContent open={open} toggle={toggle} />
      </Relative>
    </header>
  );
};

export default Header;
