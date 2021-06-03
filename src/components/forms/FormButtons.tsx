import { ReactNode } from "react";

import "./FormButtons.scss";

interface FormButtonsProps {
  children: ReactNode;
}

function FormButtons({ children }: FormButtonsProps) {
  return <section className="FormButtons">{children}</section>;
}

export default FormButtons;
