import React from "react";
import {
  LogForm,
  LogWrapper,
  LogTitle,
  LogToggleGroup,
  LogToggle,
  LogLabel,
} from "./styled/LogForm";

function Log({ user }) {
  return (
    <LogForm>
      <LogWrapper>
        <LogTitle>Howd you go today {user.name}?</LogTitle>
        <LogToggleGroup>
          {user.targets.map((label, i) => (
            <LogToggle key={i}>
              <input id={"toggle-" + i} type="radio" name="log" />
              <LogLabel htmlFor={"toggle-" + i} rating={i}>
                {label}
              </LogLabel>
            </LogToggle>
          ))}
        </LogToggleGroup>
      </LogWrapper>
    </LogForm>
  );
}

export default Log;
