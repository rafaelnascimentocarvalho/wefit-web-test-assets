import { Outlet } from "react-router-dom";
import Header from "./components/includes/Header";
import Container from "./components/layout/Container";
import styled from "styled-components";

const StyledTemplate = styled.div`
  padding-bottom: 64px;
`;

export default function Template() {
  return (
    <StyledTemplate>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </StyledTemplate>
  );
}
