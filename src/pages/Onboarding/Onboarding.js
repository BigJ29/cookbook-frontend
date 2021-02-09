import React from "react";
import { Box, Grid, Hidden } from "@material-ui/core";
import styled from "styled-components";

import onboarding from "../../assets/onboarding/cooking-food.png";
import DesktopFeatures from "./DesktopFeatures";
import MobileFeatures from "./MobileFeatures";


const CustomGrid = styled(Grid)`
  @media (min-width: 767px) {
    height: 100vh;
  }
  
  @media (max-width: 767px) {
    flex-flow: column;
  }
`;

const WithBackgroundGrid = styled(Grid)`
  background: #fef6e9;
`;

const DesktopGrid = styled(Grid)`
  display: flex;
  justify-content: flex-end;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const Heading = styled.h1`
  margin: 2rem 2rem 0;
  align-self: flex-start;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

const Image = styled.img`
  height: auto;
  align-self: center;
  width: 100%;

  @media (min-width: 768px) and (max-width: 960px) {
    margin-left: -30%;
  }

  @media (max-width: 767px) {
    max-width: 250px;
    margin: 1rem 0;
  }

  @media (min-width: 961px) {
    margin-left: -10%;
  }
`;

const MobileGrid = styled(Grid)`
  padding: 2rem;
`;

// NOTE: Button `Get started` will fire a flag
// seenOnboardingMessage to true so the next time users come back
// onboarding will not be shown and will show SignIn page instead


const Onboarding = () => {
  return (
    <Box>
      <CustomGrid container>
        <WithBackgroundGrid item xs={12} sm={4}>
          <Wrapper>
            <Heading>FoodBooklet</Heading>
            <Image src={onboarding} alt='Image of a pan with food'/>
          </Wrapper>
        </WithBackgroundGrid>

        <Hidden xsDown>
          <DesktopGrid item xs={12} sm={8}>
            <DesktopFeatures />
          </DesktopGrid>
        </Hidden>

        <Hidden smUp>
          <MobileGrid item xs={12} id="mobile-content">
            <MobileFeatures />
          </MobileGrid>
        </Hidden>
      </CustomGrid>
    </Box>
  )
};

export default Onboarding;
