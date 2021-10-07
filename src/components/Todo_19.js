import { useState } from 'react';
import Modal_19 from '../components/Modal_19';
import Backdrop_19 from '../components/Backdrop_19';

function Todo_19(props) {
  const [showModal, setshowModal] = useState();

  function showModalHandler() {
    setshowModal(true);
  }

  function closeModalHandler(){
    setshowModal(false);
  }

  return (
    <div>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={showModalHandler}>
            Delete
          </button>
        </div>
      </div>
      {showModal && <Backdrop_19 onClose={showModalHandler}/>}
      {showModal && <Modal_19 text='Are you sure?' onClose={showModalHandler}/>}
    </div>

  );
}

export default Todo_19;
