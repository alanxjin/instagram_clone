import React from "react";
import "./App.css";
import { PortraitPage, LandscapePage } from "./components";
import { connect } from "react-redux";
import { updateModal } from "./actions";

function App({ modal, closeModal }) {
  return (
    <div className="App">
      <PortraitPage />
      {modal && (
        <div>
          <div className="App__ModalBack" onClick={closeModal}></div>
          <div className="App__ModalFront">
            <LandscapePage />
          </div>
        </div>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  const { modal } = state;
  return {
    modal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closeModal: () => {
      dispatch(updateModal(false));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
