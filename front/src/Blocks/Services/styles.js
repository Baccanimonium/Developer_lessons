import styled from "styled-components";

export const ServiceHeader = styled.h2`
  font-weight: 700;
  font-size: 30px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`

export const CreateSeviceButton = styled.button`
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.15em;
  text-decoration-line: underline;
  text-transform: uppercase;
`

export const ServiceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.25rem;
`

export const ServiceTitle = styled.h6`
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0.23em;
  text-transform: uppercase;
`

export const ServiceImage = styled.img`
  width: 386px;
  height: 500px;
`

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 9999;
`
export const DialogueBackground = styled.div`
  position: absolute;
  height: calc(100% + 50px);
  background-color: #000;
  opacity: 0.2;
  width: 100%;
`
export const DialogueContainer = styled.div`
  border: 1px solid #f3f3f3;
  background: black;
  color: white;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  z-index: 2;
  display: flex;
  margin-bottom: auto;
  padding: 20px;
  flex-direction: column;
  min-height: 10rem;
  max-height: 75vh;
  margin-top: 15vh;
  overscroll-behavior: contain;
  position: relative;
  overflow: hidden;
  width: 20rem;
`

