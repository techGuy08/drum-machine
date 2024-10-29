const Toggle = ({ checked, onChange, id,text }) => {
  return (
    <div className="toggle-group">
      {text}
      <input
        type="checkbox"
        className="btn-check"
        id={id}
        autoComplete="off"
        checked={checked}
        onChange={onChange}
      />
      <label className="btn btn-primary" htmlFor={id}></label>
    </div>
  );
};

export default Toggle;
