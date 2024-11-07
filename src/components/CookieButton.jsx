export default function CookieButton({ setCookies }) {
  function cookieSound() {
    const cookieSnd = new Audio("../src/assets/sounds/mouse-click.mp3");
    cookieSnd.play();
  }
  return (
    <img
      className="cookie-btn"
      src="../src/assets/sounds/img/cookie.png"
      alt="cookie picture"
      onClick={() => {
        setCookies((cookies) => cookies + 1);
        cookieSound();
      }}
    />
  );
}
