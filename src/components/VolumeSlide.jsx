const VolumeSlide = ({ onVolumeChange, value }) => {
    
  return (
    <div class="volume-slide">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        className="volume-slider"
        id="volume-slider"
        onInput={onVolumeChange}
      />
    </div>
  );
};

export default VolumeSlide;
