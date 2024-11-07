export default function CookieButton({ setCookies }) {
  return (
    <button onClick={() => setCookies((cookies) => cookies + 1)}>
      Cookies
    </button>
  );
}
