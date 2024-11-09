import "../styles/muteButton.css";

export default function MuteButton({ toggleMute, muted }) {
  return <button onClick={toggleMute}
  className="muteButton"
  >{muted ? "Unmute" : "Mute"} </button>;
}
