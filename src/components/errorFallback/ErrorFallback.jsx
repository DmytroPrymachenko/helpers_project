import React from "react";

const ErrorFallback = ({ error }) => {
  return (
    <div>
      <h2>Упс! Щось пішло не так.</h2>
      <pre>{error.message}</pre>
    </div>
  );
};

export default ErrorFallback;
