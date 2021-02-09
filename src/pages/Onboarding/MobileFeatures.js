import React, { useState } from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import Pagination from "../../components/shared/Pagination";


const Content = styled.div`
  color: #124A39;
  font-size: 20px;
`

const StyledSwipeableViews = styled(SwipeableViews)`
  margin: 2rem 0;
`;

const AutoPlaySwipeableViews = autoPlay(StyledSwipeableViews);
const SwipeableFeatures = () => {
  const [ index, setIndex ] = useState((0));
  const handleChangeIndex = (index) => setIndex(index);

  return (
    <>
      <Pagination content={4} index={index} onChangeIndex={handleChangeIndex} />
      <AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex} >
        <Content> Create your own recipes anywhere, anytime across the web </Content>
        <Content> Collect recipes online by copy and pasting a link </Content>
        <Content> Organise your recipes into categories </Content>
        <Content> Plan your recipes by creating a shopping list </Content>
      </AutoPlaySwipeableViews>
    </>
  );
};


const MobileFeatures = () => {
  return (
    <>
      <SwipeableFeatures />

      <Button
        variant="contained"
        color="primary"
      >
        Get started
      </Button>
    </>
  );
};

export default MobileFeatures;
