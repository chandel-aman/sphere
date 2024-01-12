import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

interface BackdropProps {
  onClick: () => void;
  style?: React.CSSProperties;
  children?: ReactNode;
}

const Backdrop: React.FC<BackdropProps> = (props) => {
  return ReactDOM.createPortal(
    <div
      className="fixed top-0 left-0 w-full h-[100dvh] bg-black bg-opacity-75 z-10"
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </div>,
    document.getElementById("backdrop-hook")!
  );
};

export default Backdrop;
