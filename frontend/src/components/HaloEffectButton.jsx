import React, { useState } from "react";

function HaloEffectButton() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="halo-effect-wrapper">
      <button type="button" onClick={() => setIsActive(!isActive)}>
        Activer l'effet de halo
      </button>
      {isActive && (
        <div className="halo-effect-container">
          <div
            className="halo-effect"
            style={{ "--x": "-53%", "--y": "-53%", "--t": "37" }}
          />
          <div
            className="halo-effect"
            style={{ "--x": "-47%", "--y": "-52%", "--t": "58" }}
          />
          <div
            className="halo-effect"
            style={{ "--x": "-45%", "--y": "-50%", "--t": "46" }}
          />
          <div
            className="halo-effect"
            style={{ "--x": "-53%", "--y": "-45%", "--t": "72" }}
          />
          <div
            className="halo-effect"
            style={{ "--x": "-55%", "--y": "-45%", "--t": "62" }}
          />
        </div>
      )}
    </div>
  );
}

export default HaloEffectButton;
