import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  CreateSeviceButton, DialogueBackground, DialogueContainer,
  ModalContainer,
  ServiceContainer,
  ServiceHeader,
  ServiceImage,
  ServiceTitle
} from "./styles";
import axios from "axios";
import Input from "../../Components/Input";

const Services = () => {
  const [services, setServices] = useState([]) // создаем реактивное состояние для наших сервисов
  const [isModalOpened, setModalState] = useState(false) // создаем реактивное состояние для модального окна
  const [newServiceTitle, setTitle] = useState("") // создаем реактивное состояние для поля ввода текста
  const refFileInput = useRef() // создаем ссылку, по которой мы можем обращаться к файловому инпуту

  useEffect(() => {
    // загружаем наши сервисы
    // самовызывающася асинхронная функция
    (async () => {
      const { data } = await axios.get('http://localhost/api/services')
      setServices(data)
    })()
    // запуститься 1 раз, т.к у нее вторым аргументом передан пустой массив
  }, [])

  const toggleModalState = useCallback(() => {
    setModalState((prevState => !prevState)) // меняем значения с true => false => true и тд
    setTitle("") // сбрасываем значение поля ввода, каждый раз при открытии и закрытии модального окна
  }, [])

  const createService = useCallback(async () => {
    const FData = new FormData() // создаем объект позвляющий нам отправлять файлы на сервер
    for (const file of refFileInput.current.files) {
      FData.append(file.name, file, file.name) // добавляем файцы в цикле, их может быть неограниченное количество
    }
    const { data:[image] } = await axios.post('http://localhost/api/upload/services', FData) // отправляем файлы на сервер
    const { data } = await axios.post('http://localhost/api/services', {
      title: newServiceTitle,
      image
    }) // создаем новый сервис
    setServices(pServices => [...pServices, ...data]) // добавляем новый сервис в массив загруженных сервисов
    toggleModalState() // вызываем функцию закрытия модального окна
  }, [newServiceTitle])


  return (
    <div className="w-full pt-48 pb-20 px-60">
      <ServiceHeader>
        OUR SERVICES
      </ServiceHeader>
      <CreateSeviceButton className="mt-4" onClick={toggleModalState}>
        Add new service
      </CreateSeviceButton>
      {isModalOpened && (
        <ModalContainer>
          <DialogueBackground onClick={toggleModalState}/>
          <DialogueContainer>
            <input
              type="file"
              ref={refFileInput}
            />
            <Input
              className="mt-3"
              value={newServiceTitle}
              onChange={setTitle} id="title"
            />
            <CreateSeviceButton
              className="mt-4"
              onClick={createService}>
              Add new service
            </CreateSeviceButton>
          </DialogueContainer>
        </ModalContainer>
      )}
      <ServiceContainer className="mt-10">
        {/*map это метод массива позволяющий преобразовывать маассив загруженных элементов в массив HTML*/}
        {services.map(({ id, title, image }) => (
          <div
            key={id}
            className="flex flex-col"
          >
            <ServiceImage src={image}/>
            <ServiceTitle className="mt-5">
              {title}
            </ServiceTitle>
          </div>
        ))}
      </ServiceContainer>
    </div>
  );
};

export default Services;