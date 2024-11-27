import { timePicker } from "analogue-time-picker";
import { useEffect, useState } from "react";
import "../css/clock.css";


export default function App () {
  const [showTime, setShowTime] = useState();
  const [hour, setHour] = useState("1");
  const [minute, setMinute] = useState("00");
  useEffect(() => {
    setShowTime(
      timePicker({
        element: document.getElementById("clock"),
        mode: 12,
        width: "300px",
        time: { hour: 1, minute: 0 }
      })
    );
  }, []);

  function handleClick() {
    const object = showTime.getTime();
    setHour(object.hour);
    setMinute(object.minute);
  }
  return (
    <div className="clock-container">
      <div id="clock"></div>
      <div className="mat-card">
        <button className="button" onClick={handleClick}>
          Get Selected Time
        </button>
      </div>
      <div className="mat-card">
        <h3>
          SelectedTime = {hour} : {minute}
        </h3>
      </div>
    </div>
  );
}