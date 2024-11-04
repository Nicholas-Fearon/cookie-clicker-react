import { useState } from "react";

export default function Clicker() {
  const [cookies, setCookies] = useState(0);
  //const [cooikesPerSec, setCookiesPerSec] = useState(0);
  return (
    <>
    <p>Cookie count = {cookies}</p>
    <p>Cookies per sec = </p>
    <button onClick={() => setCookies((count) => count + 1)}>
      Cookies
    </button>
    </>
  );
}
