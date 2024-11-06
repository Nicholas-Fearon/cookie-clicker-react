export default function CookieCounter({ cookies, alert, cps }) {
  return (
    <div>
      <p>{alert}</p>
      <p>Cookie count = {cookies}</p>
      <p>Cookies per sec = {cps}</p>
    </div>
  );
}
