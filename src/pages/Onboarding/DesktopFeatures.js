import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

import create from "../../assets/onboarding/create.png";
import collect from "../../assets/onboarding/collect.png";
import organise from "../../assets/onboarding/organise.png";
import plan from "../../assets/onboarding/plan.png";

const featuresList = [
  {
    icon: create,
    keyword: "Create",
    message: "your own recipes anywhere, anytime, across the web.",
    altMsg: "writing icon",
  },
  {
    icon: collect,
    keyword: "Collect",
    message: "recipes online by copy and pasting a link",
    altMsg: "a collection of items in a box",
  },
  {
    icon: organise,
    keyword: "Organise",
    message: "your recipes into categories",
    altMsg: "box for organising icon",
  },
  {
    icon: plan,
    keyword: "Plan",
    message: "your recipes by creating a shopping list",
    altMsg: "calendar icon for planning",
  },
];

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
`;

const Wrapper = styled.div`
  display: flex;
  margin: 1rem 2rem;
  max-width: 75%;
  width: 100%;
`;

const ContentWrapper = styled(Wrapper)`
  align-items: center;
  background: #f7f9fd;
  padding: 2rem;
  transition: font 0.5s;
  height: 100px;

  &:hover {
    border: 1px solid #8d6c9f;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    background: none;

    span:first-child {
      font-weight: bold;
    }
  }
`;

const ContentImage = styled.img`
  width: 40px;
  position: absolute;
  margin-left: -3.2rem;
`;

const ContentMessage = styled.div`
  margin-left: 1rem;
`;

const ButtonWrapper = styled(Wrapper)`
  align-content: flex-end;
  justify-content: flex-end;
`;

const DesktopFeatures = () => {
  return (
    <OuterWrapper>
      {featuresList.map((content, index) => (
        <ContentWrapper key={index}>
          <ContentImage src={content.icon} alt={content.altMsg} />
          <ContentMessage>
            <span>{`${content.keyword} `}</span>
            <span>{content.message}</span>
          </ContentMessage>
        </ContentWrapper>
      ))}

      <ButtonWrapper>
        <Button variant="contained" color="primary"> Get started </Button>
      </ButtonWrapper>
    </OuterWrapper>
  );
};

export default DesktopFeatures;
