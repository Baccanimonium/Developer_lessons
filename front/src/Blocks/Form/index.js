import React, {useCallback, useState} from 'react';
import {FormContainer, FormTitle, Form, SubmitButton, TextAreaInput} from "./styles";
import Input from "../../Components/Input";

const formConfig = [
  {
    id: "Name",
    placeholder: "Name",
    component: Input
  },
  {
    id: "Last name",
    placeholder: "Last name",
    component: Input
  },
  {
    id: "Email",
    placeholder: "Email",
    component: Input
  },
  {
    id: "Phone",
    placeholder: "Phone",
    component: Input
  },
  {
    id: "Message",
    placeholder: "Message",
    component: TextAreaInput
  },
]

const FormBlock = () => {
  const [formState, setFormState] = useState({}) // создаем состояние формы
  const [focusState, setFocusState] = useState({}) // храним здесь флаги нажатия на поля ввода
  const [blurState, setBlurState] = useState({}) // храним здесь флаги выхода из поля ввода
  const [submitted, setSubmittedFlag] = useState(false) // храним факт нажатия на кнопку отправки

  // функция ввода данных в форму, сначала фиксируется куда, затем что(каррирование)
  const onChange = useCallback((id) => (value) => {
    setFormState((prevFormState) => ({ ...prevFormState, [id]: value }))
  }, [])

  // функция записи факта нажатия на поле ввода, сначала фиксируется куда, затем ставим тру. т.к. не изменно на время жизни приложения
  const onFocus = useCallback((id) => () => {
    setFocusState((prevFocusState) => ({ ...prevFocusState, [id]: true }))
  }, [])

  // функция записи факта выхода из поля ввода, сначала фиксируется куда, затем ставим тру. т.к. не изменно на время жизни приложения
  const onBlur = useCallback((id) => () => {
    setBlurState((prevBlurState) => ({ ...prevBlurState, [id]: true }))
  }, [])

  // функция записи факта нажатия на кнопку отправки данных формы на бэкэнд
  const onSubmit = useCallback((e) => {
    e.preventDefault()
    setSubmittedFlag(true)
    alert('submitted!')
  }, [])

  return (
    <FormContainer className="w-full px-60 pt-32">
      <FormTitle>
        Contact us
      </FormTitle>
      <Form className="mt-10" onSubmit={onSubmit}>
        {formConfig.map(({ id, placeholder, component: Comp }) => (
          <Comp
            key={id}
            // везде идет выборка по id т.к. мы работаем с объектами(множествами)
            id={id}
            // условие ошибки, если нажимали и если вышли из поля или форма нажата и данных нет
            error={(focusState[id] && blurState[id] || submitted) && !formState[id]}
            onChange={onChange(id)}
            onBlur={onBlur(id)}
            onFocus={onFocus(id)}
            value={formState[id]}
            placeholder={placeholder}
          />
        ))}
        <SubmitButton>
          Send
        </SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default FormBlock;