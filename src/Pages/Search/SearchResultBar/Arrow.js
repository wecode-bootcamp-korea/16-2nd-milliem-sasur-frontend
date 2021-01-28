import React from 'react';
import styled from 'styled-components';
import theme from '../../../Styles/Theme';

const Arrow = (props) => {
  return <SelectArrow className='select__arrow'/>
}

export default Arrow;

const SelectArrow = styled.div`
    position: absolute;
    top: 16px;
    right: 10px;
    width: 0;
    height: 0;
    pointer-events: none;
    border-style: solid;
    border-width: 8px 5px 0 5px;
    border-color: ${theme.mainFontColor} transparent transparent transparent;
`