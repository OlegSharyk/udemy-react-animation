import React from "react";
// import { Transition } from 'react-transition-group';
import CSSTransition from 'react-transition-group/CSSTransition';

import "./Modal.css";

const animationTimming = {
  enter: 400,
  exit: 1000
}


const modal = props => {
  
  return (
    <CSSTransition
      in={props.show}
      timeout={animationTimming}
      mountOnEnter
      unmountOnExit
      // classNames="fade-slide"
      classNames={{
        enter: '',
        enterActive: 'ModalOpen',
        exit: '',
        exitActive: 'ModalClosed'
        // appear:
        // appearActive: 
      }}
      // onEnter={() => console.log('onEnter')}
      // onEntering={() => console.log('onEntering')}
      // onEntered={() => console.log('onEntered')}
      // onExit={() => console.log('onExit')}
      // onExiting={() => console.log('onExiting')}
      // onExited={() => console.log('onExited')}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
            </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
