export default function UpgradeButton({ upgrade, cookies, handleUpgrades }) {
  return (
    <button
      onClick={() => handleUpgrades(upgrade)}
      disabled={cookies < upgrade.cost}
    >
      {upgrade.upgrade} - {upgrade.cost}
      
    </button>
  );
}
