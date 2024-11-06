import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Header from "./components/Header";
import CookieCounter from "./components/CookieCounter";
import CookieButton from "./components/CookieButton";
import UpgradeButton from "./components/UpgradeButton";

const supabase = createClient(
  "https://znbnodscuqgrehrjiojy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpuYm5vZHNjdXFncmVocmppb2p5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk2NzAxNzQsImV4cCI6MjA0NTI0NjE3NH0.qfVU54KAsDRZLrZK9oZ4YNlExGdsRYWBUmOCbD3SIWU"
);

function App() {
  const [upgrades, setUpgrades] = useState([]);
  const [cookies, setCookies] = useState(0);
  const [alert, setAlert] = useState("");

  async function getUpgrades() {
    const { data } = await supabase.from("upgrades").select();
    setUpgrades(data);
    console.log(data);
  }

  useEffect(() => {
    getUpgrades();
  }, []);

  useEffect(() => {
    console.log("Timer working");
    const interval = setInterval(() => {
      setCookies((current) => current + 1);
    }, 1000);

    return () => {
      console.log("useEffect cleanup");
      clearInterval(interval);
    };
  }, []);

  function handleUpgrades(upgrade) {
    console.log("Handle grades");
    console.log(cookies);
    if (cookies >= upgrade.cost) {
      setCookies(cookies - upgrade.cost);
    } else {
      setAlert("Not enough cookies");
    }
  }

  return (
    <>
      <Header />
      <CookieCounter cookies={cookies} alert={alert} />
      <CookieButton setCookies={setCookies} />
      {upgrades.map((upgrade) => (
        <UpgradeButton
          key={upgrade.upgrade}
          upgrade={upgrade}
          cookies={cookies}
          handleUpgrades={handleUpgrades}
        />
      ))}
    </>
  );
}

export default App;
