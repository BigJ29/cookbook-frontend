import React from 'react';
import styled from "styled-components";

import PaginationContent from "./PaginationContent";
import { appFeatures } from "../../utils";


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Pagination = props => {
  const { content, index, onChangeIndex } = props;

  const handleClick = ( event, index ) => {
    onChangeIndex(index);
  }

  const children = Array.apply(null, Array(content)).map((u, i) => {
    return (
      <PaginationContent
        key={i}
        index={i}
        keyword={appFeatures[i]}
        active={i === index}
        onClick={handleClick}
      />
    );
  });

  return <Wrapper className='swipeable-wrapper'> {children} </Wrapper>;
}

export default Pagination;