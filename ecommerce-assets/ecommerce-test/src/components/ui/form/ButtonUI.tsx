import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const style = `
  width: 100%;
  height: 40px;
  gap: 12px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1;
  font-weight: 600;
  border: none;
  color: #ffffff;
  background-color: #009edd;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #039b00;
  }
`;

const StyledButton = styled.button`
  padding: 8px 16px;
  ${style}
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  ${style}
`;

interface ButtonProps {
  to?: string;
  onClick?: Function;
  children: React.ReactNode;
}

export default function Button({ to, onClick, children }: ButtonProps) {
  return !!to ? (
    <>
      <StyledLink to={to}>{children}</StyledLink>
    </>
  ) : (
    <StyledButton onClick={() => (!!onClick ? onClick() : {})}>
      {children}
    </StyledButton>
  );
}
