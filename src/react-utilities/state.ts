import { useState } from "react";

function useErrorMessage() {
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  function setErrorMessage(errorMessage: string) {
    setMessage(errorMessage);
    setIsError(true);
  }

  function clearErrorMessage() {
    setMessage(null);
    setIsError(false);
  }

  return { errorMessage: message, isError, setErrorMessage, clearErrorMessage };
}

export { useErrorMessage };
