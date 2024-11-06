export default function CookieCounter({ cookies, alert }) {
  return (
    <div>
      <p>{alert}</p>
      <p>Cookie count = {cookies}</p>
      <p>Cookies per sec = </p>
    </div>
  );
}
