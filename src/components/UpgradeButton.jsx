import "../styles/upgradeButton.css";
export default function UpgradeButton({ upgrade, cookies, handleUpgrades }) {
  return (
    <div className="upgradeButtonContainer">
<button
      onClick={() => handleUpgrades(upgrade)}
      disabled={cookies < upgrade.cost}
      className="upgradeButton"
    >
      {upgrade.upgrade} - {upgrade.cost}
    </button>
    </div>
    
  );
}
