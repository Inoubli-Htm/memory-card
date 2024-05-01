import React from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: absolute;
  margin: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  top: -86px;
  left: -44px;

  @media only screen and (min-width: 320px) and (max-width: 425px) {
    width: 100vw;
    height: 131vh;
    top: -95px;
    left: 0;
  }
  @media only screen and (min-width: 768px) and (max-width: 968px) {
    width: 100vw;
    height: 131vh;
    top: -95px;
    left: -154px;
  }
`;

const ModalContainer = styled.div`
  position: relative;
  top: 23%;
  left: 30%;
  width: 40%;
  background-color: white;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    top: 20%;
    left: 17%;
    width: 60%;
  }
`;

const Gif = styled.div`
  width: 220px;
  height: 220px;
  &._win {
    background-image: url("https://media1.tenor.com/m/kAodEI2JeiMAAAAd/good-fine.gif");
  }
  &._lose {
    background-image: url("https://media1.tenor.com/m/ZfhT82UtSCkAAAAC/yes-man-no-man.gif");
  }
`;

const Message = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
`;

interface ModalProps {
  message: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ message, onClose }) => {
  const messageModal = () => {
    if (message === "You Win! Congratulations!") {
      return "_win";
    } else {
      return "_lose";
    }
  };
  return (
    <ModalBackground>
      <ModalContainer>
        <Gif className={messageModal()} data-testid="modal"></Gif>
        <div>
          <Message>{message}</Message>
          <CloseButton onClick={onClose}>Close</CloseButton>
        </div>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
