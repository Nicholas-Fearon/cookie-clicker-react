import "../styles/cookieCounter.css";
export default function CookieCounter({ cookies, cps }) {
  return (
    <>
      <p className="cookieCounter">Cookie count = {cookies}</p>
      <p className="cookieCounter">Cookies per sec = {cps}</p>
    </>
  );
}
