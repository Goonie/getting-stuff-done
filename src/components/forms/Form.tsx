import { ReactNode, FormEvent } from "react";

import "./Form.scss";

interface FormProps<T> {
  children: ReactNode;
  onSubmit: (values: T) => void;
}

function Form<T extends Record<string, any> = {}>({
  children,
  onSubmit,
}: FormProps<T>) {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries()) as T;

    onSubmit(values);
  }

  return (
    <form className="Form" onSubmit={submit}>
      {children}
    </form>
  );
}

export default Form;
