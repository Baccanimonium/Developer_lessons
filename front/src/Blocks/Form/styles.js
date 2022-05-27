import styled from "styled-components";
import TextArea from "../../Components/TextArea";

export const FormContainer = styled.div`
  background: #171616;
  height: 665px;
`

export const FormTitle = styled.h2`
  font-weight: 700;
  font-size: 30px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: white;
`

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 440px;
  grid-gap: 2.5rem;
  
`

export const TextAreaInput = styled(TextArea)`
  grid-column: 1 / -1;
`

export const SubmitButton = styled.button`
  width: 198px;
  height: 50px;
  color: white;
  background: #DB2512;
  grid-column: 1 / -1;
`