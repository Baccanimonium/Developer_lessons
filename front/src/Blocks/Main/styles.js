import styled from "styled-components";

export const MainBlockContainer = styled.div`
  background: url("/road.png");
  background-size: cover;
  height: 750px;
`

export const NavigationElement = styled.a`
  font-size: 15px;
  font-weight: 600;
  position: relative;
  &.selected {
    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      right: 0;
      left: 0;
      height: 2px;
      background: white;
    }
  }
`

export const LanguageElement = styled.button`
  text-transform: uppercase;
  font-weight: 600;
  &.selected {
    color: #B7B7B7;
  }
`

export const HeaderElement = styled.h1`
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  color: white;
`

export const ShowMoreButton = styled.button`
  background: #DB2512;
  color: white;
  width: 198px;
  height: 50px;
`

export const FloatBlock = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: -98px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const FloatItem = styled.div`
  background: white;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
  width: 386px;
  height: 196px;
  padding: 2rem;
`
export const FloatItemTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin-top: 1.25rem;
`

export const FloatItemText = styled.div`
  font-weight: 400;
  font-size: 18px;
  color: #B7B7B7;
  margin-top: 1rem;
`