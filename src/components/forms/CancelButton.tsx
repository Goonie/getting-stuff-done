import { ReactNode, MouseEvent } from "react";

import "./CancelButton.scss";

interface CancelButtonProps {
  children: ReactNode;
  onClick: () => void;
}

function CancelButton({ children, onClick }: CancelButtonProps) {
  function click(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    onClick();
  }
  return (
    <button className="CancelButton" onClick={click}>
      {children}
    </button>
  );
}

export default CancelButton;
