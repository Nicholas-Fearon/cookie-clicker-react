export default function CookieCounter({ cookies, alert, cps }) {
  return (
    <div>
      <p className="cookieCounter">{alert}</p>
      <p className="cookieCounter">Cookie count = {cookies}</p>
      <p className="cookieCounter">Cookies per sec = {cps}</p>
    </div>
  );
}
