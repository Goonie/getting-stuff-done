import { InvalidEvent, FocusEvent } from "react";

import { useErrorMessage } from "react-utilities/state";

import "./TextField.scss";

interface TextFieldProps {
  label: string;
  name: string;
  required?: string | boolean;
}

function TextField({ label, name, required }: TextFieldProps) {
  const { errorMessage, isError, setErrorMessage, clearErrorMessage } =
    useErrorMessage();

  function markAsInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.preventDefault();

    setErrorMessage(
      typeof required === "string" ? required : "This field is required"
    );
  }

  function checkValidity(event: FocusEvent<HTMLInputElement>) {
    event.currentTarget.checkValidity();
  }

  return (
    <div className="TextField">
      <div className="label">
        <label htmlFor={name}>{label}</label>
        {!required && <div className="optional">(optional)</div>}
      </div>

      <div className="control">
        <input
          id={name}
          name={name}
          required={Boolean(required)}
          onInvalid={markAsInvalid}
          onFocus={clearErrorMessage}
          onBlur={checkValidity}
        />
        {isError && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default TextField;
