import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Header from "./components/Header";
import CookieCounter from "./components/CookieCounter";
import CookieButton from "./components/CookieButton";
import UpgradeButton from "./components/UpgradeButton";
import ResetButton from "./components/ResetButton";
import MuteButton from "./components/MuteButton";
const supabase = createClient(
  "https://znbnodscuqgrehrjiojy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpuYm5vZHNjdXFncmVocmppb2p5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk2NzAxNzQsImV4cCI6MjA0NTI0NjE3NH0.qfVU54KAsDRZLrZK9oZ4YNlExGdsRYWBUmOCbD3SIWU"
);

function App() {
  const [upgrades, setUpgrades] = useState([]);
  const [muted, setMuted] = useState(false);
  const [cookies, setCookies] = useState(() => {
    const savedCookies = localStorage.getItem("cookies");
    return savedCookies ? JSON.parse(savedCookies) : 0;
  });

  const [cps, setCps] = useState(() => {
    const savedCps = localStorage.getItem("cps");
    return savedCps ? JSON.parse(savedCps) : 0;
  });

  async function getUpgrades() {
    const { data } = await supabase.from("upgrades").select();
    setUpgrades(data);
    console.log(data);
  }

  function upGradeSound() {
    if (!muted) {
      const upgradeSnd = new Audio("/sounds/new purchase.mp3");
      upgradeSnd.play();
    }
  }

  function resetSound() {
    if (!muted) {
      const resetSnd = new Audio("/sounds/turning-down-power-48657.mp3");
      resetSnd.play();
    }
  }

  useEffect(() => {
    getUpgrades();
  }, []);

  useEffect(() => {
    console.log("Timer working");
    const interval = setInterval(() => {
      setCookies((current) => current + cps);
    }, 1000);

    return () => {
      console.log("useEffect cleanup");
      clearInterval(interval);
    };
  }, [cps]);

  // Save `cookies` and `cps` to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("cookies", JSON.stringify(cookies));
  }, [cookies]);

  useEffect(() => {
    localStorage.setItem("cps", JSON.stringify(cps));
  }, [cps]);

  function handleUpgrades(upgrade) {
    console.log("Handle grades");
    console.log(cookies);
    if (cookies >= upgrade.cost) {
      setCookies(cookies - upgrade.cost);
      setCps(cps + upgrade.extra);
      upGradeSound();
    } else {
      console.log("not enough upgrades");
    }
  }

  function handleReset() {
    setCookies(0);
    setCps(0);
    localStorage.setItem("cookies", JSON.stringify(0));
    localStorage.setItem("cps", JSON.stringify(0));
    resetSound();
  }

  function toggleMute() {
    setMuted((prevMuted) => !prevMuted);
  }

  return (
    <div className="appContainer">
      <Header />
      <CookieCounter cookies={cookies} cps={cps} />
      <CookieButton setCookies={setCookies} muted={muted} />
      {upgrades.map((upgrade) => (
        <UpgradeButton
          key={upgrade.upgrade}
          upgrade={upgrade}
          cookies={cookies}
          handleUpgrades={handleUpgrades}
        />
      ))}

      <ResetButton handleReset={handleReset} />
      <MuteButton toggleMute={toggleMute} muted={muted} />
    </div>
  );
}

export default App;
