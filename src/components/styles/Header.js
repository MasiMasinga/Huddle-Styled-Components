import React from "react";

import { Container } from "./Container.styled";
import { Nav } from "../styles/Nav.styled";
import { Logo } from "../styles/Logo.styled";
import { Button } from "../styles/Button.styled";
import { StyledHeader } from "./Header.styled";
import { Flex } from "./Flex.styled";
import { Image } from "./Image.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="logo" />
          <Button>Try It Free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>
          <Image src="./images/illustration-mockups.svg" alt="" />
        </Flex>
        
      </Container>
    </StyledHeader>
  );
};
