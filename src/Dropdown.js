import React from "react";
import {
  DropdownWrapper,
  StyledSelect,
  StyledOption,
  StyledLabel,
  StyledButton,
} from "./styles.js";

export function Dropdown(props) {
  return (
    <DropdownWrapper
      action={props.action}
      onChange={props.onChange}
    >
      <StyledLabel htmlFor="courses">
        {props.formLabel}
      </StyledLabel>
      <StyledSelect id="courses" name="courses">
        {props.children}
      </StyledSelect>
      <StyledButton type="submit" value={props.buttonText} />
    </DropdownWrapper>
  );
}

export function Option(props) {
  return (
    <StyledOption selected={props.selected}>
      {props.value}
    </StyledOption>
  );
}