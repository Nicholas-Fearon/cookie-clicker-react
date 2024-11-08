export default function MuteButton({toggleMute, muted}) {
    return <button onClick={toggleMute}>{muted ? "Unmute" :  "Mute"}</button>
}