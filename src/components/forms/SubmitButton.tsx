import { ReactNode } from "react";

import "./SubmitButton.scss";

interface SubmitButtonProps {
  children: ReactNode;
  isSubmitting?: boolean;
}

function SubmitButton({ children, isSubmitting }: SubmitButtonProps) {
  const classNames = "SubmitButton" + (isSubmitting ? " is-submitting" : "");

  return (
    <button className={classNames} type="submit">
      {children}
    </button>
  );
}

export default SubmitButton;
