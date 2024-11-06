import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://znbnodscuqgrehrjiojy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpuYm5vZHNjdXFncmVocmppb2p5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk2NzAxNzQsImV4cCI6MjA0NTI0NjE3NH0.qfVU54KAsDRZLrZK9oZ4YNlExGdsRYWBUmOCbD3SIWU"
);

export default function Upgrades() {
  const [upgrades, setUpgrades] = useState([]);
  const [cookies, setCookies] = useState(0);
  const [alert, setAlert] = useState("");
  const [show, setShow] = useState(true);
  const [perSec, setPerSec] = useState(0);

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
      console.log("Not enough cookies");
      setAlert("Not enough cookies");
    }
  }

  return (
    <>
      <p>{alert}</p>
      <p>Cookie count = {cookies}</p>
      <p>Cookies per sec = </p>

      <button onClick={() => setCookies((cookies) => cookies + 1)}>
        Cookies
      </button>

      {upgrades.map((upgrade) => (
        <button key={upgrade.upgrade} onClick={() => handleUpgrades(upgrade)}>
          {upgrade.upgrade} - {upgrade.cost}
        </button>
      ))}
    </>
  );
}
