import { useEffect, useState } from "react";
import DrumBtn, { DrumBtnArr } from "./DrumBtn";
import VolumeSlide from "./VolumeSlide";
import Toggle from "./Toggle";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/App.css";

function App() {
  const [isPowerOn, setIsPowerOn] = useState(true);
  const [display, setDisplay] = useState("");
  const [volume, setVolume] = useState(0);
  const [kitSwich, setKitSwitch] = useState(false);

  const handleDrumClick = (name) => {
    const btnEl = document.getElementById("btn-" + name);
    const audioEl = document.getElementById(name);
    if (audioEl && btnEl) {
      btnEl.classList.add("active");
      btnEl.blur();
      setTimeout(() => {
        btnEl.classList.remove("active");
      }, 300);
      if (isPowerOn) {
        let audioSrc = btnEl.querySelector("audio").src;
        let audioName = audioSrc
          .replace(/(^.+\/)|\..+$/g, "")
          .replace(/_/g, " ");
        setDisplay(audioName);
        audioEl.play().catch((err) => console.log(err));
      }
    }
  };

  const handlePowerToggle = (event) => {
    let isChecked = event.target.checked;
    if (!isChecked) {
      setDisplay("");
    }
    setIsPowerOn(isChecked);
  };

  const handleVolumeChange = (event) => {
    let value = event.target.value;
    if (!isPowerOn) return false;
    setDisplay("volume: " + value);
    setVolume(value);
    document.querySelectorAll(".drum-machine audio").forEach((el) => {
      el.volume = value / 100;
    });
    setTimeout(() => {
      setDisplay("");
    }, 1500);
  };
  const switchAudioSrcToSet = (num) => {
    DrumBtnArr.forEach(({ name, audioUrls }) => {
      document.getElementById(name).src = audioUrls[num];
    });
  };
  const handleKitSwitch = (event) => {
    if (!isPowerOn) return false;
    let value = event.target.checked;

    if (!value) {
      setDisplay("Heater Kit");
      switchAudioSrcToSet(0);
    } else {
      setDisplay("Smooth Piano Kit");
      switchAudioSrcToSet(1);
    }
    setKitSwitch(value);
  };
  useEffect(() => {
    if (!window.started) {
      window.addEventListener("keydown", (e) => {
        const index = DrumBtnArr.findIndex(
          (el) => el.name === e.code.replace("Key", "")
        );
        if (DrumBtnArr[index]) {
          const el = document.getElementById("btn-" + DrumBtnArr[index].name);
          el.click();
        }
      });
    }
    window.started = true;
  }, [isPowerOn]);

  return (
    <div className="container">
      <h1 className="text-center">Drum Machine</h1>
      <div
        className={`drum-machine ${isPowerOn ? "power-on" : ""}`}
        id="drum-machine"
      >
        <div className="machine-header">
          <Toggle
            id={"kit-check"}
            checked={kitSwich}
            onChange={handleKitSwitch}
            text={"Switch Kits: "}
          />
          <div id="display">{display}</div>

          <VolumeSlide value={volume} onVolumeChange={handleVolumeChange} />

          <Toggle
            id={"power-check"}
            checked={isPowerOn}
            onChange={handlePowerToggle}
            text={"Power: "}
          />
        </div>
        <div className="machine-body">
          <div className="drum-controls">
            {DrumBtnArr.map(({ name }, i) => {
              return (
                <DrumBtn
                  key={i}
                  name={name}
                  onDrumClick={() => handleDrumClick(name)}
                  kitSwichOn={kitSwich}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Designed and Coded by</p>
        <p>
          <a href="https://github.com/techGuy08">techGuy08</a>
        </p>
      </div>
    </div>
  );
}

export default App;
