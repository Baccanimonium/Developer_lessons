import styled, {css} from "styled-components";

export const InputComponent = styled.input`
  background: inherit;
  font-style: normal;
  width: 100%;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.15em;
  color: #FFFFFF;
  margin-bottom: 4px;
  resize: none;
  &:disabled {
    color: var(--input-disabled-color, #BDBDBD);
    &::placeholder {
      color: var(--input-disabled-placeholder-color, #7A7A7A);
    }
  }
  &::placeholder {
    color: var(--input-placeholder-color, #C4C4C4);
    opacity: 1;
    font-weight: 400;
    font-size: 15px;
  }
  &:focus {
    outline: none;
  }
`

export const InputLabel = styled.label`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.15em;
  position: absolute;
  left: 0;
  top: -17px;
  color: white;
`

export const InputContainer = styled.div`
  background: inherit;
  position: relative;
  width: 100%;
  ${({ error }) => error && css`
    ${InputComponent} {
      color: #DB2512;
      &::placeholder {
        color: #DB2512;
      }
    }
    &::after {
      background: #DB2512!important;
    }
  `}
  &::after {
    user-select: none;
    position: absolute;
    content: "";
    bottom: -4px;
    left: 0;
    right: 0;
    height: 2px;
    background: #FFFFFF;
  }
`