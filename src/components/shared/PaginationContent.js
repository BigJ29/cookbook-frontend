import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const Content = styled.span`
  font-size: 12px;
  color: ${props => props.active ? "#124A39" : "#ff724c"};
  font-weight: ${props => props.active ? 700 : 'normal'};

  &::after {
    content: "•";
    color: #e2e2e2;
    font-size: 16px;
    padding: 0 8px;
  }
`;

const PaginationContent = props => {
  const { active, index } = props;

  const handleClick = (event) => {
    props.onClick(event, index);
  };
  
  return (
    <div onClick={handleClick} className="swipeable-content-wrapper">
      <Content active={active} className="swipeable-content">
        {props.keyword}
      </Content>
    </div>
  );
}

PaginationContent.propTypes = {
  active: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PaginationContent;
