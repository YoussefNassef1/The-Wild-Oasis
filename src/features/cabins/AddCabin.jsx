// import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add New Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
    // <div>
    //   <Button onClick={() => setShowCreateCabin((cabin) => !cabin)}>
    //     Add New Cabin
    //   </Button>
    //   {showCreateCabin && (
    //     <Modal onClose={() => setShowCreateCabin(false)}>
    //       <CreateCabinForm onCloseModel={() => setShowCreateCabin(false)} />
    //     </Modal>
    //   )}
    // </div>
  );
}

export default AddCabin;
