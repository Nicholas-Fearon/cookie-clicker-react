import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://znbnodscuqgrehrjiojy.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpuYm5vZHNjdXFncmVocmppb2p5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk2NzAxNzQsImV4cCI6MjA0NTI0NjE3NH0.qfVU54KAsDRZLrZK9oZ4YNlExGdsRYWBUmOCbD3SIWU");


export default function Upgrades() {

        const [upgrades, setUpgrades] = useState([]);
    
        useEffect(() => {
          getUpgrades();
        }, []);
    
        async function getUpgrades() {
          const { data } = await supabase.from("upgrades").select();
          setUpgrades(data);
        }
    
        return (
          <ul>
            {upgrades.map((upgrade) => (
              <li key={upgrade.upgrade}>{upgrade.upgrade}</li>
            ))}
          </ul>
        );
      }
