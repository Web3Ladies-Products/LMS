import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from "@chakra-ui/react";

const ModalWrapper = ({ children, isOpen, onOpen, onClose }) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent mt="150px">
        <ModalBody>
         {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalWrapper;
