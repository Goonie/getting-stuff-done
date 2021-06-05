import { useState } from "react";

function useErrorMessage() {
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  function setErrorMessage(errorMessage: string) {
    setIsError(true);
    setMessage(errorMessage);
  }

  function clearErrorMessage() {
    setIsError(false);
    setMessage(null);
  }

  return { isError, errorMessage: message, setErrorMessage, clearErrorMessage };
}

export { useErrorMessage };
