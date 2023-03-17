import React, { useState } from 'react';
import CustomModal from '../ui/Modal';
export default function ChangLogo() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <CustomModal
        onClose={setModalIsOpen}
        isOpen={modalIsOpen}
        title="TRALALA"
        buttons={[{ callback: setModalIsOpen, scheme: 'blue', text: 'Ok' }]}>
        TEST
      </CustomModal>
    </>
  );
}
