import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

type StyledInputProps = {};

const StyledInput = styled.input<StyledInputProps>`
  display: block;
  padding: 6px;
  font-size: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  width: 100%;

  @media screen and (max-width: 767px) {
    padding: 5px;
  }
`;

export default function InputText(
  attrs: InputHTMLAttributes<HTMLInputElement>
) {
  return <StyledInput {...attrs} />;
}
