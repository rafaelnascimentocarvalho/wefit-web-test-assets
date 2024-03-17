import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  color: #333333;
  background-color: white;
  padding: 24px;
  border-radius: 4px;

  @media screen and (max-width: 767px) {
    padding: 20px;
  }
`;

interface BoxProps {
  children: React.ReactNode;
}

export default function Box({ children }: BoxProps) {
  return <StyledBox>{children}</StyledBox>;
}
