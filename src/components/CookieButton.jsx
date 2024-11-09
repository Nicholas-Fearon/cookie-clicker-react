import "../styles/cookieButton.css";

export default function CookieButton({ setCookies, muted}) {
  function cookieSound() {
    if (!muted) {
      const cookieSnd = new Audio("/sounds/mouse-click.mp3");
      cookieSnd.play();
    }
  }
  return (
    <img
      className="cookie-btn"
      src="/images/cookie.png"
      alt="cookie picture"
      onClick={() => {
        setCookies((cookies) => cookies + 1);
        cookieSound();
      }}
    />
  );
}
