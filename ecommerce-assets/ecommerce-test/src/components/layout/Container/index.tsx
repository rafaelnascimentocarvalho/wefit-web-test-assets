import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
`;

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <StyledContainer>{children}</StyledContainer>;
}
