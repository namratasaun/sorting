const Keyboard = ({ keyPressHandler }) => {
  const keyHandler = (ev) => {
    console.log(ev.target.textContent);
    keyPressHandler(ev.target.textContent);
  };
  return (
    <div>
      <div>
        <button onClick={keyHandler}>Enter0</button>
        <button onClick={keyHandler}>Backspace</button>
        <button onClick={keyHandler}>q</button>
        <button onClick={keyHandler}>w</button>
        <button onClick={keyHandler}>e</button>
        <button onClick={keyHandler}>r</button>
        <button onClick={keyHandler}>t</button>
        <button onClick={keyHandler}>y</button>
        <button onClick={keyHandler}>u</button>
        <button onClick={keyHandler}>i</button>
        <button onClick={keyHandler}>o</button>
        <button onClick={keyHandler}>p</button>
      </div>

      <div>
        <button onClick={keyHandler}>a</button>
        <button onClick={keyHandler}>s</button>
        <button onClick={keyHandler}>d</button>
        <button onClick={keyHandler}>f</button>
        <button onClick={keyHandler}>g</button>
        <button onClick={keyHandler}>h</button>
        <button onClick={keyHandler}>j</button>
        <button onClick={keyHandler}>k</button>
        <button onClick={keyHandler}>l</button>
      </div>

      <div>
        <button onClick={keyHandler}>z</button>
        <button onClick={keyHandler}>x</button>
        <button onClick={keyHandler}>c</button>
        <button onClick={keyHandler}>v</button>
        <button onClick={keyHandler}>b</button>
        <button onClick={keyHandler}>n</button>
        <button onClick={keyHandler}>m</button>
      </div>
    </div>
  );
};

export default Keyboard;
