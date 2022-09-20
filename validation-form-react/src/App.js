
import './App.css';
import Form from './components/Form';

import { useState } from "react";
function App() {
  const [modal,setModal] = useState('invisible');

  return (
    <div className="App">
      <Form showModal={setModal} />
      <div id="modal" className={`modal ${modal}`}>
        <div className="modal-body">
            <h4> You have successfully Signed-up! </h4>
            <i onClick={() => setModal('invisible')} className="fa-sharp fa-solid fa-circle-xmark"></i>
        </div>
    </div>
    </div>
  );
}

export default App;
