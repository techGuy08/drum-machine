export const DrumBtnArr = [
  {
    name: "Q",
    audioUrls: [
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    ],
  },
  {
    name: "W",
    audioUrls: [
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    ],
  },
  {
    name: "E",
    audioUrls: [
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    ],
  },
  {
    name: "A",
    audioUrls: [
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    ],
  },
  {
    name: "S",
    audioUrls: [
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    ],
  },
  {
    name: "D",
    audioUrls: [
      "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    ],
  },
  {
    name: "Z",
    audioUrls: [
      "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    ],
  },
  {
    name: "X",
    audioUrls: [
      "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    ],
  },
  {
    name: "C",
    audioUrls: [
      "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    ],
  },
];

const DrumBtn = ({ name, onDrumClick }) => {
  let index = DrumBtnArr.findIndex((el) => el.name === name);
  let audioUrls = DrumBtnArr[index].audioUrls;
  return (
    <button
      className="drum-pad btn btn-light"
      id={"btn-" + name}
      onClick={onDrumClick}
    >
      {name}
      <audio src={audioUrls[0]} className="clip" id={name}></audio>
    </button>
  );
};

export default DrumBtn;
