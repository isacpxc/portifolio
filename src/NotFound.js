import { redirect, useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();
  console.error(error);
  setTimeout(() => {
    window.location.href = '/';
  },4500)

  return (
    <div id="error-page">
      <h1 style={{color: "white"}}>
        Trying to be funny, huh? Well, now you're lost, good job! &#x1F62D;
      </h1>
    </div>
  );
}