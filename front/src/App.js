import React from 'react';
import Main from "./Blocks/Main";
import Services from "./Blocks/Services";
import FormBlock from "./Blocks/Form";

// корень нашего приложения, здесь мы добавляем модули приложения
const App = () => {
  return (
    <div>
      <Main/>
      <Services/>
      <FormBlock/>
    </div>
  );
};

export default App;